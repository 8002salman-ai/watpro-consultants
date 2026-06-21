import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Compass,
  Factory,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Layers3,
  Leaf,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/cn";
import { type IconKey, type PageMeta } from "../data/watproContent";

export const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-4 py-2.5 text-[13px] font-bold text-slate-900 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(217,119,6,0.3)] focus:outline-none focus:ring-2 focus:ring-amber-400/50";
export const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/60 hover:text-amber-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400/40";
export const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/20";
export const textareaClassName = `${inputClassName} min-h-[120px] resize-y`;

export const iconMap: Record<IconKey, LucideIcon> = {
  compass: Compass,
  rocket: Rocket,
  academy: GraduationCap,
  government: Landmark,
  assurance: ShieldCheck,
  partnership: Handshake,
  systems: Layers3,
  commercial: BriefcaseBusiness,
  analytics: BarChart3,
  people: Users2,
  knowledge: BookOpen,
  global: Globe2,
  calendar: CalendarDays,
  infrastructure: Building2,
  network: Waypoints,
  contracts: Scale,
  sustainability: Leaf,
  strategy: Target,
  industry: Factory,
  building: Building2,
  layers: Layers3,
  premium: Sparkles,
};

export function SectionShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("px-4 py-10 md:px-6 md:py-12", className)}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl md:leading-[1.15]">
          {title}
        </h2>
        <p className="mt-3 text-[13.5px] leading-7 text-slate-400">{description}</p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4 } : undefined}
      className={cn(
        "relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-2xl card-lift",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ meta, children }: { meta: PageMeta; children?: ReactNode }) {
  return (
    <SectionShell className="pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:p-8">
        <div className="absolute inset-0 hero-mesh opacity-75" />
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="relative max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-50 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.28em] text-amber-700">
            {meta.eyebrow}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-[40px] md:leading-[1.1]">
            {meta.heading}
          </h1>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-slate-700 md:text-[15px]">
            {meta.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </SectionShell>
  );
}

export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#eef2f6]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] mix-blend-multiply grayscale"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/35342374/pexels-photo-35342374.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920")' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_50%),radial-gradient(circle_at_20%_10%,rgba(217,171,83,0.1),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(238,242,246,0.7) 45%,#e2e8f0 100%)]" />
      <div className="absolute inset-0 grid-overlay opacity-[0.05] invert" />
      <div className="absolute left-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="absolute right-[-10rem] top-[20%] h-[24rem] w-[24rem] rounded-full bg-slate-400/20 blur-[100px]" />
      <div className="absolute bottom-[-8rem] left-[35%] h-[24rem] w-[24rem] rounded-full bg-slate-300/30 blur-[100px]" />
    </div>
  );
}

export function CTALink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(variant === "primary" ? primaryButtonClass : secondaryButtonClass, className)}
    >
      {children}
    </Link>
  );
}

export { ArrowRight };
