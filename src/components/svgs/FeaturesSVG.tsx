
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const FeaturesSVG: React.FC = () => {
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
        
        {/* Gear 1 */}
        <g 
          className={`transition-transform duration-1000 delay-300 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isIntersecting ? 'animate-rotate-gear' : ''}`}
          style={{ transformOrigin: '120px 120px' }}
        >
          <circle cx="120" cy="120" r="40" fill="#7E69AB" />
          <path d="M120 70 L125 85 L135 80 L130 70 Z" fill="#0EA5E9" />
          <path d="M160 105 L145 110 L150 120 L165 115 Z" fill="#0EA5E9" />
          <path d="M145 145 L135 135 L125 145 L135 155 Z" fill="#0EA5E9" />
          <path d="M95 145 L105 135 L95 125 L85 135 Z" fill="#0EA5E9" />
          <path d="M80 105 L95 110 L90 120 L75 115 Z" fill="#0EA5E9" />
          <path d="M120 170 L125 155 L115 150 L110 165 Z" fill="#0EA5E9" />
          <path d="M165 130 L150 125 L155 115 L170 120 Z" fill="#0EA5E9" />
          <path d="M75 130 L90 125 L85 115 L70 120 Z" fill="#0EA5E9" />
          <circle cx="120" cy="120" r="15" fill="white" />
        </g>
        
        {/* Gear 2 */}
        <g 
          className={`transition-transform duration-1000 delay-500 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isIntersecting ? 'animate-rotate-gear' : ''}`}
          style={{ transformOrigin: '230px 170px', animationDirection: 'reverse', animationDuration: '15s' }}
        >
          <circle cx="230" cy="170" r="30" fill="#0EA5E9" />
          <path d="M230 130 L235 145 L245 140 L240 130 Z" fill="#7E69AB" />
          <path d="M270 155 L255 160 L260 170 L275 165 Z" fill="#7E69AB" />
          <path d="M255 195 L245 185 L235 195 L245 205 Z" fill="#7E69AB" />
          <path d="M205 195 L215 185 L205 175 L195 185 Z" fill="#7E69AB" />
          <path d="M190 155 L205 160 L200 170 L185 165 Z" fill="#7E69AB" />
          <path d="M230 210 L235 195 L225 190 L220 205 Z" fill="#7E69AB" />
          <circle cx="230" cy="170" r="10" fill="white" />
        </g>
        
        {/* Connected dots */}
        <circle 
          cx="120" 
          cy="200" 
          r="8" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        />
        <circle 
          cx="180" 
          cy="200" 
          r="8" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-800 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        />
        <circle 
          cx="240" 
          cy="200" 
          r="8" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-900 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        />
        <circle 
          cx="300" 
          cy="200" 
          r="8" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Connection lines */}
        <line 
          x1="128" 
          y1="200" 
          x2="172" 
          y2="200" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeDasharray="44"
          strokeDashoffset={isIntersecting ? "0" : "44"}
          className="transition-all duration-1000 delay-1100"
        />
        <line 
          x1="188" 
          y1="200" 
          x2="232" 
          y2="200" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeDasharray="44"
          strokeDashoffset={isIntersecting ? "0" : "44"}
          className="transition-all duration-1000 delay-1200"
        />
        <line 
          x1="248" 
          y1="200" 
          x2="292" 
          y2="200" 
          stroke="#9b87f5" 
          strokeWidth="2" 
          strokeDasharray="44"
          strokeDashoffset={isIntersecting ? "0" : "44"}
          className="transition-all duration-1000 delay-1300"
        />
      </svg>
    </div>
  );
};

export default FeaturesSVG;
