import { Message, MessageSender } from '../../model/message';
import { MessageTemplate } from './message-template';

interface MessageItemProps {
  message: Message;
}

const UserMessageItem = ({ message }: MessageItemProps) => (
  <MessageTemplate
    avatarSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
    avatarAlt="User"
    bubbleClassName="rounded-br-none bg-blue-200 text-blue-900"
    senderLabel="You"
    isUser
    {...message}
  />
);

const BotMessageItem = ({ message }: MessageItemProps) => (
  <MessageTemplate
    avatarSrc="https://api.dicebear.com/7.x/bottts/svg?seed=bot"
    avatarAlt="Bot"
    bubbleClassName="rounded-bl-none bg-green-100 text-green-900"
    senderLabel="Bot"
    {...message}
  />
);

export const MessageItem = ({ message }: MessageItemProps) => {
  if (message.sender === MessageSender.User) {
    return <UserMessageItem message={message} />;
  }

  return <BotMessageItem message={message} />;
};
