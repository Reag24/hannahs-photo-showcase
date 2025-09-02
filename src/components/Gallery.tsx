import { useState } from "react";
import artwork1 from "@/assets/artwork1.jpg";
import artwork2 from "@/assets/artwork2.jpg";
import artwork3 from "@/assets/artwork3.jpg";
import artwork4 from "@/assets/artwork4.jpg";
import artwork5 from "@/assets/artwork5.jpg";

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);
  
  // This will be expanded as more artwork is added
  const artworks = [
    { id: 1, src: artwork1, title: "Portrait Study", category: "Portrait" },
    { id: 2, src: artwork2, title: "Mystical Wolf", category: "Nature" },
    { id: 3, src: artwork3, title: "Character Art", category: "Character" },
    { id: 4, src: artwork4, title: "Ethereal Portrait", category: "Portrait" },
    { id: 5, src: artwork5, title: "Pet Portrait", category: "Pet" },
  ];

  return (
    <section className="py-20 px-6" id="gallery">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of portraits, character art, and illustrations showcasing 
            diverse styles and emotional depth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="artwork-hover cursor-pointer group"
              onClick={() => setSelectedArtwork(artwork.src)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card">
                <img
                  src={artwork.src}
                  alt={artwork.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground">{artwork.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {artworks.length < 16 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More artwork coming soon... ({artworks.length}/16 pieces)
            </p>
          </div>
        )}
      </div>
      
      {/* Modal for enlarged view */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedArtwork}
              alt="Selected artwork"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;