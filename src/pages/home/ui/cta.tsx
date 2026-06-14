import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/shared/ui/reveal';

export function CallToAction() {
  return (
    <section className="px-4 py-10 lg:py-16">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-16 text-center shadow-elevated sm:px-12">
          <div className="pointer-events-none absolute -left-10 -top-10 size-48 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 size-56 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.25),transparent_60%)]" />

          <h2 className="relative font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Sẵn sàng cho chuyến đi Lý Sơn?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
            Trò chuyện miễn phí ngay bây giờ — không cần đăng ký, không cần tải app.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Link
              to="/chat"
              className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-ocean-700 shadow-lg transition-transform duration-200 hover:scale-[1.03]"
            >
              Mở Lý Sơn Bot
              <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
