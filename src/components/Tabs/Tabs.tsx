/**
 * @file Tabs.tsx
 * @description Horizontal tab navigation for organising content into distinct
 * views within the same context. Only one tab panel is shown at a time.
 *
 * Limit to 2–7 tabs. Do not use for sequential steps — use a stepper instead.
 * Disabled tabs should still be visible to communicate that the feature exists.
 *
 * @example
 * <Tabs defaultValue="overview">
 *   <TabsList>
 *     <TabsTrigger value="overview">Overview</TabsTrigger>
 *     <TabsTrigger value="settings">Settings</TabsTrigger>
 *     <TabsTrigger value="billing" disabled>Billing</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="overview"><p>Overview content</p></TabsContent>
 *   <TabsContent value="settings"><p>Settings content</p></TabsContent>
 * </Tabs>
 */

import React from 'react';
import { BaseProps } from '../../types';

// ─── Context ─────────────────────────────────────────────────────────────────

interface TabsContextValue {
  active: string;
  setActive: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('Tabs subcomponents must be used inside <Tabs>');
  return ctx;
};

// ─── Tabs Root ────────────────────────────────────────────────────────────────

export interface TabsProps extends BaseProps {
  /** The value of the tab that should be active by default (uncontrolled) */
  defaultValue?: string;
  /** Controlled active tab value */
  value?: string;
  /** Callback when the active tab changes */
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue = '',
  value,
  onValueChange,
  children,
  className = '',
}) => {
  const [internalActive, setInternalActive] = React.useState(defaultValue);
  const active = value ?? internalActive;

  const setActive = (v: string) => {
    setInternalActive(v);
    onValueChange?.(v);
  };

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className={['flex flex-col gap-0', className].join(' ')}>{children}</div>
    </TabsContext.Provider>
  );
};

// ─── TabsList ─────────────────────────────────────────────────────────────────

/** Container for all tab trigger buttons */
export const TabsList: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    role="tablist"
    className={[
      'inline-flex h-9 items-center rounded-lg bg-stone-100 p-1 gap-1',
      className,
    ].join(' ')}
  >
    {children}
  </div>
);

// ─── TabsTrigger ──────────────────────────────────────────────────────────────

export interface TabsTriggerProps {
  /** Unique value matching a TabsContent panel */
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
  disabled,
  className = '',
}) => {
  const { active, setActive } = useTabsContext();
  const isActive = active === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      onClick={() => !disabled && setActive(value)}
      className={[
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1',
        'text-sm font-medium transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        'disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-white text-stone-900 shadow-sm'
          : 'text-stone-600 hover:text-stone-900',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
};

// ─── TabsContent ──────────────────────────────────────────────────────────────

export interface TabsContentProps {
  /** Matching value from a TabsTrigger */
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
  className = '',
}) => {
  const { active } = useTabsContext();

  if (active !== value) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={['mt-4 focus-visible:outline-none', className].join(' ')}
    >
      {children}
    </div>
  );
};
