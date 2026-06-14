import { Image as ImageIcon, Send as SendIcon, MapPin } from 'lucide-react';
import { MessageSender, MessageType } from '../../model/message';
import { useAction } from '../../lib/hooks/use-action';
import { ImagePreviewModal } from '../modal/image-preview';
import { IMAGE_ACCEPT } from '@/shared/constants/file';

interface Props {
  onSend: (msg: {
    sender: MessageSender;
    type: MessageType;
    content: string;
  }) => void;
}

export default function MessageInput({ onSend }: Props) {
  const {
    text,
    image,
    fileInputRef,
    isPreviewOpen,
    isSendDisabled,
    setText,
    handleSend,
    handleKeyDown,
    handleSendLocation,
    handleImageChange,
    handleCancelPreview,
  } = useAction({ onSend });

  return (
    <>
      <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-background/60 p-1.5 transition-colors focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-ring/30">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Gửi hình ảnh"
          aria-label="Gửi hình ảnh"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
        >
          <ImageIcon className="size-5" />
        </button>

        <button
          type="button"
          onClick={handleSendLocation}
          title="Gửi vị trí của bạn"
          aria-label="Gửi vị trí"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
        >
          <MapPin className="size-5" />
        </button>

        <input
          type="file"
          accept={IMAGE_ACCEPT}
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <input
          type="text"
          className="min-w-0 flex-1 bg-transparent px-2 py-2 text-[0.95rem] text-foreground placeholder:text-muted-foreground focus:outline-none"
          placeholder="Hỏi Lý Sơn Bot bất cứ điều gì…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Nội dung tin nhắn"
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={!text.trim()}
          aria-label="Gửi tin nhắn"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-all duration-200 hover:shadow-glow hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        >
          <SendIcon className="size-[18px]" />
        </button>
      </div>

      {!isSendDisabled && (
        <ImagePreviewModal
          image={image}
          isOpen={isPreviewOpen}
          onSend={handleSend}
          onCancel={handleCancelPreview}
          isSendDisabled={isSendDisabled}
        />
      )}
    </>
  );
}
