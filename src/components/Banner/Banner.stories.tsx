/**
 * @file Banner.stories.tsx
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

export const Brand: Story = {
  args: { variant: 'brand', message: '🎉 New feature: Try our AI-powered campaign builder today!', action: { label: 'Learn more', href: '#' } },
};
export const Neutral: Story = {
  args: { variant: 'neutral', message: 'Scheduled maintenance on June 20 from 2–4 AM UTC.' },
};
export const Warning: Story = {
  args: { variant: 'warning', message: 'Your free trial ends in 3 days. Upgrade to keep access.' },
};
