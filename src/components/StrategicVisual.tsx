import { Handshake, Layers3, Target } from "lucide-react";

export function StrategicVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-6">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute inset-0 hero-mesh opacity-85" />
      <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -right-12 bottom-6 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex min-h-[420px] flex-col justify-between gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-700">
            Integrated delivery intelligence
          </span>
          <span className="rounded-full border border-amber-400/30 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-700">
            Mission-critical sectors
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-600">Program command center</p>
            <div className="mt-6 grid gap-3">
              {[
                { label: "Governance cadence", value: "Weekly" },
                { label: "Priority workstreams", value: "14" },
                { label: "Executive visibility", value: "High" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-700">{item.label}</span>
                  <span className="text-sm font-bold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-slate-900">Strategic advisory</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Strategy, governance, structuring, feasibility, and decision architecture.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-slate-900">Implementation support</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                PMO setup, recovery, program assurance, and operational controls.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-amber-400/30 bg-amber-50 p-5 shadow-sm">
              <p className="text-sm font-bold text-amber-900">Capability transfer</p>
              <p className="mt-2 text-sm leading-7 text-amber-800">
                Executive learning, workshops, templates, and institutional knowledge transfer.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Project delivery", icon: Layers3 },
            { label: "PPP structuring", icon: Handshake },
            { label: "Institutional reform", icon: Target },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Icon className="h-5 w-5 text-amber-700" />
                <p className="mt-3 text-sm font-bold text-slate-900">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
