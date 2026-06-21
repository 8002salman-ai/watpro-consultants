import { useState, type FormEvent } from "react";
import { ArrowRight, BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";
import {
  GlassCard,
  PageHero,
  SectionShell,
  inputClassName,
  primaryButtonClass,
  textareaClassName,
} from "../components/ui";
import { cn } from "../utils/cn";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { contactPoints, pageMeta } from "../data/watproContent";
import { addMessage } from "../utils/store";

const interests = [
  "Strategic advisory",
  "PMO setup and project delivery",
  "PPP advisory",
  "Contract & commercial management",
  "Stakeholder management",
  "Defence acquisition systems",
  "Organization development",
  "Academy & corporate training",
];

export default function Contact() {
  useDocumentMeta(pageMeta.contact);

  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    email: "",
    interest: interests[0],
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage(form);
    setSuccess(`Thank you, ${form.fullName || "there"}. Your request has been captured and a WATPRO consultant will respond shortly.`);
    setForm({ fullName: "", organization: "", email: "", interest: interests[0], message: "" });
  };

  return (
    <>
      <PageHero meta={pageMeta.contact} />

      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {contactPoints.map((point, index) => (
              <GlassCard key={point.title} delay={index * 0.05}>
                <h2 className="text-base font-semibold text-white md:text-lg">{point.title}</h2>
                <p className="mt-1.5 text-[13px] leading-6 text-slate-400">{point.region}</p>
                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-amber-200" />
                    <a href={`mailto:${point.email}`} className="transition hover:text-amber-100">{point.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-amber-200" />
                    <a href={`tel:${point.phone.replace(/\s+/g, "")}`} className="transition hover:text-amber-100">{point.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-amber-200" />
                    <span>{point.location}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard delay={0.08} hover={false}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200">Engagement form</p>
                <h2 className="mt-2 text-lg font-semibold text-white">Tell us what you need</h2>
              </div>
              <BriefcaseBusiness className="h-10 w-10 text-amber-200" />
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
                  Area of interest
                  <select className={cn(inputClassName, "mt-2")} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                    {interests.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block text-sm text-slate-300">
                Project brief or requirement
                <textarea className={cn(textareaClassName, "mt-2")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your challenge, program, training need, or transformation priority" required />
              </label>
              <button type="submit" className={cn(primaryButtonClass, "w-full")}>
                Send engagement request
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </GlassCard>
        </div>
      </SectionShell>
    </>
  );
}
