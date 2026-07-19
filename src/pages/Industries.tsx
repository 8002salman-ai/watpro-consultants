import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industries } from '../data/watproContent';
import { GlassCard, PageHero, SectionHeading, primaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Industries() {
  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="Industries"
        title="Sectors Where We Create Value"
        subtitle="WATPRO's cross-sector experience — from UN MONUSCO and defence manufacturing to academia, policy research, and infrastructure finance — enables us to serve diverse clients with precision."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <motion.div key={ind.id} {...fadeUp(i * 0.07)}>
                <GlassCard hover premium className="p-8">
                  <div className="flex items-start gap-5">
                    <span className="text-4xl flex-shrink-0">{ind.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-white mb-2">{ind.name}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">{ind.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {ind.examples.map(ex => (
                          <span key={ex} className="px-2.5 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-xs font-medium text-amber-400">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator section */}
      <section className="py-20" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <SectionHeading
              eyebrow="Cross-Sector Advantage"
              title="Why Breadth Matters"
              subtitle="Infrastructure, defence, and development challenges rarely stay within a single sector. WATPRO's rare cross-sector experience means we see solutions others miss."
              centered
            />
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Operational Discipline', desc: 'UN MONUSCO logistics and procurement experience brings rigorous planning, logistics discipline, and delivery focus to every engagement.' },
              { title: 'Academic Depth', desc: 'PhD research and university teaching ensure every advisory product is grounded in current theory and best practice — not received wisdom.' },
              { title: 'Institutional Knowledge', desc: 'Experience inside Heavy Industries Taxila, SDPI, and Air University means we know how decisions actually get made in Pakistan.' },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i * 0.08)}>
                <GlassCard premium className="p-6">
                  <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <motion.div {...fadeUp(0)}>
          <h2 className="text-2xl font-black text-white mb-4">Your sector, our expertise</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Let's discuss how WATPRO's cross-sector knowledge creates value for your specific challenge.</p>
          <Link to="/contact" className={primaryButtonClass}>Speak to Dr. Tipu</Link>
        </motion.div>
      </section>
    </div>
  );
}
