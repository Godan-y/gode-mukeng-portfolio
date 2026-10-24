import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, FileText, Send, MapPin, GraduationCap, CheckCircle2, Terminal } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import cyberBackdrop from '../assets/images/cyber_hacking_backdrop_1792828277505.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

const ROTATING_TITLES = [
  'Développeur Web & Mobile | Licence en Gestion Informatique Bac +3',
  'Full-Stack Developer · Flutter, Dart, React & Python',
  'Intégration d’IA & Automatisation n8n · OpenAI GPT',
  'Licence en Gestion Informatique (Bac +3) — UPN Kinshasa',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // 3D card tilt effect for portrait on desktop
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter animation state for the title
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROTATING_TITLES[titleIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Pause at full text
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Cyber Hacking Background Overlay — Harmonious with dark theme */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden select-none">
        <img
          src={cyberBackdrop}
          alt="Cyber hacking network background"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105"
          loading="eager"
        />
        {/* Gradients to blend seamlessly into #090d16 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/75 via-[#090d16]/70 to-[#090d16]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,#090d16_85%)]" />
      </div>

      {/* Dynamic Animated Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-600 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-600/15 blur-[110px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs with Staggered Entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status indicator */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/50 text-xs font-medium text-blue-300 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Name & Animated Dynamic Title */}
            <div className="space-y-3 w-full">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-none"
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              {/* Animated Typewriter Title with Terminal Caret */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="min-h-[3.25rem] sm:min-h-[2.5rem] flex items-center flex-wrap gap-1"
              >
                <div className="inline-flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    {currentText}
                  </span>
                  <span className="inline-block w-2 h-5 sm:h-6 bg-cyan-400 animate-pulse ml-0.5 rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>
              </motion.div>
            </div>

            {/* Profile Headline & Hook */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.headline}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.hook}
            </motion.p>

            {/* Unboxed metadata tags */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-slate-400 font-normal"
            >
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>UPN Kinshasa · Bac +3 (2023-2026)</span>
              </span>
              <span className="mx-2.5 text-slate-600" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kinshasa, RD Congo</span>
              </span>
              <span className="mx-2.5 text-slate-600" aria-hidden="true">·</span>
              <span className="text-cyan-300 font-medium">Flutter · React · Python · IA & n8n</span>
            </motion.div>

            {/* Action buttons with interactive hover motion */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
              >
                <span>Découvrir mes projets</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/60 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Télécharger mon CV</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-slate-400" />
                <span>Me contacter</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: High-res authentic photograph of Gode with 3D tilt perspective */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: 1000 }}
              className="relative group w-full max-w-md cursor-pointer"
            >
              {/* Backglow accent */}
              <motion.div
                animate={{
                  opacity: isHovered ? 0.35 : 0.15,
                  scale: isHovered ? 1.04 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500 blur-xl -z-10"
              />

              <motion.div
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900/60 shadow-2xl transition-shadow duration-300 group-hover:border-slate-700/80"
              >
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Gode Mukeng Mukanz au poste de travail de développement"
                  className="w-full h-auto max-h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom overlay with verified title */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">{PERSONAL_INFO.name}</p>
                      <p className="text-xs text-blue-300">Kinshasa · Espace de conception logicielle</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      <CheckCircle2 className="w-3 h-3" />
                      Profil vérifié
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Below-the-fold Quick Stats / Trust Indicators Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">4</div>
            <p className="text-xs sm:text-sm text-slate-400">Applications déployées</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 font-mono">Bac +3</div>
            <p className="text-xs sm:text-sm text-slate-400">Gestion Informatique (UPN)</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono">IA & Workflows</div>
            <p className="text-xs sm:text-sm text-slate-400">OpenAI, n8n, Python</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-slate-200">Stage DGDA</div>
            <p className="text-xs sm:text-sm text-slate-400">Direction Finances Internes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
