import { Size, Variant } from './types';

export const BUTTON_VARIANTS: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-soft hover:shadow-glow hover:brightness-105 active:brightness-95',
  secondary:
    'bg-accent text-accent-foreground shadow-soft hover:brightness-105 active:brightness-95',
  outline:
    'border border-border bg-card/60 text-foreground hover:bg-muted hover:border-primary/40',
  ghost: 'text-foreground hover:bg-muted',
  link: 'text-primary underline-offset-4 hover:underline',
};

export const BUTTON_SIZES: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-[0.95rem]',
  lg: 'px-7 py-3.5 text-lg',
};

export const BUTTON_BASE_CLASSES =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none';
