import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, CheckCircle2, MapPin } from "lucide-react";
import {
  GlassCard,
  PageHero,
  SectionHeading,
  SectionShell,
  primaryButtonClass,
} from "../components/ui";
import { cn } from "../utils/cn";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { pageMeta, portfolioProjects } from "../data/watproContent";

export default function Portfolio() {
  useDocumentMeta(pageMeta.portfolio);

  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(portfolioProjects.map((p) => p.sector)))],
    [],
  );
  const services = useMemo(
    () => ["All", ...Array.from(new Set(portfolioProjects.map((p) => p.service)))],
    [],
  );

  const [sector, setSector] = useState("All");
  const [service, setService] = useState("All");

  const filtered = useMemo(
    () =>
      portfolioProjects.filter(
        (p) =>
          (sector === "All" || p.sector === sector) &&
          (service === "All" || p.service === service),
      ),
    [sector, service],
  );

  const stats = [
    { label: "Completed projects", value: String(portfolioProjects.filter((p) => p.status === "Completed").length) },
    { label: "Sectors served", value: String(new Set(portfolioProjects.map((p) => p.sector)).size) },
    { label: "Service lines", value: String(new Set(portfolioProjects.map((p) => p.service)).size) },
    { label: "Active engagements", value: String(portfolioProjects.filter((p) => p.status !== "Completed").length) },
  ];

  return (
    <>
      <PageHero meta={pageMeta.portfolio}>
        <Link to="/contact" className={primaryButtonClass}>
          Discuss a similar project
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label}>
              <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[12.5px] text-slate-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Project portfolio"
          title="Filter completed projects by sector and service line."
          description="A snapshot of recent WATPRO engagements across advisory, delivery, PPP, contracts, training, and transformation."
        />

        <div className="space-y-3">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Sector</p>
            <div className="flex flex-wrap gap-2">
              {sectors.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSector(item)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[12px] transition",
                    sector === item
                      ? "border-amber-300/35 bg-amber-300/12 text-white"
                      : "border-white/10 bg-white/[0.04] text-slate-300 hover:text-white",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Service</p>
            <div className="flex flex-wrap gap-2">
              {services.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setService(item)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[12px] transition",
                    service === item
                      ? "border-amber-300/35 bg-amber-300/12 text-white"
                      : "border-white/10 bg-white/[0.04] text-slate-300 hover:text-white",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <GlassCard key={project.title} className="h-full" delay={index * 0.04}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-300/12 text-amber-200">
                  <Briefcase className="h-4 w-4" />
                </div>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.2em]",
                    project.status === "Completed"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                      : project.status === "In Delivery"
                        ? "border-sky-400/30 bg-sky-400/10 text-sky-200"
                        : "border-amber-300/30 bg-amber-300/10 text-amber-200",
                  )}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="mt-3.5 text-[15px] font-semibold leading-snug text-white">{project.title}</h3>
              <p className="mt-1 text-[11.5px] text-slate-400">{project.client}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] text-slate-200">
                  {project.sector}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] text-slate-200">
                  {project.service}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] text-slate-200">
                  {project.year}
                </span>
              </div>

              <p className="mt-3 text-[12.5px] leading-6 text-slate-400">{project.summary}</p>

              <div className="mt-3 space-y-1.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-[12px] text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-3 w-3 flex-none text-amber-300" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11.5px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-amber-200" />
                  {project.location}
                </span>
                <span>{project.duration}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center text-[13px] text-slate-400">
            No projects match the selected filters.
          </div>
        ) : null}
      </SectionShell>
    </>
  );
}
