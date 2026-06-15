/**
 * @file tokens.ts
 * @description Design tokens for the Gozango UI component library.
 *
 * These values are pulled DIRECTLY from the Gozango Figma design system
 * variable collections (Spacing, Radius, Color Token) and resolved to their
 * raw values. They are the single source of truth shared with Figma.
 *
 * Usage:
 *   import { spacing, radius, colors, semantic } from 'gozango-ui/tokens';
 */

// ─── Spacing ────────────────────────────────────────────────────────────────
// Maps 1:1 to the "Spacing" variable collection in Figma. 4px base unit.
export const spacing = {
  0:    '0px',
  px:   '1px',
  0.5:  '2px',
  1:    '4px',
  1.5:  '6px',
  2:    '8px',
  2.5:  '10px',
  3:    '12px',
  3.5:  '14px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  7:    '28px',
  8:    '32px',
  9:    '36px',
  10:   '40px',
  11:   '44px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
  28:   '112px',
  32:   '128px',
  36:   '144px',
  40:   '160px',
  44:   '176px',
  48:   '192px',
  52:   '208px',
  56:   '224px',
  60:   '240px',
  64:   '256px',
  72:   '288px',
  80:   '320px',
  96:   '384px',
} as const;

// ─── Radius ─────────────────────────────────────────────────────────────────
// Maps 1:1 to the "Radius" variable collection in Figma.
export const radius = {
  none:  '0px',
  xs:    '2px',
  sm:    '4px',
  md:    '6px',
  lg:    '8px',
  xl:    '12px',
  '2xl': '16px',
  '3xl': '24px',
  '4xl': '32px',
  full:  '9999px',
} as const;

