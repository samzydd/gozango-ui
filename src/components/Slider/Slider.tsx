/**
 * @file Slider.tsx
 * @description Range input for selecting a numeric value by dragging a thumb.
 * Supports single-thumb and dual-thumb (range) modes.
 *
 * Use for settings where relative position matters more than exact value
 * (volume, opacity, zoom). Always show the current value numerically.
 * Provide a text input alternative for precise value entry.
 *
 * @example
 * // Single thumb slider
 * <Slider value={50} min={0} max={100} onValueChange={setValue} />
 *
 * // Range slider (two thumbs)
 * <Slider range value={[20, 80]} min={0} max={100} onRangeChange={setRange} />
 *
 * // With label and value display
 * <Slider value={volume} label="Volume" showValue />
 */

import React from 'react';
import { BaseProps } from '../../types';

interface SingleSliderProps extends BaseProps {
  range?: false;
  value: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
}

interface RangeSliderProps extends BaseProps {
  range: true;
  value: [number, number];
  onRangeChange?: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
}

export type SliderProps = SingleSliderProps | RangeSliderProps;

export const Slider: React.FC<SliderProps> = (props) => {
  const { min = 0, max = 100, step = 1, label, showValue, disabled, className = '' } = props;

  if (props.range) {
    // Dual-thumb range slider
    const [low, high] = props.value;
    return (
      <div className={['flex flex-col gap-2 w-full', className].join(' ')}>
        {(label || showValue) && (
          <div className="flex justify-between">
            {label && <span className="text-sm font-medium text-stone-700">{label}</span>}
            {showValue && <span className="text-xs text-stone-500">{low} – {high}</span>}
          </div>
        )}
        <div className="relative flex items-center h-5">
          {/* Low thumb */}
          <input
            type="range" min={min} max={max} step={step}
            value={low} disabled={disabled}
            onChange={e => props.onRangeChange?.([Number(e.target.value), high])}
            aria-label={`${label ?? 'Range'} minimum`}
            aria-valuemin={min} aria-valuemax={max} aria-valuenow={low}
            className="absolute w-full accent-brand-500 cursor-pointer disabled:opacity-50"
          />
          {/* High thumb */}
          <input
            type="range" min={min} max={max} step={step}
            value={high} disabled={disabled}
            onChange={e => props.onRangeChange?.([low, Number(e.target.value)])}
            aria-label={`${label ?? 'Range'} maximum`}
            aria-valuemin={min} aria-valuemax={max} aria-valuenow={high}
            className="absolute w-full accent-brand-500 cursor-pointer disabled:opacity-50"
          />
        </div>
      </div>
    );
  }

  // Single-thumb slider
  return (
    <div className={['flex flex-col gap-2 w-full', className].join(' ')}>
      {(label || showValue) && (
        <div className="flex justify-between">
          {label && <span className="text-sm font-medium text-stone-700">{label}</span>}
          {showValue && <span className="text-xs text-stone-500">{props.value}</span>}
        </div>
      )}
      <input
        type="range" min={min} max={max} step={step}
        value={props.value} disabled={disabled}
        onChange={e => props.onValueChange?.(Number(e.target.value))}
        aria-label={label}
        aria-valuemin={min} aria-valuemax={max} aria-valuenow={props.value}
        className="w-full accent-brand-500 cursor-pointer disabled:opacity-50"
      />
    </div>
  );
};

Slider.displayName = 'Slider';
