
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FAQSVG: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full h-full"
    >
      <svg 
        viewBox="0 0 400 300" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background */}
        <rect 
          x="50" 
          y="50" 
          width="300" 
          height="200" 
          rx="20" 
          fill="#f3f4f6" 
          className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Large question mark */}
        <text 
          x="200" 
          y="170" 
          fontSize="180" 
          fontWeight="bold" 
          fill="#9b87f550" 
          textAnchor="middle"
          className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          ?
        </text>
        
        {/* Small question marks */}
        <text 
          x="100" 
          y="100" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#7E69AB" 
          textAnchor="middle" 
          className={`transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          ?
        </text>
        
        <text 
          x="300" 
          y="100" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#0EA5E9" 
          textAnchor="middle" 
          className={`transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          ?
        </text>
        
        <text 
          x="300" 
          y="200" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#7E69AB" 
          textAnchor="middle" 
          className={`transition-all duration-1000 delay-900 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          ?
        </text>
        
        <text 
          x="100" 
          y="200" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#0EA5E9" 
          textAnchor="middle" 
          className={`transition-all duration-1000 delay-1100 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          ?
        </text>
        
        {/* FAQ lines */}
        <g className={`transition-all duration-1000 delay-1300 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <line x1="120" y1="240" x2="180" y2="240" stroke="#9b87f5" strokeWidth="4" strokeLinecap="round" />
          <line x1="200" y1="240" x2="280" y2="240" stroke="#0EA5E9" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default FAQSVG;
