import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
const meta: Meta<typeof EmptyState> = { title: 'Gozango/EmptyState', component: EmptyState, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof EmptyState>;
export const Portrait: Story = { args: { title: 'No campaigns yet', description: 'Create your first campaign to start reaching your audience.', action: { label: 'Create campaign', onClick: () => {} }, illustration: <span style={{ fontSize: 48 }}>📭</span> } };
export const Landscape: Story = { args: { orientation: 'landscape', title: 'No results found', description: 'Try adjusting your search filters.', illustration: <span style={{ fontSize: 36 }}>🔍</span> } };
export const NoAction: Story = { args: { title: 'Nothing here yet', description: 'Check back later.' } };
