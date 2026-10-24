import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormValues } from '../types/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<ContactFormValues> = {};
    if (!formData.name.trim()) errs.name = 'Veuillez renseigner votre nom.';
    if (!formData.email.trim()) {
      errs.email = 'Veuillez renseigner votre adresse e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Veuillez saisir une adresse e-mail valide.';
    }
    if (!formData.subject.trim()) errs.subject = 'Veuillez préciser l’objet de votre demande.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Votre message doit contenir au moins 10 caractères.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject} - De ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nObjet: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Gode, j'ai découvert votre portfolio et votre CV. Je souhaite échanger avec vous concernant une opportunité professionnelle ou un projet.`
  );
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090d16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with in-view animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-3 mb-16"
        >
          <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Contact & Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Échangeons sur vos projets ou opportunités
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Que vous recherchiez un profil en Gestion Informatique, un développeur Flutter/React ou un partenaire technique pour concevoir et déployer votre solution, je réponds avec réactivité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct channels with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Adresse e-mail directe</span>
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded flex items-center gap-1 transition-colors cursor-pointer"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </motion.button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors block break-all font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-400">
                Canal direct pour les opportunités professionnelles, offres d'emploi, stages et missions.
              </p>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(16, 185, 129, 0.4)' }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Échange WhatsApp direct</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">Réponse rapide</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base font-semibold text-white">
                  {PERSONAL_INFO.whatsappDisplay}
                </span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Démarrer la discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
              <p className="text-xs text-slate-400">
                Idéal pour les questions rapides, les prises de contact ou les devis de projets.
              </p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: 'rgba(244, 63, 94, 0.4)' }}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2 transition-colors shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Localisation</span>
              </span>
              <p className="text-base font-semibold text-white">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-slate-400">
                Disponible pour des rencontres professionnelles à Kinshasa et des collaborations à distance partout dans le monde.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Envoyer un message direct
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Remplissez les informations ci-dessous. Le message sera transmis directement et préparé pour confirmation dans votre messagerie.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">Message prêt à être expédié !</p>
                    <p>
                      Votre client de messagerie s'est ouvert avec les éléments pré-remplis pour un envoi sécurisé à <strong>{PERSONAL_INFO.email}</strong>.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Nom complet <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Jean Mukendi, Sarah Kabasele..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.name ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Adresse e-mail <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre.email@domaine.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.email ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Objet de votre demande <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Proposition de stage, Développement d'une application web..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.subject ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Votre message détaillé <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Présentez votre entreprise, votre besoin ou votre projet en quelques lignes..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.message ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button with motion interaction */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-60 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Préparation du message...</span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
