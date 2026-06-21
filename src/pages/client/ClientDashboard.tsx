import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  FileText,
  FolderKanban,
  LogOut,
} from "lucide-react";
import {
  GlassCard,
  SectionShell,
  primaryButtonClass,
  secondaryButtonClass,
} from "../../components/ui";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { pageMeta } from "../../data/watproContent";
import { useAuth } from "../../context/AuthContext";
import { getRegistrations } from "../../utils/store";

export default function ClientDashboard() {
  useDocumentMeta({
    ...pageMeta.contact,
    title: "Client Area | WATPRO Consulting",
    description: "Secure WATPRO client workspace for engagements, training registrations, and resources.",
  });
  const { client, logout } = useAuth();

  const myRegistrations = useMemo(() => {
    if (!client) return [];
    return getRegistrations().filter(
      (registration) => registration.email.toLowerCase() === client.email.toLowerCase(),
    );
  }, [client]);

  if (!client) return null;

  const quickLinks = [
    { title: "Browse services", description: "Review WATPRO advisory and delivery capabilities.", to: "/services", icon: FolderKanban },
    { title: "Training calendar", description: "Register your team for upcoming programs.", to: "/training-calendar", icon: CalendarDays },
    { title: "Insights library", description: "Access executive briefs and publications.", to: "/insights", icon: BookOpen },
    { title: "Contact your advisor", description: "Start a new engagement conversation.", to: "/contact", icon: FileText },
  ];

  return (
    <SectionShell className="pt-32 md:pt-40">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Client Area
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Welcome, {client.name.split(" ")[0]}
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            {client.organization ? `${client.organization} · ` : ""}{client.email}
          </p>
        </div>
        <button
          type="button"
          onClick={() => logout("client")}
          className={secondaryButtonClass}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Active workspace", value: "Open" },
          { label: "Training registrations", value: String(myRegistrations.length) },
          { label: "Account type", value: "Client" },
          { label: "Member since", value: new Date(client.createdAt).toLocaleDateString() },
        ].map((stat) => (
          <GlassCard key={stat.label}>
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <GlassCard hover={false}>
          <h2 className="text-lg font-semibold text-white">Your training registrations</h2>
          {myRegistrations.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-slate-400">
              You have no registrations yet.{" "}
              <Link to="/training-calendar" className="font-semibold text-amber-200 hover:text-amber-100">
                Browse the training calendar
              </Link>{" "}
              to enroll.
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {myRegistrations.map((registration) => (
                <div key={registration.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-base font-semibold text-white">{registration.program}</p>
                    <span className="text-xs text-slate-400">{new Date(registration.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">Seats requested: {registration.seats}</p>
                </div>
              ))}
            </div>
          )}
          <Link to="/training-calendar" className={`${primaryButtonClass} mt-6`}>
            Register for a program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </GlassCard>

        <GlassCard hover={false}>
          <h2 className="text-lg font-semibold text-white">Quick actions</h2>
          <div className="mt-6 grid gap-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  to={link.to}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-300/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{link.title}</p>
                    <p className="text-xs text-slate-400">{link.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
