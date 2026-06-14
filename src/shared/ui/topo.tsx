import { cn } from '@/shared/lib/utils';

interface TopoLinesProps {
  className?: string;
}

/**
 * Topographic / nautical-chart contour motif. Uses currentColor so it can be
 * tinted via text utilities (e.g. text-primary/10). Purely decorative.
 */
export function TopoLines({ className }: TopoLinesProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
      className={cn('h-full w-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M250 120c70-30 150-10 160 70s-60 120-30 170 90 60 60 130" opacity="0.9" />
        <path d="M250 150c55-24 122-6 130 60s-50 100-22 142 78 52 50 112" opacity="0.75" />
        <path d="M250 180c42-18 95-4 100 48s-40 82-16 116 64 44 40 92" opacity="0.6" />
        <path d="M250 210c30-13 70-2 72 36s-30 64-10 90 50 36 30 72" opacity="0.45" />
        <path d="M250 240c18-8 44-1 44 24s-20 46-6 64 36 28 20 52" opacity="0.32" />
        <path d="M90 70c40 10 64 48 130 44s120-44 180-18" opacity="0.5" />
        <path d="M70 420c50-18 96 8 150-6s96-60 168-44" opacity="0.5" />
      </g>
    </svg>
  );
}
