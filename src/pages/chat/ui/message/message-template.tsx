import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';
import { Image } from '@/shared/ui/image';
import { MessageType } from '../../model/message';

interface MessageTemplateProps {
  avatar: ReactNode;
  content: string;
  senderLabel: string;
  timestamp: number | string;
  type: MessageType;
  isUser?: boolean;
  bubbleClassName?: string;
}

const formatTime = (timestamp: number | string) =>
  new Date(timestamp).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
  });

const MessageTemplate = ({
  avatar,
  isUser = false,
  senderLabel,
  content,
  type,
  timestamp,
  bubbleClassName,
}: MessageTemplateProps) => {
  const isTypeText = type === MessageType.Text;

  return (
    <div
      className={cn('flex items-end gap-2.5', {
        'flex-row-reverse': isUser,
      })}
    >
      <div className="mb-1 shrink-0">{avatar}</div>

      <div
        className={cn(
          'mb-3 max-w-[min(78%,22rem)] space-y-1.5 rounded-2xl px-4 py-2.5 shadow-soft',
          isUser ? 'rounded-br-md' : 'rounded-bl-md',
          {
            'min-w-32': isTypeText,
          },
          bubbleClassName
        )}
      >
        <div className="text-[0.7rem] font-semibold uppercase tracking-wide opacity-70">
          {senderLabel}
        </div>

        {isTypeText ? (
          <p className="whitespace-pre-wrap break-words text-[0.95rem] leading-relaxed">
            {content}
          </p>
        ) : (
          <Image
            src={content}
            alt="Hình ảnh"
            className="h-36 max-w-52 overflow-hidden rounded-xl"
          />
        )}

        <div
          className={cn(
            'text-right text-[0.65rem] tabular-nums opacity-60',
            isUser ? 'text-primary-foreground' : 'text-muted-foreground'
          )}
        >
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
};

export { MessageTemplate };
export type { MessageTemplateProps };
