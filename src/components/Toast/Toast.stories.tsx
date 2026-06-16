/**
 * @file Toast.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Gozango/Toast',
  component: Toast,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = { args: { variant: 'default', message: 'Your settings have been saved.' } };
export const Success: Story = { args: { variant: 'success', message: 'Campaign published successfully!' } };
export const Error: Story = { args: { variant: 'error', message: 'Failed to upload file. Please try again.' } };
export const Warning: Story = { args: { variant: 'warning', message: 'You are nearing your storage limit.' } };
export const Info: Story = { args: { variant: 'info', message: 'A new version is available.' } };
export const WithAction: Story = {
  args: { variant: 'error', message: 'Upload failed.', action: { label: 'Retry', onClick: () => alert('Retrying...') } },
};
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['default','success','error','warning','info'] as const).map(v => (
        <Toast key={v} variant={v} message={`This is a ${v} toast notification.`} />
      ))}
    </div>
  ),
};
