# Gozango UI

A complete React component library for the **Gozango Design System**, built with TypeScript and Tailwind CSS. All colors, spacing, and radius values are pulled directly from the Gozango Figma variable collections.

---

## Components (29)

### Actions & Inputs
`Button` · `Input` · `Textarea` · `Checkbox` · `RadioGroup` · `Switch` · `Slider` · `Upload` · `Calendar`

### Display & Feedback
`Avatar` + `AvatarGroup` · `Badge` · `Alert` · `Banner` · `Toast` · `Tooltip` · `Progress` · `EmptyState`

### Overlays
`AlertDialog` · `PopupModal` · `Overlay`

### Navigation & Layout
`Header` · `Sidebar` (+ sub-components) · `Breadcrumb` · `Tabs` · `Separator` · `Card` (+ sub-components) · `Dropdown` (+ sub-components) · `DataTable`

---

## Installation

```bash
npm install gozango-ui
npm install react react-dom         # peer dependencies
npm install -D tailwindcss          # for styling
```

Add the library to your `tailwind.config.js` content array:

```js
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/gozango-ui/src/**/*.{ts,tsx}',
  ],
};
```

---

## Usage

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from 'gozango-ui';

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <Input label="Email" placeholder="you@example.com" />
        <Button variant="default" className="mt-4">Continue</Button>
      </CardContent>
    </Card>
  );
}
```

### Compound components

Several components use the compound pattern for flexibility:

```tsx
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from 'gozango-ui';

<Dropdown>
  <DropdownTrigger><button>Menu ▾</button></DropdownTrigger>
  <DropdownMenu>
    <DropdownItem onSelect={...}>Profile</DropdownItem>
    <DropdownItem destructive onSelect={...}>Log out</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Generic DataTable

```tsx
import { DataTable } from 'gozango-ui';

type User = { id: string; name: string; role: string };

<DataTable<User>
  data={users}
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'role', header: 'Role' },
  ]}
  selectable
/>
```

---

## Design Tokens

Tokens map 1:1 to the Gozango Figma variables, exported as typed objects:

```ts
import { colors, spacing, radius, semantic } from 'gozango-ui/tokens';

colors.brand[500]        // '#00D123'
colors.ocean[600]        // '#155DFC'
semantic.text.default    // '#1E2939'
spacing[4]               // '16px'
radius.lg                // '8px'
```

**19 full color ramps** are available: brand, mist, ash, stone, crimson, ember, gold, sunbeam, zest, meadow, jade, lagoon, azure, ocean, dusk, iris, plum, magenta, blush, petal — each as a Tailwind color (e.g. `bg-ocean-500`, `text-jade-700`).

---

## License

MIT © samzydd
