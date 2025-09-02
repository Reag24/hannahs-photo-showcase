import { Button } from "@/components/ui/button";
import { Instagram, Music, Heart } from "lucide-react";

const SocialCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <Heart className="w-16 h-16 mx-auto text-accent animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Connect & Follow</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow my artistic journey on social media for behind-the-scenes content, 
              new artwork reveals, and creative process videos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="default" 
              size="lg"
              className="social-glow group px-12 py-8 text-xl font-medium"
              onClick={() => window.open('https://www.instagram.com/hannahmamabear?igsh=bWt4ZDBoaW5xdjZz&utm_source=qr', '_blank')}
            >
              <Instagram className="mr-4 h-6 w-6 group-hover:scale-110 transition-transform" />
              @hannahmamabear
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="social-glow group px-12 py-8 text-xl font-medium"
              onClick={() => window.open('https://www.tiktok.com/@hannahb34?r_t=ZP-8zNENVRkbWh&_r=1', '_blank')}
            >
              <Music className="mr-4 h-6 w-6 group-hover:scale-110 transition-transform" />
              @hannahb34
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Join thousands of art lovers following Hannah's creative journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialCTA;