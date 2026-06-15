/**
 * @file RadioGroup.tsx
 * @description Single-select control for choosing exactly one option from a set.
 *
 * Use for mutually exclusive options where all choices should be visible at once.
 * Prefer vertical orientation when option labels are longer than a few words.
 * Always show a group label to provide context.
 *
 * @example
 * // Vertical radio group (default)
 * <RadioGroup
 *   label="Notification preference"
 *   options={[
 *     { value: 'all', label: 'All notifications' },
 *     { value: 'mentions', label: 'Mentions only' },
 *     { value: 'none', label: 'None' },
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 *
 * // Horizontal layout
 * <RadioGroup orientation="horizontal" options={...} />
 *
 * // With error state
 * <RadioGroup options={...} error="Please select an option" />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends BaseProps {
  /** Group label shown above all options */
  label?: string;
  /** Array of selectable options */
  options: RadioOption[];
  /** Currently selected value (controlled) */
  value?: string;
  /** Callback fired when selection changes */
  onChange?: (value: string) => void;
  /** Layout direction of the radio items */
  orientation?: 'vertical' | 'horizontal';
  /** Disables all options in the group */
  disabled?: boolean;
  /** Error message shown below the group */
  error?: string;
  /** Unique name for the radio group — used for form association */
  name?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  orientation = 'vertical',
  disabled = false,
  error,
  name,
  className = '',
}) => {
  const groupName = name ?? `radio-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    /* role="radiogroup" groups all radio inputs semantically */
    <fieldset
      role="radiogroup"
      aria-labelledby={label ? `${groupName}-legend` : undefined}
      className={['border-0 p-0 m-0', className].join(' ')}
    >
      {label && (
        <legend
          id={`${groupName}-legend`}
          className="text-sm font-medium text-stone-700 mb-3"
        >
          {label}
        </legend>
      )}

      <div
        className={[
          'flex gap-3',
          orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
        ].join(' ')}
      >
        {options.map((option) => {
          const optionDisabled = disabled || option.disabled;
          const optionId = `${groupName}-${option.value}`;

          return (
            <div key={option.value} className="flex items-start gap-3">
              <input
                type="radio"
                id={optionId}
                name={groupName}
                value={option.value}
                checked={value === option.value}
                disabled={optionDisabled}
                onChange={() => onChange?.(option.value)}
                className={[
                  'mt-0.5 h-4 w-4 accent-brand-500 cursor-pointer',
                  optionDisabled ? 'cursor-not-allowed opacity-50' : '',
                ].join(' ')}
              />
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor={optionId}
                  className={[
                    'text-sm font-medium leading-none cursor-pointer',
                    optionDisabled ? 'opacity-50 cursor-not-allowed' : 'text-stone-800',
                  ].join(' ')}
                >
                  {option.label}
                </label>
                {option.description && (
                  <p className="text-xs text-stone-500">{option.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {error && (
        <p role="alert" className="mt-2 text-xs text-crimson-600">{error}</p>
      )}
    </fieldset>
  );
};

RadioGroup.displayName = 'RadioGroup';
