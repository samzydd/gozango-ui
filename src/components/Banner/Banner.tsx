/**
 * @file Banner.tsx
 * @description Structured callout card used to highlight a feature, resource,
 * or piece of content — combines an icon, heading, description, a row of
 * checklist items, and a call-to-action link.
 *
 * Unlike a simple announcement strip, this Banner is a multi-section card:
 * top section (icon, title, description), bottom section (checklist items
 * + CTA) on a contrasting light background.
 *
 * @example
 * <Banner
 *   icon={<SparkleIcon />}
 *   title="Header"
 *   description="This is the description of the title"
 *   items={['50+ Best Practices', '5 SEO Categories', 'Actionable Checklists']}
 *   cta={{ label: 'View SEO Playbook', href: '#' }}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface BannerProps extends BaseProps {
  /** Icon rendered inside the rounded green square */
  icon?: React.ReactNode;
  /** Bold heading text */
  title: string;
  /** Supporting description text below the title */
  description?: string;
  /** List of short checklist labels shown in the footer row, each with a check icon */
  items?: string[];
  /** Call-to-action link shown at the end of the footer row */
  cta?: { label: string; href?: string; onClick?: () => void };
}

export const Banner: React.FC<BannerProps> = ({
  icon,
  title,
  description,
  items = [],
  cta,
  className = '',
}) => (
  <div
    className={[
      'w-full overflow-hidden rounded-xl border border-ash-200 bg-white',
      className,
    ].join(' ')}
  >
    {/* Top section — icon, title, description */}
    <div className="flex items-start gap-3 p-6">
      {/* Icon square — brand green, rounded */}
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white"
      >
        {icon ?? '✦'}
      </span>

      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-ash-900">{title}</h3>
        {description && (
          <p className="text-sm text-ash-500">{description}</p>
        )}
      </div>
    </div>

    {/* Footer section — checklist items + CTA, on a light grey strip */}
    {(items.length > 0 || cta) && (
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ash-200 bg-ash-50 px-6 py-3">
        <ul className="flex flex-wrap items-center gap-5">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5 text-sm text-ash-700">
              {/* Check icon in a circle, matches Figma's checklist style */}
              <span
                aria-hidden="true"
                className="flex h-4 w-4 items-center justify-center rounded-full border border-ash-400 text-[10px] text-ash-500"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {cta && (
          <a
            href={cta.href}
            onClick={cta.onClick}
            className="inline-flex items-center gap-1 text-sm font-medium text-ash-900 hover:text-brand-600 transition-colors"
          >
            {cta.label}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    )}
  </div>
);

Banner.displayName = 'Banner';
