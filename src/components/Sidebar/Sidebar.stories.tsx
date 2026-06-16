import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarHeader, SidebarGroup, SidebarItem, SidebarFooter } from './Sidebar';
const meta: Meta<typeof Sidebar> = { title: 'Gozango/Sidebar', component: Sidebar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Sidebar>;

const SidebarDemo = ({ collapsed = false }) => (
  <div style={{ height: 500, display: 'flex' }}>
    <Sidebar collapsed={collapsed}>
      <SidebarHeader><span style={{ fontWeight: 700, color: '#00D123' }}>Gozango</span></SidebarHeader>
      <SidebarGroup label="Main">
        <SidebarItem icon="🏠" active>Dashboard</SidebarItem>
        <SidebarItem icon="📊">Analytics</SidebarItem>
        <SidebarItem icon="📢">Campaigns</SidebarItem>
      </SidebarGroup>
      <SidebarGroup label="Account">
        <SidebarItem icon="⚙">Settings</SidebarItem>
        <SidebarItem icon="💳">Billing</SidebarItem>
      </SidebarGroup>
      <SidebarFooter><span style={{ fontSize: 13, color: '#6A7282' }}>Sam Z · samzydd</span></SidebarFooter>
    </Sidebar>
  </div>
);

export const Expanded: Story = { render: () => <SidebarDemo /> };
export const Collapsed: Story = { render: () => <SidebarDemo collapsed /> };
