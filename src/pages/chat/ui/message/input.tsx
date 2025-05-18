import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Image as ImageIcon, Send as SendIcon } from 'lucide-react';
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
    handleImageChange,
    handleCancelPreview,
  } = useAction({ onSend });

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => fileInputRef.current?.click()}
        className="p-2"
        title="Upload image"
        variant="ghost"
        leftIcon={<ImageIcon className="size-6 text-gray-500" />}
      />
      <Input
        type="file"
        accept={IMAGE_ACCEPT}
        placeholder="Nhập tin nhắn..."
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      <Input
        type="text"
        className="flex-1 rounded border px-3 py-2"
        placeholder="Nhập tin nhắn..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
      />
      <Button
        onClick={handleSend}
        disabled={!text.trim()}
        rightIcon={<SendIcon className="size-5" />}
      >
        Gửi
      </Button>
      {!isSendDisabled && (
        <ImagePreviewModal
          image={image}
          isOpen={isPreviewOpen}
          onSend={handleSend}
          onCancel={handleCancelPreview}
          isSendDisabled={isSendDisabled}
        />
      )}
    </div>
  );
}
