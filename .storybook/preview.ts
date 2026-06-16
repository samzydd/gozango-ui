/**
 * @file .storybook/preview.ts
 * @description Global Storybook configuration.
 *
 * Runs before every story. Imports Tailwind CSS so all component
 * classes (bg-brand-500, text-ash-700 etc.) render correctly,
 * and loads the Inter font to match the Figma typography.
 */
import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'grey',  value: '#F3F4F6' },
        { name: 'dark',  value: '#1E2939' },
      ],
    },
    controls: {
      expanded: true,
    },
  },
};

export default preview;
