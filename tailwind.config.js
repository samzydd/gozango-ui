/**
 * @file tailwind.config.js
 * @description Tailwind CSS configuration extended with Gozango design tokens.
 * The color palette maps directly to the Gozango Figma variable collections.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand green — primary action color
        brand: {
          50:  '#F5F8F5',
          100: '#E8FFEC',
          200: '#CCFFC7',
          300: '#7BE971',
          400: '#56F270',
          500: '#00D123',  // Primary brand
          600: '#00A31B',
          700: '#01500C',
          900: '#022906',
        },
        // Stone — neutral grey palette (maps to Figma "neutral" tokens)
        stone: {
          50:  '#FAFAFA',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#D4D4D4',
          400: '#A1A1A1',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Crimson — destructive / error states (maps to Figma "crimson" tokens)
        crimson: {
          50:  '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        // Mist — cool blue-grey (maps to Figma "mist" tokens)
        mist: {
          50:  '#F8FAFB',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      borderRadius: {
        // Maps to Figma Radius variable collection
        xs:   '2px',
        sm:   '4px',
        md:   '6px',
        lg:   '8px',
        xl:   '12px',
        '2xl':'16px',
        '3xl':'24px',
        '4xl':'32px',
      },
    },
  },
  plugins: [],
};
