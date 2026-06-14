import { MessagesSquare, Map, Plane } from 'lucide-react';
import { Reveal } from '@/shared/ui/reveal';

const steps = [
  {
    icon: MessagesSquare,
    step: '01',
    title: 'Đặt câu hỏi',
    desc: 'Nhắn cho Lý Sơn Bot điều bạn muốn biết — điểm đến, ẩm thực hay lịch tàu.',
  },
  {
    icon: Map,
    step: '02',
    title: 'Nhận gợi ý',
    desc: 'Bot dựng hành trình gợi ý phù hợp thời gian, ngân sách và sở thích của bạn.',
  },
  {
    icon: Plane,
    step: '03',
    title: 'Lên đường',
    desc: 'Mang theo lịch trình đã được cá nhân hoá và tận hưởng chuyến đi đáng nhớ.',
  },
];

export function Journey() {
  return (
    <section
      id="hanh-trinh"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[30rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Hành trình
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ba bước đến với Lý Sơn
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-glow">
                  <s.icon className="size-7" />
                </div>
                <span className="mt-5 block font-display text-sm font-semibold tracking-widest text-primary">
                  {s.step}
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
