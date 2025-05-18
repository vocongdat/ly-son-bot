import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getRandomBotReply } from '../utils/get-random-bot-reply';
import { Message, MessageSender, MessageType } from '../../model/message';

const STORAGE_KEY = 'chat_messages';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setMessages(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = useCallback(
    (msg: Omit<Message, 'id' | 'timestamp'>) => {
      const newMsg: Message = {
        ...msg,
        id: uuidv4(),
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, newMsg]);
      // Bot reply
      setIsBotTyping(true);
      const delay = Math.random() * 2000 + 1000; // 1-3s
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: uuidv4(),
            sender: MessageSender.Bot,
            type: MessageType.Text,
            content:
              msg.type === MessageType.Image
                ? 'Tôi đã nhận được ảnh của bạn!'
                : getRandomBotReply(),
            timestamp: Date.now(),
          },
        ]);
        setIsBotTyping(false);
      }, delay);
    },
    []
  );

  const handleClearMessages = useCallback(() => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { messages, isBotTyping, handleSendMessage, handleClearMessages };
}
