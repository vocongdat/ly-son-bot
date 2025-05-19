import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './types';
import {
  BUTTON_BASE_CLASSES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './constants';
import { Loader2 } from 'lucide-react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const classes = twMerge(
      BUTTON_BASE_CLASSES,
      BUTTON_VARIANTS[variant],
      BUTTON_SIZES[size],
      fullWidth ? 'w-full' : '',
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="-ml-1 mr-3 h-5 w-5 animate-spin" />}
        {!isLoading && leftIcon && <span>{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);
