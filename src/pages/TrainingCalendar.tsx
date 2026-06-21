import { useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import {
  GlassCard,
  PageHero,
  SectionHeading,
  SectionShell,
  inputClassName,
  primaryButtonClass,
  secondaryButtonClass,
  textareaClassName,
} from "../components/ui";
import { cn } from "../utils/cn";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { pageMeta, trainings } from "../data/watproContent";
import { addRegistration } from "../utils/store";

export default function TrainingCalendar() {
  useDocumentMeta(pageMeta["training-calendar"]);

  const [trackFilter, setTrackFilter] = useState("All");
  const [selected, setSelected] = useState(trainings[0]?.title ?? "");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    seats: "1",
    notes: "",
  });

  const tracks = useMemo(
    () => ["All", ...Array.from(new Set(trainings.map((training) => training.track)))],
    [],
  );
  const toShow = useMemo(
    () => (trackFilter === "All" ? trainings : trainings.filter((training) => training.track === trackFilter)),
    [trackFilter],
  );

  const selectProgram = (title: string) => {
    setSelected(title);
    document.getElementById("training-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addRegistration({ ...form, program: selected });
    setSuccess(`Registration request received for ${selected}. Our academy team will contact ${form.fullName || "you"} shortly.`);
    setForm({ fullName: "", organization: "", email: "", phone: "", seats: "1", notes: "" });
  };

  return (
    <>
      <PageHero meta={pageMeta["training-calendar"]}>
        <Link to="/academy" className={secondaryButtonClass}>
          Explore academy tracks
        </Link>
      </PageHero>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Upcoming programs"
              title="Choose a track, compare upcoming sessions, and register interest instantly."
              description="The calendar is a registration-ready system that can scale into a future CMS or bookings integration."
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {tracks.map((track) => (
                <button
                  key={track}
                  type="button"
                  onClick={() => setTrackFilter(track)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    trackFilter === track
                      ? "border-amber-300/35 bg-amber-300/12 text-white"
                      : "border-white/10 bg-white/[0.04] text-slate-300 hover:text-white",
                  )}
                >
                  {track}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {toShow.map((training, index) => (
                <GlassCard key={training.title} delay={index * 0.04}>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.26em] text-slate-400">
                        <span>{training.track}</span>
                        <span>•</span>
                        <span>{training.date}</span>
                        <span>•</span>
                        <span>{training.duration}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-white">{training.title}</h3>
                      <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{training.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                        <span className="rounded-full border border-white/10 px-3 py-1">{training.format}</span>
                        <span className="rounded-full border border-white/10 px-3 py-1">{training.location}</span>
                        <span className="rounded-full border border-white/10 px-3 py-1">{training.seats}</span>
                      </div>
                    </div>
                    <div className="lg:w-[220px]">
                      <p className="text-sm text-slate-300">{training.audience}</p>
                      <button type="button" onClick={() => selectProgram(training.title)} className={cn(primaryButtonClass, "mt-5 w-full")}>
                        Select program
                      </button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div id="training-form">
            <GlassCard className="sticky top-28" delay={0.08} hover={false}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-200">Registration form</p>
                  <h2 className="mt-2 text-lg font-semibold text-white">Reserve your place</h2>
                </div>
                <CalendarDays className="h-10 w-10 text-amber-200" />
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/8 p-4 text-sm text-amber-50">
                Selected program: <span className="font-semibold text-white">{selected}</span>
              </div>

              {success ? (
                <div aria-live="polite" className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                  {success}
                </div>
              ) : null}

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-slate-300">
                    Full name
                    <input className={cn(inputClassName, "mt-2")} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Your full name" required />
                  </label>
                  <label className="block text-sm text-slate-300">
                    Organization
                    <input className={cn(inputClassName, "mt-2")} value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Organization name" required />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-slate-300">
                    Email
                    <input type="email" className={cn(inputClassName, "mt-2")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@organization.com" required />
                  </label>
                  <label className="block text-sm text-slate-300">
                    Phone
                    <input className={cn(inputClassName, "mt-2")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone number" required />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-slate-300">
                    Program
                    <select className={cn(inputClassName, "mt-2")} value={selected} onChange={(e) => setSelected(e.target.value)}>
                      {trainings.map((training) => (
                        <option key={training.title} value={training.title}>{training.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm text-slate-300">
                    Seats requested
                    <select className={cn(inputClassName, "mt-2")} value={form.seats} onChange={(e) => setForm({ ...form, seats: e.target.value })}>
                      {["1", "2", "3", "4", "5+"].map((value) => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block text-sm text-slate-300">
                  Notes
                  <textarea className={cn(textareaClassName, "mt-2")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Share team needs, preferred format, or customization requests" />
                </label>
                <button type="submit" className={cn(primaryButtonClass, "w-full")}>
                  Submit registration request
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
