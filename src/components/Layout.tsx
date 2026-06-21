import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, LogIn, Menu, ShieldCheck, X } from "lucide-react";
import { cn } from "../utils/cn";
import { navigation, siteIdentity } from "../data/watproContent";
import { BackgroundDecor, primaryButtonClass } from "./ui";
import { useAuth } from "../context/AuthContext";
import { FloatingWidgets } from "./FloatingWidgets";

const routeFor = (key: string) => (key === "home" ? "/" : `/${key}`);

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { client, admin } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#04111f] text-slate-100">
      <BackgroundDecor />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} clientName={client?.name} adminName={admin?.name} />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <FloatingWidgets />
      <Footer />
    </div>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
  clientName,
  adminName,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  clientName?: string;
  adminName?: string;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 px-3 pt-3 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-2xl border border-white/10 bg-white/90 px-3 py-2 shadow-[0_18px_44px_rgba(2,8,23,0.15)] backdrop-blur-2xl md:px-4 animated-header">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-9 w-12 items-center justify-center animated-logo">
              <svg viewBox="0 0 120 80" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25 L35 70 L55 25" stroke="#1e3a8a" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
                <path d="M65 45 L75 70 L95 25" stroke="#1e3a8a" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
                <path d="M48 40 L60 15 L90 5" stroke="#d97706" strokeWidth="12" strokeLinejoin="miter" strokeLinecap="square" />
                <polygon points="78,0 100,0 92,22" fill="#d97706"/>
              </svg>
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-black uppercase tracking-[0.28em] text-slate-900">
                WATPRO
              </p>
              <p className="truncate text-[9px] uppercase tracking-[0.28em] text-amber-700">
                The Ultimate Solution Hub
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.key}
                to={routeFor(item.key)}
                end={item.key === "home"}
                className={({ isActive }) =>
                  cn(
                    "nav-link whitespace-nowrap rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition",
                    isActive ? "nav-active text-amber-700 bg-amber-50" : "text-slate-700 hover:text-amber-700 hover:bg-amber-50/50",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Link
              to="/admin"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:text-amber-700 hover:border-amber-400/50"
              title="Admin area"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
            </Link>
            <Link
              to={clientName ? "/client" : "/client/login"}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-800 transition hover:border-amber-400/60 hover:text-amber-700"
            >
              {clientName ? <LayoutDashboard className="h-3.5 w-3.5" /> : <LogIn className="h-3.5 w-3.5" />}
              {clientName ? "Client" : "Client Login"}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full shine-button px-3.5 py-1.5 text-[12px] font-bold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(217,171,83,0.3)]"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.key}
                    to={routeFor(item.key)}
                    end={item.key === "home"}
                    className={({ isActive }) =>
                      cn(
                        "rounded-2xl border px-4 py-3 text-sm transition",
                        isActive
                          ? "border-amber-400/40 bg-amber-50 text-amber-700"
                          : "border-slate-200 bg-white text-slate-700 hover:border-amber-400/40 hover:text-amber-700",
                      )
                    }
                  >
                    <span className="block font-semibold">{item.label}</span>
                    <span className="block text-xs text-slate-500">{item.summary}</span>
                  </NavLink>
                ))}
                <Link
                  to={clientName ? "/client" : "/client/login"}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-amber-400/40 hover:text-amber-700"
                >
                  <span className="block font-semibold">{clientName ? "Client Area" : "Client Login / Sign Up"}</span>
                  <span className="block text-xs text-slate-500">Secure client portal</span>
                </Link>
                <Link
                  to={adminName ? "/admin/dashboard" : "/admin"}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-amber-400/40 hover:text-amber-700"
                >
                  <span className="block font-semibold">Admin Area</span>
                  <span className="block text-xs text-slate-500">Internal management</span>
                </Link>
                <Link to="/contact" className={cn(primaryButtonClass, "mt-1 w-full sm:col-span-2")}>
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-8 pt-12 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg md:p-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-16 items-center justify-center animated-logo">
                <svg viewBox="0 0 120 80" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 25 L35 70 L55 25" stroke="#1e3a8a" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
                  <path d="M65 45 L75 70 L95 25" stroke="#1e3a8a" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
                  <path d="M48 40 L60 15 L90 5" stroke="#d97706" strokeWidth="12" strokeLinejoin="miter" strokeLinecap="square" />
                  <polygon points="78,0 100,0 92,22" fill="#d97706"/>
                </svg>
              </div>
              <div>
                <p className="text-xl font-black uppercase tracking-[0.3em] text-slate-900">WATPRO</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-amber-700">{siteIdentity.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-[13px] leading-7 text-slate-600">
              {siteIdentity.supportingStatement}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-slate-900">Navigate</p>
            <div className="mt-5 grid gap-2">
              {navigation.map((item) => (
                <Link key={item.key} to={routeFor(item.key)} className="text-[13px] text-slate-700 transition hover:text-amber-700">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-slate-900">Access & Contact</p>
            <div className="mt-5 space-y-3 text-[13px] text-slate-700">
              <Link to="/client/login" className="block transition hover:text-amber-700">Client Login</Link>
              <Link to="/client/signup" className="block transition hover:text-amber-700">Client Sign Up</Link>
              <Link to="/admin" className="block transition hover:text-amber-700">Admin Area</Link>
              <p className="pt-2 font-bold text-slate-900">advisory@watproconsultants.com</p>
              <p>academy@watproconsultants.com</p>
              <Link to="/contact" className={cn(primaryButtonClass, "mt-2")}>
                Contact WATPRO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-[13px] text-slate-600">
          © 2026 WATPRO Consulting. Premium advisory, transformation, delivery, and executive learning platform.
        </div>
      </div>
    </footer>
  );
}
