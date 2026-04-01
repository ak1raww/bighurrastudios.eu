import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CalendarDays, MapPin, CreditCard, PenTool, Edit3 } from 'lucide-react';

const steps = [
  { icon: <CalendarDays className="w-8 h-8" />, title: 'Date e Orari', description: 'Le elezioni si terranno il [Data]. I seggi saranno aperti dalle 7:00 alle 23:00.' },
  { icon: <MapPin className="w-8 h-8" />, title: 'Dove si Vota', description: 'Recati al seggio indicato sulla tua tessera elettorale. Controlla la mappa del Comune prima di partire.' },
  { icon: <CreditCard className="w-8 h-8" />, title: 'Cosa Portare', description: 'Tessera elettorale e documento valido: carta d\'identità, patente o passaporto.' },
  { icon: <PenTool className="w-8 h-8" />, title: 'Come Esprimere la Preferenza', description: 'Segna una X sul simbolo della lista e, se vuoi, scrivi il cognome di uno o due candidati della stessa lista.' },
];

const faqs = [
  { q: 'Cosa succede se ho smarrito la tessera elettorale?', a: 'Puoi richiederne un duplicato presso l\'ufficio elettorale del Comune. Nei giorni di votazione è aperto con orari prolungati.' },
  { q: 'Posso esprimere più di una preferenza?', a: 'Sì, fino a due preferenze, purché i candidati appartengano alla stessa lista e siano di genere diverso.' },
  { q: 'Posso votare una lista e scrivere la preferenza per un candidato di un\'altra lista?', a: 'No, il voto di preferenza deve essere espresso per candidati della stessa lista votata. Altrimenti la preferenza viene annullata.' },
  { q: 'Posso delegare qualcun altro a votare al posto mio?', a: 'No, il voto è personale. Solo chi ha bisogno di assistenza può essere accompagnato.' },
];

const ComeVotare = () => {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Come Votare</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tutte le informazioni necessarie per esprimere il tuo voto in modo corretto e consapevole.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] mb-16">
          <div className="grid gap-6">
            {steps.map((step) => (
              <Card key={step.title} className="border border-slate-200 bg-white shadow-lg shadow-slate-200/40">
                <CardHeader>
                  <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit">{step.icon}</div>
                  <CardTitle className="mt-4 text-xl text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/40">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-3xl bg-primary/10 p-4 text-primary"><Edit3 className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Guida visiva</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Vota con chiarezza</h2>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">1. Controlla il seggio</p>
                  <p className="mt-2 text-slate-600">Verifica indirizzo e orari sulla tessera elettorale e parti con anticipo.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">2. Porta i documenti</p>
                  <p className="mt-2 text-slate-600">Tessera elettorale e documento d'identità sono essenziali.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">3. Segna la X</p>
                  <p className="mt-2 text-slate-600">Marca il simbolo della lista e verifica che il nome sia corretto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">Domande Frequenti</h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-slate-200 rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline text-left font-sans text-slate-900">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Consigli utili</p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">Preparati senza dubbi</h3>
              <p className="mt-4 text-slate-600">Un breve riepilogo visivo per evitare errori al seggio.</p>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Checklist</div>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>• Tessera elettorale</li>
                  <li>• Documento d'identità</li>
                  <li>• Orario del seggio</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 border border-slate-200">
                <div className="text-sm uppercase tracking-[0.24em] text-slate-500">Suggerimento</div>
                <p className="mt-2 text-slate-600">Segna con calma la X e verifica che il nome sia sul simbolo corretto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComeVotare;