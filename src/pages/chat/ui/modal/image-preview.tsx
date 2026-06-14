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
          alt="Xem trước ảnh"
          className="max-h-72 w-auto overflow-hidden rounded-2xl object-cover"
        />
        <div className="flex gap-3">
          <Button onClick={onSend} className="w-24" disabled={isSendDisabled}>
            Gửi
          </Button>
          <Button onClick={onCancel} className="w-24" variant="outline">
            Huỷ
          </Button>
        </div>
      </div>
    </Modal>
  );
}
