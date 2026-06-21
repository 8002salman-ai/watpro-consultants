import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlassCard, PageHero, SectionShell, primaryButtonClass } from "../components/ui";
import { cn } from "../utils/cn";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { insights, pageMeta } from "../data/watproContent";

export default function Insights() {
  useDocumentMeta(pageMeta.insights);
  const [filter, setFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(insights.map((insight) => insight.category)))],
    [],
  );
  const filtered = useMemo(
    () => (filter === "All" ? insights : insights.filter((insight) => insight.category === filter)),
    [filter],
  );
  const featured = filtered[0] ?? insights[0];

  return (
    <>
      <PageHero meta={pageMeta.insights}>
        <Link to="/contact" className={primaryButtonClass}>
          Request a private briefing
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <SectionShell>
        <GlassCard delay={0.04}>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-amber-200">
                Featured publication
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">{featured.title}</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">{featured.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Editorial approach</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                <p>Thought leadership that demonstrates expertise before a sales conversation.</p>
                <p>Practical briefs built for decision-makers managing complexity, reform, governance, and execution risk.</p>
                <p>A content structure that is ready to scale into a CMS-backed insights platform.</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionShell>

      <SectionShell>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                filter === category
                  ? "border-amber-300/35 bg-amber-300/12 text-white"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:text-white",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filtered.map((insight, index) => (
            <GlassCard key={insight.title} className="h-full" delay={index * 0.05}>
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.26em] text-slate-400">
                <span>{insight.category}</span>
                <span>{insight.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{insight.title}</h3>
              <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{insight.summary}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100">
                Request full brief
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
