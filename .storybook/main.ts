/**
 * @file .storybook/main.ts
 * @description Storybook build configuration for Tailwind CSS v4.
 *
 * Key difference from v3: Tailwind v4 uses a Vite plugin instead of
 * PostCSS, and all tokens are defined in index.css @theme instead of
 * tailwind.config.js.
 */
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  // Find all story files inside the src folder
  stories: ['../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // Inject the Tailwind v4 Vite plugin into Storybook's Vite build
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
    });
  },
};

export default config;
