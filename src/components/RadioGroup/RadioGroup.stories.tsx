/**
 * @file RadioGroup.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Gozango/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { value: 'all', label: 'All notifications' },
  { value: 'mentions', label: 'Mentions only' },
  { value: 'none', label: 'None' },
];

export const Vertical: Story = { args: { label: 'Notification preference', options, value: 'mentions' } };
export const Horizontal: Story = { args: { label: 'Plan', options: [{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }, { value: 'enterprise', label: 'Enterprise' }], orientation: 'horizontal' } };
export const WithDescriptions: Story = {
  args: {
    label: 'Choose a plan',
    options: [
      { value: 'free', label: 'Free', description: 'Up to 3 campaigns per month' },
      { value: 'pro', label: 'Pro', description: 'Unlimited campaigns + analytics' },
      { value: 'enterprise', label: 'Enterprise', description: 'Custom limits + dedicated support' },
    ],
    value: 'pro',
  },
};
export const WithError: Story = { args: { label: 'Select a plan to continue', options, error: 'Please select an option to proceed.' } };
export const Disabled: Story = { args: { label: 'Notification preference', options, disabled: true, value: 'all' } };
