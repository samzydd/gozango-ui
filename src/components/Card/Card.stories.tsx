/**
 * @file Card.stories.tsx
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Gozango/Card',
  component: Card,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: 380 }}>
      <CardHeader>
        <CardTitle>Monthly Report</CardTitle>
        <CardDescription>Your performance for June 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You reached 12,400 people this month — a 24% increase from May.</p>
      </CardContent>
      <CardFooter>
        <button style={{ padding: '8px 16px', borderRadius: 6, background: '#00D123', color: 'white', border: 'none', cursor: 'pointer' }}>
          View full report
        </button>
      </CardFooter>
    </Card>
  ),
};
export const Hoverable: Story = {
  render: () => (
    <Card hoverable style={{ width: 380 }}>
      <CardHeader>
        <CardTitle>Click me</CardTitle>
        <CardDescription>This card is interactive — hover to see the shadow</CardDescription>
      </CardHeader>
      <CardContent><p>Content goes here.</p></CardContent>
    </Card>
  ),
};
export const HeaderOnly: Story = {
  render: () => (
    <Card style={{ width: 380 }}>
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>Just a header, no content or footer.</CardDescription>
      </CardHeader>
    </Card>
  ),
};
