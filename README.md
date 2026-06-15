# Gozango UI

A React component library for the **Gozango Design System**, built with TypeScript and Tailwind CSS.

---

## Components

| Component | Description |
|-----------|-------------|
| `Alert` | Inline contextual feedback messages |
| `Avatar` + `AvatarGroup` | User profile images with fallback states |
| `Badge` | Compact status labels and counts |
| `Banner` | Full-width announcement strips |
| `Breadcrumb` | Hierarchical path indicator |
| `Button` | Primary interaction element — 6 variants, 4 sizes |
| `Checkbox` | Single and group selection controls |
| `EmptyState` | Placeholder UI for empty content areas |
| `Input` | Text and file input fields |
| `Overlay` | Scrim layer for modals and drawers |
| `Progress` | Linear progress bar |
| `RadioGroup` | Single-select radio button group |
| `Separator` | Horizontal and vertical divider lines |
| `Slider` | Single and range value selector |
| `Switch` | Binary on/off toggle |
| `Tabs` | Horizontal tab navigation |
| `Textarea` | Multi-line text input |
| `Toast` | Auto-dismissing notification snackbar |
| `Tooltip` | Contextual hover hint label |

---

## Installation

```bash
npm install gozango-ui
```

Install peer dependencies if not already in your project:

```bash
npm install react react-dom
npm install -D tailwindcss
```

Add the library to your `tailwind.config.js` content array so Tailwind picks up the classes:

```js
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/gozango-ui/src/**/*.{ts,tsx}', // ← add this
  ],
};
```

---

## Usage

```tsx
import { Button, Input, Badge, Toast } from 'gozango-ui';

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Badge variant="default">New</Badge>

      <Input
        label="Email address"
        placeholder="you@example.com"
        helpText="We'll never share your email."
      />

      <Button variant="default" size="default">
        Save changes
      </Button>
    </div>
  );
}
```

---

## Design Tokens

Tokens are exported separately and map directly to the Gozango Figma variable collections:

```ts
import { colors, spacing, radius } from 'gozango-ui/tokens';

console.log(colors.brand[500]);  // '#00D123'
console.log(spacing[4]);          // '16px'
console.log(radius.lg);           // '8px'
```

---

## Figma Design System

All components are built from the **Gozango Design System** Figma file.  
The props, variants, and states in this library map 1:1 to the Figma component properties.

---

## License

MIT © samzydd
