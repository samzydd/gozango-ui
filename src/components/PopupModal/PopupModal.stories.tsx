/**
 * @file PopupModal.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { PopupModal } from './PopupModal';

const meta: Meta<typeof PopupModal> = {
  title: 'Gozango/PopupModal',
  component: PopupModal,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PopupModal>;

export const Default: Story = {
  args: {
    open: true, title: 'Edit profile', variant: 'default',
    children: <p>Update your profile information here.</p>,
    footer: <button style={{ padding: '8px 16px', background: '#00D123', color: 'white', border: 'none', borderRadius: 6 }}>Save</button>,
    onClose: () => {},
  },
};
export const Confirmation: Story = {
  args: {
    open: true, title: 'Save changes?', variant: 'confirmation',
    children: <p>Your changes will be applied immediately.</p>,
    onClose: () => {},
  },
};
export const Success: Story = {
  args: { open: true, title: 'Payment successful!', variant: 'success', children: <p>Your subscription has been activated.</p>, onClose: () => {} },
};
export const Failure: Story = {
  args: { open: true, title: 'Payment failed', variant: 'failure', children: <p>Please check your card details and try again.</p>, onClose: () => {} },
};
export const Info: Story = {
  args: { open: true, title: 'About this feature', variant: 'info', children: <p>This feature lets you schedule campaigns up to 90 days in advance.</p>, onClose: () => {} },
};
