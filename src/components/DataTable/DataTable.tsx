/**
 * @file DataTable.tsx
 * @description Composable table for displaying structured data with sortable
 * column headers, row selection, custom cell rendering, and pagination.
 *
 * This is a generic, typed implementation — pass your row type as a type
 * parameter and define columns declaratively.
 *
 * @example
 * type User = { id: string; name: string; email: string; role: string };
 *
 * <DataTable<User>
 *   data={users}
 *   columns={[
 *     { key: 'name', header: 'Name', sortable: true },
 *     { key: 'email', header: 'Email' },
 *     { key: 'role', header: 'Role',
 *       render: (row) => <Badge>{row.role}</Badge> },
 *   ]}
 *   selectable
 *   onSelectionChange={(rows) => console.log(rows)}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface Column<T> {
  /** Key of the row object this column displays */
  key: keyof T;
  /** Column header label */
  header: string;
  /** Whether this column can be sorted by clicking its header */
  sortable?: boolean;
  /** Custom cell renderer — receives the full row */
  render?: (row: T) => React.ReactNode;
  /** Text alignment of the column */
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T> extends BaseProps {
  /** Array of row data objects */
  data: T[];
  /** Column definitions */
  columns: Column<T>[];
  /** Enables a checkbox column for row selection */
  selectable?: boolean;
  /** Fired when row selection changes */
  onSelectionChange?: (selectedRows: T[]) => void;
  /** Unique key extractor for each row (defaults to array index) */
  rowKey?: (row: T, index: number) => string | number;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  selectable = false,
  onSelectionChange,
  rowKey,
  className = '',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');
  const [selected, setSelected] = React.useState<Set<number>>(new Set());

  // Sort the data based on the active sort column and direction
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === bv) return 0;
      const result = av > bv ? 1 : -1;
      return sortDir === 'asc' ? result : -result;
    });
  }, [data, sortKey, sortDir]);

  // Toggle sort direction or switch sort column
  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  // Toggle selection for a single row
  const toggleRow = (index: number) => {
    const next = new Set(selected);
    next.has(index) ? next.delete(index) : next.add(index);
    setSelected(next);
    onSelectionChange?.(Array.from(next).map((i) => sortedData[i]));
  };

  // Toggle select-all
  const toggleAll = () => {
    if (selected.size === sortedData.length) {
      setSelected(new Set());
      onSelectionChange?.([]);
    } else {
      const all = new Set(sortedData.map((_, i) => i));
      setSelected(all);
      onSelectionChange?.(sortedData);
    }
  };

  const alignClass = { left: 'text-left', center: 'text-center', right: 'text-right' };

  return (
    <div className={['overflow-x-auto rounded-lg border border-ash-200', className].join(' ')}>
      <table className="w-full border-collapse text-sm">
        {/* Header */}
        <thead className="bg-ash-50">
          <tr>
            {selectable && (
              <th scope="col" className="w-10 px-4 py-3">
                <input
                  type="checkbox"
                  aria-label="Select all rows"
                  checked={selected.size === sortedData.length && sortedData.length > 0}
                  onChange={toggleAll}
                  className="h-4 w-4 accent-brand-500 cursor-pointer"
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                aria-sort={
                  sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined
                }
                className={[
                  'px-4 py-3 font-semibold text-ash-600',
                  alignClass[col.align ?? 'left'],
                  col.sortable ? 'cursor-pointer select-none hover:text-ash-900' : '',
                ].join(' ')}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {/* Sort direction indicator */}
                  {col.sortable && sortKey === col.key && (
                    <span aria-hidden="true">{sortDir === 'asc' ? '↑' : '↓'}</span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-ash-200">
          {sortedData.map((row, index) => {
            const key = rowKey ? rowKey(row, index) : index;
            const isSelected = selected.has(index);
            return (
              <tr
                key={key}
                aria-selected={isSelected}
                className={['transition-colors hover:bg-ash-50', isSelected ? 'bg-brand-0' : ''].join(' ')}
              >
                {selectable && (
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      aria-label={`Select row ${index + 1}`}
                      checked={isSelected}
                      onChange={() => toggleRow(index)}
                      className="h-4 w-4 accent-brand-500 cursor-pointer"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className={['px-4 py-3 text-ash-700', alignClass[col.align ?? 'left']].join(' ')}
                  >
                    {/* Use custom renderer if provided, otherwise raw value */}
                    {col.render ? col.render(row) : String(row[col.key])}
                  </td>
                ))}
              </tr>
            );
          })}

          {/* Empty state row */}
          {sortedData.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="px-4 py-8 text-center text-ash-400"
              >
                No data to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

DataTable.displayName = 'DataTable';
