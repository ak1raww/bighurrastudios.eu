import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CalendarDays, MapPin, CreditCard, PenTool } from 'lucide-react';

const steps = [
  { icon: <CalendarDays className="w-8 h-8" />, title: 'Date e Orari', description: 'Le elezioni si terranno il [Data]. I seggi saranno aperti dalle ore 7:00 alle ore 23:00.' },
  { icon: <MapPin className="w-8 h-8" />, title: 'Dove si Vota', description: 'Recati al seggio elettorale indicato sulla tua tessera elettorale. Per trovare il tuo seggio, consulta il sito del Comune.' },
  { icon: <CreditCard className="w-8 h-8" />, title: 'Cosa Portare', description: 'Porta con te un documento d\'identità valido (carta d\'identità, patente, passaporto) e la tessera elettorale.' },
  { icon: <PenTool className="w-8 h-8" />, title: 'Come Esprimere la Preferenza', description: 'Sulla scheda elettorale, traccia una X sul simbolo della lista. Puoi scrivere accanto il cognome di uno o due candidati della stessa lista per esprimere la tua preferenza. Scrivi: FANCESCHINI e/o MANENTE.' },
];

const faqs = [
  { q: 'Cosa succede se ho smarrito la tessera elettorale?', a: 'Puoi richiederne un duplicato presso l\'ufficio elettorale del tuo Comune. Nei giorni di votazione, l\'ufficio è aperto con orari prolungati.' },
  { q: 'Posso esprimere più di una preferenza?', a: 'Sì, puoi esprimere fino a due preferenze, purché i candidati appartengano alla stessa lista e siano di genere diverso (un uomo e una donna).' },
  { q: 'Posso votare una lista e scrivere la preferenza per un candidato di un\'altra lista?', a: 'No, il voto di preferenza deve essere espresso per candidati della stessa lista votata. In caso contrario, la preferenza viene annullata.' },
  { q: 'Posso delegare qualcun altro a votare al posto mio?', a: 'No, il voto è personale e non delegabile. Solo gli elettori che necessitano di assistenza per disabilità possono essere accompagnati in cabina.' },
];

const ComeVotare = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Come Votare</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutte le informazioni necessarie per esprimere il tuo voto in modo corretto e consapevole.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit">
                  {step.icon}
                </div>
                <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">Scrivi sulla Scheda</h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-3xl md:text-4xl font-bold tracking-wide">FANCESCHINI</span>
            <span className="text-xl text-primary-foreground/60">e</span>
            <span className="text-3xl md:text-4xl font-bold tracking-wide">MANENTE</span>
          </div>
          <p className="mt-4 text-primary-foreground/80">Accanto al simbolo della lista che hai scelto.</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Domande Frequenti</h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline text-left font-sans">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ComeVotare;