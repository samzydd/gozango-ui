import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownLabel, DropdownSeparator } from './Dropdown';
const meta: Meta<typeof Dropdown> = { title: 'Gozango/Dropdown', component: Dropdown, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Dropdown>
        <DropdownTrigger><button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #E5E7EB', background: 'white', cursor: 'pointer' }}>Options ▾</button></DropdownTrigger>
        <DropdownMenu>
          <DropdownLabel>My Account</DropdownLabel>
          <DropdownItem icon="👤" onSelect={() => {}}>Profile</DropdownItem>
          <DropdownItem icon="⚙" onSelect={() => {}}>Settings</DropdownItem>
          <DropdownItem icon="💳" onSelect={() => {}}>Billing</DropdownItem>
          <DropdownSeparator />
          <DropdownItem destructive icon="🚪" onSelect={() => {}}>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};
export const WithDisabledItem: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'flex', justifyContent: 'center' }}>
      <Dropdown>
        <DropdownTrigger><button style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #E5E7EB', background: 'white', cursor: 'pointer' }}>Actions ▾</button></DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onSelect={() => {}}>Edit</DropdownItem>
          <DropdownItem onSelect={() => {}}>Duplicate</DropdownItem>
          <DropdownItem disabled onSelect={() => {}}>Archive (unavailable)</DropdownItem>
          <DropdownSeparator />
          <DropdownItem destructive onSelect={() => {}}>Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};
