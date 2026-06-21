import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const primaryButtonClass =
  'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-900 ' +
  'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 ' +
  'shadow-lg shadow-amber-900/30 transition-all duration-200 hover:shadow-amber-900/50 hover:-translate-y-0.5';

export const secondaryButtonClass =
  'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white ' +
  'border border-white/15 bg-white/[0.08] hover:bg-white/[0.14] hover:border-white/25 ' +
  'backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5';

export const inputClassName =
  'w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white ' +
  'placeholder:text-slate-500 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 ' +
  'outline-none transition-all duration-200';

export const labelClassName = 'block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  premium?: boolean;
}

export function GlassCard({ children, className = '', hover = false, premium = false }: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm',
        hover ? 'card-lift cursor-pointer' : '',
        premium ? 'card-premium' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-slate-300' : 'text-slate-400'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 60% 0%, rgba(217,171,83,0.12) 0%, transparent 60%),' +
            'radial-gradient(ellipse at 10% 50%, rgba(30,64,175,0.12) 0%, transparent 50%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
