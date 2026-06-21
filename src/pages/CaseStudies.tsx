import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GlassCard, PageHero, SectionShell, primaryButtonClass } from "../components/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { caseStudies, pageMeta } from "../data/watproContent";

export default function CaseStudies() {
  useDocumentMeta(pageMeta["case-studies"]);

  return (
    <>
      <PageHero meta={pageMeta["case-studies"]}>
        <Link to="/contact" className={primaryButtonClass}>
          Discuss a similar mandate
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <GlassCard key={study.title} className="h-full" delay={index * 0.05}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-amber-200">
                  {study.sector}
                </span>
                <span className="text-xs text-slate-400">{study.client}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{study.title}</h2>
              <div className="mt-3 space-y-3 text-[13px] leading-6 text-slate-400">
                <p><span className="font-semibold text-white">Challenge:</span> {study.challenge}</p>
                <p><span className="font-semibold text-white">Solution:</span> {study.solution}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Impact highlights</p>
                <div className="mt-4 space-y-3">
                  {study.impact.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-200">Impact philosophy</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                We measure success by stronger governance, faster mobilization, better visibility, and institutional capability that remains after delivery.
              </h2>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link to="/contact" className={primaryButtonClass}>
                Start an engagement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
