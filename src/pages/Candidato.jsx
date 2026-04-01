import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Heart, Eye, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Marco Bianchi', role: 'Portavoce', description: 'Esperto in comunicazione politica con oltre 10 anni di esperienza.' },
  { name: 'Laura Verdi', role: 'Responsabile Programma', description: 'Urbanista e consulente per la pubblica amministrazione.' },
  { name: 'Andrea Rossi', role: 'Referente Coordinamento', description: 'Supporta le attività della squadra e i rapporti con le realtà civiche locali.' },
];

const Candidato = () => {
  return (
    <div className="py-10 lg:py-12">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">I Candidati</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri chi siamo, i nostri valori e la squadra che ci supporta.
          </p>
        </div>

        {/* Gabriele Fanceschini */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
            <img src="/images/candidati/gabriele-fanceschini.jpg" alt="Gabriele Fanceschini" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Gabriele Fanceschini</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-medium">Valori: Trasparenza, impegno, ascolto.</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <span className="font-medium">Motivazione: Restituire alla comunità ciò che ha ricevuto.</span>
              </div>
            </div>
            <a href="/cv/CV-Fanceschini.pdf" download className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              <Download className="h-4 w-4" /> Scarica CV
            </a>
          </div>
        </div>

        {/* Denise Manente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-1 md:order-2 overflow-hidden rounded-2xl bg-muted aspect-[4/5]">
            <img src="/images/candidati/denise-manente.jpg" alt="Denise Manente" className="h-full w-full object-cover" />
          </div>
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold">Denise Manente</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-medium">Valori: Inclusione, innovazione, sostenibilità.</span>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <span className="font-medium">Motivazione: Dare voce a chi non si sente rappresentato.</span>
              </div>
            </div>
            <a href="/cv/CV-Manente.pdf" download className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50">
              <Download className="h-4 w-4" /> Scarica CV
            </a>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><Users className="w-7 h-7" /> Il Nostro Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <div className="w-16 h-16 bg-muted rounded-full mb-2"></div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium font-sans">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trasparenza */}
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-bold mb-8">Trasparenza</h2>
          <p className="mx-auto max-w-3xl text-slate-600 mb-10">
            Rendiamo disponibili i documenti chiave della campagna per mostrare i nostri obiettivi, le dichiarazioni e gli incarichi in modo chiaro.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'CV Fanceschini', description: 'Il curriculum del candidato principale.', href: '/cv/CV-Fanceschini.pdf' },
              { label: 'CV Manente', description: 'Il profilo della candidata al fianco di Fanceschini.', href: '/cv/CV-Manente.pdf' },
              { label: 'Dichiarazioni', description: 'Impegni e valori espressi pubblicamente.', href: '/cv/Dichiarazioni.pdf' },
              { label: 'Incarichi', description: 'Ruoli e responsabilità della squadra in campagna.', href: '/cv/Incarichi.pdf' },
            ].map((item) => (
              <a key={item.label} href={item.href} download className="rounded-3xl border border-slate-200 bg-white p-4 text-left shadow-sm min-w-0 transition hover:bg-slate-50">
                <p className="text-base font-semibold text-slate-900 break-words">{item.label}</p>
                <p className="mt-2 text-sm text-slate-500 break-words">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidato;