import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Layers, Code, Target, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <motion.div
            key="project-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1220] border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto no-scrollbar flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-[#0c1220]/95 backdrop-blur-md border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                  <span>Étude de projet</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                </div>
                <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/25"
                >
                  <span>Visiter le site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  aria-label="Fermer la fenêtre"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-8">
              {/* Main preview screenshot */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/80 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`Capture d'écran de l'application ${project.title}`}
                  className="h-auto max-h-[500px] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-slate-800/80"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Tagline & short description */}
              <div className="space-y-2">
                <p className="text-lg font-medium text-blue-300">
                  {project.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wide">
                    <HelpCircle className="w-4 h-4" />
                    <span>Problématique traitée</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    <Target className="w-4 h-4" />
                    <span>Solution apportée</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Context */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Contexte & Enjeux</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.context}
                </p>
              </div>

              {/* Verified features list */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Fonctionnalités principales vérifiées
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role & Technical Architecture */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code className="w-4 h-4 text-indigo-400" />
                  <span>Mon rôle & Architecture technique</span>
                </h3>
                <div className="space-y-2">
                  {project.roleAndArchitecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies used */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technologies réellement utilisées
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-200 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal bottom CTA */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Lien officiel vérifié vers l’application hébergée
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/25"
                  >
                    <span>Visiter {project.title}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
