/**
 * @file Card.tsx
 * @description Flexible surface container that groups related content and actions.
 * Built as a compound component: Card + CardHeader + CardTitle + CardDescription
 * + CardContent + CardFooter.
 *
 * Use CardHeader to set content hierarchy, CardFooter for primary actions.
 * Set hoverable to indicate the card is clickable.
 *
 * @example
 * <Card hoverable>
 *   <CardHeader>
 *     <CardTitle>Monthly report</CardTitle>
 *     <CardDescription>Your performance for June 2026</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>You reached 12,400 people this month.</p>
 *   </CardContent>
 *   <CardFooter>
 *     <button>View details</button>
 *   </CardFooter>
 * </Card>
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface CardProps extends BaseProps {
  /** Adds a hover elevation effect to signal the card is interactive */
  hoverable?: boolean;
  /** Fires when the card is clicked */
  onClick?: () => void;
  children: React.ReactNode;
}

/** Root card container */
export const Card: React.FC<CardProps> = ({ hoverable, onClick, children, className = '' }) => (
  <div
    onClick={onClick}
    className={[
      'rounded-xl border border-ash-200 bg-white shadow-sm',
      hoverable ? 'transition-shadow hover:shadow-md cursor-pointer' : '',
      className,
    ].join(' ')}
  >
    {children}
  </div>
);
Card.displayName = 'Card';

/** Header region — typically holds title + description */
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={['flex flex-col gap-1.5 p-6', className].join(' ')}>{children}</div>
);
CardHeader.displayName = 'CardHeader';

/** Card title — the primary heading */
export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={['text-lg font-semibold leading-none text-ash-800', className].join(' ')}>{children}</h3>
);
CardTitle.displayName = 'CardTitle';

/** Card description — supporting subtitle text */
export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={['text-sm text-ash-500', className].join(' ')}>{children}</p>
);
CardDescription.displayName = 'CardDescription';

/** Main content region */
export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={['p-6 pt-0 text-sm text-ash-700', className].join(' ')}>{children}</div>
);
CardContent.displayName = 'CardContent';

/** Footer region — typically holds action buttons */
export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={['flex items-center gap-3 p-6 pt-0', className].join(' ')}>{children}</div>
);
CardFooter.displayName = 'CardFooter';
