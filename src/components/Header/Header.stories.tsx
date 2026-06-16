import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
const meta: Meta<typeof Header> = { title: 'Gozango/Header', component: Header, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Header>;

export const Regular: Story = {
  args: {
    variant: 'regular',
    logo: <span style={{ fontWeight: 700, fontSize: 18, color: '#00D123' }}>Gozango</span>,
    actions: (
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ padding: '6px 14px', borderRadius: 6, border: '1px solid #E5E7EB', background: 'white', cursor: 'pointer', fontSize: 13 }}>Sign in</button>
        <button style={{ padding: '6px 14px', borderRadius: 6, border: 'none', background: '#00D123', color: 'white', cursor: 'pointer', fontSize: 13 }}>Get started</button>
      </div>
    ),
  },
};
export const WithSearch: Story = {
  args: {
    variant: 'search',
    logo: <span style={{ fontWeight: 700, fontSize: 18, color: '#00D123' }}>Gozango</span>,
    searchPlaceholder: 'Search campaigns...',
    actions: <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SZ</div>,
  },
};
