import { useState, useRef, ChangeEvent } from 'react';
import { toast } from 'sonner';
import { MessageSender, MessageType } from '../../model/message';

interface UseActionParams {
  onSend: (msg: {
    sender: MessageSender;
    type: MessageType;
    content: string;
  }) => void;
}

export function useAction({ onSend }: UseActionParams) {
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (image) {
      onSend({
        sender: MessageSender.User,
        type: MessageType.Image,
        content: image,
      });
      setImage(null);
      setIsPreviewOpen(false);
    } else if (text.trim()) {
      onSend({
        sender: MessageSender.User,
        type: MessageType.Text,
        content: text.trim(),
      });
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && ['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      if (file.size > 500 * 1024) {
        toast.error('Chỉ cho phép tải ảnh dưới 500KB!');
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage(ev.target?.result as string);
        setIsPreviewOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Trình duyệt của bạn không hỗ trợ định vị');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        onSend({
          sender: MessageSender.User,
          type: MessageType.Text,
          content: locationUrl,
        });
      },
      (error) => {
        toast.error('Không thể lấy vị trí của bạn');
        console.error('Error getting location:', error);
      }
    );
  };

  const handleCancelPreview = () => {
    setImage(null);
    setIsPreviewOpen(false);
  };

  const isSendDisabled = !image;

  return {
    text,
    image,
    isPreviewOpen,
    fileInputRef,
    isSendDisabled,
    setText,
    handleSend,
    handleKeyDown,
    handleImageChange,
    handleCancelPreview,
    handleSendLocation,
  };
}
