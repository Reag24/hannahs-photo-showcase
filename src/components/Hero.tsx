import { Button } from "@/components/ui/button";
import { Instagram, Music } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/10"
        style={{
          background: 'var(--gradient-hero)'
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="gradient-text">Hannah</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Visual artist creating expressive portraits, character art, and illustrations 
            that capture the beauty and emotion of every subject
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="default" 
              size="lg"
              className="social-glow group px-8 py-6 text-lg font-medium"
              onClick={() => window.open('https://www.instagram.com/hannahmamabear?igsh=bWt4ZDBoaW5xdjZz&utm_source=chatgpt.com', '_blank')}
            >
              <Instagram className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Follow on Instagram
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="social-glow group px-8 py-6 text-lg font-medium"
              onClick={() => window.open('https://www.tiktok.com/@hannahb34?r_t=ZP-8zNENVRkbWh&_r=1', '_blank')}
            >
              <Music className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Follow on TikTok
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;