import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Fanceschini & Manente</h3>
            <p className="text-sm text-muted-foreground">Insieme per il futuro della nostra città.</p>
            <div className="flex space-x-4">
              {/* Add Social Icons Here */}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Link Utili</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/programma" className="hover:underline">Programma</Link></li>
              <li><Link to="/come-votare" className="hover:underline">Come Votare</Link></li>
              <li><Link to="/partecipa" className="hover:underline">Partecipa</Link></li>
              <li><Link to="/eventi" className="hover:underline">Eventi</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Legale</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
              <li><Link to="/termini-e-condizioni" className="hover:underline">Termini e Condizioni</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Dove Siamo</h4>
            <div className="rounded-lg overflow-hidden border">
              <iframe
                title="Venezia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45164.29!2d12.3155!3d45.4408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenezia%20VE!5e0!3m2!1sit!2sit!4v1711900000000"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Comitato Elettorale Fanceschini & Manente. Tutti i diritti riservati.</p>
          <p className="mt-1">Realizzato da [Credits]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;