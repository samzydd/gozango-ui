/**
 * @file .storybook/preview.ts
 * @description Global Storybook configuration.
 *
 * This file runs before every story. It:
 * 1. Imports your Tailwind CSS so all components are styled correctly
 * 2. Loads the Inter font from Google Fonts (matches your Figma design)
 * 3. Sets default layout and background for all stories
 */
import type { Preview } from '@storybook/react';

// ── Import Tailwind CSS ──────────────────────────────────────────────────────
// This is what makes bg-brand-500, text-ash-700 etc. actually work in Storybook
import '../src/index.css';

const preview: Preview = {
  parameters: {
    // Sets a clean white background for all stories (matches Figma canvas)
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'grey',  value: '#F3F4F6' },
        { name: 'dark',  value: '#1E2939' },
      ],
    },
    // Controls panel layout
    controls: {
      maturity: 'experimental',
      expanded: true,
    },
  },
};

export default preview;
