import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Heart, Eye, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Marco Bianchi', role: 'Portavoce', description: 'Esperto in comunicazione politica con oltre 10 anni di esperienza.' },
  { name: 'Laura Verdi', role: 'Responsabile Programma', description: 'Urbanista e consulente per la pubblica amministrazione.' },
  { name: 'Andrea Rossi', role: 'Responsabile Volontari', description: 'Coordinatore di associazioni e movimenti civici locali.' },
];

const Candidato = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">I Candidati</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri chi siamo, i nostri valori e la squadra che ci supporta.
          </p>
        </div>

        {/* Gabriele Fanceschini */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-[4/5] bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
            [Foto Gabriele Fanceschini]
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
            <Button variant="outline" className="mt-6"><Download className="mr-2 h-4 w-4" />Scarica CV</Button>
          </div>
        </div>

        {/* Denise Manente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-1 md:order-2 aspect-[4/5] bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
            [Foto Denise Manente]
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
            <Button variant="outline" className="mt-6"><Download className="mr-2 h-4 w-4" />Scarica CV</Button>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><Users className="w-7 h-7" /> Il Nostro Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <div className="w-16 h-16 bg-muted rounded-full mb-2"></div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium font-sans">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trasparenza */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Trasparenza</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />CV Fanceschini</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />CV Manente</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />Dichiarazioni</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />Incarichi</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidato;