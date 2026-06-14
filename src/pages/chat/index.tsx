import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '@/shared/ui/logo';
import { ThemeToggle } from '@/shared/lib/theme';
import { PageContent } from './page-content';

export default function ChatPage() {
  return (
    <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-background">
      {/* Ambient ocean backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-ocean-mesh opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 size-72 animate-aurora rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 size-80 animate-aurora rounded-full bg-accent/15 blur-3xl [animation-delay:-7s]" />

      {/* Top bar */}
      <header className="z-10 flex items-center justify-between px-3 py-3 sm:px-5 sm:py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-2 text-sm font-semibold text-foreground shadow-soft backdrop-blur transition-colors hover:bg-muted"
        >
          <ArrowLeft className="size-4" />
          <span className="hidden sm:inline">Trang chủ</span>
        </Link>

        <div className="flex items-center gap-2">
          <Logo className="size-7" />
          <span className="text-base font-extrabold tracking-tight text-foreground">
            Lý Sơn<span className="text-primary"> Bot</span>
          </span>
        </div>

        <ThemeToggle />
      </header>

      <PageContent />
    </main>
  );
}
