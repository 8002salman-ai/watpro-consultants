import { useMemo, useState } from "react";
import { LogOut, Mail, Users2, CalendarCheck, Inbox } from "lucide-react";
import {
  GlassCard,
  SectionShell,
  secondaryButtonClass,
} from "../../components/ui";
import { cn } from "../../utils/cn";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { pageMeta } from "../../data/watproContent";
import { useAuth } from "../../context/AuthContext";
import { getMessages, getRegistrations } from "../../utils/store";

type Tab = "overview" | "clients" | "registrations" | "messages";

export default function AdminDashboard() {
  useDocumentMeta({
    ...pageMeta.contact,
    title: "Admin Dashboard | WATPRO Consulting",
    description: "WATPRO internal admin dashboard for managing clients, registrations, and enquiries.",
  });
  const { admin, logout, allClients, removeClient } = useAuth();
  const [tab, setTab] = useState<Tab>("overview");
  const [confirmRemove, setConfirmRemove] = useState<string | null>(null);

  const registrations = useMemo(() => getRegistrations(), []);
  const messages = useMemo(() => getMessages(), []);

  if (!admin) return null;

  const stats = [
    { label: "Registered clients", value: allClients.length, icon: Users2 },
    { label: "Training registrations", value: registrations.length, icon: CalendarCheck },
    { label: "Contact enquiries", value: messages.length, icon: Inbox },
    { label: "Active programs", value: 6, icon: Mail },
  ];

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "clients", label: `Clients (${allClients.length})` },
    { key: "registrations", label: `Registrations (${registrations.length})` },
    { key: "messages", label: `Enquiries (${messages.length})` },
  ];

  return (
    <SectionShell className="pt-32 md:pt-40">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Admin Area
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">Control center</h1>
          <p className="mt-3 text-sm text-slate-400">Signed in as {admin.email}</p>
        </div>
        <button type="button" onClick={() => logout("admin")} className={secondaryButtonClass}>
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={stat.label}>
              <div className="flex items-center justify-between">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {tabs.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setTab(item.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              tab === item.key
                ? "border-amber-300/35 bg-amber-300/12 text-white"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:text-white",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "overview" ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard hover={false}>
              <h2 className="text-lg font-semibold text-white">Latest registrations</h2>
              {registrations.length === 0 ? (
                <p className="mt-4 text-sm text-slate-400">No training registrations yet.</p>
              ) : (
                <div className="mt-5 space-y-3">
                  {registrations.slice(0, 4).map((registration) => (
                    <div key={registration.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <p className="text-sm font-semibold text-white">{registration.program}</p>
                      <p className="mt-1 text-xs text-slate-400">{registration.fullName} · {registration.organization}</p>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
            <GlassCard hover={false}>
              <h2 className="text-lg font-semibold text-white">Latest enquiries</h2>
              {messages.length === 0 ? (
                <p className="mt-4 text-sm text-slate-400">No contact enquiries yet.</p>
              ) : (
                <div className="mt-5 space-y-3">
                  {messages.slice(0, 4).map((message) => (
                    <div key={message.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                      <p className="text-sm font-semibold text-white">{message.interest}</p>
                      <p className="mt-1 text-xs text-slate-400">{message.fullName} · {message.organization}</p>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          </div>
        ) : null}

        {tab === "clients" ? (
          <GlassCard hover={false}>
            {allClients.length === 0 ? (
              <p className="text-sm text-slate-400">No clients have signed up yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-slate-400">
                      <th className="px-3 py-3 font-medium">Name</th>
                      <th className="px-3 py-3 font-medium">Organization</th>
                      <th className="px-3 py-3 font-medium">Email</th>
                      <th className="px-3 py-3 font-medium">Joined</th>
                      <th className="px-3 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allClients.map((c) => (
                      <tr key={c.id} className="border-b border-white/5 text-slate-200">
                        <td className="px-3 py-3">{c.name}</td>
                        <td className="px-3 py-3">{c.organization ?? "—"}</td>
                        <td className="px-3 py-3">{c.email}</td>
                        <td className="px-3 py-3">{new Date(c.createdAt).toLocaleDateString()}</td>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-2">
                            <a
                              href={`mailto:${c.email}`}
                              className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-amber-200 hover:bg-white/[0.1] transition"
                            >
                              Email
                            </a>
                            {confirmRemove === c.id ? (
                              <span className="flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => { removeClient(c.id); setConfirmRemove(null); }}
                                  className="rounded-lg border border-red-400/30 bg-red-400/15 px-3 py-1.5 text-xs font-semibold text-red-200 hover:bg-red-400/25 transition"
                                >
                                  Confirm
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmRemove(null)}
                                  className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/[0.1] transition"
                                >
                                  Cancel
                                </button>
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setConfirmRemove(c.id)}
                                className="rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-400/20 transition"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </GlassCard>
        ) : null}

        {tab === "registrations" ? (
          <GlassCard hover={false}>
            <AdminTable
              empty="No training registrations yet."
              headers={["Program", "Name", "Organization", "Email", "Seats", "Date"]}
              rows={registrations.map((r) => [
                r.program,
                r.fullName,
                r.organization,
                r.email,
                r.seats,
                new Date(r.createdAt).toLocaleDateString(),
              ])}
            />
          </GlassCard>
        ) : null}

        {tab === "messages" ? (
          <GlassCard hover={false}>
            {messages.length === 0 ? (
              <p className="text-sm text-slate-400">No contact enquiries yet.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-base font-semibold text-white">{message.fullName} · {message.organization}</p>
                      <span className="text-xs text-slate-400">{new Date(message.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.26em] text-amber-200">{message.interest}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{message.message}</p>
                    <a href={`mailto:${message.email}`} className="mt-3 inline-block text-sm font-semibold text-amber-200 hover:text-amber-100">
                      {message.email}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        ) : null}
      </div>
    </SectionShell>
  );
}

function AdminTable({
  headers,
  rows,
  empty,
}: {
  headers: string[];
  rows: string[][];
  empty: string;
}) {
  if (rows.length === 0) {
    return <p className="text-sm text-slate-400">{empty}</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-slate-400">
            {headers.map((header) => (
              <th key={header} className="px-3 py-3 font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-white/5 text-slate-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
