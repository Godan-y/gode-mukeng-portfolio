import React from 'react';
import { Lightbulb, Code2, Layers, Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090d16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with In-View Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3 mb-16"
        >
          <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            À propos de moi
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transformer des besoins réels en plateformes numériques fiables
          </h2>
        </motion.div>

        {/* 2-column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: First-Person Bio sliding from left */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg"
          >
            <p>
              Je m'appelle <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. Développeur Full-Stack et étudiant en <strong className="text-white font-semibold">Licence Gestion Informatique (Bac +3)</strong> à l'Université Pédagogique Nationale (UPN) à Kinshasa, je suis spécialisé dans le développement d’applications web et mobiles, l’intégration de solutions d’intelligence artificielle et l’automatisation des processus métier.
            </p>

            <p>
              Mon expérience concrète s’appuie sur la conception d’architectures numériques robustes avec <span className="text-blue-300 font-medium">Flutter</span> pour le mobile, <span className="text-blue-300 font-medium">React</span> pour le web, <span className="text-blue-300 font-medium">Python</span> et <span className="text-blue-300 font-medium">Node.js</span> pour le backend, ainsi que <span className="text-blue-300 font-medium">Firebase</span> et <span className="text-blue-300 font-medium">AWS</span> pour le cloud. J'intègre des modèles d'IA (OpenAI GPT, Google IA Studio) et des flux automatisés avec <span className="text-blue-300 font-medium">n8n</span> pour concevoir des applications intelligentes et opérationnelles en un temps record.
            </p>

            <p>
              Sur le plan pratique, j'ai notamment effectué un stage académique au sein de la <strong className="text-white font-semibold">DGDA (Direction Générale des Douanes et Accises)</strong> à la Direction des Finances Internes (DFI), où j'ai participé au suivi des opérations financières internes. En parallèle, j'ai développé en autonomie plusieurs solutions déployées : <span className="text-blue-300 font-medium">GM Immo Kin</span> (immobilier kinois sous Flutter & Firebase avec notifications en temps réel), <span className="text-blue-300 font-medium">Mayele / GM Biblio</span> (bibliothèque avec IA et automatisation n8n), <span className="text-blue-300 font-medium">Goying</span> (marketplace multi-services) et <span className="text-blue-300 font-medium">BOOOST</span> (branding digital).
            </p>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 transition-all shadow-md"
            >
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" />
                <span>Disponibilité & Objectif</span>
              </h3>
              <p className="text-sm text-slate-400 leading-normal">
                Je suis immédiatement disponible pour des opportunités d’<strong>emploi</strong>, de <strong>stage</strong> ou des missions <strong>freelance</strong>, avec la capacité de concevoir et développer des solutions robustes, modernes et rapidement opérationnelles.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Core Working Principles with Staggered Entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="lg:col-span-5 space-y-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30, y: 15 },
                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 transition-colors group cursor-default shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/20 transition-all">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                Rigueur de modélisation & Systèmes d'information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Formation académique approfondie en méthodes Merise et UML. Je structure les schémas de données et les règles de gestion avant d'écrire la moindre ligne de code.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30, y: 15 },
                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 transition-colors group cursor-default shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600/20 transition-all">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                Développement moderne & Pragmatisme
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Utilisation des technologies éprouvées (Flutter, Dart, React, Python, n8n, Firebase) pour des applications rapides, fiables et faciles à maintenir.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30, y: 15 },
                visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 transition-colors group cursor-default shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600/20 transition-all">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                Sens du produit & Réalités locales
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Conception d'interfaces adaptées aux contraintes réelles des utilisateurs kinois et africains : navigation intuitive, optimisation des débits réseau et intégration naturelle de WhatsApp.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
