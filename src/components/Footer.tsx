import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-slate-400">
              Développeur Web & Applications · Gestion Informatique (UPN) · Kinshasa, RDC
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
            <a href="#education" className="hover:text-white transition-colors">Formation</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Retour en haut de page"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">Haut de page</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1">
            <span>Conçu & développé avec rigueur pour le web</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
