import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays } from 'lucide-react';

const priorities = [
  { title: 'Mobilità e Viabilità', description: 'Soluzioni innovative per un traffico più fluido e trasporti pubblici efficienti.', icon: <ArrowRight className="w-6 h-6" /> },
  { title: 'Sicurezza e Decoro', description: 'Più controllo del territorio e interventi per una città più pulita e sicura per tutti.', icon: <ArrowRight className="w-6 h-6" /> },
  { title: 'Scuola e Giovani', description: "Investimenti per l'edilizia scolastica, la didattica e nuove opportunità per i giovani.", icon: <ArrowRight className="w-6 h-6" /> },
];

const updates = [
  { id: 1, title: 'Aperitivo elettorale in Piazza Municipio', date: '5 Aprile', category: 'Evento', excerpt: 'Un momento informale per incontrare i candidati e ascoltare le proposte per il territorio.', path: '/eventi' },
  { id: 2, title: 'Presentazione ufficiale della lista', date: '28 Marzo', category: 'Notizie', excerpt: 'Scopri la visione completa e le priorità del nostro progetto per la città.', path: '/notizie' },
  { id: 3, title: 'Assemblea pubblica sulla mobilità', date: '10 Aprile', category: 'Evento', excerpt: 'Partecipa al dibattito sulle soluzioni per il traffico e i trasporti sostenibili.', path: '/eventi' },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_22%),radial-gradient(circle_at_80%_15%,_rgba(236,72,153,0.08),_transparent_16%)]" />
        <div className="relative container min-h-[75vh] flex flex-col justify-center py-12">
          <div className="max-w-4xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-xl">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Verso una città più forte
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Un progetto nuovo, concreto e sostenibile per la nostra città
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Più servizi, più sicurezza e più partecipazione: il futuro che vogliamo costruire insieme parte da idee chiare e azioni immediate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/programma">Scopri il Programma</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { title: 'Mobilità', value: 'Trasporti moderni', description: 'Proposte per una viabilità più sostenibile e senza ingorghi.' },
              { title: 'Decoro', value: 'Spazi curati', description: 'Piazze, giardini e strade curate per una città più bella.' },
              { title: 'Giovani', value: 'Opportunità reali', description: 'Investimenti in formazione, cultura e sport per i più giovani.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/30">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{item.title}</p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-slate-50">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-primary">Notizie & Eventi</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tutto ciò che accade in una sola pagina</h2>
              <p className="mt-3 max-w-2xl text-slate-600">Aggiorniamo costantemente le iniziative e gli appuntamenti della campagna così sai subito dove essere presente.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <Link to="/notizie">Scopri tutti</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {updates.map((item) => (
              <Card key={item.id} className="border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={item.category === 'Evento' ? 'secondary' : 'outline'}>{item.category}</Badge>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.excerpt}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                    <ArrowRight className="w-4 h-4" />
                    <Link to={item.path} className="transition hover:text-primary/90">Vai alla notizia</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-slate-50">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm shadow-slate-200/30">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Partecipa al cambiamento</h2>
            <p className="mt-4 text-slate-600">Hai un'idea da proporre? Vuoi collaborare con noi nella campagna? Scrivici e raccontaci il tuo punto di vista.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contatti">Contattaci per collaborare</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/partecipa">Partecipa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
