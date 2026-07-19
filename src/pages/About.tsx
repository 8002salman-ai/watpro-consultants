import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { founderProfile } from '../data/watproContent';
import { GlassCard, primaryButtonClass, secondaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  const expertiseAreas = [
    { icon: '🤝', title: 'Public-Private Partnerships', desc: 'PPP structuring, bidding, and contract management' },
    { icon: '🏗️', title: 'Infrastructure Development', desc: 'Major projects advisory and delivery' },
    { icon: '📊', title: 'Project Management', desc: 'End-to-end project lifecycle management' },
    { icon: '📋', title: 'Procurement', desc: 'Strategic procurement and tendering' },
    { icon: '🏛️', title: 'Governance', desc: 'Institutional strengthening and reform' },
    { icon: '📝', title: 'Contract Management', desc: 'Contract administration and compliance' },
    { icon: '⚠️', title: 'Risk Management', desc: 'Project risk assessment and mitigation' },
    { icon: '📈', title: 'Performance Measurement', desc: 'Project performance measurement and management' },
    { icon: '👥', title: 'Stakeholder Engagement', desc: 'Multi-stakeholder coordination' },
    { icon: '🚚', title: 'Supply Chain & Logistics', desc: 'Supply chain management and logistics operations' },
    { icon: '🎓', title: 'Capacity Building', desc: 'Training and knowledge transfer' },
    { icon: '🌐', title: 'Programme Management', desc: 'Large-scale programme oversight' },
  ];

  const careerTimeline = [
    { org: 'WATPRO Consultants', role: 'Founder & Principal Consultant', desc: 'Leading PPP, procurement, and project management advisory' },
    { org: 'Air University Islamabad', role: 'Adjunct Faculty, Project Management & PPP', desc: 'Teaching project management and public-private partnerships' },
    { org: 'Heavy Industries Taxila', role: 'Senior Program & Procurement Manager', desc: 'Programme delivery and procurement management' },
    { org: 'SDPI', role: 'Consultant, PPP & Governance', desc: 'Public-private partnership and governance consulting' },
    { org: 'UN MONUSCO', role: 'Logistics & Procurement Officer', desc: 'United Nations mission logistics and procurement' },
  ];

  const academicDegrees = [
    { degree: 'PhD', field: 'Project Management', institution: 'Bahria University' },
    { degree: 'MS', field: 'Project Management (Gold Medal)', institution: 'Abasyn University' },
    { degree: 'MBA', field: 'Human Resource Management', institution: 'Virtual University' },
  ];

  const professionalCerts = [
    'Project Performance Measurement & Management — PPMI',
    'Supply Chain Management — PMI',
    'Advance Diploma, Procurement & Contract Management — WISSEN',
  ];

  const internationalCerts = [
    'Public Private Partnership Course — World Bank',
    'Public Procurement Course — World Bank',
    'Merger & Acquisition — Ireland',
    'Strategic Intelligence Certification — United Nations',
  ];

  const methodologySteps = [
    { step: 'Assessment', icon: '🔍', desc: 'Comprehensive diagnostic' },
    { step: 'Strategy', icon: '📐', desc: 'Evidence-based planning' },
    { step: 'Planning', icon: '📝', desc: 'Detailed roadmap' },
    { step: 'Implementation', icon: '⚙️', desc: 'Hands-on execution' },
    { step: 'Monitoring', icon: '📊', desc: 'Performance tracking' },
    { step: 'Capacity Building', icon: '🎓', desc: 'Knowledge transfer' },
    { step: 'Sustainable Outcomes', icon: '✅', desc: 'Long-term impact' },
  ];

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: EXECUTIVE HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full filter blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Portrait */}
            <motion.div {...fadeUp(0)} className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main portrait frame */}
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-600/20 rounded-3xl transform rotate-3 scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-blue-600/30 rounded-3xl transform -rotate-2 scale-100" />
                  <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={founderProfile.photoUrl}
                      alt={founderProfile.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 rounded-2xl px-6 py-4 shadow-2xl"
                >
                  <p className="text-xs font-bold uppercase tracking-widest">Founder</p>
                  <p className="text-sm font-black">WATPRO Consultants</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div {...fadeUp(0.2)} className="order-1 lg:order-2 space-y-8">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-amber-400 font-bold uppercase tracking-[0.3em] text-sm mb-4"
                >
                  Founder &amp; Principal Consultant
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
                >
                  Dr. Waseem<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    Ali Tipu
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-300 leading-relaxed max-w-2xl"
                >
                  PhD in Project Management and specialist in Public-Private Partnerships, procurement,
                  and project delivery — with a career spanning academia at Air University Islamabad,
                  industry at Heavy Industries Taxila, policy consulting at SDPI, and United Nations
                  service with MONUSCO.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className={primaryButtonClass}>
                  Book a Consultation
                </Link>
                <a href={`mailto:${founderProfile.email}`} className={`${secondaryButtonClass} flex items-center gap-2`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email WATPRO
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <a
                  href={founderProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href={founderProfile.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="font-semibold">Google Scholar</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: EXECUTIVE BIOGRAPHY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-6">Executive Biography</p>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                From Field Experience<br />
                <span className="text-amber-400">to Advisory Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Dr. Waseem Ali Tipu is the Founder and Principal Consultant of WATPRO Consultants.
                  His career spans industry, academia, policy research, and international service:
                  Senior Program &amp; Procurement Manager at Heavy Industries Taxila, Adjunct Faculty
                  for Project Management &amp; PPP at Air University Islamabad, Consultant on PPP and
                  Governance at SDPI, and Logistics &amp; Procurement Officer with the United Nations
                  mission MONUSCO.
                </p>
                <p>
                  He holds a PhD in Project Management from Bahria University, an MS in Project
                  Management from Abasyn University — awarded a Gold Medal — and an MBA in Human
                  Resource Management from Virtual University, complemented by World Bank courses in
                  Public-Private Partnerships and Public Procurement.
                </p>
                <p>
                  As founder of WATPRO Consultants, he leads engagements in public-private
                  partnerships, procurement, contract management, and project delivery — bridging the
                  gap between policy and implementation.
                </p>
              </div>
            </div>
            <div className="relative">
              <GlassCard premium className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Core Focus Areas</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Public-Private Partnerships</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Procurement &amp; Contract Management</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Project Management</li>
                      <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Governance</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Background</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center gap-2"><span className="text-blue-400">•</span> United Nations Service (MONUSCO)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-400">•</span> University Faculty (Air University)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Policy Consulting (SDPI)</li>
                        <li className="flex items-center gap-2"><span className="text-blue-400">•</span> Industry Leadership (Heavy Industries Taxila)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: CORE EXPERTISE GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Core Expertise</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Areas of Excellence</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Consulting capabilities built on hands-on experience across industry, academia, and international missions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div key={area.title} {...fadeUp(index * 0.05)}>
                <GlassCard premium className="p-6 h-full hover:border-amber-400/50 transition-all duration-300 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{area.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: CAREER TIMELINE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Career Journey</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Professional Timeline</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-blue-500 to-slate-700" />

            <div className="space-y-12">
              {careerTimeline.map((item, index) => (
                <motion.div
                  key={item.org}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-amber-400 rounded-full border-4 border-slate-950 transform -translate-x-1/2 z-10 mt-1.5" />

                  {/* Content */}
                  <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <GlassCard className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{item.org}</h3>
                      <p className="text-amber-300 font-semibold mb-2">{item.role}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: ACADEMIC EXCELLENCE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Academic Excellence</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Qualifications &amp; Certifications</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Academic Degrees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard premium className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Academic Degrees</h3>
                </div>
                <div className="space-y-4">
                  {academicDegrees.map((deg, i) => (
                    <div key={i} className="border-l-2 border-amber-400 pl-4">
                      <p className="text-lg font-bold text-white">{deg.degree}</p>
                      <p className="text-amber-300 text-sm">{deg.field}</p>
                      <p className="text-slate-400 text-xs mt-1">{deg.institution}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Professional Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard premium className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl">📜</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {professionalCerts.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span className="text-slate-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            {/* International Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard premium className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">International Credentials</h3>
                </div>
                <ul className="space-y-3">
                  {internationalCerts.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-slate-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: ACHIEVEMENTS (Verified Only)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Track Record</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Achievements</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: 'PhD', label: 'Project Management — Bahria University', icon: '🎓' },
              { number: 'Gold Medal', label: 'MS Project Management — Abasyn University', icon: '🏅' },
              { number: 'UN', label: 'MONUSCO Logistics & Procurement', icon: '🌐' },
              { number: 'World Bank', label: 'PPP & Public Procurement Courses', icon: '🏛️' },
            ].map((stat, index) => (
              <motion.div key={stat.label} {...fadeUp(index * 0.1)}>
                <GlassCard premium className="p-8 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-2">{stat.number}</div>
                  <p className="text-slate-400 font-medium">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: WHY CLIENTS CHOOSE WATPRO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">The WATPRO Advantage</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Clients Choose Us</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: '📊', title: 'Evidence-Based Consulting', desc: 'Doctoral-level research rigour applied to practical delivery' },
              { icon: '🏛️', title: 'Public Sector Insight', desc: 'Direct experience across government-linked institutions and policy research' },
              { icon: '🌍', title: 'International Exposure', desc: 'United Nations mission experience and World Bank training' },
              { icon: '⚖️', title: 'Independent Advice', desc: 'Unbiased recommendations focused on your success' },
              { icon: '✅', title: 'Implementation Focus', desc: 'From strategy to execution — hands-on delivery support' },
              { icon: '📈', title: 'Capacity Transfer', desc: 'Training and knowledge transfer built into every engagement' },
            ].map((feature, index) => (
              <motion.div key={feature.title} {...fadeUp(index * 0.08)}>
                <GlassCard className="p-6 hover:border-amber-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: CONSULTING METHODOLOGY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Approach</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Consulting Methodology</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A structured seven-step framework for sustainable transformation
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-blue-500 to-green-500 transform -translate-y-1/2" />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
            >
              {methodologySteps.map((step, index) => (
                <motion.div key={step.step} {...fadeUp(index * 0.1)} className="relative">
                  <GlassCard premium className="p-4 text-center h-full">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="text-sm font-bold text-white mb-1">{step.step}</h3>
                    <p className="text-xs text-slate-400 hidden lg:block">{step.desc}</p>
                    {index < methodologySteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-amber-400 text-lg">→</div>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9: PUBLICATIONS & RESEARCH
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Thought Leadership</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Publications &amp; Research</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Dr. Tipu&apos;s research on public-private partnerships, procurement, and project
              management is available through his academic and professional profiles.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {[
              { title: 'Google Scholar', desc: 'Academic publications and citations', icon: '📖', link: founderProfile.scholar },
              { title: 'LinkedIn', desc: 'Professional insights and articles', icon: '💼', link: founderProfile.linkedin },
            ].map((pub, index) => (
              <motion.div key={pub.title} {...fadeUp(index * 0.1)}>
                <a href={pub.link} target="_blank" rel="noreferrer" className="block">
                  <GlassCard className="p-8 hover:border-amber-400/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{pub.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{pub.title}</h3>
                        <p className="text-slate-400">{pub.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10: MISSION & VISION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Purpose</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Mission &amp; Vision</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard premium className="p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full filter blur-3xl" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">Our Mission</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    To be a trusted consulting partner for governments and institutions navigating
                    PPP, procurement, project delivery, and sustainable development.
                  </p>
                  <p className="text-slate-400">
                    We combine doctoral-level analytical rigour with on-the-ground delivery
                    experience, translating research into results that last.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard premium className="p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <span className="text-3xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    A Pakistan where major infrastructure projects are delivered on time, within
                    budget, and aligned to sustainable development goals.
                  </p>
                  <p className="text-slate-400">
                    We work toward this by raising the bar for project management, PPP governance,
                    and institutional capacity — one project at a time.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 11: FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-6">Let&apos;s Work Together</p>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Transform<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Your Project?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Tipu to discuss your PPP, procurement, or project delivery challenges.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className={primaryButtonClass}>
                Book Consultation
              </Link>
              <a href={`mailto:${founderProfile.email}`} className={`${secondaryButtonClass} flex items-center gap-2`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@watproconsultants.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
