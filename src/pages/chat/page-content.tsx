import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Logo } from '@/shared/ui/logo';
import { useChat } from './lib/hooks/use-chat';
import { MessageSender, MessageType } from './model/message';
import MessageInput from './ui/message/input';
import MessageList from './ui/message/list';
import { EmptyState } from './ui/empty-state';
import { TypingIndicator } from './ui/typing-indicator';

export const PageContent = () => {
  const { messages, isBotTyping, handleSendMessage, handleClearMessages } =
    useChat();

  const hasMessages = messages.length > 0;

  const handleClear = () => {
    handleClearMessages();
    toast.success('Đã xoá cuộc trò chuyện');
  };

  const handleSuggestion = (content: string) => {
    handleSendMessage({
      sender: MessageSender.User,
      type: MessageType.Text,
      content,
    });
  };

  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col overflow-hidden px-3 pb-3 sm:px-4 sm:pb-5">
      <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-card/80 shadow-elevated backdrop-blur-xl">
        {/* Conversation header */}
        <div className="flex items-center gap-3 border-b border-border bg-card/60 px-4 py-3 sm:px-5">
          <div className="relative">
            <Logo className="size-9" />
            <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-emerald-500 ring-2 ring-card" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">Lý Sơn Bot</p>
            <p className="text-xs text-muted-foreground">
              {isBotTyping ? 'Đang soạn tin…' : 'Trợ lý du lịch · Trực tuyến'}
            </p>
          </div>
          {hasMessages && (
            <button
              type="button"
              onClick={handleClear}
              title="Xoá cuộc trò chuyện"
              aria-label="Xoá cuộc trò chuyện"
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-coral-500/10 hover:text-coral-500"
            >
              <Trash2 className="size-[18px]" />
            </button>
          )}
        </div>

        {/* Messages */}
        <div className="relative flex flex-1 flex-col overflow-hidden">
          {hasMessages ? (
            <div className="relative flex-1 py-4 pl-4">
              <MessageList messages={messages} />
            </div>
          ) : (
            <EmptyState onPick={handleSuggestion} />
          )}
          {isBotTyping && <TypingIndicator />}
        </div>

        {/* Composer */}
        <div className="border-t border-border bg-card/60 p-3">
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};
