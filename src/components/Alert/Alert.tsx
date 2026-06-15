/**
 * @file Alert.tsx
 * @description Inline contextual feedback messages that appear within page content.
 *
 * Alerts are persistent — they stay visible for as long as the condition they
 * describe is active. For transient feedback, use Toast instead.
 *
 * @example
 * // Default informational alert
 * <Alert title="Heads up!" description="You can add components to your app using the cli." />
 *
 * // Destructive error alert
 * <Alert variant="destructive" title="Error" description="Something went wrong." />
 *
 * // Title only
 * <Alert title="Your session is about to expire." />
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
  /** Optional icon displayed to the left of the content */
  icon?: React.ReactNode;
}

const variantClasses: Record<AlertVariant, string> = {
  default:     'bg-stone-50 border-stone-200 text-stone-800',
  destructive: 'bg-crimson-50 border-crimson-200 text-crimson-800',
};

const titleClasses: Record<AlertVariant, string> = {
  default:     'text-stone-900',
  destructive: 'text-crimson-900',
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'default',
  title,
  description,
  icon,
  className = '',
}) => (
  /* role="alert" announces content to screen readers immediately */
  <div
    role="alert"
    className={[
      'flex gap-3 rounded-lg border p-4',
      variantClasses[variant],
      className,
    ].join(' ')}
  >
    {/* Optional leading icon */}
    {icon && <span className="mt-0.5 shrink-0">{icon}</span>}

    <div className="flex flex-col gap-1">
      {title && (
        <p className={['text-sm font-semibold', titleClasses[variant]].join(' ')}>
          {title}
        </p>
      )}
      {description && (
        <p className="text-sm opacity-80">{description}</p>
      )}
    </div>
  </div>
);

Alert.displayName = 'Alert';
