import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Star } from 'lucide-react';
import { useCountUp } from '@/shared/hooks/use-count-up';
import { TiltCard } from '@/shared/ui/tilt-card';
import { ChatPreview } from './chat-preview';

const ease = [0.22, 1, 0.36, 1] as const;

interface Stat {
  label: string;
  to?: number;
  decimals?: number;
  suffix?: string;
  staticValue?: string;
}

const stats: Stat[] = [
  { staticValue: '24/7', label: 'Luôn sẵn sàng' },
  { to: 50, suffix: '+', label: 'Điểm đến gợi ý' },
  { to: 4.9, decimals: 1, suffix: '★', label: 'Du khách hài lòng' },
];

function StatItem({ stat, inView }: { stat: Stat; inView: boolean }) {
  const counted = useCountUp(stat.to ?? 0, {
    start: inView && stat.to !== undefined,
    decimals: stat.decimals ?? 0,
  });

  return (
    <div className="text-center lg:text-left">
      <dt className="font-display text-3xl font-semibold tabular-nums text-foreground">
        {stat.staticValue ?? (
          <>
            {counted}
            {stat.suffix}
          </>
        )}
      </dt>
      <dd className="mt-1 text-xs font-medium text-muted-foreground">
        {stat.label}
      </dd>
    </div>
  );
}

export function Hero() {
  const statsRef = useRef<HTMLDListElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Ambient background — a single intentional light source + warm rim */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-ocean-mesh" />
      <div className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 size-[34rem] -translate-x-1/2 animate-aurora rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 -z-10 size-72 animate-aurora rounded-full bg-accent/15 blur-3xl [animation-delay:-7s]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft"
          >
            <Sparkles className="size-4 text-accent" />
            Trợ lý du lịch đảo Lý Sơn
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Khám phá đảo Lý Sơn
            <span className="block text-gradient">cùng người bạn đồng hành AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            Từ cánh đồng tỏi, miệng núi lửa cổ đến những bãi biển trong vắt — hỏi
            bất cứ điều gì và nhận gợi ý hành trình, ẩm thực, lịch tàu ngay trong
            tích tắc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.24 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              to="/chat"
              className="btn-sheen group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-200 hover:brightness-105 sm:w-auto"
            >
              Bắt đầu trò chuyện
              <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <a
              href="#kham-pha"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground shadow-soft transition-colors duration-200 hover:bg-muted sm:w-auto"
            >
              <Compass className="size-5 text-primary" />
              Khám phá đảo
            </a>
          </motion.div>

          <motion.dl
            ref={statsRef}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.32 }}
            className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 lg:mx-0"
          >
            {stats.map((s) => (
              <StatItem key={s.label} stat={s} inView={statsInView} />
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-20 blur-2xl" />
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease }}
            className="absolute -right-3 -top-3 z-10 flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-elevated"
          >
            <Star className="size-3.5 fill-accent text-accent" />
            Gợi ý theo thời gian thực
          </motion.div>
          <TiltCard className="rounded-3xl" max={6}>
            <ChatPreview />
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
