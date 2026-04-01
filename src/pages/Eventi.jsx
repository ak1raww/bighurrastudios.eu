import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

const events = [
  { id: 1, title: 'Aperitivo Elettorale', date: '2026-04-05', time: '18:30 - 21:00', location: 'Piazza Municipio', description: 'Un momento informale per incontrare i candidati, fare domande e conoscere il programma. Aperto a tutti!', type: 'Incontro' },
  { id: 2, title: 'Assemblea Pubblica sulla Mobilità', date: '2026-04-10', time: '20:00 - 22:00', location: 'Sala Civica', description: 'Presentazione del piano per la mobilità sostenibile con intervento di esperti del settore.', type: 'Assemblea' },
  { id: 3, title: 'Passeggiata nel Quartiere Nord', date: '2026-04-12', time: '10:00 - 12:00', location: 'Parco Quartiere Nord', description: 'Visita guidata nel quartiere per ascoltare le esigenze dei residenti e raccogliere proposte.', type: 'Territorio' },
  { id: 4, title: 'Dibattito Pubblico con i Candidati', date: '2026-04-18', time: '21:00 - 23:00', location: 'Teatro Comunale', description: 'Confronto aperto tra i candidati di tutte le liste. Modera un giornalista locale.', type: 'Dibattito' },
];

const Eventi = () => {
  return (
    <div className="py-10 lg:py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Eventi</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Partecipa ai nostri eventi. Incontraci di persona e facci sentire la tua voce.
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge>{event.type}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-1"><CalendarDays className="w-4 h-4" />{event.date}</div>
                  <div className="flex items-center text-sm text-muted-foreground gap-1"><Clock className="w-4 h-4" />{event.time}</div>
                  <div className="flex items-center text-sm text-muted-foreground gap-1"><MapPin className="w-4 h-4" />{event.location}</div>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <CardDescription className="text-base">{event.description}</CardDescription>
                <Button size="sm" className="whitespace-nowrap">Partecipa</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventi;