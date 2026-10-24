import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Code2, Briefcase, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, SKILL_CATEGORIES, WORK_EXPERIENCES, LANGUAGES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadDirect = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPdfUrl;
    link.download = 'Gode-Mukeng-Mukanz-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cv-title"
        >
          <motion.div
            key="resume-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-slate-900/95 border-b border-slate-800 backdrop-blur no-print">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h2 id="modal-cv-title" className="text-base sm:text-lg font-bold text-white">
                  Curriculum Vitæ — {PERSONAL_INFO.name}
                </h2>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Imprimer ou enregistrer en PDF via le navigateur"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Imprimer / PDF</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={handleDownloadDirect}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-500/20 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Télécharger le CV officiel</span>
                </motion.button>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  aria-label="Fermer la vue CV"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable CV Document Content */}
            <div className="p-6 sm:p-10 overflow-y-auto no-scrollbar bg-white text-slate-900 print:p-0 print:bg-white print:text-black print-page">
              {/* Document Header */}
              <div className="border-b-2 border-slate-900 pb-5 mb-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-sm font-semibold text-blue-800 print:text-black mt-1">
                      {PERSONAL_INFO.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-mono mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-slate-500" />
                        <span>{PERSONAL_INFO.email}</span>
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-slate-500" />
                        <span>{PERSONAL_INFO.whatsappDisplay}</span>
                      </span>
                      <span>|</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{PERSONAL_INFO.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profil Professionnel */}
              <div className="mb-6 space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                  Profil Professionnel
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">
                  {PERSONAL_INFO.headline} {PERSONAL_INFO.hook}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs leading-relaxed">
                {/* Left Column: Expérience, Projets & Formation */}
                <div className="md:col-span-8 space-y-6">
                  {/* Expérience Professionnelle (DGDA) */}
                  <div className="space-y-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-700" />
                      <span>Expérience Professionnelle</span>
                    </h2>
                    {WORK_EXPERIENCES.map((exp, i) => (
                      <div key={i} className="space-y-1 pt-1">
                        <div className="flex justify-between items-baseline">
                          <strong className="text-xs font-bold text-slate-900">{exp.company} — {exp.department}</strong>
                          <span className="font-mono text-[11px] text-slate-600">{exp.period}</span>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-800">{exp.role}</p>
                        <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-0.5">
                          {exp.achievements.map((a, j) => (
                            <li key={j}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Réalisations & Projets Techniques */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-700" />
                      <span>Réalisations & Projets Techniques</span>
                    </h2>
                    <div className="space-y-4">
                      {PROJECTS.map((project) => (
                        <div key={project.id} className="space-y-1">
                          <div className="flex justify-between items-baseline">
                            <strong className="text-xs font-bold text-slate-900">{project.title}</strong>
                            <span className="text-[10px] font-mono text-slate-500">{project.highlight}</span>
                          </div>
                          <p className="text-[11px] text-slate-700">
                            {project.shortDescription}
                          </p>
                          <ul className="list-disc list-inside text-[10.5px] text-slate-600 space-y-0.5">
                            {project.features.slice(0, 3).map((f, idx) => (
                              <li key={idx}>{f}</li>
                            ))}
                          </ul>
                          <p className="text-[10px] font-mono text-blue-800 print:text-slate-600">
                            Stack : {project.technologies.join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                      <span>Éducation</span>
                    </h2>
                    {EDUCATION_LIST.map((edu, i) => (
                      <div key={i} className="space-y-0.5 pt-1">
                        <div className="flex justify-between items-baseline">
                          <strong className="text-xs font-bold text-slate-900">{edu.degree}</strong>
                          <span className="font-mono text-[11px] text-slate-600">{edu.period}</span>
                        </div>
                        <p className="text-[11px] text-slate-700 font-medium">{edu.institution} — {edu.location}</p>
                        <p className="text-[10.5px] text-slate-600">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Compétences Techniques & Langues */}
                <div className="md:col-span-4 space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-700" />
                      <span>Compétences Techniques</span>
                    </h2>
                    <div className="space-y-3 pt-1">
                      {SKILL_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="space-y-1">
                          <p className="font-bold text-[11px] text-slate-900">{cat.name}</p>
                          <ul className="text-[10.5px] text-slate-700 space-y-0.5 list-disc list-inside">
                            {cat.skills.map((s) => (
                              <li key={s.name}>
                                <span className="font-medium text-slate-900">{s.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Langues */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-200">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Langues
                    </h2>
                    <ul className="text-[11px] text-slate-700 space-y-0.5">
                      {LANGUAGES.map((l) => (
                        <li key={l.language}>
                          <strong>{l.language} :</strong> {l.level}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-500 print:text-[9px]">
                Curriculum Vitæ officiel de {PERSONAL_INFO.name} · Kinshasa, RD Congo · Email : {PERSONAL_INFO.email} · Tél : {PERSONAL_INFO.whatsappDisplay}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
