/**
 * @file AlertDialog.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from './AlertDialog';

const meta: Meta<typeof AlertDialog> = {
  title: 'Gozango/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    open: true, title: 'Are you sure?',
    description: 'This action cannot be undone.',
    confirmLabel: 'Continue', cancelLabel: 'Cancel',
    onConfirm: () => {}, onCancel: () => {},
  },
};
export const Destructive: Story = {
  args: {
    open: true, title: 'Delete this campaign?',
    description: 'This will permanently delete the campaign and all its data.',
    confirmLabel: 'Delete', cancelLabel: 'Cancel',
    destructive: true,
    onConfirm: () => {}, onCancel: () => {},
  },
};
export const NoDescription: Story = {
  args: {
    open: true, title: 'Log out of your account?',
    confirmLabel: 'Log out', cancelLabel: 'Stay',
    onConfirm: () => {}, onCancel: () => {},
  },
};
