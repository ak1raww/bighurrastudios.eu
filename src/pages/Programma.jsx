import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Download, Bus, Shield, GraduationCap, Leaf, Palette, HeartHandshake, Briefcase } from 'lucide-react';

const programAreas = [
  { id: 'mobilita', icon: <Bus className="w-5 h-5" />, title: "Mobilità e Viabilità", problem: "Il traffico è congestionato nelle ore di punta e i trasporti pubblici non coprono adeguatamente le zone periferiche.", proposal: "Realizzazione di nuove piste ciclabili, potenziamento del servizio di trasporto pubblico locale e creazione di zone a traffico limitato nel centro storico.", timeline: "Primi 12 mesi di mandato.", indicators: "Riduzione del 15% del traffico veicolare nel centro, aumento del 20% degli utenti del trasporto pubblico." },
  { id: 'sicurezza', icon: <Shield className="w-5 h-5" />, title: "Sicurezza e Decoro", problem: "Aree della città presentano situazioni di degrado e insufficiente illuminazione pubblica.", proposal: "Installazione di nuovi sistemi di videosorveglianza, potenziamento dell'illuminazione pubblica e programma di riqualificazione delle aree degradate.", timeline: "Entro i primi 18 mesi.", indicators: "Riduzione del 25% degli episodi di microcriminalità, 100% delle aree critiche riqualificate." },
  { id: 'scuola', icon: <GraduationCap className="w-5 h-5" />, title: "Scuola e Giovani", problem: "Molti edifici scolastici necessitano di interventi di manutenzione e mancano spazi di aggregazione per i giovani.", proposal: "Piano straordinario di manutenzione degli edifici scolastici, creazione di un centro giovani polifunzionale e borse di studio per merito.", timeline: "Piano triennale con inizio nel primo anno.", indicators: "Tutti gli edifici scolastici a norma, apertura del centro giovani entro il secondo anno." },
  { id: 'ambiente', icon: <Leaf className="w-5 h-5" />, title: "Ambiente e Territorio", problem: "Necessità di incrementare le aree verdi e migliorare la raccolta differenziata.", proposal: "Piantumazione di 1000 nuovi alberi, potenziamento della raccolta differenziata porta a porta e creazione di orti urbani.", timeline: "Azioni continue per l'intero mandato.", indicators: "Raccolta differenziata al 75%, +30% di aree verdi pro capite." },
  { id: 'cultura', icon: <Palette className="w-5 h-5" />, title: "Cultura e Sport", problem: "L'offerta culturale e sportiva è limitata e gli impianti sportivi richiedono interventi.", proposal: "Ristrutturazione degli impianti sportivi comunali, calendario annuale di eventi culturali e festival, e convenzioni con associazioni locali.", timeline: "Primi interventi entro 6 mesi.", indicators: "Aumento del 50% della partecipazione ad eventi culturali e sportivi." },
  { id: 'sociale', icon: <HeartHandshake className="w-5 h-5" />, title: "Sociale e Inclusione", problem: "Le fasce più vulnerabili della popolazione necessitano di maggiore supporto.", proposal: "Potenziamento dei servizi sociali, creazione di un fondo di solidarietà comunale e programmi di inclusione per persone con disabilità.", timeline: "Attivazione immediata dei servizi più urgenti.", indicators: "Riduzione del 20% delle famiglie in stato di disagio, accessibilità garantita per tutti gli edifici pubblici." },
  { id: 'lavoro', icon: <Briefcase className="w-5 h-5" />, title: "Lavoro e Imprese", problem: "Le piccole imprese locali faticano a competere e i giovani hanno poche opportunità lavorative.", proposal: "Creazione di uno sportello unico per le imprese, incentivi fiscali per le nuove attività e programmi di tirocinio in collaborazione con le aziende del territorio.", timeline: "Avvio entro i primi 12 mesi.", indicators: "Apertura di almeno 50 nuove attività, aumento del 10% dell'occupazione giovanile." },
];

const Programma = () => {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Il Nostro Programma</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Un progetto concreto, misurabile e trasparente per la nostra città. Scopri le nostre proposte per ogni area tematica.
          </p>
          <Button variant="outline" className="mt-6">
            <Download className="mr-2 h-4 w-4" /> Scarica il Programma Completo (PDF)
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {programAreas.map((area) => (
            <AccordionItem key={area.id} value={area.id} className="border border-slate-200 rounded-3xl bg-white shadow-sm shadow-slate-200/30">
              <AccordionTrigger className="text-lg hover:no-underline text-slate-900">
                <div className="flex items-center gap-3">
                  <span className="text-primary">{area.icon}</span>
                  {area.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-base text-slate-600">
                <div>
                  <h4 className="font-semibold font-sans text-slate-900">Problema</h4>
                  <p>{area.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold font-sans text-slate-900">Proposta</h4>
                  <p>{area.proposal}</p>
                </div>
                <div>
                  <h4 className="font-semibold font-sans text-slate-900">Tempistiche</h4>
                  <p>{area.timeline}</p>
                </div>
                <div>
                  <h4 className="font-semibold font-sans text-slate-900">Indicatori di Risultato</h4>
                  <p>{area.indicators}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Programma;