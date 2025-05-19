export const TypingIndicator = () => (
  <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4 backdrop-blur-lg">
    <span className="animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-sm font-medium text-transparent">
      Bot is typing...
    </span>
  </div>
);
