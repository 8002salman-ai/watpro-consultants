import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/academy', label: 'Academy' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
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
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07111e]/95 backdrop-blur-md border-b border-white/8 animated-header'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0" style={{ width: 44, height: 34 }}>
              <img src="/watpro-logo.jpg" alt="WATPRO Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight text-white leading-none">WATPRO</div>
              <div className="text-[10px] font-semibold tracking-[0.15em] text-amber-400 uppercase leading-none mt-0.5">Consultants</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const active = pathname === to || (to !== '/' && pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? 'text-amber-400 nav-active' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-900/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/8 bg-[#07111e]/98 backdrop-blur-md"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map(({ to, label }) => {
                  const active = pathname === to || (to !== '/' && pathname.startsWith(to));
                  return (
                    <Link
                      key={to}
                      to={to}
                      className={`px-4 py-3 rounded-lg text-sm font-medium ${
                        active ? 'text-amber-400 bg-amber-400/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="mt-2 px-4 py-3 rounded-lg text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 text-center"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/8 bg-[#050d17]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0" style={{ width: 44, height: 34 }}>
                  <img src="/watpro-logo.jpg" alt="WATPRO Logo" className="w-full h-full object-contain" />
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
                {['PPP Advisory','Project Management','Procurement & Contracts','Infrastructure Planning','Sustainable Development','Defence Acquisition','Policy & Regulatory','Training & Academy'].map(s => (
                  <li key={s}><Link to="/services" className="hover:text-white transition-colors">{s}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {[['About Dr. Tipu','/about'],['Our Services','/services'],['Industries','/industries'],['WATPRO Academy','/academy'],['Insights & Research','/insights'],['Contact','/contact']].map(([label,to]) => (
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
