
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  icon,
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
      <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default UseCaseCard;
