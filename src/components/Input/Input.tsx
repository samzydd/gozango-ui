/**
 * @file Input.tsx
 * @description Text and file input fields for form data entry.
 *
 * Supports 5 interaction states (Enabled, Disabled, Filled, Focus, Focused-filled),
 * optional label with 3 position modes (top, side, none), help text,
 * error state, and an optional leading icon.
 *
 * Always pair with a visible label — avoid placeholder-only inputs.
 * Show error state on blur, not on keystroke.
 *
 * @example
 * // Standard text input with top label
 * <Input label="Email address" placeholder="you@example.com" />
 *
 * // Input with error
 * <Input label="Username" error="Username is already taken" />
 *
 * // Input with icon
 * <Input label="Search" icon={<SearchIcon />} placeholder="Search..." />
 *
 * // Disabled input
 * <Input label="Read-only field" value="Cannot edit" disabled />
 */

import React from 'react';
import { BaseProps } from '../../types';

type InputState = 'enabled' | 'disabled' | 'filled' | 'focus';
type LabelPosition = 'top' | 'side' | 'none';

export interface InputProps
  extends BaseProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text displayed with the input */
  label?: string;
  /** Where the label is positioned relative to the input field */
  labelPosition?: LabelPosition;
  /** Help text shown below the input to explain format requirements */
  helpText?: string;
  /** Error message shown below the input — replaces helpText when set */
  error?: string;
  /** Icon displayed inside the left edge of the input field */
  icon?: React.ReactNode;
  /** Input type — "text" for standard, "file" for file picker */
  inputType?: 'text' | 'file';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      labelPosition = 'top',
      helpText,
      error,
      icon,
      inputType = 'text',
      disabled,
      className = '',
      id,
      ...props
    },
    ref,
  ) => {
    // Generate a stable id for label association if none provided
    const inputId = id ?? `input-${label?.toLowerCase().replace(/\s+/g, '-')}`;
    const hasError = Boolean(error);

    const inputClasses = [
      'flex h-9 w-full rounded-md border bg-white px-3 py-1 text-sm',
      'text-stone-900 placeholder:text-stone-400',
      'transition-colors duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
      // Error state overrides the border color
      hasError
        ? 'border-crimson-500 focus-visible:ring-crimson-500'
        : 'border-stone-300 focus-visible:border-brand-500',
      disabled ? 'cursor-not-allowed opacity-50 bg-stone-50' : '',
      // Indent text when icon is present
      icon ? 'pl-9' : '',
      className,
    ].join(' ');

    const labelEl = label && (
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-stone-700 leading-none"
      >
        {label}
      </label>
    );

    return (
      <div
        className={[
          'flex gap-2',
          labelPosition === 'side' ? 'flex-row items-center' : 'flex-col',
        ].join(' ')}
      >
        {/* Render label above (top) or to the left (side) */}
        {labelPosition !== 'none' && labelEl}

        {/* Field wrapper — positions the optional icon */}
        <div className="relative w-full">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${inputId}-error`
                : helpText
                ? `${inputId}-help`
                : undefined
            }
            className={inputClasses}
            {...props}
          />
        </div>

        {/* Error message takes priority over help text */}
        {hasError ? (
          <p id={`${inputId}-error`} className="text-xs text-crimson-600 mt-0.5">
            {error}
          </p>
        ) : helpText ? (
          <p id={`${inputId}-help`} className="text-xs text-stone-500 mt-0.5">
            {helpText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
