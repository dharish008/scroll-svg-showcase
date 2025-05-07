
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#7E69AB" />
            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-bold text-xl text-gray-800">ProductX</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-brand-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-brand-purple transition-colors">Testimonials</a>
          <a href="#use-cases" className="text-gray-600 hover:text-brand-purple transition-colors">Use Cases</a>
          <a href="#faqs" className="text-gray-600 hover:text-brand-purple transition-colors">FAQs</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
          <Button className="bg-brand-purple hover:bg-brand-purple/90">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
