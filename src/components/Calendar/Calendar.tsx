/**
 * @file Calendar.tsx
 * @description Month-view date picker with navigation, day-cell selection,
 * and disabled/today states.
 *
 * Calendar navigation controls have aria-labels; day cells expose
 * aria-selected and aria-disabled. Use aria-live to announce month changes.
 *
 * @example
 * // Uncontrolled
 * <Calendar onSelectDate={(date) => console.log(date)} />
 *
 * // Controlled with a pre-selected date
 * <Calendar
 *   selected={new Date(2026, 5, 15)}
 *   onSelectDate={setDate}
 *   minDate={new Date()}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface CalendarProps extends BaseProps {
  /** Currently selected date (controlled) */
  selected?: Date;
  /** Fired when a day cell is clicked */
  onSelectDate?: (date: Date) => void;
  /** Dates before this are disabled */
  minDate?: Date;
  /** Dates after this are disabled */
  maxDate?: Date;
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** Compares two dates ignoring the time component */
const sameDay = (a?: Date, b?: Date) =>
  !!a && !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const Calendar: React.FC<CalendarProps> = ({
  selected,
  onSelectDate,
  minDate,
  maxDate,
  className = '',
}) => {
  // The month currently being viewed (defaults to selected or today)
  const [viewDate, setViewDate] = React.useState(selected ?? new Date());
  const today = new Date();

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // First weekday of the month and total days in month
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build the grid: leading nulls for offset, then each day number
  const cells: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const goToMonth = (offset: number) => setViewDate(new Date(year, month + offset, 1));

  // Whether a given day is outside the allowed min/max range
  const isDisabled = (day: number) => {
    const date = new Date(year, month, day);
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  return (
    <div className={['inline-block rounded-xl border border-ash-200 bg-white p-4 w-72', className].join(' ')}>
      {/* Header — month navigation */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => goToMonth(-1)}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-md text-ash-600 hover:bg-ash-100 transition-colors"
        >
          ‹
        </button>
        {/* aria-live announces the month/year when it changes */}
        <span aria-live="polite" className="text-sm font-semibold text-ash-800">
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={() => goToMonth(1)}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-md text-ash-600 hover:bg-ash-100 transition-colors"
        >
          ›
        </button>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS.map((wd) => (
          <div key={wd} className="text-center text-xs font-medium text-ash-400 py-1">
            {wd}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;

          const date = new Date(year, month, day);
          const isSelected = sameDay(date, selected);
          const isToday = sameDay(date, today);
          const disabled = isDisabled(day);

          return (
            <button
              key={day}
              disabled={disabled}
              aria-selected={isSelected}
              aria-disabled={disabled}
              aria-label={`${MONTHS[month]} ${day}, ${year}`}
              onClick={() => onSelectDate?.(date)}
              className={[
                'flex h-9 w-9 items-center justify-center rounded-md text-sm transition-colors',
                'disabled:opacity-30 disabled:pointer-events-none',
                isSelected
                  ? 'bg-meadow-600 text-white font-semibold'
                  : isToday
                  ? 'bg-ash-100 text-ash-900 font-semibold'
                  : 'text-ash-700 hover:bg-ash-100',
              ].join(' ')}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';
