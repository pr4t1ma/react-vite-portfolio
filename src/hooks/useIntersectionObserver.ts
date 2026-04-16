import { useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  callback: (isVisible: boolean) => void,
  options: UseIntersectionObserverOptions = {}
) => {
  const ref = useRef<HTMLElement | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (options.triggerOnce && hasTriggered.current) {
        return;
      }

      if (entry.isIntersecting) {
        callback(true);
        if (options.triggerOnce) {
          hasTriggered.current = true;
        }
      } else {
        callback(false);
      }
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return ref;
};
