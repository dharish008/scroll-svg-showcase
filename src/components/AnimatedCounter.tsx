
import React, { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 1500,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isIntersecting || hasAnimated.current) return;
    
    hasAnimated.current = true;
    
    let startTime: number;
    let animationFrame: number;
    
    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing function for a more natural count
      const easedProgress = progressPercentage === 1 
        ? 1 
        : 1 - Math.pow(2, -10 * progressPercentage);
      
      setCount(Math.floor(easedProgress * end));
      
      if (progressPercentage < 1) {
        animationFrame = requestAnimationFrame(countUp);
      }
    };
    
    animationFrame = requestAnimationFrame(countUp);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isIntersecting, end, duration]);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default AnimatedCounter;
