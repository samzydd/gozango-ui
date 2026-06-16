/**
 * @file Tooltip.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Gozango/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Save your changes" position="top">
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc' }}>Hover me</button>
      </Tooltip>
    </div>
  ),
};
export const Bottom: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Opens in a new tab" position="bottom">
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc' }}>External link ↗</button>
      </Tooltip>
    </div>
  ),
};
export const Left: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Left tooltip" position="left">
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc' }}>Left</button>
      </Tooltip>
    </div>
  ),
};
export const Right: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Tooltip content="Right tooltip" position="right">
        <button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #ccc' }}>Right</button>
      </Tooltip>
    </div>
  ),
};
