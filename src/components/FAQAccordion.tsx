
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does ProductX handle data security?",
    answer: "ProductX employs enterprise-grade encryption for all data at rest and in transit. We're compliant with GDPR, HIPAA, and SOC 2 standards, ensuring your sensitive information remains protected at all times."
  },
  {
    question: "Can I integrate ProductX with my existing tools?",
    answer: "Absolutely! ProductX offers seamless integration with over 100+ popular business tools including Salesforce, HubSpot, Slack, Microsoft Teams, and many more through our extensive API and pre-built connectors."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Most customers are up and running within 2-3 days. Our customer success team provides dedicated onboarding support to ensure a smooth transition, including data migration assistance and personalized training for your team."
  },
  {
    question: "Do you offer custom solutions for specific industries?",
    answer: "Yes, ProductX offers tailored solutions for healthcare, finance, education, and retail industries with specialized features designed to meet industry-specific compliance and operational needs."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 customer support via chat, email, and phone. All enterprise plans include a dedicated account manager and priority support with guaranteed response times under 2 hours."
  }
];

const FAQAccordion: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full max-w-3xl mx-auto"
    >
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className={`border-b border-gray-200 transition-all duration-700 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <AccordionTrigger className="text-lg font-medium hover:text-brand-purple">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
