import { motion } from 'framer-motion';
import { Logo } from '@/shared/ui/logo';

export const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end gap-2.5 px-4 pb-3"
  >
    <div className="flex size-8 items-center justify-center rounded-full bg-card shadow-soft ring-1 ring-border">
      <Logo className="size-7" />
    </div>
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 shadow-soft">
      <span className="size-1.5 animate-typing-bounce rounded-full bg-muted-foreground [animation-delay:-0.32s]" />
      <span className="size-1.5 animate-typing-bounce rounded-full bg-muted-foreground [animation-delay:-0.16s]" />
      <span className="size-1.5 animate-typing-bounce rounded-full bg-muted-foreground" />
    </div>
  </motion.div>
);
