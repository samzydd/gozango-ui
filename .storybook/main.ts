/**
 * @file .storybook/main.ts
 * @description Storybook build configuration.
 *
 * Sets up:
 * - Vite as the build tool (matches the project setup)
 * - Tailwind CSS via the Vite plugin (so all Tailwind classes work)
 * - Story file locations (finds all *.stories.tsx files in src/)
 * - All installed addons (a11y, docs, vitest, chromatic)
 */
import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  // Tell Storybook where to find story files
  stories: ['../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',      // Accessibility checker tab
    '@storybook/addon-vitest',    // Run tests inside Storybook
    '@chromatic-com/storybook',   // Visual regression testing
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinalConfig: async (config) => {
    // Inject the Tailwind CSS Vite plugin so all Tailwind classes compile
    config.plugins = [
      ...(config.plugins || []),
      tailwindcss(),
    ];
    return config;
  },
};

export default config;
