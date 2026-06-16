import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
const meta: Meta<typeof Calendar> = { title: 'Gozango/Calendar', component: Calendar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Calendar>;
export const Default: Story = { args: {} };
export const WithSelectedDate: Story = { args: { selected: new Date(2026, 5, 15) } };
export const WithMinDate: Story = { args: { minDate: new Date(), selected: new Date() } };
