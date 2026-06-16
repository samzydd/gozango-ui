/**
 * @file Avatar.stories.tsx
 * @description Visual stories for Avatar and AvatarGroup.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Gozango/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=1', alt: 'Sam Z', size: 'md' },
};
export const WithFallback: Story = {
  args: { fallback: 'SZ', alt: 'Sam Z', size: 'md' },
};
export const WithIcon: Story = {
  args: { icon: '👤', size: 'md' },
};
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['2xs','xs','sm','md','lg'] as const).map(size => (
        <Avatar key={size} fallback="SZ" size={size} />
      ))}
    </div>
  ),
};
export const RoundedShape: Story = {
  args: { fallback: 'GZ', size: 'md', shape: 'rounded' },
};
export const Group: Story = {
  render: () => (
    <AvatarGroup
      size="sm"
      avatars={[
        { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
        { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
        { fallback: 'AB', alt: 'User 3' },
        { fallback: 'CD', alt: 'User 4' },
        { fallback: 'EF', alt: 'User 5' },
      ]}
      max={3}
    />
  ),
};
