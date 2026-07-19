import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/watproContent';
import { GlassCard, PageHero, primaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Services() {
  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="Our Services"
        title="Eight Pillars of Advisory Excellence"
        subtitle="WATPRO delivers specialist consulting across the full spectrum of PPP, infrastructure, procurement, defence acquisition, and project management — grounded in academic rigour and hands-on delivery experience."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className={primaryButtonClass}>Request a Proposal</Link>
        </div>
      </PageHero>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-10">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                {...fadeUp(i * 0.05)}
              >
                <GlassCard premium className="p-8 md:p-10">
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Left */}
                    <div className="md:col-span-1">
                      <span className="text-5xl block mb-4">{svc.icon}</span>
                      <h2 className="text-xl font-black text-white mb-3 leading-tight">{svc.title}</h2>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">{svc.shortDesc}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-400">{svc.outcome.split('.')[0]}</span>
                      </div>
                    </div>

                    {/* Middle */}
                    <div className="md:col-span-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">What We Do</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{svc.description}</p>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Service Scope</p>
                      <ul className="flex flex-col gap-2">
                        {svc.features.map(f => (
                          <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-amber-400 flex-shrink-0 mt-0.5 text-xs">&#10003;</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-black text-white mb-4">Not sure which service fits?</h2>
            <p className="text-slate-400 mb-8">Schedule a discovery call. Dr. Tipu will assess your needs and recommend the right advisory approach.</p>
            <Link to="/contact" className={primaryButtonClass}>Book a Free Discovery Call</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