// ─── Primitive Colors ─────────────────────────────────────────────────────────
// Full color ramps resolved from the Figma "Color Token" primitives.
// Family names match the semantic primitive names used in Figma.
export const colors = {
  // Brand green — primary action color
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

  // Accent colors
  accent: {
    yellow: '#FED33F',
    orange: '#FF9900',
    pink:   '#FF7A98',
  },

  // Base
  base: {
    white:       '#FFFFFF',
    black:       '#000000',
    destructive: '#FF6467',
  },

  // mist — cool blue-grey (was "slate")
  mist: {
    50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0', 300: '#CAD5E2',
    400: '#90A1B9', 500: '#62748E', 600: '#45556C', 700: '#314158',
    800: '#1D293D', 900: '#0F172B', 950: '#020618',
  },

  // ash — neutral grey (was "grey")
  ash: {
    50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DC',
    400: '#99A1AF', 500: '#6A7282', 600: '#4A5565', 700: '#364153',
    800: '#1E2939', 900: '#101828', 950: '#030712',
  },

  // stone — warm neutral grey (was "neutral")
  stone: {
    50: '#FAFAFA', 100: '#F5F5F5', 200: '#E6E6E6', 300: '#D4D4D4',
    400: '#A1A1A1', 500: '#737373', 600: '#525252', 700: '#404040',
    800: '#262626', 900: '#171717', 950: '#0A0A0A',
  },

  // crimson — red (was "red")
  crimson: {
    50: '#FEF2F2', 100: '#FFE2E2', 200: '#FFC9C9', 300: '#FFA2A2',
    400: '#FF6467', 500: '#FB2C36', 600: '#E7000B', 700: '#C10007',
    800: '#9F0712', 900: '#82181A', 950: '#460809',
  },

  // ember — orange
  ember: {
    50: '#FFF7ED', 100: '#FFEDD4', 200: '#FFD6A8', 300: '#FFB86A',
    400: '#FF8904', 500: '#FF6900', 600: '#F54A00', 700: '#CA3500',
    800: '#9F2D00', 900: '#7E2A0C', 950: '#441306',
  },

  // gold — amber
  gold: {
    50: '#FFFBEB', 100: '#FEF3C6', 200: '#FEE685', 300: '#FFD230',
    400: '#FFBA00', 500: '#FD9A00', 600: '#E17100', 700: '#BB4D00',
    800: '#973C00', 900: '#7B3306', 950: '#461901',
  },

  // sunbeam — yellow
  sunbeam: {
    50: '#FEFCE8', 100: '#FEF9C2', 200: '#FFF085', 300: '#FFDF20',
    400: '#FCC800', 500: '#EFB100', 600: '#D08700', 700: '#A65F00',
    800: '#894B00', 900: '#733E0A', 950: '#432004',
  },

  // zest — lime
  zest: {
    50: '#F7FEE7', 100: '#ECFCCA', 200: '#D8F999', 300: '#BBF451',
    400: '#9AE600', 500: '#7CCF00', 600: '#5EA500', 700: '#497D00',
    800: '#3D6300', 900: '#35530E', 950: '#192E03',
  },

  // meadow — green
  meadow: {
    50: '#F0FDF4', 100: '#DCFCE7', 200: '#B9F8CF', 300: '#7BF1A8',
    400: '#05DF72', 500: '#00C951', 600: '#00A63E', 700: '#008236',
    800: '#016630', 900: '#0D542B', 950: '#052E16',
  },

  // jade — emerald
  jade: {
    50: '#ECFDF5', 100: '#D0FAE5', 200: '#A4F4CF', 300: '#5EE9B5',
    400: '#00D492', 500: '#00BC7D', 600: '#009966', 700: '#007A55',
    800: '#006045', 900: '#004F3B', 950: '#002C22',
  },

  // lagoon — cyan
  lagoon: {
    50: '#ECFEFF', 100: '#CEFAFE', 200: '#A2F4FD', 300: '#53EAFD',
    400: '#00D3F2', 500: '#00B8DB', 600: '#0092B8', 700: '#007595',
    800: '#005F78', 900: '#104E64', 950: '#053345',
  },

  // azure — sky
  azure: {
    50: '#F0F9FF', 100: '#DFF2FE', 200: '#B8E6FE', 300: '#74D4FF',
    400: '#00BCFF', 500: '#00A6F4', 600: '#0084D1', 700: '#0069A8',
    800: '#00598A', 900: '#024A70', 950: '#052F4A',
  },

  // ocean — blue
  ocean: {
    50: '#EFF6FF', 100: '#DBEAFE', 200: '#BEDBFF', 300: '#8EC5FF',
    400: '#51A2FF', 500: '#2B7FFF', 600: '#155DFC', 700: '#1447E6',
    800: '#193CB8', 900: '#1C398E', 950: '#162456',
  },

  // dusk — indigo
  dusk: {
    50: '#EEF2FF', 100: '#E0E7FF', 200: '#C6D2FF', 300: '#A3B3FF',
    400: '#7C86FF', 500: '#615FFF', 600: '#4F39F6', 700: '#432DD7',
    800: '#372AAC', 900: '#312C85', 950: '#1E1A4D',
  },

  // iris — violet
  iris: {
    50: '#F5F3FF', 100: '#EDE9FE', 200: '#DDD6FF', 300: '#C4B4FF',
    400: '#A684FF', 500: '#8E51FF', 600: '#7F22FE', 700: '#7008E7',
    800: '#5D0EC0', 900: '#4D179A', 950: '#2F0D68',
  },

  // plum — purple
  plum: {
    50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D4FF', 300: '#DAB2FF',
    400: '#C27AFF', 500: '#AD46FF', 600: '#9810FA', 700: '#8200DB',
    800: '#6E11B0', 900: '#59168B', 950: '#3C0366',
  },

  // magenta — fuchsia
  magenta: {
    50: '#FDF4FF', 100: '#FAE8FF', 200: '#F6CFFF', 300: '#F4A8FF',
    400: '#ED6BFF', 500: '#E12AFB', 600: '#C800DE', 800: '#8A0194',
    900: '#721378', 950: '#4B004F',
  },

  // blush — pink
  blush: {
    50: '#FDF2F8', 100: '#FCE7F3', 200: '#FCCEE8', 300: '#FDA5D5',
    400: '#FB64B6', 500: '#F6339A', 600: '#E60076', 700: '#C6005C',
    800: '#A3004C', 900: '#861043', 950: '#510424',
  },

  // petal — rose
  petal: {
    50: '#FFF1F2', 100: '#FFE4E6', 200: '#FFCCD3', 300: '#FFA1AD',
    400: '#FF637E', 500: '#FF2056', 600: '#EC003F', 700: '#C70036',
    800: '#A50036', 900: '#8B0836', 950: '#4D0218',
  },
} as const;

// ─── Semantic Colors ────────────────────────────────────────────────────────
// Role-based tokens that reference the primitives above. These are what
// components actually use — text, background, border, and icon by intent.
export const semantic = {
  text: {
    default:   '#1E2939',
    secondary: '#6A7282',
    tertiary:  '#FFFFFF',
    disabled:  '#99A1AF',
    danger:    '#FB2C36',
    positive:  '#016630',
    warning:   '#7B3306',
  },
  background: {
    default:      '#F3F4F6',
    defaultHover: '#E5E7EB',
    secondary:    '#F9FAFB',
    tertiary:     '#FFFFFF',
    brand:        '#00AD42',
    brandHover:   '#00C24A',
    positive:     '#00A63E',
    warning:      '#FFBA00',
    danger:       '#FB2C36',
    disabled:     '#D4D4D4',
    overlay:      'rgba(15, 23, 43, 0.15)',
  },
  border: {
    default:   '#E5E7EB',
    secondary: '#F3F4F6',
    brand:     '#00AD42',
    positive:  '#016630',
    warning:   '#FEE685',
    danger:    '#FF6467',
  },
  icon: {
    default:   '#1E2939',
    secondary: '#99A1AF',
    brand:     '#00A31B',
    positive:  '#016630',
    warning:   '#7B3306',
    danger:    '#FB2C36',
    disabled:  '#C10007',
  },
} as const;
