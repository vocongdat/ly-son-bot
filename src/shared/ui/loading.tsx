import { Logo } from './logo';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-background">
      <div className="relative">
        <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-primary/30" />
        <Logo className="size-14 animate-float drop-shadow-[0_8px_24px_hsl(var(--primary)/0.45)]" />
      </div>
      <div className="flex items-center gap-1.5">
        <span className="size-2 animate-typing-bounce rounded-full bg-primary [animation-delay:-0.32s]" />
        <span className="size-2 animate-typing-bounce rounded-full bg-ocean-500 [animation-delay:-0.16s]" />
        <span className="size-2 animate-typing-bounce rounded-full bg-accent" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">Đang tải Lý Sơn Bot…</p>
    </div>
  );
}
