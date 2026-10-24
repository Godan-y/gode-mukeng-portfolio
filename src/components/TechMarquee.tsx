import React from 'react';

const TECH_ITEMS = [
  'Flutter & Dart',
  'Firebase Firestore',
  'OpenAI GPT API',
  'n8n Workflows',
  'Python',
  'React',
  'Node.js & Express',
  'AWS Cloud',
  'Supabase',
  'MySQL',
  'Gestion Informatique UPN',
  'Stage DGDA Finances',
  'FCM Push Notifications',
  'Render & Firebase Hosting',
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="py-6 border-y border-slate-800/80 bg-[#060a12] overflow-hidden select-none group">
      <div className="flex w-max items-center gap-8 animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
        {/* First set */}
        {TECH_ITEMS.map((item, idx) => (
          <div key={`a-${idx}`} className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
            <span className="hover:text-blue-400 transition-colors whitespace-nowrap">{item}</span>
            <span className="text-blue-500/60" aria-hidden="true">✦</span>
          </div>
        ))}
        {/* Duplicate set for seamless continuous loop */}
        {TECH_ITEMS.map((item, idx) => (
          <div key={`b-${idx}`} className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-400">
            <span className="hover:text-blue-400 transition-colors whitespace-nowrap">{item}</span>
            <span className="text-blue-500/60" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
