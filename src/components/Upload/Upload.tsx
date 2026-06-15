/**
 * @file Upload.tsx
 * @description File upload dropzone with drag-and-drop support. Covers the
 * full upload journey: empty state, drag-over, and uploaded file list with
 * remove controls.
 *
 * Specify accepted file types and max size in the helper text.
 * Convey file errors in text, not color alone.
 *
 * @example
 * <Upload
 *   accept="image/*"
 *   helperText="PNG or JPG, up to 5MB"
 *   onFilesSelected={(files) => console.log(files)}
 * />
 */

import React from 'react';
import { BaseProps } from '../../types';

export interface UploadProps extends BaseProps {
  /** Accepted file types (passed to the file input's accept attribute) */
  accept?: string;
  /** Whether multiple files can be selected. Defaults to true */
  multiple?: boolean;
  /** Helper text describing accepted types / size limits */
  helperText?: string;
  /** Fired with the selected/dropped FileList */
  onFilesSelected?: (files: File[]) => void;
}

export const Upload: React.FC<UploadProps> = ({
  accept,
  multiple = true,
  helperText,
  onFilesSelected,
  className = '',
}) => {
  const [dragOver, setDragOver] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Add newly selected files to state and notify parent
  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list);
    setFiles((prev) => [...prev, ...next]);
    onFilesSelected?.(next);
  };

  // Remove a file from the local list by index
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={['flex flex-col gap-3', className].join(' ')}>
      {/* Dropzone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        className={[
          'flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 cursor-pointer transition-colors',
          dragOver ? 'border-brand-500 bg-brand-0' : 'border-ash-300 bg-ash-50 hover:bg-ash-100',
        ].join(' ')}
      >
        <span className="text-2xl" aria-hidden="true">↑</span>
        <p className="text-sm font-medium text-ash-700">
          {dragOver ? 'Drop files here' : 'Click to upload or drag and drop'}
        </p>
        {helperText && <p className="text-xs text-ash-400">{helperText}</p>}

        {/* Hidden native file input */}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          aria-label="File upload"
        />
      </div>

      {/* Uploaded file list */}
      {files.length > 0 && (
        <ul className="flex flex-col gap-2" aria-live="polite">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between rounded-lg border border-ash-200 bg-white px-3 py-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span aria-hidden="true">📄</span>
                <span className="truncate text-sm text-ash-700">{file.name}</span>
                <span className="shrink-0 text-xs text-ash-400">
                  {(file.size / 1024).toFixed(0)} KB
                </span>
              </div>
              <button
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="shrink-0 text-ash-400 hover:text-crimson-600 transition-colors"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Upload.displayName = 'Upload';
