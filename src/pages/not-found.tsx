import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { Logo } from '@/shared/ui/logo';

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-ocean-mesh" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-80 -translate-x-1/2 animate-aurora rounded-full bg-primary/15 blur-3xl" />

      <Logo className="size-16 animate-float drop-shadow-[0_10px_30px_hsl(var(--primary)/0.4)]" />

      <p className="mt-8 font-display text-7xl font-semibold tracking-tight text-gradient sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">
        Lạc lối giữa biển khơi
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Trang bạn tìm không tồn tại hoặc đã ra khơi mất rồi. Hãy quay lại đất liền
        cùng Lý Sơn Bot nhé.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-105"
        >
          <Home className="size-4" />
          Về trang chủ
        </Link>
        <Link
          to="/chat"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-muted"
        >
          <Compass className="size-4 text-primary" />
          Trò chuyện ngay
        </Link>
      </div>
    </main>
  );
}
