import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const primaryButtonClass =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm text-slate-900 ' +
  'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 ' +
  'shadow-lg shadow-amber-900/30 transition-all duration-200 hover:shadow-amber-900/50 active:scale-[0.98]';

export const secondaryButtonClass =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold text-sm text-white ' +
  'border border-white/15 bg-white/[0.08] hover:bg-white/[0.14] hover:border-white/25 ' +
  'backdrop-blur-sm transition-all duration-200 active:scale-[0.98]';

export const inputClassName =
  'w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white ' +
  'placeholder:text-slate-500 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 ' +
  'outline-none transition-all duration-200';

export const textareaClassName =
  'w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white ' +
  'placeholder:text-slate-500 focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 ' +
  'outline-none transition-all duration-200 resize-none min-h-[120px]';

export const labelClassName = 'block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  premium?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = '', hover = false, premium = false }: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6',
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

interface SectionShellProps {
  children: ReactNode;
  className?: string;
}

export function SectionShell({ children, className = '' }: SectionShellProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, description, centered = false }: SectionHeadingProps) {
  const sub = subtitle || description;
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">{title}</h2>
      {sub && (
        <p className={`text-base md:text-lg max-w-2xl text-slate-400 ${centered ? 'mx-auto' : ''}`}>{sub}</p>
      )}
    </div>
  );
}

interface PageHeroMeta {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  meta?: PageHeroMeta;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, meta, children }: PageHeroProps) {
  const e = meta?.eyebrow ?? eyebrow;
  const t = meta?.title ?? title ?? '';
  const s = meta?.subtitle ?? meta?.description ?? subtitle;

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
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
        {e && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4"
          >
            {e}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
        >
          {t}
        </motion.h1>
        {s && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-3xl leading-relaxed"
          >
            {s}
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
