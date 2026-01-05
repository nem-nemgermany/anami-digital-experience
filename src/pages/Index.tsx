import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ChevronRight, Clock, MapPin, ArrowRight, Utensils } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-sushi.jpg";
import ramenImage from "@/assets/ramen-dish.jpg";
import bowlImage from "@/assets/bowl-dish.jpg";
import gyozaImage from "@/assets/gyoza-dish.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const highlights = [
  {
    title: "Sushi & Sashimi",
    description: "Frischer Fisch, meisterhaft zubereitet nach traditioneller japanischer Kunst.",
    image: heroImage,
  },
  {
    title: "Ramen",
    description: "Dampfende Nudeln in aromatischer Brühe – Seelenwärmer aus Japan.",
    image: ramenImage,
  },
  {
    title: "Bowls",
    description: "Bunte Schalen voller Frische, Vitamine und asiatischer Aromen.",
    image: bowlImage,
  },
];

const reviews = [
  {
    name: "Maria S.",
    rating: 5,
    text: "Das beste Sushi in der Stadt! Frisch, kreativ und wunderschön präsentiert. Absolute Empfehlung!",
  },
  {
    name: "Thomas K.",
    rating: 5,
    text: "Fantastisches Ambiente und exzellenter Service. Die Ramen war perfekt – authentisch und köstlich.",
  },
  {
    name: "Lisa M.",
    rating: 5,
    text: "Ein kulinarisches Erlebnis der Extraklasse. Hier stimmt einfach alles, vom Essen bis zum Ambiente.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sushi Platte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 opacity-0 animate-fade-in-up">
              <Utensils className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Asian Fusion Restaurant</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-100">
              Authentische asiatische Küche –{" "}
              <span className="text-gradient">modern interpretiert</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl opacity-0 animate-fade-in-up animation-delay-200">
              Erleben Sie die Kunst der japanischen Küche. Frische Zutaten, 
              meisterhafte Zubereitung und ein Ambiente, das verzaubert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-300">
              <Link to="/reservierung">
                <Button variant="hero" size="xl" className="group">
                  Tisch reservieren
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/takeaway">
                <Button variant="heroOutline" size="xl">
                  Takeaway bestellen
                </Button>
              </Link>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-border/30 opacity-0 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mo-Sa: 11:30 - 23:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Musterstraße 123, Berlin</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 (120+ Bewertungen)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Unsere Spezialitäten</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Entdecken Sie unsere <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Von traditionellem Sushi bis zu modernen Fusion-Kreationen – 
              jedes Gericht erzählt eine Geschichte von Qualität und Handwerkskunst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/speisekarte">
              <Button variant="heroOutline" size="lg" className="group">
                Zur Speisekarte
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={interiorImage}
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
            </div>

            <div className="lg:pl-8">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Über Anami</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Wo Tradition auf <span className="text-gradient">Innovation</span> trifft
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bei Anami vereinen wir die jahrhundertealte Kunst der asiatischen Küche mit 
                modernen Einflüssen. Unser Küchenchef bringt über 15 Jahre Erfahrung aus 
                den besten Restaurants Japans mit.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Jedes Gericht wird mit Sorgfalt, Respekt vor der Tradition und einem 
                Hauch von Kreativität zubereitet. Frische Zutaten, importiert aus den 
                besten Quellen weltweit, bilden die Grundlage unserer Küche.
              </p>
              <Link to="/ueber-uns">
                <Button variant="hero" size="lg" className="group">
                  Mehr erfahren
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Kundenstimmen</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Was unsere Gäste <span className="text-gradient">sagen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-border hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-medium">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bereit für ein <span className="text-gradient">kulinarisches Erlebnis</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reservieren Sie jetzt Ihren Tisch und genießen Sie die beste asiatische 
              Küche der Stadt in einem unvergesslichen Ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservierung">
                <Button variant="hero" size="xl" className="group animate-pulse-glow">
                  Jetzt Tisch reservieren
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/takeaway">
                <Button variant="heroOutline" size="xl">
                  Takeaway bestellen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
