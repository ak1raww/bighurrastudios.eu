import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Fanceschini & Manente</h3>
            <p className="text-sm text-slate-400">Una squadra che crede in una città più inclusiva, sicura e moderna.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navigazione</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/programma" className="transition hover:text-white">Programma</Link></li>
              <li><Link to="/come-votare" className="transition hover:text-white">Come Votare</Link></li>
              <li><Link to="/partecipa" className="transition hover:text-white">Partecipa</Link></li>
              <li><Link to="/contatti" className="transition hover:text-white">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contatti</h4>
            <p className="text-sm text-slate-300">Email: <a href="mailto:info@example.com" className="text-white hover:underline">info@example.com</a></p>
            <p className="mt-2 text-sm text-slate-300">Telefono: <a href="tel:+390123456789" className="text-white hover:underline">+39 012 345 6789</a></p>
            <p className="mt-2 text-sm text-slate-300">Sede: Piazza Centrale, 1 - 30100 Venezia</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Comitato Elettorale Fanceschini & Manente. Tutti i diritti riservati.</p>
          <p className="mt-1">Design moderno e responsive per il sito.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
