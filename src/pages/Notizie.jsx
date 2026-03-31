import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

const articles = [
  { id: 1, title: 'Presentazione ufficiale della lista', date: '2026-03-28', category: 'Annuncio', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, title: 'Incontro pubblico in piazza', date: '2026-03-25', category: 'Evento', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 3, title: 'La nostra visione per la mobilità sostenibile', date: '2026-03-22', category: 'Programma', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 4, title: 'Intervista esclusiva con Gabriele Fanceschini', date: '2026-03-20', category: 'Media', excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 5, title: 'Nuove adesioni al comitato elettorale', date: '2026-03-18', category: 'Annuncio', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.' },
  { id: 6, title: 'Proposta per la riqualificazione del parco cittadino', date: '2026-03-15', category: 'Programma', excerpt: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.' },
];

const Notizie = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Notizie</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Resta aggiornato sulle ultime novità della campagna elettorale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
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
      </div>
    </div>
  );
};

export default Notizie;