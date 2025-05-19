import { Ref, useCallback } from 'react';

/**
 * Merge multiple refs (object or callback) into a single callback ref.
 * Usage: const mergedRef = useMergeRefs(ref1, ref2, ...);
 */
export function useMergeRefs<T = any>(
  ...refs: Array<Ref<T> | undefined | null>
): (instance: T | null) => void {
  return useCallback(
    (instance: T | null) => {
      for (const ref of refs) {
        if (!ref) continue;
        if (typeof ref === 'function') {
          ref(instance);
        } else if (typeof ref === 'object' && 'current' in ref) {
          (ref as React.MutableRefObject<T | null>).current = instance;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
