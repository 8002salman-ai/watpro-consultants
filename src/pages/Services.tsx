import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
import { pageMeta, serviceCategories, trainings } from "../data/watproContent";

export default function Services() {
  useDocumentMeta(pageMeta.services);

  return (
    <>
      <PageHero meta={pageMeta.services}>
        <Link to="/contact" className={primaryButtonClass}>
          Request a capability briefing
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/academy" className={secondaryButtonClass}>
          View training solutions
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceCategories.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <GlassCard key={service.title} className="h-full" delay={index * 0.04}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                    Specialist domain
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{service.title}</h2>
                <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{service.summary}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.services.map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[12.5px] text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-amber-300/15 bg-amber-300/8 p-3 text-[12.5px] leading-6 text-amber-50">
                  <span className="font-semibold text-white">Result:</span> {service.outcome}
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
              eyebrow="How we engage"
              title="Flexible support across design, mobilization, execution, and capability building."
              description="Engage WATPRO for a focused advisory study, a transformation office, a PMO intervention, a PPP transaction workstream, or a full capability pathway."
            />
            <div className="mt-6 grid gap-3">
              {[
                "Strategic diagnostics and advisory studies",
                "PMO setup and governance architecture",
                "Program recovery and performance assurance",
                "Commercial governance and stakeholder enablement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="h-full" delay={0.1}>
            <SectionHeading
              eyebrow="Build internal capability"
              title="Pair consulting support with role-based learning through WATPRO Academy."
              description="Combine the engagement with training for sponsors, PMOs, project managers, procurement teams, or commercial leads."
            />
            <div className="mt-6 space-y-4">
              {trainings.slice(0, 3).map((training) => (
                <div key={training.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-400">{training.track}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{training.title}</p>
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
          </GlassCard>
        </div>
      </SectionShell>
    </>
  );
}
