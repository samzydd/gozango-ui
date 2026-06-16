import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';
const meta: Meta<typeof Overlay> = { title: 'Gozango/Overlay', component: Overlay, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Overlay>;
export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', width: 400, height: 200, background: '#f3f4f6', borderRadius: 8, overflow: 'hidden' }}>
      <p style={{ padding: 24, color: '#1E2939' }}>Background content behind the overlay</p>
      <Overlay style={{ position: 'absolute' }} />
    </div>
  ),
};
