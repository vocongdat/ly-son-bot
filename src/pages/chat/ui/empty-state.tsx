import { motion } from 'framer-motion';
import { Ship, UtensilsCrossed, MapPin, CalendarRange } from 'lucide-react';
import { Logo } from '@/shared/ui/logo';

interface EmptyStateProps {
  onPick: (content: string) => void;
}

const suggestions = [
  { icon: MapPin, text: 'Lý Sơn có những điểm đến nào nổi bật?' },
  { icon: CalendarRange, text: 'Gợi ý lịch trình 2 ngày 1 đêm ở Lý Sơn' },
  { icon: Ship, text: 'Tàu ra đảo Bé chạy lúc mấy giờ?' },
  { icon: UtensilsCrossed, text: 'Ăn gì ngon khi đến Lý Sơn?' },
];

export function EmptyState({ onPick }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-5 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-primary/20" />
        <Logo className="size-16 drop-shadow-[0_10px_30px_hsl(var(--primary)/0.4)]" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 font-display text-2xl font-semibold text-foreground"
      >
        Xin chào! Mình là Lý Sơn Bot 👋
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="mt-2 max-w-md text-sm text-muted-foreground"
      >
        Hỏi mình bất cứ điều gì về đảo Lý Sơn — điểm đến, ẩm thực, lịch tàu hay
        hành trình. Bắt đầu với một gợi ý bên dưới nhé.
      </motion.p>

      <div className="mt-7 grid w-full max-w-lg gap-3 sm:grid-cols-2">
        {suggestions.map((s, i) => (
          <motion.button
            key={s.text}
            type="button"
            onClick={() => onPick(s.text)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 + i * 0.06 }}
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-3.5 text-left text-sm font-medium text-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="size-[18px]" />
            </span>
            {s.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
