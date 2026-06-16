/**
 * @file DataTable.stories.tsx
 * @description Visual stories for the DataTable component.
 * Shows sorting, row selection, custom cell rendering, and empty state.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Gozango/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Generic typed table with sortable columns, row selection, and custom cell rendering.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DataTable>;

type Campaign = { id: string; name: string; status: string; reach: number; clicks: number };

const data: Campaign[] = [
  { id: '1', name: 'Summer Sale',     status: 'Active', reach: 12400, clicks: 843 },
  { id: '2', name: 'Product Launch',  status: 'Draft',  reach: 0,     clicks: 0   },
  { id: '3', name: 'Re-engagement',   status: 'Paused', reach: 5300,  clicks: 201 },
  { id: '4', name: 'Holiday Push',    status: 'Active', reach: 8900,  clicks: 612 },
  { id: '5', name: 'Brand Awareness', status: 'Draft',  reach: 0,     clicks: 0   },
];

/** Status chip rendered inline using plain spans — no Badge import needed */
const StatusChip = ({ status }: { status: string }) => {
  const styles: Record<string, React.CSSProperties> = {
    Active: { background: '#E8FFEC', color: '#01500C', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 500 },
    Draft:  { background: '#F3F4F6', color: '#4A5565', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 500 },
    Paused: { background: '#FEF3C6', color: '#7B3306', padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 500 },
  };
  return <span style={styles[status] ?? styles.Draft}>{status}</span>;
};

/** Default table with sortable columns and a status chip renderer */
export const Default: Story = {
  render: () => (
    <DataTable<Campaign>
      data={data}
      columns={[
        { key: 'name',   header: 'Campaign', sortable: true },
        { key: 'status', header: 'Status',   render: (row) => <StatusChip status={row.status} /> },
        { key: 'reach',  header: 'Reach',    sortable: true, align: 'right' },
        { key: 'clicks', header: 'Clicks',   sortable: true, align: 'right' },
      ]}
    />
  ),
};

/** Table with checkbox row selection enabled */
export const Selectable: Story = {
  render: () => (
    <DataTable<Campaign>
      data={data}
      selectable
      columns={[
        { key: 'name',   header: 'Campaign', sortable: true },
        { key: 'status', header: 'Status',   render: (row) => <StatusChip status={row.status} /> },
        { key: 'reach',  header: 'Reach',    align: 'right' },
        { key: 'clicks', header: 'Clicks',   align: 'right' },
      ]}
      onSelectionChange={(rows) => console.log('Selected rows:', rows)}
    />
  ),
};

/** Empty state — no data to display */
export const Empty: Story = {
  render: () => (
    <DataTable<Campaign>
      data={[]}
      columns={[
        { key: 'name',   header: 'Campaign' },
        { key: 'status', header: 'Status'   },
        { key: 'reach',  header: 'Reach'    },
      ]}
    />
  ),
};
