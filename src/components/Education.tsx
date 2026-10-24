import React from 'react';
import { GraduationCap, Award, Briefcase, Calendar, MapPin, CheckCircle2, Globe, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_LIST, WORK_EXPERIENCES, LANGUAGES } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#070b13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with in-view entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3 mb-16"
        >
          <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Formation & Expérience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cursus académique et expérience professionnelle
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Une formation rigoureuse en Gestion Informatique à l’Université Pédagogique Nationale (UPN), complétée par un stage au sein de la Direction des Finances Internes (DGDA) et la conception de projets techniques d’envergure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Academic Background & Languages */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-300">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span>Formation Universitaire</span>
            </div>

            <div className="space-y-6 relative before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-600 before:to-slate-800">
              {EDUCATION_LIST.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative pl-8 space-y-3"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-[#070b13] -translate-x-1/2 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

                  <motion.div
                    whileHover={{ y: -3, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                    className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 transition-colors shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.institution} · {edu.location}</span>
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="pt-2 border-t border-slate-800/50 space-y-1.5">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Compétences & acquis académiques :
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {edu.competencies.map((comp, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                            <span>{comp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Languages Card with motion hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Langues maîtrisées</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {LANGUAGES.map((lang) => (
                  <motion.div
                    key={lang.language}
                    whileHover={{ scale: 1.03 }}
                    className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-white">{lang.language}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{lang.level}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience & DGDA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-300">
              <Building2 className="w-5 h-5 text-indigo-400" />
              <span>Expérience Professionnelle</span>
            </div>

            <div className="space-y-6">
              {WORK_EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                  className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                      Stage académique
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-indigo-300 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {exp.department} · {exp.location}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/50">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Activités & contributions clés :
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Technical realization badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-slate-400 leading-relaxed space-y-2"
              >
                <span className="font-semibold text-blue-300 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  Pratique de développement en autonomie
                </span>
                <p>
                  Conception de bout en bout de solutions opérationnelles (GM Immo Kin en Flutter, Mayele IA avec n8n, Goying avec Python/React) menées avec un niveau d'exigence professionnel.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
