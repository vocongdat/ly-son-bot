import { cn } from '@/shared/lib/utils';
import { Image } from '@/shared/ui/image';
import { MessageType } from '../../model/message';
import Avatar, { AvatarProps } from '@/shared/ui/avatar';

interface MessageTemplateProps extends Omit<AvatarProps, 'className'> {
  avatarSrc: string;
  avatarAlt: string;
  content: string;
  senderLabel: string;
  timestamp: number | string;
  type: MessageType;
  isUser?: boolean;
  bubbleClassName?: string;
  avatarClassName?: string;
}

const MessageTemplate = ({
  avatarSrc,
  avatarAlt,
  isUser = false,
  senderLabel,
  content,
  type,
  timestamp,
  avatarClassName,
  bubbleClassName,
}: MessageTemplateProps) => {
  const isTypeText = type === MessageType.Text;
  return (
    <div
      className={cn('flex items-end gap-2', {
        'flex-row-reverse': isUser,
      })}
    >
      <Avatar
        avatarSrc={avatarSrc}
        avatarAlt={avatarAlt}
        className={avatarClassName}
      />
      <div
        className={cn(
          'mb-3 max-w-xs space-y-1 rounded-lg px-3 py-2 shadow',
          {
            'min-w-40': isTypeText,
          },
          bubbleClassName
        )}
      >
        <div className="text-sm font-semibold">{senderLabel}</div>
        {isTypeText ? (
          <div className="text-lg">{content}</div>
        ) : (
          <Image
            src={content}
            alt="User upload"
            className="h-28 max-w-44 rounded"
          />
        )}
        <div className="text-right text-xs text-gray-600">
          {new Date(timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export { MessageTemplate };
export type { MessageTemplateProps };
