import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { Badge } from './Badge';

const meta: Meta<typeof DataTable> = { title: 'Gozango/DataTable', component: DataTable, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DataTable>;

type Campaign = { id: string; name: string; status: string; reach: number; clicks: number };
const data: Campaign[] = [
  { id: '1', name: 'Summer Sale', status: 'Active', reach: 12400, clicks: 843 },
  { id: '2', name: 'Product Launch', status: 'Draft', reach: 0, clicks: 0 },
  { id: '3', name: 'Re-engagement', status: 'Paused', reach: 5300, clicks: 201 },
  { id: '4', name: 'Holiday Push', status: 'Active', reach: 8900, clicks: 612 },
];

const statusColor: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
  Active: 'default', Draft: 'secondary', Paused: 'outline',
};

export const Default: Story = {
  render: () => (
    <DataTable<Campaign>
      data={data}
      columns={[
        { key: 'name', header: 'Campaign', sortable: true },
        { key: 'status', header: 'Status', render: (row) => <Badge variant={statusColor[row.status]}>{row.status}</Badge> },
        { key: 'reach', header: 'Reach', sortable: true, align: 'right' },
        { key: 'clicks', header: 'Clicks', sortable: true, align: 'right' },
      ]}
    />
  ),
};
export const Selectable: Story = {
  render: () => (
    <DataTable<Campaign>
      data={data}
      selectable
      columns={[
        { key: 'name', header: 'Campaign', sortable: true },
        { key: 'status', header: 'Status' },
        { key: 'reach', header: 'Reach', align: 'right' },
      ]}
      onSelectionChange={(rows) => console.log('Selected:', rows)}
    />
  ),
};
export const Empty: Story = {
  render: () => (
    <DataTable<Campaign>
      data={[]}
      columns={[{ key: 'name', header: 'Campaign' }, { key: 'status', header: 'Status' }]}
    />
  ),
};
