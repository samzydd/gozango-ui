/**
 * @file .storybook/preview.ts
 * @description Global Storybook preview configuration.
 *
 * Imports index.css which loads Tailwind v4 and all Gozango design tokens.
 * This makes every Tailwind class (bg-brand-500, text-ash-700 etc.)
 * available in every story automatically.
 */
import type { Preview } from '@storybook/react';

// This single import loads Tailwind + all Gozango color/radius tokens
import '../src/index.css';

const preview: Preview = {
  parameters: {
    // White background by default — matches the Figma canvas
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#FFFFFF' },
        { name: 'light grey', value: '#F3F4F6' },
        { name: 'dark', value: '#1E2939' },
      ],
    },
    controls: { expanded: true },
  },
};

export default preview;
