import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Filter, Leaf, Fish, X } from "lucide-react";
import heroImage from "@/assets/hero-sushi.jpg";
import ramenImage from "@/assets/ramen-dish.jpg";
import bowlImage from "@/assets/bowl-dish.jpg";
import gyozaImage from "@/assets/gyoza-dish.jpg";

const categories = [
  { id: "all", label: "Alle" },
  { id: "sushi", label: "Sushi" },
  { id: "ramen", label: "Ramen" },
  { id: "vorspeisen", label: "Vorspeisen" },
  { id: "hauptgerichte", label: "Hauptgerichte" },
  { id: "desserts", label: "Desserts" },
  { id: "getraenke", label: "Getränke" },
];

const menuItems = [
  // Sushi
  {
    id: 1,
    category: "sushi",
    name: "Lachs Nigiri",
    description: "Frischer schottischer Lachs auf handgeformtem Reis (6 Stück)",
    price: 14.90,
    image: heroImage,
    vegetarian: false,
    allergens: ["Fisch", "Soja"],
  },
  {
    id: 2,
    category: "sushi",
    name: "Thunfisch Sashimi",
    description: "Premium Thunfisch, dünn geschnitten (8 Stück)",
    price: 18.90,
    image: heroImage,
    vegetarian: false,
    allergens: ["Fisch"],
  },
  {
    id: 3,
    category: "sushi",
    name: "Dragon Roll",
    description: "Inside-Out Roll mit Garnelen, Avocado und Unagi-Sauce",
    price: 16.90,
    image: heroImage,
    vegetarian: false,
    allergens: ["Fisch", "Soja", "Sesam"],
  },
  {
    id: 4,
    category: "sushi",
    name: "Veggie Rainbow Roll",
    description: "Bunte Gemüse-Roll mit Avocado, Gurke und Mango",
    price: 12.90,
    image: heroImage,
    vegetarian: true,
    allergens: ["Soja", "Sesam"],
  },
  // Ramen
  {
    id: 5,
    category: "ramen",
    name: "Tonkotsu Ramen",
    description: "Reichhaltige Schweineknochenbrühe, Chashu, Ajitama, Nori",
    price: 15.90,
    image: ramenImage,
    vegetarian: false,
    allergens: ["Soja", "Weizen", "Ei"],
  },
  {
    id: 6,
    category: "ramen",
    name: "Miso Ramen",
    description: "Fermentierte Sojabohnen-Brühe, Mais, Butter, Chashu",
    price: 14.90,
    image: ramenImage,
    vegetarian: false,
    allergens: ["Soja", "Weizen", "Milch"],
  },
  {
    id: 7,
    category: "ramen",
    name: "Vegetarische Shoyu Ramen",
    description: "Klare Sojasoßen-Brühe mit Gemüse und Tofu",
    price: 13.90,
    image: ramenImage,
    vegetarian: true,
    allergens: ["Soja", "Weizen"],
  },
  // Vorspeisen
  {
    id: 8,
    category: "vorspeisen",
    name: "Gyoza",
    description: "Hausgemachte japanische Teigtaschen, gedämpft oder gebraten (6 Stück)",
    price: 8.90,
    image: gyozaImage,
    vegetarian: false,
    allergens: ["Weizen", "Soja"],
  },
  {
    id: 9,
    category: "vorspeisen",
    name: "Edamame",
    description: "Gesalzene grüne Sojabohnen",
    price: 5.90,
    image: bowlImage,
    vegetarian: true,
    allergens: ["Soja"],
  },
  {
    id: 10,
    category: "vorspeisen",
    name: "Miso Suppe",
    description: "Traditionelle japanische Suppe mit Tofu, Wakame und Frühlingszwiebeln",
    price: 4.90,
    image: ramenImage,
    vegetarian: true,
    allergens: ["Soja"],
  },
  // Hauptgerichte
  {
    id: 11,
    category: "hauptgerichte",
    name: "Teriyaki Lachs",
    description: "Gegrillter Lachs mit hausgemachter Teriyaki-Sauce und Reis",
    price: 22.90,
    image: heroImage,
    vegetarian: false,
    allergens: ["Fisch", "Soja"],
  },
  {
    id: 12,
    category: "hauptgerichte",
    name: "Poke Bowl",
    description: "Frischer Thunfisch, Avocado, Edamame, Reis, Sesam-Dressing",
    price: 17.90,
    image: bowlImage,
    vegetarian: false,
    allergens: ["Fisch", "Soja", "Sesam"],
  },
  // Desserts
  {
    id: 13,
    category: "desserts",
    name: "Matcha Tiramisu",
    description: "Japanische Variante des italienischen Klassikers",
    price: 7.90,
    image: bowlImage,
    vegetarian: true,
    allergens: ["Milch", "Ei", "Weizen"],
  },
  {
    id: 14,
    category: "desserts",
    name: "Mochi Eis",
    description: "Japanische Reiskuchen gefüllt mit Eis (3 Stück)",
    price: 6.90,
    image: bowlImage,
    vegetarian: true,
    allergens: ["Milch"],
  },
  // Getränke
  {
    id: 15,
    category: "getraenke",
    name: "Japanischer Grüntee",
    description: "Premium Sencha aus Kyoto",
    price: 4.50,
    image: bowlImage,
    vegetarian: true,
    allergens: [],
  },
  {
    id: 16,
    category: "getraenke",
    name: "Sake (180ml)",
    description: "Traditioneller japanischer Reiswein, kalt oder warm",
    price: 9.90,
    image: bowlImage,
    vegetarian: true,
    allergens: [],
  },
];

export default function Speisekarte() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showVegetarian, setShowVegetarian] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const vegetarianMatch = !showVegetarian || item.vegetarian;
    return categoryMatch && vegetarianMatch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Unsere Küche</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
              <span className="text-gradient">Speisekarte</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Entdecken Sie unsere vielfältige Auswahl an authentischen asiatischen Gerichten, 
              zubereitet mit frischesten Zutaten und viel Liebe.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 py-4 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Additional Filters */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowVegetarian(!showVegetarian)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  showVegetarian
                    ? "bg-green-600 text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <Leaf className="h-4 w-4" />
                Vegetarisch
                {showVegetarian && <X className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover-lift"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.vegetarian && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Leaf className="h-3 w-3" />
                      Vegetarisch
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold text-lg">
                      €{item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  {item.allergens.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {item.allergens.map((allergen) => (
                        <span
                          key={allergen}
                          className="text-xs px-2 py-0.5 bg-secondary rounded text-muted-foreground"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Fish className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">
                Keine Gerichte in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Möchten Sie unsere Speisekarte offline ansehen?
          </p>
          <Button variant="heroOutline" size="lg">
            Speisekarte als PDF herunterladen
          </Button>
        </div>
      </section>
    </Layout>
  );
}
