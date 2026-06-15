/**
 * @file Progress.tsx
 * @description Linear progress bar for communicating the completion status
 * of a deterministic process (file upload, form completion, onboarding).
 *
 * Do not use for indeterminate loading — use a Spinner instead.
 * Always label the progress bar with both the current value and context.
 *
 * @example
 * // Basic progress at 60%
 * <Progress value={60} />
 *
 * // With accessible label
 * <Progress value={75} label="Profile completion" />
 *
 * // Full completion
 * <Progress value={100} label="Upload complete" />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface ProgressProps extends BaseProps {
  /** Current progress value between 0 and 100 */
  value: number;
  /** Accessible label describing what is being measured */
  label?: string;
  /** Whether to show the numeric percentage text */
  showValue?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  label,
  showValue = false,
  className = '',
}) => {
  // Clamp value between 0 and 100
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>
      {/* Label row */}
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-sm font-medium text-stone-700">{label}</span>}
          {showValue && <span className="text-xs text-stone-500">{clamped}%</span>}
        </div>
      )}

      {/* Track */}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `${clamped}% complete`}
        className="h-2 w-full overflow-hidden rounded-full bg-stone-200"
      >
        {/* Fill — width driven by the clamped value */}
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-300 ease-in-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};

Progress.displayName = 'Progress';
