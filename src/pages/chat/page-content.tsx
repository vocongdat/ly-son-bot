import { useChat } from './lib/hooks/use-chat';
import MessageInput from './ui/message/input';
import MessageList from './ui/message/list';
import { TypingIndicator } from './ui/typing-indicator';

export const PageContent = () => {
  const { messages, isBotTyping, handleSendMessage } = useChat();

  return (
    <div className="relative mx-auto flex size-full max-w-3xl flex-1 flex-col overflow-hidden rounded-lg bg-gray-50 shadow-lg">
      <div className="relative flex-1 py-4 pl-4">
        <MessageList messages={messages} />
        {isBotTyping && <TypingIndicator />}
      </div>
      <div className="border-t bg-white p-2">
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};
