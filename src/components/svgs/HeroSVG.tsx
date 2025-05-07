
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HeroSVG: React.FC = () => {
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
        viewBox="0 0 500 400" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle 
          cx="250" 
          cy="200" 
          r="150" 
          fill="#f3f4f6" 
          className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        />
        
        {/* Central dashboard shape */}
        <rect 
          x="150" 
          y="120" 
          width="200" 
          height="160" 
          rx="8" 
          fill="#ffffff" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        {/* Dashboard header */}
        <rect 
          x="150" 
          y="120" 
          width="200" 
          height="30" 
          rx="8" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-400 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        {/* Chart bar 1 */}
        <rect 
          x="170" 
          y="170" 
          width="30" 
          height="60" 
          rx="4" 
          fill="#7E69AB" 
          className={`transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          style={{ transformOrigin: '170px 230px' }}
        />
        
        {/* Chart bar 2 */}
        <rect 
          x="210" 
          y="190" 
          width="30" 
          height="40" 
          rx="4"
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-600 ${isIntersecting ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          style={{ transformOrigin: '210px 230px' }}
        />
        
        {/* Chart bar 3 */}
        <rect 
          x="250" 
          y="150" 
          width="30" 
          height="80" 
          rx="4" 
          fill="#0EA5E9" 
          className={`transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          style={{ transformOrigin: '250px 230px' }}
        />
        
        {/* Chart bar 4 */}
        <rect 
          x="290" 
          y="200" 
          width="30" 
          height="30" 
          rx="4" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-800 ${isIntersecting ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          style={{ transformOrigin: '290px 230px' }}
        />
        
        {/* Floating data points */}
        <circle 
          cx="170" 
          cy="100" 
          r="8" 
          fill="#0EA5E9" 
          className={`transition-all duration-1000 delay-900 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} animate-float`}
        />
        <circle 
          cx="330" 
          cy="150" 
          r="10" 
          fill="#7E69AB" 
          className={`transition-all duration-1000 delay-[1000ms] ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} animate-float`}
          style={{ animationDelay: '1s' }}
        />
        <circle 
          cx="300" 
          cy="80" 
          r="12" 
          fill="#D6BCFA" 
          className={`transition-all duration-1000 delay-[1100ms] ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} animate-float`}
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Connection lines */}
        <path 
          d="M170 100 L250 150" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeDasharray="1000"
          strokeDashoffset={isIntersecting ? "0" : "1000"}
          fill="none"
          className="transition-all duration-2000 delay-[1200ms]"
        />
        <path 
          d="M300 80 L290 200" 
          stroke="#9b87f5" 
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={isIntersecting ? "0" : "1000"}
          fill="none" 
          className="transition-all duration-2000 delay-[1300ms]"
        />
        <path 
          d="M330 150 L290 200" 
          stroke="#9b87f5" 
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={isIntersecting ? "0" : "1000"}
          fill="none" 
          className="transition-all duration-2000 delay-[1400ms]"
        />
      </svg>
    </div>
  );
};

export default HeroSVG;
