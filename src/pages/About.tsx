import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  GlassCard,
  PageHero,
  SectionHeading,
  SectionShell,
  iconMap,
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { aboutPrinciples, divisions, engagementModel, impactStats, pageMeta } from "../data/watproContent";

export default function About() {
  useDocumentMeta(pageMeta.about);

  return (
    <>
      <PageHero meta={pageMeta.about}>
        <Link to="/services" className={primaryButtonClass}>
          Explore solutions
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/contact" className={secondaryButtonClass}>
          Request consultation
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
          <GlassCard className="h-full" delay={0.04}>
            <span className="text-xs uppercase tracking-[0.28em] text-amber-200">Who we are</span>
            <h2 className="mt-3 text-xl font-semibold text-white md:text-2xl">A premium consulting platform for organizations facing complex mandates.</h2>
            <p className="mt-3 text-[13.5px] leading-7 text-slate-300">
              WATPRO was shaped around a simple reality: many institutions do not just need advisors, they need a partner who can think strategically, organize stakeholders, establish governance, support execution, and transfer know-how to internal teams.
            </p>
            <p className="mt-3 text-[13px] leading-7 text-slate-400">
              That is why our model combines advisory, implementation support, and academy-led capability building. We are especially effective where reform, infrastructure, public accountability, regulated procurement, and executive coordination intersect.
            </p>
          </GlassCard>

          <GlassCard className="h-full" delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xl font-semibold text-white md:text-2xl">{stat.value}</p>
                  <p className="mt-1.5 text-[13px] font-medium text-slate-200">{stat.label}</p>
                  <p className="mt-1.5 text-[11.5px] leading-5 text-slate-400">{stat.detail}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Operating principles"
          title="How WATPRO works with leaders, institutions, and delivery teams."
          description="We operate with the discipline expected of a premium advisory partner and the practicality required in complex operating environments."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {aboutPrinciples.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            return (
              <GlassCard key={principle.title} className="h-full" delay={index * 0.05}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{principle.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Engagement model"
          title="A disciplined path from diagnostic clarity to embedded capability."
          description="This model supports clients across strategy development, program mobilization, execution support, and institutional strengthening."
        />
        <div className="grid gap-5 xl:grid-cols-5">
          {engagementModel.map((step, index) => (
            <GlassCard key={step.step} className="h-full" delay={index * 0.05}>
              <span className="text-2xl font-semibold text-amber-200 md:text-3xl">{step.step}</span>
              <h3 className="mt-2 text-base font-semibold text-white md:text-lg">{step.title}</h3>
              <p className="mt-2 text-[12.5px] leading-6 text-slate-400">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard className="h-full" delay={0.05}>
            <SectionHeading
              eyebrow="Integrated platform"
              title="Advisory, solutions, and academy designed to reinforce each other."
              description="By combining consulting, execution support, and professional development, WATPRO helps clients avoid handoff failures between planning and implementation."
            />
          </GlassCard>
          <GlassCard className="h-full" delay={0.1}>
            <div className="space-y-4">
              {divisions.map((division) => (
                <div key={division.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-base font-semibold text-white">{division.name}</p>
                  <p className="mt-2 text-sm text-slate-400">{division.description}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className={`${primaryButtonClass} mt-6`}>
              Engage WATPRO
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionShell>
    </>
  );
}
