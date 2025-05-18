import { Modal } from '@/shared/ui/modal';
import { Button } from '@/shared/ui/button';
import { Image } from '@/shared/ui/image';

interface ImagePreviewModalProps {
  image: string | null;
  isOpen: boolean;
  onSend: () => void;
  onCancel: () => void;
  isSendDisabled?: boolean;
}

export function ImagePreviewModal({
  image,
  isOpen,
  onSend,
  onCancel,
  isSendDisabled = false,
}: ImagePreviewModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} title="Xem trước ảnh">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={image}
          alt="preview"
          className="h-72 w-auto rounded object-cover"
        />
        <div className="flex gap-2">
          <Button onClick={onSend} className="w-20" disabled={isSendDisabled}>
            Gửi
          </Button>
          <Button onClick={onCancel} className="w-20" variant="secondary">
            Hủy
          </Button>
        </div>
      </div>
    </Modal>
  );
}
