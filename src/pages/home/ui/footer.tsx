import { Link } from 'react-router-dom';
import { Facebook, Github, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/shared/ui/logo';

const linkGroups = [
  {
    title: 'Khám phá',
    links: [
      { label: 'Điểm đến', href: '#kham-pha' },
      { label: 'Trải nghiệm', href: '#trai-nghiem' },
      { label: 'Hành trình', href: '#hanh-trinh' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Câu hỏi thường gặp', href: '#kham-pha' },
      { label: 'Mẹo du lịch', href: '#trai-nghiem' },
      { label: 'Liên hệ', href: '#lien-he' },
    ],
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@lysonbot.vn' },
];

export function Footer() {
  return (
    <footer
      id="lien-he"
      className="scroll-mt-24 border-t border-border bg-card/40 px-4 pb-10 pt-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="size-9" />
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                Lý Sơn<span className="text-primary"> Bot</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Người bạn đồng hành AI giúp bạn khám phá đảo Lý Sơn — đảo tỏi giữa
              biển khơi Quảng Ngãi.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              Huyện đảo Lý Sơn, Quảng Ngãi, Việt Nam
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lý Sơn Bot. Thiết kế với tình yêu biển đảo.
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
