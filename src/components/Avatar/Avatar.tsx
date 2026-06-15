/**
 * @file Avatar.tsx
 * @description Displays a user's profile image, initials fallback, or icon.
 *
 * Use Image type when a photo URL is available.
 * Use Fallback type (initials) when no photo exists.
 * Use Icon type for generic or non-user entity representations.
 * Prefer Circle shape for people, RoundedRectangle for brands/bots.
 *
 * @example
 * // Image avatar
 * <Avatar src="https://example.com/photo.jpg" alt="Sam Z" size="md" />
 *
 * // Fallback with initials
 * <Avatar fallback="SZ" size="lg" />
 *
 * // Group of avatars
 * <AvatarGroup avatars={[{ src: '...', alt: 'User 1' }]} size="sm" />
 */

import React from 'react';
import { BaseProps } from '../../types';

type AvatarSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg';
type AvatarShape = 'circle' | 'rounded';

export interface AvatarProps extends BaseProps {
  /** URL of the profile image */
  src?: string;
  /** Alt text for the image (required for accessibility when src is set) */
  alt?: string;
  /** 1–2 character fallback text shown when no src is provided */
  fallback?: string;
  /** Icon element shown when type is "icon" */
  icon?: React.ReactNode;
  /** Size of the avatar. Defaults to "md" */
  size?: AvatarSize;
  /** Shape of the avatar. Defaults to "circle" */
  shape?: AvatarShape;
}

const sizeClasses: Record<AvatarSize, string> = {
  '2xs': 'h-5 w-5 text-[8px]',
  xs:    'h-6 w-6 text-[10px]',
  sm:    'h-8 w-8 text-xs',
  md:    'h-10 w-10 text-sm',
  lg:    'h-12 w-12 text-base',
};

const shapeClasses: Record<AvatarShape, string> = {
  circle:  'rounded-full',
  rounded: 'rounded-lg',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  fallback,
  icon,
  size = 'md',
  shape = 'circle',
  className = '',
}) => (
  <span
    className={[
      'relative inline-flex shrink-0 items-center justify-center overflow-hidden',
      'bg-stone-100 font-medium text-stone-600 select-none',
      sizeClasses[size],
      shapeClasses[shape],
      className,
    ].join(' ')}
  >
    {src ? (
      /* Image type — renders profile photo */
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : icon ? (
      /* Icon type — renders a generic icon */
      <span aria-hidden="true">{icon}</span>
    ) : (
      /* Fallback type — renders initials */
      <span aria-label={alt}>{fallback}</span>
    )}
  </span>
);

Avatar.displayName = 'Avatar';

// ─── Avatar Group ─────────────────────────────────────────────────────────────

/**
 * @description Renders a horizontally overlapping stack of Avatar components.
 * Use to represent multiple users in a compact space.
 *
 * @example
 * <AvatarGroup
 *   avatars={[
 *     { src: '/user1.jpg', alt: 'Alice' },
 *     { src: '/user2.jpg', alt: 'Bob' },
 *     { fallback: 'CK', alt: 'Carol K' },
 *   ]}
 *   max={3}
 *   size="sm"
 * />
 */
export interface AvatarGroupProps extends BaseProps {
  /** Array of avatar data to display */
  avatars: Pick<AvatarProps, 'src' | 'alt' | 'fallback' | 'icon'>[];
  /** Maximum number of avatars to show before a +N overflow indicator */
  max?: number;
  /** Shared size applied to all avatars in the group */
  size?: AvatarSize;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  size = 'sm',
  className = '',
}) => {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div className={['flex -space-x-2', className].join(' ')}>
      {visible.map((avatar, i) => (
        <Avatar
          key={i}
          {...avatar}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {/* Show +N badge when there are more avatars than the max */}
      {overflow > 0 && (
        <span
          className={[
            'inline-flex shrink-0 items-center justify-center rounded-full',
            'bg-stone-200 text-stone-600 font-medium ring-2 ring-white',
            sizeClasses[size],
          ].join(' ')}
          aria-label={`${overflow} more`}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
