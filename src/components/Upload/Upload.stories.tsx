import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from './Upload';
const meta: Meta<typeof Upload> = { title: 'Gozango/Upload', component: Upload, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Upload>;
export const Default: Story = { args: { helperText: 'PNG, JPG or PDF up to 10MB', accept: 'image/*,.pdf' } };
export const ImagesOnly: Story = { args: { helperText: 'PNG or JPG only, max 5MB', accept: 'image/*' } };
export const SingleFile: Story = { args: { multiple: false, helperText: 'Upload one file at a time' } };
