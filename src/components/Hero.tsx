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
      
      {/* Animated starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse star-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-accent/30 rounded-full animate-pulse star-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Hannah's Art</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
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