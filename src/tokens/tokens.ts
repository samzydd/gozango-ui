/**
 * @file tokens.ts
 * @description Design tokens for the Gozango UI component library.
 * These values are derived directly from the Gozango Figma design system variables
 * (Spacing, Radius, and Color Token collections).
 *
 * Usage:
 *   import { spacing, radius, colors } from '@/tokens/tokens';
 */

// ─── Spacing ────────────────────────────────────────────────────────────────
// Maps to the "Spacing" variable collection in Figma.
// Scale follows a 4px base unit.
export const spacing = {
  0:   '0px',
  px:  '1px',
  0.5: '2px',
  1:   '4px',
  1.5: '6px',
  2:   '8px',
  2.5: '10px',
  3:   '12px',
  3.5: '14px',
  4:   '16px',
  5:   '20px',
  6:   '24px',
  7:   '28px',
  8:   '32px',
  9:   '36px',
  10:  '40px',
  11:  '44px',
  12:  '48px',
  14:  '56px',
  16:  '64px',
  20:  '80px',
  24:  '96px',
  28:  '112px',
  32:  '128px',
  36:  '144px',
  40:  '160px',
} as const;

// ─── Radius ─────────────────────────────────────────────────────────────────
// Maps to the "Radius" variable collection in Figma.
export const radius = {
  none: '0px',
  xs:   '2px',
  sm:   '4px',
  md:   '6px',
  lg:   '8px',
  xl:   '12px',
  '2xl':'16px',
  '3xl':'24px',
  '4xl':'32px',
  full: '9999px',
} as const;

// ─── Colors ──────────────────────────────────────────────────────────────────
// Maps to the "Color Token" collection in Figma.
// Semantic tokens (text, background, border, icon) reference these values.
export const colors = {
  // Brand
  brand: {
    0:   '#F5F8F5',
    100: '#E8FFEC',
    200: '#CCFFC7',
    300: '#7BE971',
    400: '#56F270',
    500: '#00D123',
    600: '#00A31B',
    700: '#01500C',
    900: '#022906',
  },

  // Accent
  accent: {
    yellow: '#FED33F',
    orange: '#FF9900',
    pink:   '#FF7A98',
  },

  // Base
  base: {
    white: '#FFFFFF',
    black: '#000000',
  },

  // Neutral (stone)
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

  // Mist (slate)
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

  // Crimson (red)
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

  // Semantic — text
  text: {
    default:   '#262626',   // stone/800
    secondary: '#737373',   // stone/500
    tertiary:  '#FFFFFF',   // base/white
    disabled:  '#A1A1A1',   // stone/400
    danger:    '#EF4444',   // crimson/500
  },

  // Semantic — background
  background: {
    default:        '#F5F5F5',  // stone/100
    defaultHover:   '#E6E6E6',  // stone/200
    secondary:      '#FAFAFA',  // stone/50
    brand:          '#00AD42',
    brandHover:     '#00C24A',
    overlay:        'rgba(15, 23, 43, 0.15)',
  },

  // Semantic — border
  border: {
    default:   '#E6E6E6',  // stone/200
    secondary: '#F5F5F5',  // stone/100
    tertiary:  '#FAFAFA',  // stone/50
    brand:     '#00AD42',
  },
} as const;
