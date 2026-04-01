import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900">Fanceschini & Manente</h3>
            <p className="text-sm text-slate-600">Una squadra che crede in una città più inclusiva, sicura e moderna.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Navigazione</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><Link to="/programma" className="transition hover:text-primary">Programma</Link></li>
              <li><Link to="/come-votare" className="transition hover:text-primary">Come Votare</Link></li>
              <li><Link to="/partecipa" className="transition hover:text-primary">Partecipa</Link></li>
              <li><Link to="/contatti" className="transition hover:text-primary">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contatti</h4>
            <p className="text-sm text-slate-700">Email: <a href="mailto:info@example.com" className="text-primary hover:underline">info@example.com</a></p>
            <p className="mt-2 text-sm text-slate-700">Telefono: <a href="tel:+390123456789" className="text-primary hover:underline">+39 012 345 6789</a></p>
            <p className="mt-2 text-sm text-slate-700">Sede: Piazza Centrale, 1 - 30100 Venezia</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Comitato Elettorale Fanceschini & Manente. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
