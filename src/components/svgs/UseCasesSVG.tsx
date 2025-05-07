
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const UseCasesSVG: React.FC = () => {
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
        {/* Background circle */}
        <circle 
          cx="200" 
          cy="150" 
          r="120" 
          fill="#f3f4f6" 
          className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        />
        
        {/* Central icon */}
        <g className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <circle cx="200" cy="150" r="40" fill="#7E69AB" />
          <path d="M200 125 L200 175 M175 150 L225 150" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </g>
        
        {/* Surrounding icons - Use Case 1 */}
        <g className={`transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 -translate-y-10'}`}>
          <circle cx="130" cy="90" r="25" fill="#9b87f5" />
          <rect x="120" y="80" width="20" height="20" rx="2" fill="white" />
          <path d="M120 85 L140 85" stroke="#9b87f5" strokeWidth="2" />
          <path d="M125 90 L135 90" stroke="#9b87f5" strokeWidth="2" />
        </g>
        
        {/* Use Case 2 */}
        <g className={`transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 -translate-y-10'}`}>
          <circle cx="270" cy="90" r="25" fill="#0EA5E9" />
          <path d="M260 90 C260 80 280 80 280 90 C280 100 260 100 260 90" stroke="white" strokeWidth="3" fill="none" />
          <circle cx="270" cy="100" r="2" fill="white" />
        </g>
        
        {/* Use Case 3 */}
        <g className={`transition-all duration-1000 delay-900 ${isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-10 translate-y-10'}`}>
          <circle cx="270" cy="210" r="25" fill="#9b87f5" />
          <path d="M260 210 L280 210 M270 200 L270 220" stroke="white" strokeWidth="3" />
          <circle cx="270" cy="210" r="10" fill="#9b87f5" stroke="white" strokeWidth="2" />
        </g>
        
        {/* Use Case 4 */}
        <g className={`transition-all duration-1000 delay-1100 ${isIntersecting ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-10 translate-y-10'}`}>
          <circle cx="130" cy="210" r="25" fill="#0EA5E9" />
          <path d="M120 215 L140 215 M120 205 L140 205" stroke="white" strokeWidth="3" />
          <circle cx="122" cy="210" r="2" fill="white" />
          <circle cx="130" cy="210" r="2" fill="white" />
          <circle cx="138" cy="210" r="2" fill="white" />
        </g>
        
        {/* Connecting lines */}
        <path 
          d="M165 108 L185 132" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeDasharray="30"
          strokeDashoffset={isIntersecting ? "0" : "30"}
          fill="none"
          className="transition-all duration-1000 delay-1300"
        />
        
        <path 
          d="M235 132 L255 108" 
          stroke="#0EA5E9" 
          strokeWidth="2" 
          strokeDasharray="30"
          strokeDashoffset={isIntersecting ? "0" : "30"}
          fill="none"
          className="transition-all duration-1000 delay-1400"
        />
        
        <path 
          d="M235 168 L255 192" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeDasharray="30"
          strokeDashoffset={isIntersecting ? "0" : "30"}
          fill="none"
          className="transition-all duration-1000 delay-1500"
        />
        
        <path 
          d="M165 192 L185 168" 
          stroke="#0EA5E9" 
          strokeWidth="2" 
          strokeDasharray="30"
          strokeDashoffset={isIntersecting ? "0" : "30"}
          fill="none"
          className="transition-all duration-1000 delay-1600"
        />
      </svg>
    </div>
  );
};

export default UseCasesSVG;
