/**
 * @file Dropdown.tsx
 * @description Contextual menu of actions or navigation options triggered by
 * a button. Supports text items, icons, separators, and disabled states.
 *
 * Built as a compound component: Dropdown + DropdownTrigger + DropdownMenu
 * + DropdownItem + DropdownSeparator + DropdownLabel.
 *
 * @example
 * <Dropdown>
 *   <DropdownTrigger>
 *     <button>Options ▾</button>
 *   </DropdownTrigger>
 *   <DropdownMenu>
 *     <DropdownLabel>My Account</DropdownLabel>
 *     <DropdownItem onSelect={handleProfile}>Profile</DropdownItem>
 *     <DropdownItem onSelect={handleSettings}>Settings</DropdownItem>
 *     <DropdownSeparator />
 *     <DropdownItem destructive onSelect={handleLogout}>Log out</DropdownItem>
 *   </DropdownMenu>
 * </Dropdown>
 */

import React from 'react';
import { BaseProps } from '../../types';

// ─── Context ─────────────────────────────────────────────────────────────────

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const DropdownContext = React.createContext<DropdownContextValue | null>(null);
const useDropdown = () => {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) throw new Error('Dropdown subcomponents must be used inside <Dropdown>');
  return ctx;
};

// ─── Root ─────────────────────────────────────────────────────────────────────

export const Dropdown: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside of it
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={['relative inline-block', className].join(' ')}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
Dropdown.displayName = 'Dropdown';

// ─── Trigger ──────────────────────────────────────────────────────────────────

/** Wraps the element that toggles the menu open/closed */
export const DropdownTrigger: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { open, setOpen } = useDropdown();
  return React.cloneElement(children, {
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    onClick: () => setOpen(!open),
  });
};
DropdownTrigger.displayName = 'DropdownTrigger';

// ─── Menu panel ─────────────────────────────────────────────────────────────────

export const DropdownMenu: React.FC<{ children: React.ReactNode; align?: 'left' | 'right'; className?: string }> = ({
  children,
  align = 'left',
  className = '',
}) => {
  const { open } = useDropdown();
  if (!open) return null;
  return (
    <div
      role="menu"
      className={[
        'absolute z-50 mt-1 min-w-[12rem] rounded-lg border border-ash-200 bg-white p-1 shadow-lg',
        align === 'right' ? 'right-0' : 'left-0',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
};
DropdownMenu.displayName = 'DropdownMenu';

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface DropdownItemProps {
  children: React.ReactNode;
  /** Icon shown to the left of the label */
  icon?: React.ReactNode;
  /** Fired when the item is selected; auto-closes the menu */
  onSelect?: () => void;
  /** Disables the item */
  disabled?: boolean;
  /** Styles the item as destructive (red) */
  destructive?: boolean;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children, icon, onSelect, disabled, destructive, className = '',
}) => {
  const { setOpen } = useDropdown();
  return (
    <button
      role="menuitem"
      disabled={disabled}
      onClick={() => { onSelect?.(); setOpen(false); }}
      className={[
        'flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-left transition-colors',
        'disabled:pointer-events-none disabled:opacity-50',
        destructive
          ? 'text-crimson-600 hover:bg-crimson-50'
          : 'text-ash-700 hover:bg-ash-100',
        className,
      ].join(' ')}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
DropdownItem.displayName = 'DropdownItem';

/** Non-interactive section label */
export const DropdownLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-2.5 py-1.5 text-xs font-semibold text-ash-400">{children}</div>
);
DropdownLabel.displayName = 'DropdownLabel';

/** Visual divider between groups of items */
export const DropdownSeparator: React.FC = () => (
  <div role="separator" className="my-1 h-px bg-ash-200" />
);
DropdownSeparator.displayName = 'DropdownSeparator';
