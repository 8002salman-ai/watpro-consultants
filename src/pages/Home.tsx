import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, industries, insights, impactStats, founderProfile, founderAwards, founderPublications, academyPrograms } from '../data/watproContent';
import { GlassCard, SectionHeading, primaryButtonClass, secondaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#07111e' }}>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 hero-mesh" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(217,171,83,0.08) 0%, transparent 70%),' +
              'radial-gradient(ellipse 40% 60% at 0% 50%, rgba(30,64,175,0.1) 0%, transparent 60%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Pakistan's Premier PPP & Infrastructure Advisory
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              THE ULTIMATE
              <br />
              <span className="animated-gradient-text">SOLUTION HUB</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl md:text-2xl text-slate-300 font-light tracking-wide mb-3"
            >
              Strategy.&nbsp;&nbsp;Transformation.&nbsp;&nbsp;Delivery.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
            >
              Led by Dr. Waseem Ali Tipu — PhD Project Management, MS Gold Medal, 25+ years across
              Pakistan Army, HIT, UN Peacekeeping, SDPI, and Air University — WATPRO delivers
              world-class advisory on PPP, infrastructure, procurement, and sustainable development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className={primaryButtonClass}>
                Book a Consultation
              </Link>
              <Link to="/services" className={secondaryButtonClass}>
                Explore Our Services
              </Link>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {['PhD Project Management', 'UN Peacekeeping Veteran', 'Heavy Industries Taxila', 'USD 300M+ Portfolio', 'MS Gold Medal', '14+ Publications'].map(badge => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-amber-400/60 to-transparent" />
        </motion.div>
      </section>

      {/* ══ IMPACT STATS ══ */}
      <section className="py-16 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i * 0.08)} className="text-center">
                <div className="text-4xl font-black stat-big mb-1">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOUNDER CREDIBILITY ══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo side */}
            <motion.div {...fadeUp(0)} className="flex flex-col items-center md:items-start">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div
                  className="w-full h-full rounded-2xl photo-ring overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0e2239 0%, #1a3a5c 100%)' }}
                >
                  <img
                    src={founderProfile.photoUrl}
                    alt={founderProfile.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center text-white"><div class="text-6xl font-black opacity-30">WAT</div><div class="text-sm text-slate-400 mt-2">Dr. W.A. Tipu</div></div>';
                      }
                    }}
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 rounded-xl px-4 py-2 shadow-xl">
                  <div className="text-xs font-black uppercase tracking-wider">USD 300M+</div>
                  <div className="text-[10px] font-semibold">Project Portfolio</div>
                </div>
              </div>

              {/* Awards row */}
              <div className="mt-10 flex flex-col gap-3 w-full max-w-sm">
                {founderAwards.map(award => (
                  <div key={award.title} className="flex items-start gap-3 p-3 rounded-lg border border-white/8 bg-white/[0.04]">
                    <span className="text-xl flex-shrink-0">{award.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-white leading-snug">{award.title}</p>
                      <p className="text-[11px] text-slate-500">{award.body} &bull; {award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Founded & Led By</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">{founderProfile.name}</h2>
              <p className="text-amber-300 font-medium mb-6">{founderProfile.title}</p>
              <p className="text-slate-300 leading-relaxed mb-8">{founderProfile.bio}</p>

              {/* Credentials grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {founderProfile.credentials.map(c => (
                  <div key={c} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-amber-400 pl-5 italic text-slate-300 text-base leading-relaxed mb-8">
                &ldquo;{founderProfile.quote}&rdquo;
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <Link to="/about" className={primaryButtonClass}>Meet Dr. Tipu</Link>
                <a href={founderProfile.linkedin} target="_blank" rel="noreferrer" className={secondaryButtonClass}>
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Eight Pillars of Advisory Excellence"
              subtitle="From PPP structuring to defence acquisition, WATPRO delivers specialist consulting grounded in academic rigour and decades of delivery."
              centered
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <motion.div key={svc.id} {...fadeUp(i * 0.06)}>
                <GlassCard hover premium className="p-6 h-full flex flex-col gap-4">
                  <span className="text-3xl">{svc.icon}</span>
                  <h3 className="text-sm font-bold text-white leading-snug">{svc.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed flex-1">{svc.shortDesc}</p>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group"
                  >
                    Learn more
                    <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="text-center mt-10">
            <Link to="/services" className={primaryButtonClass}>View All Services</Link>
          </motion.div>
        </div>
      </section>

      {/* ══ WHY WATPRO ══ */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <SectionHeading
                eyebrow="Why WATPRO"
                title="Research-Backed. Delivery-Proven."
                subtitle="We don't just advise — we have done it. Every recommendation is grounded in peer-reviewed research, validated in the field, and tailored to Pakistan's institutional reality."
              />
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { title: 'PhD-Level Rigour', desc: 'Every analysis grounded in peer-reviewed methodology — PERT, Monte Carlo, AHP, PLS-SEM.' },
                  { title: 'Pakistan-Specific Expertise', desc: 'Deep knowledge of PPRA Rules, Planning Commission processes, and provincial PPP frameworks.' },
                  { title: 'Cross-Sector Track Record', desc: 'Defence, civil infrastructure, UN peacekeeping, academia — rare breadth, proven depth.' },
                  { title: 'Trusted by Institutions', desc: 'Recognised by the UN Force Commander, Chief of Army Staff, and international journal editors.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-sm text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about" className={secondaryButtonClass}>Our Story &amp; Approach</Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-4">
              {founderProfile.roles.map(role => (
                <GlassCard key={role.org} className="p-5">
                  <p className="text-xs font-bold text-amber-400 mb-1 leading-snug">{role.role}</p>
                  <p className="text-sm font-semibold text-white">{role.org}</p>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <SectionHeading eyebrow="Industries" title="Sectors We Serve" centered />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.id} {...fadeUp(i * 0.05)}>
                <GlassCard hover className="p-5 text-center">
                  <span className="text-3xl block mb-3">{ind.icon}</span>
                  <p className="text-sm font-bold text-white">{ind.name}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.3)} className="text-center mt-10">
            <Link to="/industries" className={secondaryButtonClass}>All Industries</Link>
          </motion.div>
        </div>
      </section>

      {/* ══ ACADEMY PREVIEW ══ */}
      <section className="py-24" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp(0)}>
              <SectionHeading
                eyebrow="WATPRO Academy"
                title="Capacity Building for Pakistan's Infrastructure Professionals"
                subtitle="Six intensive programmes taught by a published researcher and field practitioner. From PPP Foundation to System Acquisition Process."
              />
              <div className="mt-8 flex flex-col gap-3">
                {academyPrograms.slice(0, 4).map(prog => (
                  <div key={prog.id} className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.04]">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400/15 text-amber-400">
                        {prog.level}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{prog.title}</p>
                      <p className="text-xs text-slate-400">{prog.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/academy" className={primaryButtonClass}>Explore All Programmes</Link>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-col gap-4">
              <GlassCard premium className="p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Featured Programme</p>
                <h3 className="text-xl font-black text-white mb-3">PPP Professional Certificate</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Pakistan's most rigorous PPP training programme. 4 days, 12 modules, real case studies
                  from Pakistan's infrastructure pipeline. Financial modelling, contract drafting,
                  renegotiation strategies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Financial Modelling', 'Contract Drafting', 'VfM Analysis', 'Risk Allocation', 'Performance Monitoring'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
                <Link to="/academy" className={primaryButtonClass}>Learn More</Link>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ INSIGHTS PREVIEW ══ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="flex justify-between items-end mb-14">
            <SectionHeading eyebrow="Insights & Research" title="Knowledge From the Field" />
            <Link to="/insights" className="hidden sm:inline-flex text-sm font-semibold text-amber-400 hover:text-amber-300 items-center gap-1">
              All Insights &rarr;
            </Link>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((item, i) => (
              <motion.div key={item.id} {...fadeUp(i * 0.08)}>
                <GlassCard hover premium className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug mb-3 flex-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.excerpt}</p>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
                      Read publication &rarr;
                    </a>
                  ) : (
                    <Link to="/insights" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
                      Read more &rarr;
                    </Link>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PUBLICATIONS STRIP ══ */}
      <section className="py-16 border-y border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Published Research</p>
            <p className="text-2xl font-black text-white">14+ Publications. Peer-Reviewed. Field-Tested.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {founderPublications.slice(0, 4).map((pub, i) => (
              <motion.div key={pub.id} {...fadeUp(i * 0.07)}>
                <div className="pub-card py-2">
                  <p className="text-sm font-semibold text-white leading-snug">{pub.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{pub.journal} &bull; {pub.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.3)} className="text-center mt-10">
            <Link to="/insights" className={secondaryButtonClass}>View All Publications</Link>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(217,171,83,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">Ready to Begin?</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Let's Build Something
              <br />
              <span className="animated-gradient-text">Extraordinary</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Governments and institutions across Pakistan trust WATPRO for their most complex
              infrastructure, PPP, and project delivery challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className={primaryButtonClass}>Start the Conversation</Link>
              <Link to="/services" className={secondaryButtonClass}>Explore Our Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
