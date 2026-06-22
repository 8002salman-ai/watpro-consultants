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

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#07111e' }}>

      {/* ══ HEADER — always fixed, always opaque ══ */}
      <header
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 animated-header'
            : ''
        }`}
        /* Always keep a solid dark background so logo + hamburger are always readable */
        data-scrolled={scrolled}
      >
        {/* Persistent dark bg — not conditional on scroll */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundColor: scrolled ? 'rgba(7,17,30,0.97)' : 'rgba(7,17,30,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 0,
          }}
        />

        <div
          style={{ position: 'relative', zIndex: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"
          /* 72px height */
          // @ts-ignore
        >
          {/* 72px row */}
          <div className="flex items-center justify-between w-full" style={{ height: 72 }}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div
                className="bg-white rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ width: 42, height: 32, padding: 4 }}
              >
                <img src={WATPRO_LOGO} alt="WATPRO" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-tight text-white leading-none">WATPRO</div>
                <div className="text-[9px] font-semibold tracking-[0.15em] text-amber-400 uppercase leading-none mt-0.5">
                  Consultants
                </div>
              </div>
            </Link>

            {/* Desktop nav — md and above */}
            <nav className="hidden md:flex items-center gap-0.5">
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
            <div className="flex items-center gap-2">
              {/* Book Consultation — desktop only */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-900/30 transition-all duration-200"
              >
                Book Consultation
              </Link>

              {/* ══ HAMBURGER BUTTON — visible below md only ══
                  Wrapper div carries md:hidden (CSS display:none at md+).
                  Button itself uses 100% inline styles — immune to Tailwind
                  cascade. White 2.5px lines on semi-opaque bg, always visible. */}
              <div className="md:hidden" style={{ flexShrink: 0 }}>
              <button
                onClick={() => setMobileOpen(v => !v)}
                aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={mobileOpen}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1001,
                  flexShrink: 0,
                  outline: 'none',
                  padding: 0,
                }}
              >
                {/* Line 1 */}
                <span
                  style={{
                    display: 'block',
                    height: 2.5,
                    width: 22,
                    backgroundColor: '#ffffff',
                    borderRadius: 3,
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease, opacity 0.2s ease',
                    transform: mobileOpen ? 'translateY(7.5px) rotate(45deg)' : 'none',
                  }}
                />
                {/* Line 2 */}
                <span
                  style={{
                    display: 'block',
                    height: 2.5,
                    width: 22,
                    backgroundColor: '#ffffff',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, opacity 0.2s ease',
                    opacity: mobileOpen ? 0 : 1,
                    transform: mobileOpen ? 'scaleX(0)' : 'none',
                  }}
                />
                {/* Line 3 */}
                <span
                  style={{
                    display: 'block',
                    height: 2.5,
                    width: 22,
                    backgroundColor: '#ffffff',
                    borderRadius: 3,
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease, opacity 0.2s ease',
                    transform: mobileOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
                  }}
                />
              </button>
              </div>{/* end md:hidden wrapper */}
            </div>

          </div>
        </div>

        {/* ══ MOBILE DRAWER ══ */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="md:hidden overflow-hidden"
              style={{
                position: 'relative',
                zIndex: 998,
                backgroundColor: '#07111e',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="px-4 pb-4 pt-2 flex flex-col gap-1">

                {/* Main nav links */}
                {navLinks.map(({ to, label }) => {
                  const active = pathname === to || (to !== '/' && pathname.startsWith(to));
                  return (
                    <Link
                      key={to}
                      to={to}
                      style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
                      className={`px-4 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? 'text-amber-400 bg-amber-400/10'
                          : 'text-white hover:text-amber-400 hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '6px 0' }} />

                {/* Client Portal + Admin Portal */}
                {mobileOnlyLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
                    className="px-4 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </Link>
                ))}

                {/* Book Consultation CTA */}
                <Link
                  to="/contact"
                  style={{
                    minHeight: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 8,
                    borderRadius: 8,
                    background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                >
                  Book Consultation
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Push content below fixed header */}
      <div style={{ height: 72 }} />

      <main className="flex-1">
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
                Strategy. Transformation. Delivery. Led by Dr. Waseem Ali Tipu, Pakistan's foremost PPP
                and project management authority with a USD 300M+ delivery portfolio.
              </p>
              <div className="mt-5 flex flex-col gap-1.5 text-sm text-slate-400">
                <a href="mailto:waseemalitipu@gmail.com" className="hover:text-amber-400 transition-colors">waseemalitipu@gmail.com</a>
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
                {[['About Dr. Tipu', '/about'], ['Our Services', '/services'], ['Industries', '/industries'], ['WATPRO Academy', '/academy'], ['Insights & Research', '/insights'], ['Contact', '/contact']].map(([label, to]) => (
                  <li key={to}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Connect</h4>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/dr-waseem-ali-tipu-ph-d-pm-ms-pm-pmp-457a70b7" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all text-sm">in</a>
                  <a href="https://scholar.google.com/citations?user=8xifQ6kAAAAJ&hl=en" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400/30 transition-all text-xs">GS</a>
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
