import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
const meta: Meta<typeof Breadcrumb> = { title: 'Gozango/Breadcrumb', component: Breadcrumb, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;
export const Default: Story = { args: { items: [{ label: 'Home', href: '/' }, { label: 'Campaigns', href: '/campaigns' }, { label: 'Q3 Launch' }] } };
export const TwoLevels: Story = { args: { items: [{ label: 'Dashboard', href: '/' }, { label: 'Settings' }] } };
export const Deep: Story = { args: { items: [{ label: 'Home', href: '/' }, { label: 'Marketing', href: '/marketing' }, { label: 'Email', href: '/marketing/email' }, { label: 'Templates', href: '/marketing/email/templates' }, { label: 'Welcome Series' }] } };
