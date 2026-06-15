/**
 * @file Breadcrumb.tsx
 * @description Hierarchical path indicator showing the user's current location.
 *
 * Place below the main header at the top of the page.
 * Omit on top-level pages. Current page item should not be a link.
 *
 * @example
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Campaigns', href: '/campaigns' },
 *     { label: 'Q3 Launch' }, // current page — no href
 *   ]}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends BaseProps {
  /** Ordered list of breadcrumb items. Last item is treated as current page. */
  items: BreadcrumbItem[];
  /** Separator character rendered between items. Defaults to "/" */
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className = '',
}) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={index} className="flex items-center gap-1.5">
            {isLast ? (
              /* Current page — not a link, has aria-current */
              <span aria-current="page" className="font-medium text-stone-800">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="hover:text-stone-800 transition-colors duration-150"
              >
                {item.label}
              </a>
            )}
            {/* Render separator after every item except the last */}
            {!isLast && (
              <span aria-hidden="true" className="text-stone-300 select-none">
                {separator}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

Breadcrumb.displayName = 'Breadcrumb';
