/**
 * @file Header.tsx
 * @description Top-level application navigation bar containing branding,
 * navigation actions, and optionally a search input. Adapts between a regular
 * variant and a search-input variant.
 *
 * Keep the action count minimal — move secondary actions into a dropdown.
 *
 * @example
 * // Regular header
 * <Header
 *   logo={<Logo />}
 *   actions={<><button>Sign in</button><button>Get started</button></>}
 * />
 *
 * // Header with search
 * <Header
 *   variant="search"
 *   logo={<Logo />}
 *   onSearch={(q) => console.log(q)}
 *   actions={<UserMenu />}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface HeaderProps extends BaseProps {
  /** Branding element (logo / wordmark) shown on the left */
  logo?: React.ReactNode;
  /** Action elements shown on the right (buttons, menus) */
  actions?: React.ReactNode;
  /** Layout variant — "regular" or "search" (shows a search field) */
  variant?: 'regular' | 'search';
  /** Search callback, used when variant is "search" */
  onSearch?: (query: string) => void;
  /** Placeholder for the search input */
  searchPlaceholder?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  actions,
  variant = 'regular',
  onSearch,
  searchPlaceholder = 'Search...',
  className = '',
}) => (
  <header
    role="banner"
    className={[
      'flex h-16 w-full items-center justify-between gap-4 border-b border-ash-200 bg-white px-6',
      className,
    ].join(' ')}
  >
    {/* Left — logo */}
    <div className="flex items-center gap-3 shrink-0">{logo}</div>

    {/* Center — search field (only in search variant) */}
    {variant === 'search' && (
      <div className="flex-1 max-w-md">
        <input
          type="search"
          placeholder={searchPlaceholder}
          onChange={(e) => onSearch?.(e.target.value)}
          aria-label="Search"
          className="h-9 w-full rounded-md border border-ash-300 bg-ash-50 px-3 text-sm text-ash-900 placeholder:text-ash-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        />
      </div>
    )}

    {/* Right — actions */}
    <nav aria-label="Main navigation" className="flex items-center gap-2 shrink-0">
      {actions}
    </nav>
  </header>
);

Header.displayName = 'Header';
