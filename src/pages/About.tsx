import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { founderProfile, founderAwards, founderCertifications, founderPublications } from '../data/watproContent';
import { GlassCard, PageHero, SectionHeading, primaryButtonClass, secondaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function About() {
  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="About WATPRO"
        title="Strategy. Transformation. Delivery."
        subtitle="WATPRO Consultants is Pakistan's premier PPP and project management advisory firm, built on 25+ years of field experience, academic research, and institutional trust."
      />

      {/* ══ FOUNDER STORY ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Photo + badges column */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start gap-6">
              <motion.div {...fadeUp(0)} className="relative w-72 h-80 md:w-full md:h-96">
                <div
                  className="w-full h-full rounded-2xl overflow-hidden photo-ring"
                  style={{ background: 'linear-gradient(135deg, #0e2239 0%, #1a3a5c 100%)' }}
                >
                  <img
                    src={founderProfile.photoUrl}
                    alt={founderProfile.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = 'none';
                      const p = t.parentElement;
                      if (p) p.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center"><div class="text-7xl font-black text-white/10">WAT</div><div class="text-sm text-slate-500 mt-4">Dr. Waseem Ali Tipu</div></div>';
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-xs font-black uppercase">Founder</div>
                  <div className="text-[10px] font-semibold">WATPRO Consultants</div>
                </div>
              </motion.div>

              {/* Awards */}
              <motion.div {...fadeUp(0.1)} className="w-full">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Honours &amp; Awards</p>
                {founderAwards.map(award => (
                  <div key={award.title} className="flex items-start gap-3 p-3 mb-2 rounded-lg border border-white/8 bg-white/[0.04]">
                    <span className="text-lg flex-shrink-0">{award.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-white">{award.title}</p>
                      <p className="text-[11px] text-slate-500">{award.body} &bull; {award.year}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bio column */}
            <div className="md:col-span-3">
              <motion.div {...fadeUp(0)}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">Founded &amp; Led By</p>
                <h2 className="text-4xl font-black text-white mb-2">{founderProfile.name}</h2>
                <p className="text-amber-300 font-semibold mb-6">{founderProfile.title}</p>
                <p className="text-slate-300 leading-relaxed mb-6">{founderProfile.bio}</p>
              </motion.div>

              <motion.div {...fadeUp(0.1)}>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Career Highlights</p>
                <div className="flex flex-col gap-3 mb-8">
                  {founderProfile.roles.map(role => (
                    <div key={role.org} className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.04]">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-white">{role.org}</p>
                        <p className="text-xs text-slate-400">{role.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.15)}>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Academic Credentials</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {founderProfile.credentials.map(c => (
                    <div key={c} className="flex items-center gap-2 text-sm text-slate-300 p-2.5 rounded-lg border border-white/8 bg-white/[0.03]">
                      <span className="text-amber-400 text-xs">&#10003;</span>
                      {c}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.2)}>
                <blockquote className="border-l-2 border-amber-400 pl-5 italic text-slate-200 text-base leading-relaxed mb-8">
                  &ldquo;{founderProfile.quote}&rdquo;
                </blockquote>
                <div className="flex flex-wrap gap-3">
                  <a href={founderProfile.linkedin} target="_blank" rel="noreferrer" className={primaryButtonClass}>
                    LinkedIn Profile
                  </a>
                  <a href={founderProfile.scholar} target="_blank" rel="noreferrer" className={secondaryButtonClass}>
                    Google Scholar
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.025)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp(0)}>
              <GlassCard premium className="p-8 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">Our Mission</p>
                <p className="text-xl font-bold text-white leading-relaxed mb-4">
                  To be the most trusted consulting partner for governments and institutions navigating
                  PPP, project delivery, and sustainable development.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We achieve this by combining PhD-level analytical rigour with 25+ years of on-the-ground
                  delivery experience — translating research into results that last.
                </p>
              </GlassCard>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <GlassCard premium className="p-8 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">Our Vision</p>
                <p className="text-xl font-bold text-white leading-relaxed mb-4">
                  A Pakistan where every major infrastructure project is delivered on time, within budget,
                  and aligned to sustainable development goals.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We work toward this by raising the bar for project management, PPP governance, and
                  institutional capacity — one project, one programme, one policy at a time.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATIONS ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="mb-12">
            <SectionHeading
              eyebrow="Professional Certifications"
              title="International Credentials"
              subtitle="Dr. Tipu holds certifications from WISSEN, the United Nations, PPMI, and PMI — complementing his academic doctorate and gold-medal master's degree."
            />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {founderCertifications.map((cert, i) => (
              <motion.div key={cert} {...fadeUp(i * 0.06)}>
                <GlassCard className="p-5 flex items-start gap-3">
                  <span className="text-amber-400 text-lg flex-shrink-0 mt-0.5">📋</span>
                  <p className="text-sm font-medium text-slate-200 leading-snug">{cert}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENT MODEL ══ */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.025)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <SectionHeading
              eyebrow="How We Work"
              title="The WATPRO Engagement Model"
              subtitle="Four stages that take you from challenge to capability."
              centered
            />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep-dive diagnostic to understand your institutional context, constraints, and objectives.' },
              { num: '02', title: 'Strategy', desc: 'Evidence-based strategy design grounded in international best practice and Pakistan-specific knowledge.' },
              { num: '03', title: 'Delivery', desc: 'Hands-on implementation support, facilitation, and capability transfer — not just reports.' },
              { num: '04', title: 'Sustain', desc: 'Training, documentation, and follow-on advisory to embed capability within your organisation.' },
            ].map((step, i) => (
              <motion.div key={step.num} {...fadeUp(i * 0.08)}>
                <GlassCard premium className="p-6">
                  <div className="text-3xl font-black stat-big mb-3">{step.num}</div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-black text-white mb-4">Ready to work together?</h2>
            <p className="text-slate-400 mb-8">Schedule a no-obligation discovery call with Dr. Tipu.</p>
            <Link to="/contact" className={primaryButtonClass}>Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
