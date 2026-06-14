import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { Logo } from '@/shared/ui/logo';
import { ThemeToggle } from '@/shared/lib/theme';

const navigation = [
  { name: 'Khám phá', href: '#kham-pha' },
  { name: 'Trải nghiệm', href: '#trai-nghiem' },
  { name: 'Hành trình', href: '#hanh-trinh' },
  { name: 'Liên hệ', href: '#lien-he' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-100 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5',
          isScrolled
            ? 'glass-strong border-border shadow-elevated'
            : 'border-transparent bg-transparent'
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Lý Sơn Bot — Trang chủ"
        >
          <Logo className="size-9 transition-transform duration-300 hover:rotate-3" />
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Lý Sơn<span className="text-primary"> Bot</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="link-underline px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/chat"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:shadow-glow hover:brightness-105 sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            Trò chuyện
          </Link>

          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Mở menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border p-2 shadow-elevated md:hidden"
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/chat"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="size-4" />
                Bắt đầu trò chuyện
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
