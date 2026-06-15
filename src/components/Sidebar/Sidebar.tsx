/**
 * @file Sidebar.tsx
 * @description Primary application navigation panel. Supports collapsed and
 * expanded states, grouped navigation items with labels, header/footer slots,
 * and active item highlighting.
 *
 * Built as a compound component: Sidebar + SidebarHeader + SidebarGroup
 * + SidebarItem + SidebarFooter.
 *
 * @example
 * <Sidebar collapsed={isCollapsed}>
 *   <SidebarHeader>
 *     <Logo />
 *   </SidebarHeader>
 *   <SidebarGroup label="Main">
 *     <SidebarItem icon={<HomeIcon />} active>Dashboard</SidebarItem>
 *     <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
 *   </SidebarGroup>
 *   <SidebarFooter>
 *     <UserProfile />
 *   </SidebarFooter>
 * </Sidebar>
 */

import React from 'react';
import { BaseProps } from '../../types';

// ─── Context (shares collapsed state with all items) ──────────────────────────

interface SidebarContextValue { collapsed: boolean; }
const SidebarContext = React.createContext<SidebarContextValue>({ collapsed: false });

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface SidebarProps extends BaseProps {
  /** Collapses the sidebar to an icon-only rail */
  collapsed?: boolean;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, children, className = '' }) => (
  <SidebarContext.Provider value={{ collapsed }}>
    <nav
      aria-label="Sidebar"
      className={[
        'flex h-full flex-col border-r border-ash-200 bg-white transition-all duration-200',
        collapsed ? 'w-16' : 'w-64',
        className,
      ].join(' ')}
    >
      {children}
    </nav>
  </SidebarContext.Provider>
);
Sidebar.displayName = 'Sidebar';

// ─── Header / Footer ────────────────────────────────────────────────────────────

export const SidebarHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={['flex items-center gap-2 border-b border-ash-200 p-4 h-16 shrink-0', className].join(' ')}>{children}</div>
);
SidebarHeader.displayName = 'SidebarHeader';

export const SidebarFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={['mt-auto border-t border-ash-200 p-3 shrink-0', className].join(' ')}>{children}</div>
);
SidebarFooter.displayName = 'SidebarFooter';

// ─── Group ─────────────────────────────────────────────────────────────────────

/** Logical cluster of related navigation items with an optional label */
export const SidebarGroup: React.FC<{ label?: string; children: React.ReactNode; className?: string }> = ({
  label, children, className = '',
}) => {
  const { collapsed } = React.useContext(SidebarContext);
  return (
    <div className={['flex flex-col gap-1 p-3', className].join(' ')}>
      {/* Hide group labels when collapsed */}
      {label && !collapsed && (
        <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-ash-400">
          {label}
        </span>
      )}
      {children}
    </div>
  );
};
SidebarGroup.displayName = 'SidebarGroup';

// ─── Item ─────────────────────────────────────────────────────────────────────

export interface SidebarItemProps {
  /** Icon shown to the left (always visible, even when collapsed) */
  icon?: React.ReactNode;
  /** Marks this item as the current page */
  active?: boolean;
  /** Fired when the item is clicked */
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, active, onClick, children, className = '' }) => {
  const { collapsed } = React.useContext(SidebarContext);
  return (
    <button
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      title={collapsed && typeof children === 'string' ? children : undefined}
      className={[
        'flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors',
        collapsed ? 'justify-center' : '',
        active
          ? 'bg-brand-0 text-brand-700'
          : 'text-ash-600 hover:bg-ash-100 hover:text-ash-900',
        className,
      ].join(' ')}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {/* Hide labels when collapsed */}
      {!collapsed && <span className="truncate">{children}</span>}
    </button>
  );
};
SidebarItem.displayName = 'SidebarItem';
