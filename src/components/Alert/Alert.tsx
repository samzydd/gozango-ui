/**
 * @file Alert.tsx
 * @description Inline contextual feedback messages that appear within page content.
 *
 * Alerts are persistent — they stay visible for as long as the condition they
 * describe is active. For transient feedback, use Toast instead.
 *
 * Matches the Gozango Figma Alert: a thin-stroke triangle warning icon by
 * default, dark text on a white card with a light grey border.
 *
 * @example
 * // Default informational alert (uses the built-in warning triangle icon)
 * <Alert description="This is the alert description." />
 *
 * // Destructive error alert
 * <Alert variant="destructive" title="Error" description="Something went wrong." />
 *
 * // Custom icon, overriding the default
 * <Alert icon={<MyCustomIcon />} description="Custom icon alert." />
 *
 * // No icon at all
 * <Alert icon={null} description="Plain alert with no icon." />
 */

import React from 'react';
import { BaseProps } from '../../types';

type AlertVariant = 'default' | 'destructive';

export interface AlertProps extends BaseProps {
  /** Visual type of the alert. Defaults to "default" */
  variant?: AlertVariant;
  /** Bold heading text displayed at the top of the alert */
  title?: string;
  /** Supporting description text below the title */
  description?: string;
  /**
   * Icon displayed to the left of the content.
   * Defaults to a triangle warning icon (matches Figma). Pass `null` to
   * render no icon, or pass a custom element to override the default.
   */
  icon?: React.ReactNode | null;
}

const variantClasses: Record<AlertVariant, string> = {
  default:     'bg-white border-ash-200 text-ash-700',
  destructive: 'bg-crimson-50 border-crimson-200 text-crimson-800',
};

const titleClasses: Record<AlertVariant, string> = {
  default:     'text-ash-900',
  destructive: 'text-crimson-900',
};

const iconClasses: Record<AlertVariant, string> = {
  default:     'text-ash-900',
  destructive: 'text-crimson-600',
};

/** Default triangle warning icon — matches the Figma Alert icon exactly */
const WarningTriangleIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  title,
  description,
  icon,
  className = '',
}) => {
  // icon is undefined -> use default warning triangle
  // icon is null -> render no icon
  // icon is a custom node -> use that instead
  const resolvedIcon = icon === undefined ? <WarningTriangleIcon /> : icon;

  return (
    /* role="alert" announces content to screen readers immediately */
    <div
      role="alert"
      className={[
        'flex gap-3 rounded-lg border p-4',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {resolvedIcon && (
        <span className={['mt-0.5 shrink-0', iconClasses[variant]].join(' ')}>
          {resolvedIcon}
        </span>
      )}

      <div className="flex flex-col gap-1">
        {title && (
          <p className={['text-sm font-semibold', titleClasses[variant]].join(' ')}>
            {title}
          </p>
        )}
        {description && (
          <p className="text-sm text-ash-500">{description}</p>
        )}
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';
