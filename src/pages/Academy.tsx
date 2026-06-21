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
import { academyPrograms, pageMeta, trainings } from "../data/watproContent";

export default function Academy() {
  useDocumentMeta(pageMeta.academy);

  return (
    <>
      <PageHero meta={pageMeta.academy}>
        <Link to="/training-calendar" className={primaryButtonClass}>
          View calendar
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/contact" className={secondaryButtonClass}>
          Design a custom program
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          {academyPrograms.map((program, index) => {
            const Icon = iconMap[program.icon];
            return (
              <GlassCard key={program.title} className="h-full" delay={index * 0.05}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{program.title}</h2>
                <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{program.description}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Formats</p>
                    <div className="mt-3 space-y-2 text-sm text-slate-200">
                      {program.formats.map((format) => (
                        <div key={format}>{format}</div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Outcomes</p>
                    <div className="mt-3 space-y-2 text-sm text-slate-200">
                      {program.outcomes.map((outcome) => (
                        <div key={outcome}>{outcome}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell className="pb-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <GlassCard className="h-full" delay={0.05}>
            <SectionHeading
              eyebrow="Learning model"
              title="Open-enrolment, in-house, and executive formats for practical institutional impact."
              description="Every academy offer is designed to be applied immediately through templates, simulations, executive discussions, and organization-specific use cases."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Open enrolment", text: "For professionals seeking certification support, specialist training, and cross-sector peer learning." },
                { title: "Corporate programs", text: "Customized in-house delivery aligned to your systems, contracts, governance, and transformation agenda." },
                { title: "Executive labs", text: "Focused sessions for boards, directors, sponsors, and change leaders managing high-visibility mandates." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="h-full" delay={0.1}>
            <SectionHeading
              eyebrow="Upcoming programs"
              title="Book upcoming workshops or commission a dedicated cohort for your team."
              description="Our upcoming calendar highlights practical capability tracks across project delivery, PPP, contracts, and institutional reform."
            />
            <div className="mt-6 space-y-4">
              {trainings.slice(0, 4).map((training) => (
                <div key={training.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.26em] text-slate-400">
                    <span>{training.track}</span>
                    <span>{training.date}</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">{training.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{training.format} · {training.location}</p>
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
