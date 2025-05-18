import { useState } from 'react';
import { cn } from '../lib/utils';

interface ImageProps {
  src: string | null;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const DEFAULT_IMAGE_SRC = 'https://via.placeholder.com/300';

export function Image({ src, alt, className = '', style }: ImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={cn('relative', className)} style={style}>
      {loading && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center rounded bg-gray-200">
          <div className="size-2/3 rounded bg-gray-300" />
        </div>
      )}
      <img
        src={src || DEFAULT_IMAGE_SRC}
        alt={alt}
        className={cn(
          'h-full w-auto rounded object-cover',
          loading ? 'invisible' : 'visible'
        )}
        style={style}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
