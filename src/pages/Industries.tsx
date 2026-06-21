import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  GlassCard,
  PageHero,
  SectionHeading,
  SectionShell,
  iconMap,
  primaryButtonClass,
} from "../components/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { industries, pageMeta } from "../data/watproContent";

export default function Industries() {
  useDocumentMeta(pageMeta.industries);

  return (
    <>
      <PageHero meta={pageMeta.industries}>
        <Link to="/contact" className={primaryButtonClass}>
          Discuss your sector challenge
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <GlassCard key={industry.name} className="h-full" delay={index * 0.04}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-3 text-base font-semibold text-white md:text-lg">{industry.name}</h2>
                <p className="mt-2 text-[13px] leading-6 text-slate-400">{industry.summary}</p>
                <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-[12.5px] leading-6 text-slate-200">
                  {industry.value}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <GlassCard className="h-full" delay={0.05}>
            <SectionHeading
              eyebrow="Target client profile"
              title="Ideal for institutions managing complexity, scrutiny, or delivery pressure."
              description="WATPRO is especially relevant where cross-functional coordination, public visibility, procurement governance, or capability gaps can affect outcomes."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry.name} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  {industry.name}
                </span>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="h-full" delay={0.1}>
            <SectionHeading
              eyebrow="What clients value"
              title="Sector fluency paired with governance and implementation discipline."
              description="Clients engage WATPRO to align stakeholders, sharpen decision-making, structure programs, strengthen PMOs, and build internal capability."
            />
            <Link to="/services" className={`${primaryButtonClass} mt-6`}>
              View service capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </SectionShell>
    </>
  );
}
