import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            Hannah
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Button>
            <Button 
              variant="ghost"
              onClick={() => window.open('https://www.instagram.com/hannahmamabear?igsh=bWt4ZDBoaW5xdjZz&utm_source=qr', '_blank')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Instagram
            </Button>
            <Button 
              variant="ghost"
              onClick={() => window.open('https://www.tiktok.com/@hannahb34?r_t=ZP-8zNENVRkbWh&_r=1', '_blank')}
              className="text-foreground hover:text-primary transition-colors"
            >
              TikTok
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;