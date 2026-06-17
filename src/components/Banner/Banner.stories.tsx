/**
 * @file Banner.stories.tsx
 * @description Visual stories for the redesigned Banner component,
 * matching the Figma structure: icon + title + description, plus a
 * footer row of checklist items and a CTA link.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Gozango/Banner',
  component: Banner,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Banner>;

/** Default banner matching the Figma "default" state exactly */
export const Default: Story = {
  args: {
    title: 'Header',
    description: 'This is the description of the title',
    items: ['50+ Best Practices', '5 SEO Categories', 'Actionable Checklists'],
    cta: { label: 'View SEO Playbook', href: '#' },
  },
  parameters: { layout: 'padded' },
};

/** Banner without the footer checklist row */
export const TitleOnly: Story = {
  args: {
    title: 'Scheduled maintenance',
    description: 'The platform will be briefly unavailable on June 20.',
  },
  parameters: { layout: 'padded' },
};

/** Banner with a custom icon */
export const CustomIcon: Story = {
  args: {
    icon: '🚀',
    title: 'New feature available',
    description: 'Try our AI-powered campaign builder today',
    items: ['Free for all plans', 'No setup required'],
    cta: { label: 'Try it now', href: '#' },
  },
  parameters: { layout: 'padded' },
};
