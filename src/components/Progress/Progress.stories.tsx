/**
 * @file Progress.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Gozango/Progress',
  component: Progress,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Empty: Story = { args: { value: 0, label: 'Upload progress', showValue: true } };
export const Quarter: Story = { args: { value: 25, label: 'Profile completion', showValue: true } };
export const Half: Story = { args: { value: 50, showValue: true } };
export const ThreeQuarters: Story = { args: { value: 75, label: 'Campaign setup', showValue: true } };
export const Complete: Story = { args: { value: 100, label: 'Upload complete', showValue: true } };
export const AllSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 400 }}>
      {[0,25,50,75,100].map(v => <Progress key={v} value={v} label={`${v}%`} showValue />)}
    </div>
  ),
};
