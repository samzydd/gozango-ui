/**
 * @file index.ts
 * @description Shared TypeScript types and utility types used across
 * all Gozango UI components. Import from here rather than defining
 * locally in each component file.
 */

/** Common interactive states shared across many components */
export type ComponentState = 'enabled' | 'hover' | 'focus' | 'disabled' | 'loading';

/** Standard size scale used by Button, Avatar, Badge, Input etc. */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Semantic intent/variant — maps to Figma "Type" prop on most components */
export type Intent = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';

/** Orientation for layout-driven components like Separator, RadioGroup */
export type Orientation = 'horizontal' | 'vertical';

/** Shared props every component accepts */
export interface BaseProps {
  /** Additional CSS class names to merge with component classes */
  className?: string;
  /** Inline styles — prefer className / Tailwind utilities where possible */
  style?: React.CSSProperties;
  /** data-testid for testing */
  'data-testid'?: string;
}
