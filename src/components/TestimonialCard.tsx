
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  index
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-xl shadow-md p-6 transition-all duration-700 ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="inline-block w-5 h-5 text-yellow-400 fill-current" 
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <blockquote className="italic text-gray-600 mb-4">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
