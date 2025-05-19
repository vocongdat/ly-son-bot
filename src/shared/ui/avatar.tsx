import { cn } from '@/shared/lib/utils';
import { Image } from '@/shared/ui/image';

interface AvatarProps {
  avatarSrc: string;
  avatarAlt: string;
  className?: string;
}

export default function Avatar({
  avatarSrc,
  avatarAlt,
  className,
}: AvatarProps) {
  return (
    <Image
      src={avatarSrc}
      alt={avatarAlt}
      className={cn('size-8 rounded-full', className)}
    />
  );
}
export type { AvatarProps };
