/**
 * @file AlertDialog.tsx
 * @description Modal confirmation dialog that interrupts the user flow and
 * requires an explicit decision before continuing. Unlike a standard modal,
 * it cannot be dismissed by clicking outside — use for destructive or
 * irreversible actions (delete, revoke, cancel subscription).
 *
 * @example
 * <AlertDialog
 *   open={isOpen}
 *   title="Delete this campaign?"
 *   description="This action cannot be undone. The campaign and all its data will be permanently removed."
 *   confirmLabel="Delete"
 *   cancelLabel="Cancel"
 *   destructive
 *   onConfirm={handleDelete}
 *   onCancel={() => setIsOpen(false)}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface AlertDialogProps extends BaseProps {
  /** Whether the dialog is visible */
  open: boolean;
  /** Bold heading text */
  title: string;
  /** Supporting description explaining the consequence */
  description?: string;
  /** Label for the confirm button. Defaults to "Continue" */
  confirmLabel?: string;
  /** Label for the cancel button. Defaults to "Cancel" */
  cancelLabel?: string;
  /** Styles the confirm button as destructive (red) */
  destructive?: boolean;
  /** Whether to show the secondary (cancel) button. Defaults to true */
  showCancel?: boolean;
  /** Fired when the confirm button is clicked */
  onConfirm: () => void;
  /** Fired when the cancel button is clicked */
  onCancel: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  title,
  description,
  confirmLabel = 'Continue',
  cancelLabel = 'Cancel',
  destructive = false,
  showCancel = true,
  onConfirm,
  onCancel,
  className = '',
}) => {
  // Trap focus on the dialog and close on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Scrim — note: clicking it does NOT close the dialog (intentional) */}
      <div aria-hidden="true" className="absolute inset-0 bg-mist-900/15" />

      {/* Dialog */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="alertdialog-title"
        aria-describedby={description ? 'alertdialog-desc' : undefined}
        className={[
          'relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl',
          'flex flex-col gap-2',
          className,
        ].join(' ')}
      >
        <h2 id="alertdialog-title" className="text-lg font-semibold text-ash-800">
          {title}
        </h2>
        {description && (
          <p id="alertdialog-desc" className="text-sm text-ash-500 leading-relaxed">
            {description}
          </p>
        )}

        {/* Footer actions */}
        <div className="mt-4 flex justify-end gap-3">
          {showCancel && (
            <button
              onClick={onCancel}
              className="inline-flex h-9 items-center rounded-md border border-ash-300 px-4 text-sm font-medium text-ash-800 hover:bg-ash-100 transition-colors"
            >
              {cancelLabel}
            </button>
          )}
          <button
            onClick={onConfirm}
            className={[
              'inline-flex h-9 items-center rounded-md px-4 text-sm font-medium text-white transition-colors',
              destructive
                ? 'bg-crimson-600 hover:bg-crimson-700'
                : 'bg-meadow-600 hover:bg-meadow-700',
            ].join(' ')}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

AlertDialog.displayName = 'AlertDialog';
