import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Vote, Users, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const priorities = [
  { title: 'Mobilità e Viabilità', description: 'Soluzioni innovative per un traffico più fluido e trasporti pubblici efficienti.', icon: <ArrowRight className="w-6 h-6" /> },
  { title: 'Sicurezza e Decoro', description: 'Più controllo del territorio e interventi per una città più pulita e sicura per tutti.', icon: <ArrowRight className="w-6 h-6" /> },
  { title: 'Scuola e Giovani', description: "Investimenti per l'edilizia scolastica, la didattica e nuove opportunità per i giovani.", icon: <ArrowRight className="w-6 h-6" /> },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://media.base44.com/images/public/69cbe3a4cba65e3d856379e7/f01cfaf6f_generated_56efb621.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">Gabriele Fanceschini & Denise Manente</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-primary-foreground/80">Insieme per il futuro: un nuovo inizio per la nostra città.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200">
              <Link to="/programma">
                Scopri il Programma <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/partecipa">Partecipa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Come Votare Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Come si vota</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Esprimere la tua preferenza è semplice. Segui le istruzioni e assicurati che il tuo voto sia valido.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary text-primary-foreground rounded-full">
                <Vote className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Quando e Dove</h3>
              <p className="mt-2 text-muted-foreground">Si vota il [Data]. Trova il tuo seggio elettorale.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary text-primary-foreground rounded-full">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">La Preferenza</h3>
              <p className="mt-2 text-muted-foreground">Scrivi i cognomi dei candidati accanto al simbolo della lista.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="p-4 bg-primary text-primary-foreground rounded-full">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Cosa Portare</h3>
              <p className="mt-2 text-muted-foreground">{"Porta con te un documento d'identità valido e la tessera elettorale."}</p>
            </div>
          </div>
          <Button asChild className="mt-10">
            <Link to="/come-votare">Scopri di più</Link>
          </Button>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Le Nostre Priorità</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Ci concentreremo su questi punti chiave per migliorare la nostra comunità.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorities.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {item.icon} {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Entra in Azione. Fai la Differenza.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
            Il tuo contributo è fondamentale. Unisciti a noi come volontario o sostieni la nostra campagna con una donazione.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-secondary-foreground">
              <Link to="/partecipa">Diventa Volontario</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/dona">Dona Ora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;