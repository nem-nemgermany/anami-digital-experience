import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-sushi.jpg";
import ramenImage from "@/assets/ramen-dish.jpg";
import bowlImage from "@/assets/bowl-dish.jpg";
import gyozaImage from "@/assets/gyoza-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const galleryImages = [
  { id: 1, src: heroImage, alt: "Premium Sushi Platte", category: "essen" },
  { id: 2, src: ramenImage, alt: "Dampfende Ramen", category: "essen" },
  { id: 3, src: bowlImage, alt: "Frische Poke Bowl", category: "essen" },
  { id: 4, src: gyozaImage, alt: "Hausgemachte Gyoza", category: "essen" },
  { id: 5, src: interiorImage, alt: "Restaurant Ambiente", category: "ambiente" },
  { id: 6, src: heroImage, alt: "Sashimi Selection", category: "essen" },
  { id: 7, src: ramenImage, alt: "Tonkotsu Ramen", category: "essen" },
  { id: 8, src: interiorImage, alt: "Private Dining Area", category: "ambiente" },
];

const categories = [
  { id: "all", label: "Alle" },
  { id: "essen", label: "Gerichte" },
  { id: "ambiente", label: "Ambiente" },
];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Impressionen</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
              <span className="text-gradient">Galerie</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tauchen Sie ein in die Welt von Anami – von kulinarischen Kunstwerken 
              bis zum einladenden Ambiente unseres Restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-foreground font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Schließen"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center mt-4 text-foreground font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </Layout>
  );
}
