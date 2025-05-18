import { PageContent } from './page-content';
import { MessageCircle } from 'lucide-react';

export default function ChatPage() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-blue-400 via-cyan-300 to-green-500 p-4">
      <div className="flex items-center justify-center">
        <MessageCircle className="size-10 text-blue-500" />
        <h1 className="ml-2 text-2xl font-bold text-blue-700">
          Ly Son Chatbot
        </h1>
      </div>
      <PageContent />
    </main>
  );
}
