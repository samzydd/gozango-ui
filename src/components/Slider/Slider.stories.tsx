import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
const meta: Meta<typeof Slider> = { title: 'Gozango/Slider', component: Slider, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Slider>;
export const Default: Story = { args: { value: 50, label: 'Volume', showValue: true } };
export const Range: Story = { args: { range: true, value: [20, 80], label: 'Price range', showValue: true } };
export const Disabled: Story = { args: { value: 40, label: 'Disabled slider', disabled: true, showValue: true } };
