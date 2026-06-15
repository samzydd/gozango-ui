/**
 * @file Tooltip.tsx
 * @description Contextual hint label shown on hover or keyboard focus.
 *
 * Use for icon-only buttons that lack visible labels, or to explain
 * why a control is disabled. Do not put interactive content inside a tooltip.
 * Keep tooltip text under 80 characters.
 *
 * @example
 * // Basic tooltip on a button
 * <Tooltip content="Save document">
 *   <button>💾</button>
 * </Tooltip>
 *
 * // Tooltip positioned below
 * <Tooltip content="More options" position="bottom">
 *   <button>⋯</button>
 * </Tooltip>
 */

import React from 'react';
import { BaseProps } from '../../types';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends BaseProps {
  /** The tooltip label text */
  content: string;
  /** Position of the tooltip relative to the trigger. Defaults to "top" */
  position?: TooltipPosition;
  /** The element that triggers the tooltip on hover/focus */
  children: React.ReactElement;
}

/** Tailwind classes for each arrow + panel position */
const positionClasses: Record<TooltipPosition, { panel: string; arrow: string }> = {
  top:    { panel: 'bottom-full left-1/2 -translate-x-1/2 mb-2', arrow: 'top-full left-1/2 -translate-x-1/2 border-t-stone-900' },
  bottom: { panel: 'top-full left-1/2 -translate-x-1/2 mt-2',   arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-stone-900' },
  left:   { panel: 'right-full top-1/2 -translate-y-1/2 mr-2',  arrow: 'left-full top-1/2 -translate-y-1/2 border-l-stone-900' },
  right:  { panel: 'left-full top-1/2 -translate-y-1/2 ml-2',   arrow: 'right-full top-1/2 -translate-y-1/2 border-r-stone-900' },
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
  className = '',
}) => {
  const [visible, setVisible] = React.useState(false);
  const tooltipId = React.useId();
  const { panel } = positionClasses[position];

  // Clone child to attach aria-describedby and show/hide handlers
  const trigger = React.cloneElement(children, {
    'aria-describedby': visible ? tooltipId : undefined,
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    onFocus:      () => setVisible(true),
    onBlur:       () => setVisible(false),
  });

  return (
    <div className={['relative inline-flex', className].join(' ')}>
      {trigger}
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={[
            'absolute z-50 whitespace-nowrap rounded-md px-3 py-1.5',
            'bg-stone-900 text-white text-xs font-medium shadow-md',
            'pointer-events-none select-none',
            panel,
          ].join(' ')}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
