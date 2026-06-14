import {
  Compass,
  MapPin,
  Ship,
  UtensilsCrossed,
  CalendarClock,
  ShieldCheck,
} from 'lucide-react';
import { Reveal } from '@/shared/ui/reveal';
import { TiltCard } from '@/shared/ui/tilt-card';
import { TopoLines } from '@/shared/ui/topo';

const features = [
  {
    icon: MapPin,
    title: 'Điểm đến nổi bật',
    desc: 'Cổng Tò Vò, đỉnh Thới Lới, hang Câu, chùa Hang — gợi ý kèm thời điểm đẹp nhất để ghé thăm.',
  },
  {
    icon: Ship,
    title: 'Lịch tàu & di chuyển',
    desc: 'Giờ tàu ra đảo Lớn, đảo Bé và cách thuê xe máy dạo quanh đảo chỉ trong một câu hỏi.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Ẩm thực đặc sản',
    desc: 'Gỏi tỏi, ốc cừ, cua huỳnh đế — biết ăn gì, ăn ở đâu cho đúng vị Lý Sơn.',
  },
  {
    icon: CalendarClock,
    title: 'Lên lịch trình',
    desc: 'Tạo hành trình 1–3 ngày phù hợp ngân sách và sở thích của riêng bạn.',
  },
  {
    icon: Compass,
    title: 'Mẹo địa phương',
    desc: 'Thời tiết, mùa biển đẹp, văn hoá và những lưu ý nhỏ giúp chuyến đi trọn vẹn.',
  },
  {
    icon: ShieldCheck,
    title: 'Đáng tin cậy',
    desc: 'Thông tin được tinh chỉnh cho Lý Sơn, trả lời tức thì và luôn sẵn sàng 24/7.',
  },
];

export function Features() {
  return (
    <section
      id="kham-pha"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 lg:py-28"
    >
      {/* Intentional light source + contour motif */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl" />
      <TopoLines className="pointer-events-none absolute -right-32 top-0 -z-10 hidden w-[36rem] text-primary/[0.11] lg:block" />

      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Khám phá
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Mọi điều về Lý Sơn, trong một cuộc trò chuyện
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Đặt câu hỏi bằng tiếng Việt tự nhiên — Lý Sơn Bot hiểu và đồng hành
            cùng bạn trên từng chặng đường.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <TiltCard className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-elevated">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover/tilt:bg-primary group-hover/tilt:text-primary-foreground">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
