/**
 * @file Toast.tsx
 * @description Brief auto-dismissing notifications that confirm an action
 * or communicate a system event without interrupting workflow.
 *
 * Auto-dismiss after 4–6 seconds; always provide a manual dismiss control.
 * Do not use for critical errors that require user action — use AlertDialog instead.
 *
 * @example
 * // Success toast
 * <Toast variant="success" message="Changes saved successfully." />
 *
 * // Error toast with action
 * <Toast variant="error" message="Upload failed." action={{ label: 'Retry', onClick: handleRetry }} />
 *
 * // Info toast
 * <Toast variant="info" message="Your session will expire in 5 minutes." />
 */

import React from 'react';
import { BaseProps } from '../../types';

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps extends BaseProps {
  /** Visual type of the toast */
  variant?: ToastVariant;
  /** The notification message text */
  message: string;
  /** Optional action link shown inline with the message */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Callback fired when the dismiss (×) button is clicked */
  onDismiss?: () => void;
}

const variantConfig: Record<ToastVariant, { bg: string; text: string; icon: string }> = {
  default: { bg: 'bg-stone-900',   text: 'text-white',         icon: 'ℹ' },
  success: { bg: 'bg-brand-600',   text: 'text-white',         icon: '✓' },
  error:   { bg: 'bg-crimson-600', text: 'text-white',         icon: '✕' },
  warning: { bg: 'bg-amber-500',   text: 'text-amber-950',     icon: '⚠' },
  info:    { bg: 'bg-blue-600',    text: 'text-white',         icon: 'ℹ' },
};

export const Toast: React.FC<ToastProps> = ({
  variant = 'default',
  message,
  action,
  onDismiss,
  className = '',
}) => {
  const { bg, text, icon } = variantConfig[variant];

  return (
    /* role="status" announces to screen readers politely */
    <div
      role="status"
      aria-live="polite"
      className={[
        'flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg',
        'text-sm font-medium max-w-sm w-full',
        bg, text, className,
      ].join(' ')}
    >
      {/* Status icon */}
      <span aria-hidden="true" className="shrink-0 text-base">{icon}</span>

      {/* Message */}
      <p className="flex-1">{message}</p>

      {/* Inline action button */}
      {action && (
        <button
          onClick={action.onClick}
          className="shrink-0 underline underline-offset-2 hover:no-underline text-sm font-semibold"
        >
          {action.label}
        </button>
      )}

      {/* Dismiss button */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="shrink-0 opacity-70 hover:opacity-100 transition-opacity ml-1"
        >
          ✕
        </button>
      )}
    </div>
  );
};

Toast.displayName = 'Toast';
