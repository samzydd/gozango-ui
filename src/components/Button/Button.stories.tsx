/**
 * @file Button.stories.tsx
 * @description Visual stories for the Button component.
 * Each story represents one variant/state — compare these against
 * the Figma "↳ Button" page side by side.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Gozango/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Primary interaction element. 6 variants, 4 sizes, 5 states, optional icons.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

/** Default filled brand-green button — use for primary actions only */
export const Default: Story = {
  args: { variant: 'default', size: 'default', children: 'Save changes' },
};

/** Secondary button — for less prominent actions */
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Cancel' },
};

/** Outline button — border only, no fill */
export const Outline: Story = {
  args: { variant: 'outline', children: 'View details' },
};

/** Ghost button — no border, no fill */
export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Learn more' },
};

/** Link button — looks like a hyperlink */
export const Link: Story = {
  args: { variant: 'link', children: 'Read the docs →' },
};

/** Destructive — for irreversible actions like delete */
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Delete campaign' },
};

/** Loading state — spinner replaces left icon, button is disabled */
export const Loading: Story = {
  args: { variant: 'default', loading: true, children: 'Saving...' },
};

/** Disabled state */
export const Disabled: Story = {
  args: { variant: 'default', disabled: true, children: 'Not available' },
};

/** Small size */
export const Small: Story = {
  args: { variant: 'default', size: 'small', children: 'Small' },
};

/** Large size */
export const Large: Story = {
  args: { variant: 'default', size: 'large', children: 'Large' },
};

/** Icon-only button — always add aria-label for accessibility */
export const IconOnly: Story = {
  args: { variant: 'outline', size: 'icon', children: '⚙', 'aria-label': 'Settings' },
};

/** With left icon */
export const WithLeftIcon: Story = {
  args: { variant: 'default', leftIcon: '➕', children: 'Add campaign' },
};

/** All variants side by side for a quick overview */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
