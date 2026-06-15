/**
 * @file Textarea.tsx
 * @description Multi-line text input for longer free-form responses
 * such as descriptions, notes, and messages.
 *
 * Always provide a visible label. Show character count when a max length applies.
 * Match error and help text patterns from the Input component for form consistency.
 *
 * @example
 * // Basic textarea
 * <Textarea label="Description" placeholder="Tell us about yourself..." />
 *
 * // With character count
 * <Textarea label="Bio" maxLength={280} showCount />
 *
 * // Error state
 * <Textarea label="Message" error="Message cannot be empty" />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface TextareaProps
  extends BaseProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  /** Label text displayed above the textarea */
  label?: string;
  /** Help text shown below the textarea */
  helpText?: string;
  /** Error message — replaces helpText when set */
  error?: string;
  /** Shows a live character count when true */
  showCount?: boolean;
  /** Unique id — auto-generated from label if not provided */
  id?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helpText, error, showCount, disabled, maxLength, className = '', id, value, onChange, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(
      typeof value === 'string' ? value.length : 0,
    );
    const textareaId = id ?? `textarea-${label?.toLowerCase().replace(/\s+/g, '-')}`;
    const hasError = Boolean(error);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-stone-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${textareaId}-error` : helpText ? `${textareaId}-help` : undefined}
          className={[
            'min-h-[80px] w-full rounded-md border px-3 py-2 text-sm',
            'text-stone-900 placeholder:text-stone-400 bg-white',
            'resize-y transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
            hasError ? 'border-crimson-500' : 'border-stone-300',
            disabled ? 'cursor-not-allowed opacity-50 bg-stone-50' : '',
          ].join(' ')}
          {...props}
        />
        <div className="flex justify-between items-center">
          {hasError ? (
            <p id={`${textareaId}-error`} className="text-xs text-crimson-600">{error}</p>
          ) : helpText ? (
            <p id={`${textareaId}-help`} className="text-xs text-stone-500">{helpText}</p>
          ) : <span />}
          {/* Live character count — announced to screen readers via aria-live */}
          {showCount && maxLength && (
            <p aria-live="polite" className="text-xs text-stone-400 tabular-nums">
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
