import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contatti = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Messaggio inviato con successo!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contattaci</h1>
        <p className="mt-4 text-lg text-primary-foreground/75 max-w-xl mx-auto">
          Hai domande o vuoi metterti in contatto con noi? Siamo qui per te.
        </p>
      </div>

      <div className="container max-w-6xl py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-card rounded-2xl border shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Scrivici</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="c-name">Nome completo</Label>
                  <Input id="c-name" placeholder="Mario Rossi" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" placeholder="mario@email.it" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-subject">Oggetto</Label>
                <Input id="c-subject" placeholder="Di cosa vuoi parlarci?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-message">Messaggio</Label>
                <Textarea id="c-message" className="h-36 resize-none" placeholder="Scrivi il tuo messaggio..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Invia Messaggio
              </Button>
            </form>
          </div>

          {/* Info + Mappa — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            <div className="space-y-4">
              <a href="mailto:info@fanceschinimanente.it" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">info@fanceschinimanente.it</p>
                </div>
              </a>
              <a href="tel:+39000000000" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Telefono</p>
                  <p className="text-sm text-muted-foreground">+39 000 000 0000</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border bg-card">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Sede</p>
                  <p className="text-sm text-muted-foreground">Venezia, Italia</p>
                </div>
              </div>
            </div>

            {/* Mappa */}
            <div className="rounded-2xl overflow-hidden border shadow-sm flex-1 min-h-[220px]">
              <iframe
                title="Venezia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45164.29!2d12.3155!3d45.4408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenezia%20VE!5e0!3m2!1sit!2sit!4v1711900000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '220px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contatti;