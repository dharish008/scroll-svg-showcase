
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
        {/* Background shape */}
        <rect 
          x="40" 
          y="40" 
          width="320" 
          height="220" 
          rx="30" 
          fill="#f9fafb" 
          stroke="#e5e7eb"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Dashboard screen */}
        <rect 
          x="70" 
          y="80" 
          width="160" 
          height="120" 
          rx="6" 
          fill="white" 
          stroke="#e5e7eb"
          strokeWidth="2"
          className={`transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />

        {/* Dashboard header */}
        <rect 
          x="70" 
          y="80" 
          width="160" 
          height="20" 
          rx="6 6 0 0" 
          fill="#9b87f5" 
          className={`transition-all duration-1000 delay-400 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        />
        
        {/* Chart bars */}
        <rect 
          x="80" 
          y="110" 
          width="20" 
          height="40" 
          rx="2" 
          fill="#0EA5E9" 
          className={`transition-all duration-1000 delay-600 ${isIntersecting ? 'opacity-100 scale-y-100 origin-bottom' : 'opacity-0 scale-y-0 origin-bottom'}`}
        />
        <rect 
          x="110" 
          y="120" 
          width="20" 
          height="30" 
          rx="2" 
          fill="#0EA5E9" 
          className={`transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 scale-y-100 origin-bottom' : 'opacity-0 scale-y-0 origin-bottom'}`}
        />
        <rect 
          x="140" 
          y="130" 
          width="20" 
          height="20" 
          rx="2" 
          fill="#0EA5E9" 
          className={`transition-all duration-1000 delay-800 ${isIntersecting ? 'opacity-100 scale-y-100 origin-bottom' : 'opacity-0 scale-y-0 origin-bottom'}`}
        />
        <rect 
          x="170" 
          y="100" 
          width="20"
          height="50" 
          rx="2" 
          fill="#0EA5E9" 
          className={`transition-all duration-1000 delay-900 ${isIntersecting ? 'opacity-100 scale-y-100 origin-bottom' : 'opacity-0 scale-y-0 origin-bottom'}`}
        />
        
        {/* Line graph */}
        <path 
          d="M80,180 Q100,160 120,170 T160,150 T200,160" 
          fill="none" 
          stroke="#9b87f5" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeDasharray="180"
          strokeDashoffset={isIntersecting ? "0" : "180"}
          className="transition-all duration-2000 delay-1000"
        />
        
        {/* Data points on line */}
        <circle 
          cx="80" 
          cy="180" 
          r="4" 
          fill="#9b87f5"
          className={`transition-all duration-300 delay-1100 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} 
        />
        <circle 
          cx="120" 
          cy="170" 
          r="4" 
          fill="#9b87f5" 
          className={`transition-all duration-300 delay-1200 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
        />
        <circle 
          cx="160" 
          cy="150" 
          r="4" 
          fill="#9b87f5"
          className={`transition-all duration-300 delay-1300 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} 
        />
        <circle 
          cx="200" 
          cy="160" 
          r="4" 
          fill="#9b87f5"
          className={`transition-all duration-300 delay-1400 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} 
        />
        
        {/* Notification bell */}
        <g className={`transition-transform duration-1000 delay-1500 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <path 
            d="M280,100 Q280,80 300,80 Q320,80 320,100 L320,120 L330,130 L270,130 L280,120 Z" 
            fill="#7E69AB" 
          />
          <circle cx="300" cy="80" r="5" fill="#0EA5E9" />
          <path 
            d="M290,130 Q290,140 300,140 Q310,140 310,130" 
            fill="none" 
            stroke="#0EA5E9" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
        </g>
        
        {/* Document with checkmark */}
        <g className={`transition-transform duration-1000 delay-1700 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <rect 
            x="270" 
            y="150" 
            width="60" 
            height="80" 
            rx="4" 
            fill="white" 
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <line 
            x1="280" 
            y1="170" 
            x2="320" 
            y2="170" 
            stroke="#e5e7eb" 
            strokeWidth="2" 
          />
          <line 
            x1="280" 
            y1="190" 
            x2="320" 
            y2="190" 
            stroke="#e5e7eb" 
            strokeWidth="2" 
          />
          <line 
            x1="280" 
            y1="210" 
            x2="310" 
            y2="210" 
            stroke="#e5e7eb" 
            strokeWidth="2" 
          />
          <circle 
            cx="300" 
            cy="190" 
            r="15" 
            fill="#9b87f5" 
            className={`transition-opacity duration-300 delay-2000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
          />
          <path 
            d="M292,190 L298,196 L308,186" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeDasharray="30"
            strokeDashoffset={isIntersecting ? "0" : "30"}
            className="transition-all duration-500 delay-2200"
          />
        </g>
        
        {/* Connection lines */}
        <line 
          x1="200" 
          y1="140" 
          x2="270" 
          y2="100" 
          stroke="#e5e7eb" 
          strokeWidth="2" 
          strokeDasharray="80"
          strokeDashoffset={isIntersecting ? "0" : "80"}
          className="transition-all duration-1000 delay-1600"
        />
        <line 
          x1="200" 
          y1="160" 
          x2="270" 
          y2="190" 
          stroke="#e5e7eb" 
          strokeWidth="2" 
          strokeDasharray="80"
          strokeDashoffset={isIntersecting ? "0" : "80"}
          className="transition-all duration-1000 delay-1800"
        />
      </svg>
    </div>
  );
};

export default FeaturesSVG;
