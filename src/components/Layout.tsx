import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WATPRO_LOGO } from '../assets';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/academy', label: 'Academy' },
  { to: '/insights', label: 'Insights' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
];

const mobileOnlyLinks = [
  { to: '/client/login', label: 'Client Portal' },
  { to: '/admin', label: 'Admin Portal' },
];

export default function Layout() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when menu open so page doesn't move behind overlay
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#07111e', overflowX: 'hidden' }}>

      {/* ── FIXED HEADER ── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        {/* Always-opaque backdrop */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(7,17,30,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.05)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

            {/* Logo */}
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
            >
              <div style={{
                width: 40, height: 30, padding: '3px 4px',
                background: '#ffffff', borderRadius: 6,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <img src={WATPRO_LOGO} alt="WATPRO" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1, whiteSpace: 'nowrap' }}>WATPRO</div>
                <div style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.15em', color: '#fbbf24', textTransform: 'uppercase', lineHeight: 1, marginTop: 3, whiteSpace: 'nowrap' }}>Consultants</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
              {navLinks.map(({ to, label }) => {
                const active = pathname === to || (to !== '/' && pathname.startsWith(to));
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`nav-link px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                      active ? 'text-amber-400 nav-active' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              {/* Desktop CTA */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200"
              >
                Book Consultation
              </Link>

              {/* Hamburger — wrapper div carries md:hidden; button is 100% inline styles */}
              <div className="md:hidden" style={{ flexShrink: 0 }}>
                <button
                  onClick={() => setMobileOpen(v => !v)}
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 5, width: 44, height: 44,
                    borderRadius: 8, border: 'none',
                    backgroundColor: '#f59e0b',
                    cursor: 'pointer', padding: 0, outline: 'none', flexShrink: 0,
                  }}
                >
                  <span style={{ display: 'block', width: 22, height: 2.5, backgroundColor: '#0f172a', borderRadius: 2, transformOrigin: 'center', transition: 'transform 0.25s ease', transform: mobileOpen ? 'translateY(7.5px) rotate(45deg)' : 'none' }} />
                  <span style={{ display: 'block', width: 22, height: 2.5, backgroundColor: '#0f172a', borderRadius: 2, transition: 'opacity 0.2s ease', opacity: mobileOpen ? 0 : 1 }} />
                  <span style={{ display: 'block', width: 22, height: 2.5, backgroundColor: '#0f172a', borderRadius: 2, transformOrigin: 'center', transition: 'transform 0.25s ease', transform: mobileOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE NAV OVERLAY ──
          Separate from the header so it never overlaps page content via stacking.
          Starts at top:72 (below the header), covers full screen below.
          Uses opacity-only animation — no height: 'auto' (broken on Android Chrome). */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="md:hidden"
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              backgroundColor: '#07111e',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ padding: '12px 16px 48px' }}>

              {/* Main nav links — 100% inline styles, no Tailwind dependency */}
              {navLinks.map(({ to, label }) => {
                const active = pathname === to || (to !== '/' && pathname.startsWith(to));
                return (
                  <Link
                    key={to}
                    to={to}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 52,
                      padding: '0 16px',
                      marginBottom: 4,
                      borderRadius: 10,
                      textDecoration: 'none',
                      fontSize: 16,
                      fontWeight: 600,
                      color: active ? '#fbbf24' : '#ffffff',
                      backgroundColor: active ? 'rgba(251,191,36,0.1)' : 'transparent',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '8px 16px 12px' }} />

              {/* Client / Admin portals */}
              {mobileOnlyLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 52,
                    padding: '0 16px',
                    marginBottom: 4,
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#94a3b8',
                  }}
                >
                  {label}
                </Link>
              ))}

              {/* CTA */}
              <div style={{ marginTop: 16 }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 52,
                    borderRadius: 10,
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: 16,
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Book Consultation
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer — always 72 px, matches fixed header height */}
      <div style={{ height: 72, flexShrink: 0 }} />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer className="border-t border-white/8 bg-[#050d17]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0" style={{ width: 44, height: 34 }}>
                  <img src={WATPRO_LOGO} alt="WATPRO Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">WATPRO Consultants</div>
                  <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase">The Ultimate Solution Hub</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Strategy. Transformation. Delivery. Led by Dr. Waseem Ali Tipu — PhD in Project
                Management and specialist in PPP, procurement, and project delivery.
              </p>
              <div className="mt-5 flex flex-col gap-1.5 text-sm text-slate-400">
                <a href="mailto:info@watproconsultants.com" className="hover:text-amber-400 transition-colors">info@watproconsultants.com</a>
                <a href="tel:+923004122313" className="hover:text-amber-400 transition-colors">+92 300 412 2313</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {['PPP Advisory', 'Project Management', 'Procurement & Contracts', 'Infrastructure Planning', 'Sustainable Development', 'Defence Acquisition', 'Policy & Regulatory', 'Training & Academy'].map(s => (
                  <li key={s}><Link to="/services" className="hover:text-white transition-colors">{s}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {[['About Dr. Tipu', '/about'], ['Our Services', '/services'], ['Industries', '/industries'], ['WATPRO Academy', '/academy'], ['Insights & Research', '/insights'], ['Publications', '/publications'], ['Contact', '/contact']].map(([label, to]) => (
                  <li key={to}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Connect</h4>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/waseemalitipu/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all text-sm">in</a>
                  <a href="https://scholar.google.com/citations?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all text-xs">GS</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} WATPRO Consultants. All rights reserved.</p>
            <p>Strategy. Transformation. Delivery.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
