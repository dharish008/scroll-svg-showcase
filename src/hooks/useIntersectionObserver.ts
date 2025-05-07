
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (triggerOnce && hasTriggered) return;
        
        if (isElementIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else {
          if (!triggerOnce) {
            setIsIntersecting(false);
          }
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [rootMargin, threshold, triggerOnce, hasTriggered]);

  return { ref, isIntersecting };
};
