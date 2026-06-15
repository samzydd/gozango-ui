/**
 * @file PopupModal.tsx
 * @description Context-aware modal dialog for quick decisions, confirmations,
 * and lightweight forms that don't require a full page. Supports several
 * content types including confirmation, toast-style, and info variants.
 *
 * Unlike AlertDialog, a PopupModal CAN be dismissed by clicking the overlay
 * (unless dismissible is false).
 *
 * @example
 * // Confirmation modal
 * <PopupModal open={open} variant="confirmation" title="Save changes?"
 *   onClose={() => setOpen(false)}>
 *   <p>Your changes will be applied immediately.</p>
 * </PopupModal>
 *
 * // Info modal
 * <PopupModal open={open} variant="info" title="About this feature" onClose={close}>
 *   <p>This feature lets you schedule campaigns in advance.</p>
 * </PopupModal>
 */

import React from 'react';
import { BaseProps } from '../../types';

type ModalVariant = 'default' | 'confirmation' | 'info' | 'success' | 'failure';

export interface PopupModalProps extends BaseProps {
  /** Whether the modal is visible */
  open: boolean;
  /** Heading text */
  title?: string;
  /** Visual style of the modal */
  variant?: ModalVariant;
  /** Whether clicking the overlay closes the modal. Defaults to true */
  dismissible?: boolean;
  /** Fired when the modal is closed (overlay click, Escape, or × button) */
  onClose: () => void;
  /** Modal body content */
  children?: React.ReactNode;
  /** Optional footer content (buttons etc.) */
  footer?: React.ReactNode;
}

/** Accent color + icon per variant */
const variantConfig: Record<ModalVariant, { accent: string; icon: string | null }> = {
  default:      { accent: 'text-ash-800',     icon: null },
  confirmation: { accent: 'text-ash-800',     icon: '?' },
  info:         { accent: 'text-ocean-600',   icon: 'ℹ' },
  success:      { accent: 'text-meadow-600',  icon: '✓' },
  failure:      { accent: 'text-crimson-600', icon: '✕' },
};

export const PopupModal: React.FC<PopupModalProps> = ({
  open,
  title,
  variant = 'default',
  dismissible = true,
  onClose,
  children,
  footer,
  className = '',
}) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && dismissible) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, dismissible, onClose]);

  if (!open) return null;
  const { accent, icon } = variantConfig[variant];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay — closes modal on click when dismissible */}
      <div
        aria-hidden="true"
        onClick={dismissible ? onClose : undefined}
        className="absolute inset-0 bg-mist-900/15"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        className={[
          'relative z-10 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl flex flex-col gap-3',
          className,
        ].join(' ')}
      >
        {/* Header */}
        {(title || dismissible) && (
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              {icon && <span className={['text-lg', accent].join(' ')} aria-hidden="true">{icon}</span>}
              {title && <h2 id="modal-title" className="text-lg font-semibold text-ash-800">{title}</h2>}
            </div>
            {dismissible && (
              <button onClick={onClose} aria-label="Close" className="text-ash-400 hover:text-ash-700 transition-colors">✕</button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="text-sm text-ash-600 leading-relaxed">{children}</div>

        {/* Footer */}
        {footer && <div className="mt-2 flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
};

PopupModal.displayName = 'PopupModal';
