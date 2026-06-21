import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import {
  GlassCard,
  SectionHeading,
  SectionShell,
  iconMap,
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/ui";
import { StrategicVisual } from "../components/StrategicVisual";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import {
  academyPrograms,
  caseStudies,
  divisions,
  featuredSolutions,
  impactStats,
  industries,
  insights,
  pageMeta,
  siteIdentity,
  testimonials,
  trainings,
  whyWatpro,
} from "../data/watproContent";

export default function Home() {
  useDocumentMeta(pageMeta.home);

  return (
    <>
      <SectionShell className="pt-24 md:pt-28">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-50 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.28em] text-amber-700">
              <Sparkles className="h-3 w-3" />
              Premium strategic advisory
            </span>
            <p className="mt-5 text-base font-black uppercase tracking-[0.3em] text-slate-900 md:text-xl">
              WATPRO <span className="text-amber-700">Consulting</span>
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-[1.05]">
              THE <span className="animated-gradient-text">ULTIMATE</span> SOLUTION HUB
            </h1>
            <p className="mt-3 text-base font-semibold text-amber-700 md:text-lg">{siteIdentity.tagline}</p>
            <p className="mt-3 max-w-2xl text-[13px] leading-7 text-slate-700 md:text-[14px]">
              {siteIdentity.supportingStatement}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className={primaryButtonClass}>
                Explore services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/contact" className={secondaryButtonClass}>
                Start a Conversation
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Governments & ministries", "Infrastructure & PPP programs", "Executive capability building"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-[12.5px] text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <StrategicVisual />
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Trust & impact"
          title="A consulting model designed for authority, execution, and capability transfer."
          description="WATPRO combines clear positioning, strong thought leadership, industry fluency, and visible delivery discipline."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat, index) => (
            <GlassCard key={stat.label} className="h-full" delay={index * 0.06}>
              <p className="text-2xl font-bold text-slate-900 md:text-3xl">{stat.value}</p>
              <h3 className="mt-2 text-[14px] font-bold text-slate-800">{stat.label}</h3>
              <p className="mt-2 text-[12.5px] leading-6 text-slate-600">{stat.detail}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Service ecosystem"
          title="Three integrated divisions. One consistent standard of delivery."
          description="WATPRO meets clients wherever the challenge starts: strategic design, implementation support, or capability building."
          action={
            <Link to="/services" className={secondaryButtonClass}>
              View full capabilities
            </Link>
          }
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {divisions.map((division, index) => {
            const Icon = iconMap[division.icon];
            return (
              <GlassCard key={division.name} className="h-full" delay={index * 0.08}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{division.name}</h3>
                <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{division.description}</p>
                <div className="mt-4 space-y-2">
                  {division.capabilities.map((capability) => (
                    <div key={capability} className="flex items-start gap-2 text-[12.5px] text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-300" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Industries served"
          title="Built for high-consequence sectors where governance and execution matter."
          description="From ministries and defence organizations to infrastructure authorities, donors, engineering firms, and large corporations."
          action={
            <Link to="/industries" className={secondaryButtonClass}>
              Explore industries
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {industries.slice(0, 8).map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <GlassCard key={industry.name} delay={index * 0.05}>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-amber-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{industry.summary}</p>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Featured solutions"
          title="Flagship offers that blend strategic clarity, implementation support, and measurable outcomes."
          description="WATPRO packages high-value solutions clearly so the value is tangible."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {featuredSolutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            return (
              <GlassCard key={solution.title} className="h-full" delay={index * 0.08}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                    Premium offer
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{solution.title}</h3>
                <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{solution.summary}</p>
                <div className="mt-4 space-y-2">
                  {solution.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2 text-[12.5px] text-slate-200">
                      <ChevronRight className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-300" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-amber-300/15 bg-amber-300/8 p-3 text-[12.5px] leading-6 text-amber-50">
                  {solution.result}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why WATPRO"
              title="Premium consulting quality, with the operational depth to stay through delivery."
              description="Clients choose WATPRO when they need senior judgement, implementation structure, and institutional capability."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {whyWatpro.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <GlassCard key={item.title} className="h-full" delay={index * 0.05}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-amber-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Training & academy"
          title="Professional development designed to reinforce transformation, not sit beside it."
          description="WATPRO Academy equips executives, PMOs, technical teams, and contract professionals with frameworks they can apply immediately."
          action={
            <Link to="/academy" className={secondaryButtonClass}>
              Visit the academy
            </Link>
          }
        />
        <GlassCard delay={0.05}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-lg font-semibold text-white md:text-xl">
                Capability pathways for leadership teams, PMOs, and technical practitioners.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Open-enrolment programs, closed corporate workshops, executive masterclasses, and embedded capability interventions.
              </p>
              <div className="mt-6 space-y-3">
                {academyPrograms.slice(0, 3).map((program) => (
                  <div key={program.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-base font-semibold text-white">{program.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {trainings.slice(0, 3).map((training) => (
                <div key={training.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                      {training.track}
                    </span>
                    <span className="text-xs text-slate-400">{training.date}</span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-white">{training.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{training.summary}</p>
                  <Link
                    to="/training-calendar"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100"
                  >
                    Register interest
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Featured case studies"
          title="How WATPRO improves governance, readiness, and delivery confidence."
          description="Outcome-oriented engagement snapshots that illustrate thinking in action."
          action={
            <Link to="/case-studies" className={secondaryButtonClass}>
              See case studies
            </Link>
          }
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <GlassCard key={study.title} className="h-full" delay={index * 0.07}>
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-amber-200">
                  {study.sector}
                </span>
                <span className="text-xs text-slate-400">{study.spotlight}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{study.title}</h3>
              <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{study.solution}</p>
              <div className="mt-4 space-y-2">
                {study.impact.map((impactItem) => (
                  <div key={impactItem} className="flex items-start gap-2 text-[12.5px] text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-300" />
                    <span>{impactItem}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Knowledge center"
          title="Thought leadership that positions expertise before the pitch."
          description="WATPRO's knowledge center combines perspective, practical guidance, and sector insight."
          action={
            <Link to="/insights" className={secondaryButtonClass}>
              Explore publications
            </Link>
          }
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {insights.slice(0, 3).map((insight, index) => (
            <GlassCard key={insight.title} className="h-full" delay={index * 0.08}>
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.26em] text-slate-400">
                <span>{insight.category}</span>
                <span>{insight.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{insight.title}</h3>
              <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{insight.summary}</p>
              <Link to="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100">
                View insight
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Client testimonials"
          title="Confidence built through clarity, structure, and measurable support."
          description="High-stakes clients value advisors who combine senior-level thinking with disciplined execution support."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.author} className="h-full" delay={index * 0.07}>
              <p className="text-[14px] leading-7 text-white/90">“{testimonial.quote}”</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[13.5px] font-semibold text-white">{testimonial.author}</p>
                <p className="text-[12px] text-slate-400">{testimonial.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-[#0e2239] via-[#0a1728] to-[#07111e] p-8 shadow-[0_30px_80px_rgba(2,8,23,0.35)] md:p-10">
          <div className="absolute inset-0 hero-mesh opacity-70" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                Start the conversation
              </span>
              <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-white md:text-3xl">
                Ready to turn complex ambition into structured execution?
              </h2>
              <p className="mt-3 max-w-2xl text-[14px] leading-7 text-slate-300">
                Engage WATPRO for advisory, implementation support, PMO design, transformation, PPP preparation, contract governance, or academy programs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/contact" className={primaryButtonClass}>
                Speak with WATPRO
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/academy" className={secondaryButtonClass}>
                Explore WATPRO Academy
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
