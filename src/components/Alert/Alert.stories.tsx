/**
 * @file Alert.stories.tsx
 * @description Visual stories for the Alert component.
 * Default story matches the Figma Alert exactly: warning triangle icon
 * + description text, on a white card with a light grey border.
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

/** Matches the Figma "default" Alert state exactly */
export const Default: Story = {
  args: { variant: 'default', description: 'This is the alert description' },
};

export const WithTitle: Story = {
  args: { variant: 'default', title: 'Heads up!', description: 'You can add components to your app using the CLI.' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', title: 'Something went wrong', description: 'Your changes could not be saved. Please try again.' },
};

export const TitleOnly: Story = {
  args: { variant: 'default', title: 'Your session is about to expire.' },
};

/** Demonstrates overriding the default icon with a custom one */
export const CustomIcon: Story = {
  args: { variant: 'default', title: 'Info', description: 'New feature available.', icon: 'ℹ️' },
};

/** Demonstrates suppressing the icon entirely */
export const NoIcon: Story = {
  args: { variant: 'default', description: 'A plain alert with no icon.', icon: null },
};
