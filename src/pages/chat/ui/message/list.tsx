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
  const [followOutput, setFollowOutput] = useState<
    'smooth' | 'auto' | undefined
  >();
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const heightContainer = container.offsetHeight;
      setHeightContainer(heightContainer);
    }
    setFollowOutput('smooth');
  }, []);

  useEffect(() => {
    virtuosoRef.current?.scrollIntoView({
      index: messages.length - 1,
      behavior: 'smooth',
    });
  }, [messages.length]);

  return (
    <div className="min-h-full flex-1 pr-4" ref={containerRef}>
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: `${heightContainer}px` }}
        data={messages}
        itemContent={(_, message) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MessageItem message={message} />
          </motion.div>
        )}
        followOutput={followOutput}
        computeItemKey={(_, message) => message.id}
      />
    </div>
  );
}
