/**
 * @file Separator.tsx
 * @description Thin visual divider for creating clear boundaries between content areas.
 * Supports horizontal and vertical orientations.
 *
 * Use whitespace alone before reaching for a Separator — don't overuse them.
 * Decorative separators should be aria-hidden.
 *
 * @example
 * // Horizontal separator (default)
 * <Separator />
 *
 * // Vertical separator (use inside a flex row)
 * <div className="flex items-center gap-4 h-5">
 *   <span>Home</span>
 *   <Separator orientation="vertical" />
 *   <span>About</span>
 * </div>
 *
 * // Semantic separator (between sections)
 * <Separator decorative={false} />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface SeparatorProps extends BaseProps {
  /** Direction of the separator line. Defaults to "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /**
   * When true (default), the separator is purely visual and aria-hidden.
   * Set to false when the separator has semantic meaning between sections.
   */
  decorative?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  decorative = true,
  className = '',
}) => (
  <div
    role={decorative ? 'none' : 'separator'}
    aria-hidden={decorative}
    aria-orientation={!decorative ? orientation : undefined}
    className={[
      'bg-stone-200 shrink-0',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className,
    ].join(' ')}
  />
);

Separator.displayName = 'Separator';
