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
      
      {/* Moving through space starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full star-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        {[...Array(40)].map((_, i) => (
          <div
            key={`zoom-${i}`}
            className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full star-drift"
            style={{
              left: `${45 + Math.random() * 10}%`,
              top: `${45 + Math.random() * 10}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-secondary/40 rounded-full star-drift"
            style={{
              left: `${40 + Math.random() * 20}%`,
              top: `${40 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Hannah's Art</span>
          </h1>
          
          <p className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
            Girl With Chill Vibes & Cool Art
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