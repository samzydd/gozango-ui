/**
 * @file Button.tsx
 * @description The primary interactive element of the Gozango design system.
 *
 * Supports 6 visual types (Default, Outline, Ghost, Link, Destructive, Secondary),
 * 5 interactive states (Enabled, Hover, Focus, Loading, Disabled),
 * 4 sizes (Default, Small, Large, Icon), and optional leading/trailing icons.
 *
 * @example
 * // Primary button
 * <Button type="default" size="default">Save changes</Button>
 *
 * // Destructive with left icon
 * <Button type="destructive" leftIcon={<TrashIcon />}>Delete</Button>
 *
 * // Loading state
 * <Button loading>Saving...</Button>
 *
 * // Icon-only button (use aria-label for accessibility)
 * <Button size="icon" aria-label="Settings"><SettingsIcon /></Button>
 */

import React from 'react';
import { BaseProps } from '../../types';

// ─── Types ────────────────────────────────────────────────────────────────────

/** Visual style variant — maps directly to Figma "Type" prop */
type ButtonType =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'destructive'
  | 'secondary';

/** Size variant — maps directly to Figma "Size" prop */
type ButtonSize = 'default' | 'small' | 'large' | 'icon';

export interface ButtonProps
  extends BaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Visual style of the button. Defaults to "default" (filled brand color) */
  variant?: ButtonType;
  /** Size of the button. Defaults to "default" */
  size?: ButtonSize;
  /** Shows a spinner and disables the button while true */
  loading?: boolean;
  /** Icon rendered to the left of the button label */
  leftIcon?: React.ReactNode;
  /** Icon rendered to the right of the button label */
  rightIcon?: React.ReactNode;
  /** Button label content */
  children?: React.ReactNode;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

/** Tailwind classes per visual variant */
const variantClasses: Record<ButtonType, string> = {
  default:
    'bg-meadow-600 text-white hover:bg-meadow-700 focus-visible:ring-brand-500',
  secondary:
    'bg-stone-100 text-stone-800 hover:bg-stone-200 focus-visible:ring-stone-400',
  outline:
    'border border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100 focus-visible:ring-stone-400',
  ghost:
    'bg-transparent text-stone-800 hover:bg-stone-100 focus-visible:ring-stone-400',
  link:
    'bg-transparent text-brand-600 underline-offset-4 hover:underline focus-visible:ring-brand-500 p-0 h-auto',
  destructive:
    'bg-crimson-600 text-white hover:bg-crimson-700 focus-visible:ring-crimson-500',
};

/** Tailwind classes per size */
const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2 text-sm',
  small:   'h-7 px-3 py-1.5 text-xs',
  large:   'h-11 px-6 py-3 text-base',
  icon:    'h-9 w-9 p-0',
};

// ─── Spinner ─────────────────────────────────────────────────────────────────

/** Simple animated spinner shown during loading state */
const Spinner: React.FC = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor" strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'default',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className = '',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        className={[
          // Base styles shared by all buttons
          'inline-flex items-center justify-center gap-2 rounded-md font-medium',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          // Variant + size
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(' ')}
        {...props}
      >
        {/* Show spinner on left when loading, otherwise show leftIcon */}
        {loading ? <Spinner /> : leftIcon}
        {children}
        {/* Never show rightIcon while loading */}
        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';
