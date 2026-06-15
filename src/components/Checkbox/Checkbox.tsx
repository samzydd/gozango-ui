/**
 * @file Checkbox.tsx
 * @description Selection control for choosing one or more items from a set.
 *
 * Supports checked, unchecked, and indeterminate states.
 * Use CheckboxGroup to manage validation and error state across related checkboxes.
 * Always pair with a visible label.
 *
 * @example
 * // Simple checkbox
 * <Checkbox label="Accept terms and conditions" />
 *
 * // Pre-checked and disabled
 * <Checkbox label="Required option" checked disabled />
 *
 * // Indeterminate (parent of a tree)
 * <Checkbox label="Select all" indeterminate />
 *
 * // With description
 * <Checkbox label="Email notifications" description="Receive updates via email" />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface CheckboxProps
  extends BaseProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Optional supporting description below the label */
  description?: string;
  /** Sets the checkbox to an indeterminate (–) state */
  indeterminate?: boolean;
  /** Shows error styling */
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, indeterminate, error, disabled, className = '', id, ...props }, ref) => {
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    const inputId = id ?? `checkbox-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    // Apply indeterminate state via DOM ref (not a standard HTML attribute)
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate]);

    // Merge forwarded ref with local ref
    const setRef = (node: HTMLInputElement | null) => {
      (checkboxRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    };

    return (
      <div className={['flex items-start gap-3', className].join(' ')}>
        <input
          ref={setRef}
          id={inputId}
          type="checkbox"
          disabled={disabled}
          aria-invalid={error}
          className={[
            'h-4 w-4 mt-0.5 shrink-0 rounded border cursor-pointer',
            'accent-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500',
            error ? 'border-crimson-500' : 'border-stone-300',
            disabled ? 'cursor-not-allowed opacity-50' : '',
          ].join(' ')}
          {...props}
        />
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={inputId}
                className={[
                  'text-sm font-medium leading-none cursor-pointer',
                  disabled ? 'opacity-50 cursor-not-allowed' : 'text-stone-800',
                  error ? 'text-crimson-700' : '',
                ].join(' ')}
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-stone-500">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
