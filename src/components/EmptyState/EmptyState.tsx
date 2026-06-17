/**
 * @file EmptyState.tsx
 * @description Placeholder UI shown when a view has no content to display —
 * first-time visit, filtered results with no matches, or a completed workflow.
 *
 * Always include a clear CTA so users know how to populate the empty area.
 * Empty states must communicate meaning in text, not illustration alone.
 *
 * @example
 * // Portrait empty state (full page)
 * <EmptyState
 *   title="No campaigns yet"
 *   description="Create your first campaign to start reaching your audience."
 *   action={{ label: 'Create campaign', onClick: handleCreate }}
 * />
 *
 * // Landscape empty state (within a section)
 * <EmptyState
 *   orientation="landscape"
 *   title="No results found"
 *   description="Try adjusting your filters."
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface EmptyStateProps extends BaseProps {
  /** Primary heading text */
  title: string;
  /** Supporting description explaining the empty state and how to resolve it */
  description?: string;
  /** Optional illustration or icon above the title */
  illustration?: React.ReactNode;
  /** Primary call-to-action button */
  action?: { label: string; onClick: () => void };
  /** Layout orientation. Defaults to "portrait" */
  orientation?: 'portrait' | 'landscape';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  illustration,
  action,
  orientation = 'portrait',
  className = '',
}) => (
  <div
    className={[
      'flex items-center gap-6 p-8',
      orientation === 'portrait' ? 'flex-col text-center' : 'flex-row text-left',
      className,
    ].join(' ')}
  >
    {illustration && (
      <div className={orientation === 'portrait' ? 'mb-2' : 'shrink-0'}>
        {illustration}
      </div>
    )}
    <div className={['flex flex-col gap-3', orientation === 'portrait' ? 'items-center' : ''].join(' ')}>
      <h3 className="text-base font-semibold text-stone-800">{title}</h3>
      {description && (
        <p className="text-sm text-stone-500 max-w-xs">{description}</p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="mt-1 inline-flex items-center gap-2 rounded-md bg-meadow-600 px-4 py-2 text-sm font-medium text-white hover:bg-meadow-700 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  </div>
);

EmptyState.displayName = 'EmptyState';
