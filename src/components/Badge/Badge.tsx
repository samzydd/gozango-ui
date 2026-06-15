/**
 * @file Badge.tsx
 * @description Compact, non-interactive status labels that attach to content
 * to communicate state, category, or count.
 *
 * Badges are purely visual — they do not trigger actions.
 *
 * @example
 * // Simple label badge
 * <Badge variant="default">New</Badge>
 *
 * // Numeric notification badge
 * <Badge variant="destructive" count={8} />
 *
 * // With left icon
 * <Badge variant="secondary" leftIcon={<CheckIcon />}>Verified</Badge>
 */

import React from 'react';
import { BaseProps } from '../../types';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive';

export interface BadgeProps extends BaseProps {
  /** Visual style variant. Defaults to "default" */
  variant?: BadgeVariant;
  /** Numeric count to display instead of (or alongside) a label */
  count?: number;
  /** Icon rendered to the left of the label */
  leftIcon?: React.ReactNode;
  /** Icon rendered to the right of the label */
  rightIcon?: React.ReactNode;
  /** Badge label text */
  children?: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:     'bg-brand-500 text-white',
  secondary:   'bg-stone-100 text-stone-700',
  outline:     'border border-stone-300 bg-transparent text-stone-700',
  destructive: 'bg-crimson-100 text-crimson-700',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  count,
  leftIcon,
  rightIcon,
  children,
  className = '',
}) => (
  <span
    className={[
      'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5',
      'text-xs font-medium leading-none',
      variantClasses[variant],
      className,
    ].join(' ')}
  >
    {leftIcon}
    {/* Show count if provided, otherwise show children label */}
    {count !== undefined ? count : children}
    {rightIcon}
  </span>
);

Badge.displayName = 'Badge';
