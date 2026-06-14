import { useEffect, useRef, useState } from 'react';

interface CountUpOptions {
  start?: boolean;
  duration?: number;
  decimals?: number;
}

/**
 * Eases a number from 0 to `target` once `start` becomes true. Returns the
 * formatted string. Resolves instantly to the target if the user prefers
 * reduced motion.
 */
export function useCountUp(
  target: number,
  { start = false, duration = 1400, decimals = 0 }: CountUpOptions = {}
) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    let raf = 0;
    const begin = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - begin) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value.toFixed(decimals);
}
