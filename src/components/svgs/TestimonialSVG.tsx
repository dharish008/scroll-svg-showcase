
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TestimonialSVG: React.FC = () => {
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
        
        {/* Speech bubbles */}
        {/* Main bubble */}
        <g className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <path 
            d="M150 100 L280 100 C290 100 300 110 300 120 L300 180 C300 190 290 200 280 200 L180 200 L160 220 L160 200 L150 200 C140 200 130 190 130 180 L130 120 C130 110 140 100 150 100 Z" 
            fill="#9b87f5" 
          />
          
          {/* Text lines */}
          <line x1="150" y1="130" x2="280" y2="130" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="150" y1="150" x2="260" y2="150" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="150" y1="170" x2="240" y2="170" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        {/* Small bubble 1 */}
        <g className={`transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <path 
            d="M100 130 L70 130 C65 130 60 135 60 140 L60 170 C60 175 65 180 70 180 L90 180 L100 190 L100 180 L100 180 C105 180 110 175 110 170 L110 140 C110 135 105 130 100 130 Z" 
            fill="#7E69AB" 
          />
          
          <line x1="70" y1="145" x2="100" y2="145" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="70" y1="160" x2="90" y2="160" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* Small bubble 2 */}
        <g className={`transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <path 
            d="M330 150 L350 150 C355 150 360 155 360 160 L360 190 C360 195 355 200 350 200 L340 200 L330 210 L330 200 L330 200 C325 200 320 195 320 190 L320 160 C320 155 325 150 330 150 Z" 
            fill="#0EA5E9" 
          />
          
          <line x1="330" y1="165" x2="350" y2="165" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="330" y1="180" x2="340" y2="180" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* Star icons */}
        <g className={`transition-all duration-1000 delay-900 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <polygon 
            points="200,70 207,90 228,90 211,103 217,123 200,110 183,123 189,103 172,90 193,90" 
            fill="gold" 
          />
        </g>
        
        <g className={`transition-all duration-1000 delay-1000 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <polygon 
            points="240,60 247,80 268,80 251,93 257,113 240,100 223,113 229,93 212,80 233,80" 
            fill="gold" 
          />
        </g>
        
        <g className={`transition-all duration-1000 delay-1100 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <polygon 
            points="160,60 167,80 188,80 171,93 177,113 160,100 143,113 149,93 132,80 153,80" 
            fill="gold" 
          />
        </g>
      </svg>
    </div>
  );
};

export default TestimonialSVG;
