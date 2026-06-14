import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import { Message } from '../../model/message';
import { MessageItem } from './item';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const virtuosoRef = useRef<VirtuosoHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [heightContainer, setHeightContainer] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => setHeightContainer(container.offsetHeight);
    measure();

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      virtuosoRef.current?.scrollToIndex({
        index: messages.length - 1,
        align: 'end',
        behavior: 'smooth',
      });
    }
  }, [messages.length]);

  return (
    <div className="min-h-full flex-1 pr-2" ref={containerRef}>
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: `${heightContainer}px` }}
        data={messages}
        initialTopMostItemIndex={messages.length - 1}
        alignToBottom
        itemContent={(_, message) => (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="pb-1"
          >
            <MessageItem message={message} />
          </motion.div>
        )}
        computeItemKey={(_, message) => message.id}
      />
    </div>
  );
}
