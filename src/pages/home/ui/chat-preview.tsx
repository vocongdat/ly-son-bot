import { motion } from 'framer-motion';
import { Logo } from '@/shared/ui/logo';

interface Bubble {
  from: 'user' | 'bot';
  text: string;
}

const conversation: Bubble[] = [
  { from: 'user', text: 'Mình có 2 ngày ở Lý Sơn, nên đi đâu?' },
  {
    from: 'bot',
    text: 'Tuyệt vời! Ngày 1: cổng Tò Vò lúc bình minh, đỉnh Thới Lới và cánh đồng tỏi. Ngày 2: đảo Bé tắm biển nước trong xanh 🐚',
  },
  { from: 'user', text: 'Tàu ra đảo Bé mấy giờ?' },
  { from: 'bot', text: 'Chuyến sớm nhất 8:00 từ cảng Lý Sơn, mình nhắc bạn nhé!' },
];

export function ChatPreview() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-5 py-3.5">
        <Logo className="size-8" />
        <div className="flex-1">
          <p className="text-sm font-bold text-foreground">Lý Sơn Bot</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_hsl(var(--card))]" />
            Đang hoạt động
          </p>
        </div>
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-coral-400/70" />
          <span className="size-2.5 rounded-full bg-sand-400/70" />
          <span className="size-2.5 rounded-full bg-ocean-400/70" />
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 bg-gradient-to-b from-transparent to-muted/30 p-5">
        {conversation.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5 + i * 0.35,
            }}
            className={
              b.from === 'user' ? 'flex justify-end' : 'flex justify-start'
            }
          >
            <p
              className={
                b.from === 'user'
                  ? 'max-w-[78%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft'
                  : 'max-w-[80%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 text-sm text-card-foreground shadow-soft'
              }
            >
              {b.text}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + conversation.length * 0.35 }}
          className="flex justify-start"
        >
          <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 shadow-soft">
            <span className="size-1.5 animate-typing-bounce rounded-full bg-muted-foreground [animation-delay:-0.32s]" />
            <span className="size-1.5 animate-typing-bounce rounded-full bg-muted-foreground [animation-delay:-0.16s]" />
            <span className="size-1.5 animate-typing-bounce rounded-full bg-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
