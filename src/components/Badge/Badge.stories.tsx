/**
 * @file Badge.stories.tsx
 * @description Visual stories for the Badge component.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Gozango/Badge',
  component: Badge,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'New', variant: 'default' } };
export const Secondary: Story = { args: { children: 'Draft', variant: 'secondary' } };
export const Outline: Story = { args: { children: 'Pending', variant: 'outline' } };
export const Destructive: Story = { args: { children: 'Failed', variant: 'destructive' } };
export const WithCount: Story = { args: { count: 8, variant: 'default' } };
export const WithLeftIcon: Story = { args: { children: 'Active', leftIcon: '●', variant: 'default' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="default" count={12} />
    </div>
  ),
};
