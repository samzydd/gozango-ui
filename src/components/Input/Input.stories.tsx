/**
 * @file Input.stories.tsx
 * @description Visual stories for the Input component.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Gozango/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com' },
};
export const WithHelpText: Story = {
  args: { label: 'Username', placeholder: 'samzydd', helpText: 'This will be your public display name.' },
};
export const WithError: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com', value: 'notanemail', error: 'Please enter a valid email address.' },
};
export const WithIcon: Story = {
  args: { label: 'Search', placeholder: 'Search campaigns...', icon: '🔍' },
};
export const Disabled: Story = {
  args: { label: 'Account ID', value: 'ACC-00123', disabled: true },
};
export const SideLabel: Story = {
  args: { label: 'Name', placeholder: 'Enter your name', labelPosition: 'side' },
};
export const NoLabel: Story = {
  args: { placeholder: 'Search...', labelPosition: 'none' },
};
