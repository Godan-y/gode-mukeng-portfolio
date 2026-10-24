import React, { useState } from 'react';
import { ExternalLink, BookOpen, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Immobilier', 'Éducation', 'Marketplace', 'Marketing'];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090d16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with In-View Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Réalisations concrètes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projets majeurs déployés & fonctionnels
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Quatre applications complètes développées en conditions réelles. Cliquez sur une carte pour explorer l'étude de cas détaillée ou visitez directement l'application en ligne.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'Tous les projets' : cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid: 2-column with Staggered Entrance & Interactive Hover */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.45)' }}
                className="flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800/80 overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Screenshot container with interactive zoom */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`Capture d'écran de l'application ${project.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-900/90 border border-slate-700/80 text-blue-300 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Live badge top-right */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-950/80 border border-emerald-500/40 text-emerald-300 backdrop-blur-md shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Interface réelle</span>
                    </span>
                  </div>

                  {/* Shimmer prompt */}
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-md shadow-md">
                      <span>Étude de projet</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Title & Tagline */}
                    <div>
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs text-blue-400 font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Verified Features */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Points vérifiés :
                      </p>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges with hover feedback */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50 group-hover:border-slate-600/70 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>Étude du projet</span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-500/25"
                    >
                      <span>Visiter le projet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
