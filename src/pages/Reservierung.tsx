import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
  "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Reservierung() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Reservierung bestätigt!",
      description: `Vielen Dank! Wir haben Ihre Reservierung für ${formData.guests} Person(en) am ${new Date(formData.date).toLocaleDateString('de-DE')} um ${formData.time} Uhr erhalten. Eine Bestätigung wurde an ${formData.email} gesendet.`,
    });

    setStep(4); // Success step
    setIsSubmitting(false);
  };

  const canProceedStep1 = formData.date && formData.time && formData.guests;
  const canProceedStep2 = formData.name && formData.email && formData.phone;

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Reservierung</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
              <span className="text-gradient">Tisch reservieren</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Sichern Sie sich Ihren Platz für ein unvergessliches kulinarisches Erlebnis bei Anami.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    } ${step === 4 && s === 3 ? "bg-green-600" : ""}`}
                  >
                    {step === 4 && s === 3 ? <Check className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-16 sm:w-24 h-1 mx-2 rounded transition-all ${
                        step > s ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {step === 4 ? (
              /* Success State */
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Reservierung bestätigt!</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Wir freuen uns auf Ihren Besuch. Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet.
                </p>
                <div className="bg-card rounded-2xl p-6 border border-border max-w-sm mx-auto mb-8">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Datum:</span>
                      <span className="font-medium">{new Date(formData.date).toLocaleDateString('de-DE')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Uhrzeit:</span>
                      <span className="font-medium">{formData.time} Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Personen:</span>
                      <span className="font-medium">{formData.guests}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      date: "",
                      time: "",
                      guests: 2,
                      name: "",
                      email: "",
                      phone: "",
                      notes: "",
                    });
                  }}
                >
                  Neue Reservierung
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  /* Step 1: Date, Time, Guests */
                  <div className="space-y-8">
                    <div>
                      <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Calendar className="h-5 w-5 text-primary" />
                        Datum wählen
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={today}
                        required
                        className="bg-card border-border text-lg h-14"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Clock className="h-5 w-5 text-primary" />
                        Uhrzeit wählen
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, time })}
                            className={`py-3 px-4 rounded-lg font-medium transition-all ${
                              formData.time === time
                                ? "bg-primary text-primary-foreground"
                                : "bg-card border border-border hover:border-primary/50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Users className="h-5 w-5 text-primary" />
                        Anzahl der Gäste
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {guestOptions.map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, guests: num })}
                            className={`w-12 h-12 rounded-lg font-medium transition-all ${
                              formData.guests === num
                                ? "bg-primary text-primary-foreground"
                                : "bg-card border border-border hover:border-primary/50"
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                        <span className="flex items-center text-sm text-muted-foreground ml-2">
                          Personen
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Für größere Gruppen kontaktieren Sie uns bitte telefonisch.
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="hero"
                      size="xl"
                      className="w-full group"
                      disabled={!canProceedStep1}
                      onClick={() => setStep(2)}
                    >
                      Weiter
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  /* Step 2: Contact Info */
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ihr vollständiger Name"
                        required
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-Mail *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre@email.de"
                        required
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefon *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+49 123 456 789"
                        required
                        className="bg-card border-border h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium mb-2">
                        Besondere Wünsche (optional)
                      </label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="z.B. Allergien, Kinderstuhl, besonderer Anlass..."
                        rows={3}
                        className="bg-card border-border"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Zurück
                      </Button>
                      <Button
                        type="button"
                        variant="hero"
                        size="lg"
                        className="flex-1 group"
                        disabled={!canProceedStep2}
                        onClick={() => setStep(3)}
                      >
                        Weiter
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  /* Step 3: Confirmation */
                  <div className="space-y-8">
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <h3 className="text-xl font-semibold mb-6">Ihre Reservierung</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Datum</span>
                          <span className="font-medium">{new Date(formData.date).toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Uhrzeit</span>
                          <span className="font-medium">{formData.time} Uhr</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Personen</span>
                          <span className="font-medium">{formData.guests}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Name</span>
                          <span className="font-medium">{formData.name}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">E-Mail</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-muted-foreground">Telefon</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        {formData.notes && (
                          <div className="pt-4 border-t border-border">
                            <span className="text-muted-foreground text-sm">Anmerkungen:</span>
                            <p className="mt-1">{formData.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      Mit der Reservierung akzeptieren Sie unsere{" "}
                      <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                    </p>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep(2)}
                      >
                        Zurück
                      </Button>
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Wird gesendet..." : "Jetzt reservieren"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
