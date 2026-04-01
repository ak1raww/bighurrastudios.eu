import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const priorities = [
  { title: 'Mobilità e Viabilità', description: 'Soluzioni innovative per un traffico più fluido e trasporti pubblici efficienti.', icon: <ArrowRight className="w-6 h-6" /> },
  { title: 'Sicurezza e Decoro', description: 'Più controllo del territorio e interventi per una città più pulita e sicura per tutti.', icon: <ArrowRight className="w-6 h-6" /> },
  { title: 'Scuola e Giovani', description: "Investimenti per l'edilizia scolastica, la didattica e nuove opportunità per i giovani.", icon: <ArrowRight className="w-6 h-6" /> },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_20%),radial-gradient(circle_at_80%_15%,_rgba(236,72,153,0.16),_transparent_18%)]" />
        <div className="relative container min-h-[75vh] flex flex-col justify-center py-20">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Verso una città più forte
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Un progetto nuovo, concreto e sostenibile per la nostra città
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Più servizi, più sicurezza e più partecipazione: il futuro che vogliamo costruire insieme parte da idee chiare e azioni immediate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/programma">Scopri il Programma</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Mobilità', value: 'Trasporti moderni', description: 'Proposte per una viabilità più sostenibile e senza ingorghi.' },
              { title: 'Decoro', value: 'Spazi curati', description: 'Piazze, giardini e strade curate per una città più bella.' },
              { title: 'Giovani', value: 'Opportunità reali', description: 'Investimenti in formazione, cultura e sport per i più giovani.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.title}</p>
                <p className="mt-4 text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-950/80">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {priorities.map((item) => (
              <Card key={item.title} className="border border-white/10 bg-slate-900/85 shadow-2xl shadow-slate-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-12 text-center shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Partecipa al cambiamento</h2>
            <p className="mt-4 text-slate-300">Sostieni la campagna con un contributo, diventa volontario o condividi il messaggio con le persone della tua comunità.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/partecipa">Diventa Volontario</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contatti">Dona Ora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
