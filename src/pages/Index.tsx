
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartBarIcon, List, Star, Users, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroSVG from "@/components/svgs/HeroSVG";
import FeaturesSVG from "@/components/svgs/FeaturesSVG";
import TestimonialSVG from "@/components/svgs/TestimonialSVG";
import UseCasesSVG from "@/components/svgs/UseCasesSVG";
import FAQSVG from "@/components/svgs/FAQSVG";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialCard from "@/components/TestimonialCard";
import UseCaseCard from "@/components/UseCaseCard";

const Index = () => {
  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Clean up
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Testimonial data
  const testimonials = [
    {
      quote: "ProductX has transformed the way our team collaborates. We've seen a 40% increase in productivity since implementing it.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Inc."
    },
    {
      quote: "The analytics features alone have helped us increase our conversion rates by 25%. Best investment we've made this year.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Growth Partners"
    },
    {
      quote: "Implementation was incredibly smooth, and their support team responded quickly to all our questions. Very impressed!",
      author: "Priya Patel",
      role: "Operations Manager",
      company: "Innovate Solutions"
    }
  ];

  // Use case data
  const useCases = [
    {
      title: "Team Collaboration",
      description: "Streamline communication and project management across departments with real-time updates and shared workspaces.",
      icon: <Users className="text-brand-purple w-6 h-6" />
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with customizable dashboards and automated reporting.",
      icon: <ChartBarIcon className="text-brand-purple w-6 h-6" />
    },
    {
      title: "Customer Management",
      description: "Track customer interactions, manage relationships, and improve satisfaction with integrated CRM features.",
      icon: <Star className="text-brand-purple w-6 h-6" />
    },
    {
      title: "Process Automation",
      description: "Eliminate repetitive tasks and streamline workflows with intelligent automation and triggers.",
      icon: <List className="text-brand-purple w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Streamline Your Workflow with <span className="text-brand-purple">ProductX</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                The all-in-one platform that helps your team collaborate, analyze data, and boost productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-white bg-brand-purple hover:bg-brand-purple/90 rounded-lg">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="rounded-lg">
                  Book a Demo
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Happy Users</p>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800">
                    <AnimatedCounter end={10000} suffix="+" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Companies</p>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800">
                    <AnimatedCounter end={1500} suffix="+" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-500 mb-2">Tasks Saved</p>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800">
                    <AnimatedCounter end={25} suffix="M" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <HeroSVG />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the tools that will transform your workflow and boost productivity.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <FeaturesSVG />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="animate-on-scroll">
                  <div className="flex items-start mb-3">
                    <div className="mr-4 p-2 bg-brand-purple/10 rounded-lg">
                      <List className="text-brand-purple w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Task Management</h3>
                      <p className="text-gray-600">Assign, track, and complete tasks with intelligent prioritization and automated workflows.</p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-on-scroll">
                  <div className="flex items-start mb-3">
                    <div className="mr-4 p-2 bg-brand-purple/10 rounded-lg">
                      <ChartBarIcon className="text-brand-purple w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                      <p className="text-gray-600">Make data-driven decisions with customizable dashboards and real-time insights.</p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-on-scroll">
                  <div className="flex items-start mb-3">
                    <div className="mr-4 p-2 bg-brand-purple/10 rounded-lg">
                      <Users className="text-brand-purple w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                      <p className="text-gray-600">Seamlessly collaborate with your team through shared workspaces and real-time communication.</p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-on-scroll">
                  <div className="flex items-start mb-3">
                    <div className="mr-4 p-2 bg-brand-purple/10 rounded-lg">
                      <ArrowRight className="text-brand-purple w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                      <p className="text-gray-600">Connect with over 100+ tools and services without leaving your workspace.</p>
                    </div>
                  </div>
                </div>
                
                <div className="animate-on-scroll mt-8">
                  <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-lg">
                    Explore All Features
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of companies worldwide to improve their workflows.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            <div className="animate-on-scroll">
              <div className="mb-8">
                <div className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  <span className="text-brand-purple">93%</span> of users report increased productivity
                </div>
                <p className="text-xl text-gray-600">
                  Our customers see measurable improvements within the first month of implementation.
                </p>
              </div>
              
              <div className="flex gap-6 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                    <AnimatedCounter end={40} suffix="%" />
                  </div>
                  <p className="text-gray-600">Time saved on tasks</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                    <AnimatedCounter end={65} suffix="%" />
                  </div>
                  <p className="text-gray-600">Increase in team collaboration</p>
                </div>
              </div>
              
              <div className="mb-8 md:mb-0">
                <TestimonialSVG />
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="grid gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how various teams and industries leverage ProductX to solve their unique challenges.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <UseCasesSVG />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <UseCaseCard
                    key={index}
                    title={useCase.title}
                    description={useCase.description}
                    icon={useCase.icon}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center animate-on-scroll">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-lg">
              View All Use Cases
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section id="faqs" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't find what you're looking for, reach out to our support team.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="mb-8 md:mb-0">
                <FAQSVG />
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button variant="outline" className="rounded-lg">
                  Contact Support
                </Button>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-purple/10">
        <div className="container px-4 md:px-6 text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers who've boosted productivity with ProductX.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-lg">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 md:py-16 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#9b87f5" />
                  <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-bold text-xl text-white">ProductX</span>
              </div>
              <p className="text-gray-400">
                The all-in-one platform for your team's productivity and collaboration.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#use-cases" className="text-gray-400 hover:text-white transition-colors">Use Cases</a></li>
                <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} ProductX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
