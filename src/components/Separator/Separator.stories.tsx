/**
 * @file Separator.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Gozango/Separator',
  component: Separator,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <p style={{ marginBottom: 12, color: '#1E2939' }}>Section above</p>
      <Separator />
      <p style={{ marginTop: 12, color: '#1E2939' }}>Section below</p>
    </div>
  ),
};
export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, height: 24 }}>
      <span style={{ color: '#1E2939' }}>Home</span>
      <Separator orientation="vertical" style={{ height: '100%' }} />
      <span style={{ color: '#1E2939' }}>About</span>
      <Separator orientation="vertical" style={{ height: '100%' }} />
      <span style={{ color: '#1E2939' }}>Contact</span>
    </div>
  ),
};
