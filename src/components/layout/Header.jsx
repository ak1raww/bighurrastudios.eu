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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg font-serif">Fanceschini & Manente</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" size="sm"><Link to="/contatti">Contatti</Link></Button>
            <Button size="sm">Dona</Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2 border-t">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:text-primary hover:bg-accent" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
               <div className="flex items-center space-x-4 pt-4">
                <Button asChild variant="outline" className="w-full"><Link to="/contatti">Contatti</Link></Button>
                <Button className="w-full">Dona</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;