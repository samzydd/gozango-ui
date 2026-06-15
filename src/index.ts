/**
 * @file index.ts
 * @description Main entry point for the Gozango UI component library.
 *
 * Import components directly from the package root:
 *   import { Button, Input, Card, DataTable } from 'gozango-ui';
 *
 * Import design tokens separately:
 *   import { colors, spacing, radius, semantic } from 'gozango-ui/tokens';
 */

// ─── Simple components ──────────────────────────────────────────────────────
export { Alert } from './components/Alert/Alert';
export type { AlertProps } from './components/Alert/Alert';

export { AlertDialog } from './components/AlertDialog/AlertDialog';
export type { AlertDialogProps } from './components/AlertDialog/AlertDialog';

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

export { Calendar } from './components/Calendar/Calendar';
export type { CalendarProps } from './components/Calendar/Calendar';

export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';

export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';

export { Header } from './components/Header/Header';
export type { HeaderProps } from './components/Header/Header';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Overlay } from './components/Overlay/Overlay';
export type { OverlayProps } from './components/Overlay/Overlay';

export { PopupModal } from './components/PopupModal/PopupModal';
export type { PopupModalProps } from './components/PopupModal/PopupModal';

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

export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';

export { Toast } from './components/Toast/Toast';
export type { ToastProps } from './components/Toast/Toast';

export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';

export { Upload } from './components/Upload/Upload';
export type { UploadProps } from './components/Upload/Upload';

// ─── Compound components ──────────────────────────────────────────────────────
export {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from './components/Card/Card';
export type { CardProps } from './components/Card/Card';

export {
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
  DropdownLabel, DropdownSeparator,
} from './components/Dropdown/Dropdown';
export type { DropdownItemProps } from './components/Dropdown/Dropdown';

export {
  Sidebar, SidebarHeader, SidebarGroup, SidebarItem, SidebarFooter,
} from './components/Sidebar/Sidebar';
export type { SidebarProps, SidebarItemProps } from './components/Sidebar/Sidebar';

export {
  Tabs, TabsList, TabsTrigger, TabsContent,
} from './components/Tabs/Tabs';
export type { TabsProps, TabsTriggerProps, TabsContentProps } from './components/Tabs/Tabs';

export { DataTable } from './components/DataTable/DataTable';
export type { DataTableProps, Column } from './components/DataTable/DataTable';

// ─── Tokens ───────────────────────────────────────────────────────────────────
export { colors, spacing, radius, semantic } from './tokens/tokens';
