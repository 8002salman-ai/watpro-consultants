import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { academyPrograms, founderProfile, founderTrainingsDelivered } from '../data/watproContent';
import { GlassCard, PageHero, SectionHeading, primaryButtonClass, secondaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const levelColor: Record<string, string> = {
  Foundation: 'text-green-400 bg-green-400/10 border-green-400/20',
  Intermediate: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Professional: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Specialist: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
};

export default function Academy() {
  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="WATPRO Academy"
        title="Professional Development for Pakistan's Infrastructure Sector"
        subtitle="Six intensive programmes taught by Dr. Waseem Ali Tipu — a published researcher and field practitioner with 25+ years of delivery experience. Theory that works. Practice that teaches."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className={primaryButtonClass}>Enquire About Training</Link>
          <a href={`mailto:${founderProfile.email}`} className={secondaryButtonClass}>Email Dr. Tipu</a>
        </div>
      </PageHero>

      {/* Why train with WATPRO */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { stat: '500+', label: 'Officials Trained' },
              { stat: '6', label: 'Specialist Programmes' },
              { stat: '25+', label: 'Years\'  Experience' },
              { stat: 'PhD', label: 'Researcher-Practitioner' },
            ].map((item, i) => (
              <motion.div key={item.label} {...fadeUp(i * 0.07)} className="text-center">
                <div className="text-4xl font-black stat-big mb-1">{item.stat}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="mb-12">
            <SectionHeading
              eyebrow="Our Programmes"
              title="Six Specialist Training Programmes"
              subtitle="Each programme combines international frameworks (PMBOK, PPP best practice, ISO) with Pakistan-specific case studies, PPRA rules, and real delivery challenges."
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            {academyPrograms.map((prog, i) => (
              <motion.div key={prog.id} {...fadeUp(i * 0.07)}>
                <GlassCard premium className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="md:col-span-1">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-3 ${levelColor[prog.level] || 'text-slate-400 bg-white/5 border-white/10'}`}>
                        {prog.level}
                      </span>
                      <h3 className="text-lg font-black text-white mb-3 leading-snug">{prog.title}</h3>
                      <div className="flex flex-col gap-1.5 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400">⏱</span> {prog.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400">🎯</span> {prog.targetAudience}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">About This Programme</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{prog.description}</p>
                    </div>

                    {/* Topics */}
                    <div className="md:col-span-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Topics Covered</p>
                      <ul className="flex flex-col gap-2">
                        {prog.topics.map(topic => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-amber-400 flex-shrink-0 text-xs mt-0.5">&#10003;</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                    <p className="text-xs text-slate-500">In-house and open enrolment options available</p>
                    <Link to="/contact" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
                      Enquire &rarr;
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer profile */}
      <section className="py-20" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Your Trainer</p>
              <h2 className="text-3xl font-black text-white mb-4">{founderProfile.name}</h2>
              <p className="text-amber-300 font-medium mb-4">{founderProfile.title}</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Dr. Tipu brings a rare combination: PhD-level research methodology, gold medal academic
                achievement, and hands-on delivery across Heavy Industries Taxila, UN MONUSCO, SDPI,
                and Air University. His training programmes are known for translating complex theory into
                immediately applicable practice.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Training Portfolio</p>
              <ul className="flex flex-col gap-2">
                {founderTrainingsDelivered.map(t => (
                  <li key={t} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <GlassCard premium className="p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Book In-House Training</p>
                <p className="text-white font-bold text-lg mb-3">Bring WATPRO Academy to Your Organisation</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  All programmes are available as customised in-house training for government departments,
                  corporations, and development organisations. We tailor content to your sector,
                  context, and capability level.
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {['Custom content for your sector', 'Flexible duration (1–5 days)', 'Islamabad, Lahore, Karachi, or virtual', 'Certificate of completion', 'Post-training follow-up session'].map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-amber-400 text-xs">&#10003;</span> {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={primaryButtonClass}>Request In-House Training</Link>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
