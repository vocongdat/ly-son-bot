export enum MessageSender {
  User = 'user',
  Bot = 'bot',
}

export enum MessageType {
  Text = 'text',
  Image = 'image',
  Location = 'location',
}

export interface Message {
  id: string;
  sender: MessageSender;
  type: MessageType;
  content: string;
  timestamp: number;
}
