import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import SocialCTA from "@/components/SocialCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Gallery />
        <SocialCTA />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2024 Hannah - Visual Artist. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
