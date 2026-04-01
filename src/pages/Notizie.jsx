import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const articles = [
  { id: 1, title: 'Presentazione ufficiale della lista', date: '2026-03-28', category: 'Annuncio', excerpt: 'Abbiamo presentato la squadra e le priorità della campagna elettorale.' },
  { id: 2, title: 'Incontro pubblico in piazza', date: '2026-03-25', category: 'Evento', excerpt: 'Un confronto aperto con i cittadini per raccogliere proposte e rispondere alle domande.' },
  { id: 3, title: 'La nostra visione per la mobilità sostenibile', date: '2026-03-22', category: 'Programma', excerpt: 'Proposte concrete per migliorare traffico e trasporti pubblici in città.' },
];

const events = [
  { id: 1, title: 'Aperitivo elettorale', date: '2026-04-05', location: 'Piazza Municipio', description: 'Un momento informale per incontrare i candidati e conoscere il programma.', category: 'Incontro' },
  { id: 2, title: 'Assemblea sulla mobilità', date: '2026-04-10', location: 'Sala Civica', description: 'Scopri le soluzioni per una città più sostenibile e partecipa al dibattito pubblico.', category: 'Assemblea' },
];

const Notizie = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Notizie & Eventi</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutte le novità e gli appuntamenti della campagna raccolti in un unico spazio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group border border-white/10 bg-slate-900/85">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <CalendarDays className="w-3 h-3" />{article.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="outline">Eventi</Badge>
              <span className="text-sm text-slate-400">Appuntamenti aperti a tutti, aggiornati in tempo reale.</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Partecipa agli eventi in programma</h2>
            <p className="mt-4 text-slate-300">Controlla le date, scegli l'appuntamento più vicino e fai sentire la tua voce.</p>
          </div>
          <Button asChild variant="outline" size="sm" className="self-start">
            <Link to="/partecipa">Scarica i materiali</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="border border-white/10 bg-slate-900/85 shadow-2xl shadow-slate-950/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge>{event.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <CalendarDays className="w-3 h-3" />{event.date}
                  </div>
                </div>
                <CardTitle className="text-lg text-white">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />{event.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notizie;