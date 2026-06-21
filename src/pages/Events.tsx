import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlassCard, PageHero, SectionShell, primaryButtonClass } from "../components/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { events, pageMeta } from "../data/watproContent";

export default function Events() {
  useDocumentMeta(pageMeta.events);

  return (
    <>
      <PageHero meta={pageMeta.events}>
        <Link to="/contact" className={primaryButtonClass}>
          Request event partnership
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((eventItem, index) => (
            <GlassCard key={eventItem.title} className="h-full" delay={index * 0.05}>
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.26em] text-slate-400">
                <span>{eventItem.format}</span>
                <span>{eventItem.date}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-white">{eventItem.title}</h2>
              <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{eventItem.summary}</p>
              <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-[12.5px] text-slate-300">
                Ideal audience: {eventItem.audience}
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100">
                Register interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
