/**
 * @file Switch.tsx
 * @description Binary toggle for turning a setting on or off with immediate effect.
 *
 * Unlike a Checkbox, a Switch implies real-time impact — the change takes
 * effect without a form submission. Use Checkbox instead when inside a form
 * that requires a submit button.
 *
 * @example
 * // Basic on/off toggle
 * <Switch label="Enable notifications" />
 *
 * // Controlled switch
 * <Switch
 *   label="Dark mode"
 *   checked={isDark}
 *   onCheckedChange={setIsDark}
 * />
 *
 * // With description
 * <Switch
 *   label="Marketing emails"
 *   description="Receive product updates and offers"
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface SwitchProps extends BaseProps {
  /** Label text describing what this toggle controls */
  label?: string;
  /** Supporting text below the label explaining the impact */
  description?: string;
  /** Controlled checked state */
  checked?: boolean;
  /** Callback fired when the switch is toggled */
  onCheckedChange?: (checked: boolean) => void;
  /** Disables the switch when true */
  disabled?: boolean;
  /** Unique id — auto-generated from label if not provided */
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  description,
  checked = false,
  onCheckedChange,
  disabled = false,
  className = '',
  id,
}) => {
  const switchId = id ?? `switch-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={['flex items-start gap-3', className].join(' ')}>
      {/* The switch track + thumb */}
      <button
        role="switch"
        id={switchId}
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onCheckedChange?.(!checked)}
        className={[
          'relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center',
          'rounded-full border-2 border-transparent transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
          checked ? 'bg-meadow-600' : 'bg-stone-200',
          disabled ? 'cursor-not-allowed opacity-50' : '',
        ].join(' ')}
      >
        {/* Sliding thumb */}
        <span
          className={[
            'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm',
            'transition-transform duration-200',
            checked ? 'translate-x-4' : 'translate-x-0',
          ].join(' ')}
        />
      </button>

      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={switchId}
              className={[
                'text-sm font-medium leading-none cursor-pointer',
                disabled ? 'opacity-50 cursor-not-allowed' : 'text-stone-800',
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
};

Switch.displayName = 'Switch';
