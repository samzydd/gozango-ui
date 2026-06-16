/**
 * @file Switch.stories.tsx
 * @description Visual stories for the Switch component.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Gozango/Switch',
  component: Switch,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = { args: { label: 'Enable notifications', checked: false } };
export const On: Story = { args: { label: 'Enable notifications', checked: true } };
export const WithDescription: Story = {
  args: { label: 'Marketing emails', description: 'Receive product updates and special offers', checked: true },
};
export const Disabled: Story = { args: { label: 'Premium feature', checked: false, disabled: true } };
export const DisabledOn: Story = { args: { label: 'Premium feature', checked: true, disabled: true } };
