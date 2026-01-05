import { Layout } from "@/components/layout/Layout";

export default function Datenschutz() {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-gradient">Datenschutzerklärung</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-medium mb-2 text-foreground">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                  denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-medium mb-2 text-foreground">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Impressum dieser Website entnehmen.
                </p>
                
                <h3 className="text-lg font-medium mb-2 text-foreground">Wie erfassen wir Ihre Daten?</h3>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                  z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
                  Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">3. Ihre Rechte</h2>
                <p className="mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen.
                </p>
                <p>
                  Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen 
                  die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">4. Reservierungen</h2>
                <p>
                  Wenn Sie über unsere Website eine Tischreservierung vornehmen, erheben wir folgende Daten: Name, 
                  E-Mail-Adresse, Telefonnummer, gewünschtes Datum und Uhrzeit sowie die Anzahl der Gäste. Diese 
                  Daten werden ausschließlich zur Abwicklung Ihrer Reservierung verwendet und nach der 
                  Durchführung gelöscht.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">5. Kontaktformular</h2>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">6. Google Maps</h2>
                <p>
                  Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland 
                  Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google 
                  Maps ist es notwendig, Ihre IP-Adresse zu speichern.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">7. Kontakt</h2>
                <p>
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei 
                  Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:<br /><br />
                  Anami Restaurant GmbH<br />
                  Musterstraße 123<br />
                  12345 Berlin<br />
                  E-Mail: datenschutz@anami-restaurant.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
