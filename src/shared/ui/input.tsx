import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const inputClasses = twMerge(
      'rounded-xl border border-input bg-card px-4 py-2.5 text-foreground transition-colors duration-200 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/40',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground',
      error && 'border-coral-500 focus:ring-coral-500/40',
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      fullWidth && 'w-full',
      className
    );

    const containerClasses = twMerge(
      'relative inline-block',
      fullWidth && 'w-full'
    );

    return (
      <div className={containerClasses}>
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={inputClasses}
            aria-invalid={!!error}
            aria-describedby={props.id ? `${props.id}-error` : undefined}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </span>
          )}
        </div>
        {(error || helperText) && (
          <p
            id={props.id ? `${props.id}-error` : undefined}
            className={twMerge(
              'mt-1.5 text-sm',
              error ? 'text-coral-500' : 'text-muted-foreground'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
); 