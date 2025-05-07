
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSVGProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ children, className = '' }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSVG;
