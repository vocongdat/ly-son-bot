import { User } from 'lucide-react';
import { Logo } from '@/shared/ui/logo';
import { Message, MessageSender } from '../../model/message';
import { MessageTemplate } from './message-template';

interface MessageItemProps {
  message: Message;
}

const BotAvatar = () => (
  <div className="flex size-8 items-center justify-center rounded-full bg-card shadow-soft ring-1 ring-border">
    <Logo className="size-7" />
  </div>
);

const UserAvatar = () => (
  <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-coral-600 text-white shadow-soft">
    <User className="size-[18px]" />
  </div>
);

const UserMessageItem = ({ message }: MessageItemProps) => (
  <MessageTemplate
    avatar={<UserAvatar />}
    bubbleClassName="bg-primary text-primary-foreground"
    senderLabel="Bạn"
    isUser
    content={message.content}
    type={message.type}
    timestamp={message.timestamp}
  />
);

const BotMessageItem = ({ message }: MessageItemProps) => (
  <MessageTemplate
    avatar={<BotAvatar />}
    bubbleClassName="border border-border bg-card text-card-foreground"
    senderLabel="Lý Sơn Bot"
    content={message.content}
    type={message.type}
    timestamp={message.timestamp}
  />
);

export const MessageItem = ({ message }: MessageItemProps) => {
  if (message.sender === MessageSender.User) {
    return <UserMessageItem message={message} />;
  }

  return <BotMessageItem message={message} />;
};
