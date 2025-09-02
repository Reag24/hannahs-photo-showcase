import { useState } from "react";

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);
  
  // Hannah's actual artwork - expanding collection
  const artworks = [
    { id: 1, src: "/lovable-uploads/a3b4f469-4779-43f4-92a8-d6eb1146d4ec.png", title: "Portrait with Glasses", category: "Portrait" },
    { id: 2, src: "/lovable-uploads/353c1b0e-51e9-4115-aafb-1377c80f0986.png", title: "Mystical Wolf", category: "Nature" },
    { id: 3, src: "/lovable-uploads/b6a14c87-14cb-4825-8d10-b739846cc958.png", title: "Character with Bird", category: "Character" },
    { id: 4, src: "/lovable-uploads/de6d4236-1add-482a-8b2c-0cfb2d97a031.png", title: "Ethereal Rose Portrait", category: "Portrait" },
    { id: 5, src: "/lovable-uploads/593fbb64-51e0-49a3-89ad-815d3de331e4.png", title: "Sweet Pup", category: "Pet" },
    { id: 6, src: "/lovable-uploads/9fac648b-d061-4cb6-966e-c32d7b6717d8.png", title: "Autumn Cat", category: "Nature" },
    { id: 7, src: "/lovable-uploads/91d06bc1-a165-4ca5-9a8d-6ed62cc4f45b.png", title: "Flowing Hair Portrait", category: "Portrait" },
    { id: 8, src: "/lovable-uploads/784943df-49f3-4fbc-bf33-2a5d696abb4a.png", title: "Cute Bookmarks", category: "Illustration" },
    { id: 9, src: "/lovable-uploads/d440df1d-c051-4908-a92d-e22a9d22241c.png", title: "Cherry Portrait Studies", category: "Portrait" },
    { id: 10, src: "/lovable-uploads/b7fcb37b-0eaa-451d-9dd0-01f445c3a1b3.png", title: "Cherry Girl", category: "Portrait" },
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