/**
 * @file Checkbox.stories.tsx
 * @description Visual stories for the Checkbox component.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Gozango/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { label: 'Accept terms and conditions' } };
export const Checked: Story = { args: { label: 'Accept terms and conditions', defaultChecked: true } };
export const WithDescription: Story = {
  args: { label: 'Email notifications', description: 'Receive updates and offers via email', defaultChecked: true },
};
export const Indeterminate: Story = {
  args: { label: 'Select all items', indeterminate: true },
};
export const Disabled: Story = {
  args: { label: 'This option is unavailable', disabled: true },
};
export const Error: Story = {
  args: { label: 'I agree to the terms', error: true },
};
