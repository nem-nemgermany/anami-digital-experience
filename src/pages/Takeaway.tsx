import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Takeaway() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Takeaway</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
              <span className="text-gradient">Online bestellen</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Genießen Sie unsere authentische asiatische Küche bequem zu Hause.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Demnächst verfügbar</h2>
            <p className="text-muted-foreground mb-8">
              Unser Online-Bestellsystem wird gerade entwickelt. In Kürze können Sie 
              Ihre Lieblingsgerichte bequem online bestellen und abholen.
            </p>
            
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">In der Zwischenzeit:</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Rufen Sie uns an, um Ihre Bestellung telefonisch aufzugeben:
              </p>
              <a 
                href="tel:+4912345678" 
                className="text-2xl font-bold text-primary hover:text-anami-red-glow transition-colors"
              >
                +49 123 456 78
              </a>
            </div>

            <Link to="/speisekarte">
              <Button variant="hero" size="lg" className="group">
                Speisekarte ansehen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
