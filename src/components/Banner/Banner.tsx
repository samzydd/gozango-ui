/**
 * @file Banner.tsx
 * @description Full-width notification strip for site-wide announcements,
 * maintenance notices, or promotional messages.
 *
 * Banners remain visible until the condition changes.
 * Keep copy to one sentence. Pair with a dismiss action for non-critical messages.
 *
 * @example
 * // Informational banner
 * <Banner message="We're currently performing scheduled maintenance. Some features may be unavailable." />
 *
 * // Dismissible promotional banner
 * <Banner
 *   message="🎉 New feature: Try our AI-powered campaign builder today!"
 *   action={{ label: 'Learn more', href: '/features' }}
 *   onDismiss={() => setBannerVisible(false)}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface BannerProps extends BaseProps {
  /** The announcement message text */
  message: string;
  /** Optional CTA link inline with the message */
  action?: { label: string; href?: string; onClick?: () => void };
  /** Callback fired when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Background variant */
  variant?: 'brand' | 'neutral' | 'warning';
}

const variantClasses = {
  brand:   'bg-brand-500 text-white',
  neutral: 'bg-stone-900 text-white',
  warning: 'bg-amber-400 text-amber-950',
};

export const Banner: React.FC<BannerProps> = ({
  message,
  action,
  onDismiss,
  variant = 'brand',
  className = '',
}) => (
  <div
    role="status"
    aria-live="polite"
    className={[
      'flex items-center justify-center gap-4 px-6 py-2.5 text-sm font-medium w-full',
      variantClasses[variant],
      className,
    ].join(' ')}
  >
    <p className="text-center">{message}</p>
    {action && (
      <a
        href={action.href}
        onClick={action.onClick}
        className="shrink-0 underline underline-offset-2 hover:no-underline font-semibold"
      >
        {action.label}
      </a>
    )}
    {onDismiss && (
      <button
        onClick={onDismiss}
        aria-label="Dismiss banner"
        className="absolute right-4 opacity-80 hover:opacity-100"
      >
        ✕
      </button>
    )}
  </div>
);

Banner.displayName = 'Banner';
