import { Reveal } from '@/shared/ui/reveal';
import { TopoLines } from '@/shared/ui/topo';
import { cn } from '@/shared/lib/utils';

const tiles = [
  {
    name: 'Cổng Tò Vò',
    tag: 'Bình minh',
    span: 'sm:col-span-2 sm:row-span-2',
    gradient: 'from-ocean-400 via-ocean-600 to-ocean-900',
    height: 'min-h-[18rem]',
  },
  {
    name: 'Cánh đồng tỏi',
    tag: 'Đặc sản',
    span: '',
    gradient: 'from-sand-300 via-sand-500 to-sand-700',
    height: 'min-h-[8.5rem]',
  },
  {
    name: 'Đỉnh Thới Lới',
    tag: 'Núi lửa cổ',
    span: '',
    gradient: 'from-coral-300 via-coral-500 to-coral-700',
    height: 'min-h-[8.5rem]',
  },
  {
    name: 'Đảo Bé',
    tag: 'Biển trong xanh',
    span: 'sm:col-span-2',
    gradient: 'from-ocean-300 via-ocean-500 to-ocean-700',
    height: 'min-h-[8.5rem]',
  },
];

export function Experience() {
  return (
    <section
      id="trai-nghiem"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 lg:py-28"
    >
      {/* Ocean-tinted band — sets this section apart from the page surface */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/[0.05] via-muted/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <TopoLines className="pointer-events-none absolute -left-32 bottom-[-6rem] -z-10 w-[38rem] text-ocean-500/[0.12]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Trải nghiệm
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Hòn đảo của nắng, gió và đá núi lửa
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-muted-foreground lg:text-right">
              Mỗi điểm đến một câu chuyện. Hỏi Lý Sơn Bot để biết nên đến lúc nào,
              chụp ảnh ở đâu và làm sao để tận hưởng trọn vẹn nhất.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.07}
              className={cn('col-span-2 sm:col-span-1', t.span)}
            >
              <div
                className={cn(
                  'group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1',
                  t.height
                )}
              >
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110',
                    t.gradient
                  )}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
                <span className="relative z-10 w-fit rounded-full bg-black/25 px-2.5 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-sm">
                  {t.tag}
                </span>
                <h3 className="relative z-10 mt-2 text-xl font-bold text-white drop-shadow-md">
                  {t.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
