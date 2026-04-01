import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Candidati', path: '/candidato' },
  { name: 'Programma', path: '/programma' },
  { name: 'Notizie', path: '/notizie' },
  { name: 'Eventi', path: '/eventi' },
  { name: 'Come Votare', path: '/come-votare' },
  { name: 'Partecipa', path: '/partecipa' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-sm backdrop-blur-xl">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col">
          <span className="text-lg font-semibold uppercase tracking-[0.24em] text-white">Fanceschini & Manente</span>
          <span className="text-xs tracking-[0.2em] text-slate-400">Volti nuovi per la città</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/contatti">Contatti</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contatti">Dona</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="flex flex-col px-4 pt-4 pb-5 space-y-2 border-t border-white/10 bg-slate-950/95">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-slate-900 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid gap-3 pt-3">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contatti">Contatti</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link to="/contatti">Dona</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
