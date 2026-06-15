/**
 * @file Overlay.tsx
 * @description Semi-transparent scrim layer displayed behind modals, drawers,
 * and other elevated UI to visually separate them from background content.
 *
 * The Overlay itself is non-interactive — all focus and interaction belong
 * to the elevated layer above it. Clicking the overlay should dismiss the
 * elevated content unless it is critical (e.g. an AlertDialog).
 *
 * @example
 * // Basic overlay
 * {isOpen && <Overlay onClick={handleClose} />}
 *
 * // Overlay without dismiss on click (for critical modals)
 * <Overlay />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface OverlayProps extends BaseProps {
  /** Callback fired when the overlay is clicked — use to close elevated content */
  onClick?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ onClick, className = '' }) => (
  <div
    aria-hidden="true"  // Overlay is purely decorative — screen readers ignore it
    onClick={onClick}
    className={[
      'fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-[1px]',
      onClick ? 'cursor-pointer' : 'cursor-default',
      className,
    ].join(' ')}
  />
);

Overlay.displayName = 'Overlay';
