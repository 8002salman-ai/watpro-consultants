import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { insights, founderProfile } from '../data/watproContent';
import {
  pressArticles,
  pressCount,
  researchCount,
  researchPublications,
  totalPublications,
} from '../data/publications';
import { GlassCard, PageHero, SectionHeading, secondaryButtonClass } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Insights() {
  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="Insights & Research"
        title="Knowledge That Builds Nations"
        subtitle={`Dr. Waseem Ali Tipu's research spans peer-reviewed journals, policy publications, and national press — ${totalPublications} publications shaping Pakistan's PPP, infrastructure, and project management discourse.`}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={founderProfile.scholar}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg"
          >
            Google Scholar Profile &rarr;
          </a>
          <a
            href={founderProfile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white border border-white/15 bg-white/[0.08]"
          >
            LinkedIn
          </a>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="py-12 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: String(researchCount), label: 'Peer-Reviewed Publications' },
              { val: String(pressCount), label: 'Policy & Press Articles' },
              { val: String(totalPublications), label: 'Total Publications' },
              { val: 'MDPI', label: 'Featured Publisher (2024)' },
            ].map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.07)}>
                <div className="text-3xl font-black stat-big mb-1">{s.val}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured paper */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="mb-10">
            <SectionHeading eyebrow="Featured Research" title="Latest Peer-Reviewed Publication" />
          </motion.div>
          {researchPublications.filter(p => p.featured).slice(0, 1).map(pub => (
            <motion.div key={pub.id} {...fadeUp(0.1)}>
              <GlassCard premium className="p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl">
                      📚
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                        Peer-Reviewed
                      </span>
                      <span className="text-xs text-slate-500">{pub.year}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 leading-snug">{pub.title}</h3>
                    <p className="text-sm font-semibold text-amber-300 mb-2">
                      {pub.journal}
                      {pub.volumeIssue ? `, ${pub.volumeIssue}` : ''}
                      {pub.pages ? `, ${pub.pages}` : ''}
                    </p>
                    <p className="text-xs text-slate-400 mb-6">{pub.authors} ({pub.year})</p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                      >
                        {pub.linkLabel} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All peer-reviewed papers */}
      <section className="py-16" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="mb-10">
            <SectionHeading eyebrow="Academic Publications" title="Peer-Reviewed Research" />
          </motion.div>
          <div className="flex flex-col gap-4">
            {researchPublications.map((pub, i) => (
              <motion.div key={pub.id} {...fadeUp(i * 0.06)}>
                <div className="pub-card py-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white leading-snug mb-1">{pub.title}</p>
                      <p className="text-xs text-slate-400">{pub.journal} &bull; {pub.year}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/5 text-slate-400 border border-white/8">
                        peer-reviewed
                      </span>
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
                          Link &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.2)} className="mt-8">
            <Link to="/publications" className={secondaryButtonClass}>View Full Publications Page</Link>
          </motion.div>
        </div>
      </section>

      {/* Press articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="mb-10">
            <SectionHeading
              eyebrow="Press & Commentary"
              title="Featured in The News"
              subtitle="Dr. Tipu writes regularly on PPP, infrastructure, and economic policy for The News and The News on Sunday."
            />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {pressArticles.map((art, i) => (
              <motion.div key={art.id} {...fadeUp(i * 0.06)}>
                <a href={art.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <GlassCard hover className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-400 text-sm">📰</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-white mb-1 leading-snug">{art.title}</h4>
                        <p className="text-xs text-slate-400">{art.outlet} &bull; {art.date}</p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / analysis */}
      <section className="py-16 border-t border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="mb-10">
            <SectionHeading eyebrow="Analysis & Commentary" title="In-Depth Insights" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <motion.div key={item.id} {...fadeUp(i * 0.07)}>
                <GlassCard hover premium className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug mb-3 flex-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.excerpt}</p>
                  <span className="text-xs text-slate-600">{item.readTime} read</span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
