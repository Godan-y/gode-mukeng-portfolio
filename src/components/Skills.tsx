import React, { useState } from 'react';
import {
  Code,
  Atom,
  FileCode2,
  Palette,
  Layout,
  Smartphone,
  Server,
  Workflow,
  Network,
  ShieldCheck,
  Database,
  Key,
  Cloud,
  Table,
  GitBranch,
  Flame,
  Cpu,
  Zap,
  Send,
  Binary,
  Users,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechMarquee } from './TechMarquee';

const getSkillIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-5 h-5 text-blue-400" />,
    Atom: <Atom className="w-5 h-5 text-blue-400" />,
    Code: <Code className="w-5 h-5 text-blue-400" />,
    FileCode2: <FileCode2 className="w-5 h-5 text-blue-400" />,
    Palette: <Palette className="w-5 h-5 text-blue-400" />,
    Layout: <Layout className="w-5 h-5 text-blue-400" />,
    Server: <Server className="w-5 h-5 text-indigo-400" />,
    Workflow: <Workflow className="w-5 h-5 text-indigo-400" />,
    Network: <Network className="w-5 h-5 text-indigo-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />,
    Key: <Key className="w-5 h-5 text-emerald-400" />,
    Cloud: <Cloud className="w-5 h-5 text-emerald-400" />,
    Table: <Table className="w-5 h-5 text-emerald-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-amber-400" />,
    Flame: <Flame className="w-5 h-5 text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Send: <Send className="w-5 h-5 text-amber-400" />,
    Binary: <Binary className="w-5 h-5 text-purple-400" />,
    Users: <Users className="w-5 h-5 text-purple-400" />,
    Compass: <Compass className="w-5 h-5 text-purple-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-purple-400" />,
  };

  return icons[iconName] || <Code className="w-5 h-5 text-slate-400" />;
};

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const filteredCategories =
    activeCategoryId === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategoryId);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#070b13] overflow-hidden">
      {/* Infinite Horizontal Running Marquee */}
      <div className="mb-16">
        <TechMarquee />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with In-View Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3 mb-10"
        >
          <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Compétences techniques & méthodologiques
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies vérifiées et savoir-faire appliqué
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Une sélection rigoureuse des outils, langages et environnements effectivement mis en œuvre dans mes projets et consolidés par ma formation en Gestion Informatique.
          </p>
        </motion.div>

        {/* Interactive Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveCategoryId('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
            }`}
          >
            Toutes les compétences ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </motion.button>
          {SKILL_CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategoryId === category.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Categories Grid with Staggered Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="border-b border-slate-800/80 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{category.name}</span>
                  </h3>
                  <span className="text-xs text-slate-400">
                    {category.description}
                  </span>
                </div>

                {/* Skills cards within category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -3, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                      className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/60 transition-all flex flex-col justify-between group shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-800/60 group-hover:scale-110 group-hover:bg-slate-800 transition-all">
                              {getSkillIcon(skill.iconName)}
                            </div>
                            <span className="text-base font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        {skill.details && (
                          <p className="text-xs text-slate-400 leading-relaxed pt-1">
                            {skill.details}
                          </p>
                        )}
                      </div>

                      {/* Level as clean unboxed text */}
                      <div className="pt-3 mt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Niveau</span>
                        <span className="text-slate-300 font-medium">{skill.level}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
