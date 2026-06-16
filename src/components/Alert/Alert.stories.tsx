/**
 * @file Alert.stories.tsx
 * @description Visual stories for the Alert component.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Gozango/Alert',
  component: Alert,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { variant: 'default', title: 'Heads up!', description: 'You can add components to your app using the CLI.' },
};
export const Destructive: Story = {
  args: { variant: 'destructive', title: 'Something went wrong', description: 'Your changes could not be saved. Please try again.' },
};
export const TitleOnly: Story = {
  args: { variant: 'default', title: 'Your session is about to expire.' },
};
export const WithIcon: Story = {
  args: { variant: 'default', title: 'Info', description: 'New feature available.', icon: 'ℹ️' },
};
