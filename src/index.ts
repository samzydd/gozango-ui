/**
 * @file index.ts
 * @description Main entry point for the Gozango UI component library.
 *
 * Import components directly from the package root:
 *   import { Button, Input, Badge } from 'gozango-ui';
 *
 * Import design tokens separately:
 *   import { colors, spacing, radius } from 'gozango-ui/tokens';
 */

// ─── Components ───────────────────────────────────────────────────────────────
export { Alert } from './components/Alert/Alert';
export type { AlertProps } from './components/Alert/Alert';

export { Avatar, AvatarGroup } from './components/Avatar/Avatar';
export type { AvatarProps, AvatarGroupProps } from './components/Avatar/Avatar';

export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';

export { Banner } from './components/Banner/Banner';
export type { BannerProps } from './components/Banner/Banner';

export { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItem } from './components/Breadcrumb/Breadcrumb';

export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';

export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Overlay } from './components/Overlay/Overlay';
export type { OverlayProps } from './components/Overlay/Overlay';

export { Progress } from './components/Progress/Progress';
export type { ProgressProps } from './components/Progress/Progress';

export { RadioGroup } from './components/RadioGroup/RadioGroup';
export type { RadioGroupProps, RadioOption } from './components/RadioGroup/RadioGroup';

export { Separator } from './components/Separator/Separator';
export type { SeparatorProps } from './components/Separator/Separator';

export { Slider } from './components/Slider/Slider';
export type { SliderProps } from './components/Slider/Slider';

export { Switch } from './components/Switch/Switch';
export type { SwitchProps } from './components/Switch/Switch';

export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs/Tabs';
export type { TabsProps, TabsTriggerProps, TabsContentProps } from './components/Tabs/Tabs';

export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';

export { Toast } from './components/Toast/Toast';
export type { ToastProps } from './components/Toast/Toast';

export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';

// ─── Tokens ───────────────────────────────────────────────────────────────────
export { colors, spacing, radius } from './tokens/tokens';
