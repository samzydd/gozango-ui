/**
 * @file Tabs.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Gozango/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="billing" disabled>Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="overview"><p style={{ padding: '16px 0', color: '#6A7282' }}>Overview content goes here.</p></TabsContent>
      <TabsContent value="analytics"><p style={{ padding: '16px 0', color: '#6A7282' }}>Analytics content goes here.</p></TabsContent>
      <TabsContent value="settings"><p style={{ padding: '16px 0', color: '#6A7282' }}>Settings content goes here.</p></TabsContent>
    </Tabs>
  ),
};
