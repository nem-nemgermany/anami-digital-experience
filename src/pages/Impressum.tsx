import { Layout } from "@/components/layout/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-gradient">Impressum</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Angaben gemäß § 5 TMG</h2>
                <p className="text-muted-foreground">
                  Anami Restaurant GmbH<br />
                  Musterstraße 123<br />
                  12345 Berlin<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Kontakt</h2>
                <p className="text-muted-foreground">
                  Telefon: +49 123 456 78<br />
                  E-Mail: info@anami-restaurant.de
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Vertreten durch</h2>
                <p className="text-muted-foreground">
                  Geschäftsführer: Max Mustermann
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Registereintrag</h2>
                <p className="text-muted-foreground">
                  Eintragung im Handelsregister<br />
                  Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                  Registernummer: HRB 123456
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE123456789
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-muted-foreground">
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  12345 Berlin
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Streitschlichtung</h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  https://ec.europa.eu/consumers/odr/<br /><br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
