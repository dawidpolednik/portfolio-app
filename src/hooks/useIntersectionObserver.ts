import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (callback: () => void) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observerTargetValue: HTMLDivElement | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 1 },
    );

    if (observerTarget?.current) {
      observer.observe(observerTarget.current);
      observerTargetValue = observerTarget?.current;
    }

    return () => {
      if (observerTargetValue) {
        observer.unobserve(observerTargetValue);
      }
    };
    // eslint-disable-next-line
  }, [callback]);

  return {
    observerTarget,
  };
};
