import { Layout } from "@/components/layout/Layout";
import { Award, Heart, Leaf, Users } from "lucide-react";
import interiorImage from "@/assets/restaurant-interior.jpg";
import gyozaImage from "@/assets/gyoza-dish.jpg";

const values = [
  {
    icon: Leaf,
    title: "Frische Zutaten",
    description: "Täglich frisch importierte Produkte aus den besten Quellen Asiens und lokalen Partnern.",
  },
  {
    icon: Award,
    title: "Meisterliche Qualität",
    description: "Unser Küchenchef bringt über 15 Jahre Erfahrung aus renommierten Restaurants Japans mit.",
  },
  {
    icon: Heart,
    title: "Mit Leidenschaft",
    description: "Jedes Gericht wird mit Hingabe und Respekt vor der jahrhundertealten Tradition zubereitet.",
  },
  {
    icon: Users,
    title: "Gastfreundschaft",
    description: "Herzlicher Service in einer Atmosphäre, die Sie wie zu Hause fühlen lässt.",
  },
];

export default function UeberUns() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Über Uns</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
              Die Geschichte von <span className="text-gradient">Anami</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eine Reise durch die Aromen Asiens, geprägt von Tradition, 
              Handwerkskunst und der Liebe zum Detail.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={interiorImage}
                  alt="Anami Restaurant Innenansicht"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Von <span className="text-gradient">Tokyo nach Berlin</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Anami wurde 2018 mit einer Vision geboren: Die authentische Essenz der 
                  asiatischen Küche nach Berlin zu bringen und gleichzeitig moderne 
                  kulinarische Einflüsse zu integrieren.
                </p>
                <p>
                  Unser Gründer, Chef Hiroshi Tanaka, verbrachte über zwei Jahrzehnte 
                  in den renommiertesten Küchen Tokios, bevor er seinen Traum verwirklichte – 
                  ein Restaurant zu schaffen, das die Seele der japanischen Kochkunst 
                  in jedem Bissen einfängt.
                </p>
                <p>
                  Der Name „Anami" bedeutet im Japanischen „Meereswelle" und symbolisiert 
                  die fließende Harmonie zwischen Tradition und Innovation, die unsere 
                  Küche auszeichnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Unsere Philosophie</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Qualität, Frische, <span className="text-gradient">Authentizität</span>
            </h2>
            <p className="text-muted-foreground">
              Diese drei Säulen bilden das Fundament unserer Küche. Wir glauben, dass 
              großartiges Essen aus einfachen, hochwertigen Zutaten entsteht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-8 border border-border hover-lift text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unser <span className="text-gradient">Team</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hinter jedem außergewöhnlichen Gericht steht ein Team von leidenschaftlichen 
                  Köchen und Servicekräften, die jeden Tag ihr Bestes geben.
                </p>
                <p>
                  Von der sorgfältigen Auswahl der Zutaten am frühen Morgen bis zum 
                  letzten Gast am Abend – unser Team ist mit Herz und Seele dabei.
                </p>
                <p>
                  Wir sind stolz auf unsere Vielfalt: Köche aus Japan, Vietnam und 
                  Deutschland arbeiten Seite an Seite und bringen ihre einzigartigen 
                  Perspektiven in unsere Küche ein.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={gyozaImage}
                  alt="Anami Küche"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
