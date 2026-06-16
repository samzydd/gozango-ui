import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
const meta: Meta<typeof Textarea> = { title: 'Gozango/Textarea', component: Textarea, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Textarea>;
export const Default: Story = { args: { label: 'Description', placeholder: 'Tell us about your campaign...' } };
export const WithHelpText: Story = { args: { label: 'Bio', placeholder: 'Write a short bio...', helpText: 'Max 280 characters', maxLength: 280, showCount: true } };
export const WithError: Story = { args: { label: 'Message', placeholder: 'Your message...', error: 'Message cannot be empty.' } };
export const Disabled: Story = { args: { label: 'Notes', value: 'Read-only content', disabled: true } };
