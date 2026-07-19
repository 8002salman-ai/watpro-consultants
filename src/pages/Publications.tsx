import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, GraduationCap, Newspaper } from 'lucide-react';
import {
  pressArticles,
  pressCount,
  researchCount,
  researchPublications,
  totalPublications,
} from '../data/publications';
import { founderProfile } from '../data/watproContent';
import { GlassCard, PageHero } from '../components/ui';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

type Tab = 'research' | 'press';

export default function Publications() {
  const [tab, setTab] = useState<Tab>('research');

  const tabButtonClass = (active: boolean) =>
    [
      'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200',
      active
        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 shadow-lg shadow-amber-900/30'
        : 'border border-white/15 bg-white/[0.06] text-slate-300 hover:bg-white/[0.12] hover:text-white',
    ].join(' ');

  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="Publications & Research"
        title="Research That Shapes Policy"
        subtitle={`Dr. Waseem Ali Tipu's published work spans ${researchCount} peer-reviewed research publications and ${pressCount} policy and press articles — covering public-private partnerships, sustainability, artificial intelligence, governance, lifecycle management, and project performance.`}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={founderProfile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg"
          >
            <GraduationCap className="w-4 h-4" aria-hidden="true" />
            Google Scholar Profile
          </a>
          <a
            href={founderProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white border border-white/15 bg-white/[0.08]"
          >
            LinkedIn
          </a>
        </div>
      </PageHero>

      {/* Stats — derived from central data */}
      <section className="py-12 border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { val: String(researchCount), label: 'Peer-Reviewed Publications' },
              { val: String(pressCount), label: 'Policy & Press Articles' },
              { val: String(totalPublications), label: 'Total Publications' },
            ].map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.07)}>
                <div className="text-3xl md:text-4xl font-black stat-big mb-1">{s.val}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Publication categories">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'research'}
              onClick={() => setTab('research')}
              className={tabButtonClass(tab === 'research')}
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Peer-Reviewed Research ({researchCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'press'}
              onClick={() => setTab('press')}
              className={tabButtonClass(tab === 'press')}
            >
              <Newspaper className="w-4 h-4" aria-hidden="true" />
              Policy & Press Articles ({pressCount})
            </button>
          </div>

          {/* ── PEER-REVIEWED RESEARCH ── */}
          {tab === 'research' && (
            <div className="flex flex-col gap-5" role="tabpanel" aria-label="Peer-reviewed research">
              {researchPublications.map((pub, i) => (
                <motion.div key={pub.id} {...fadeUp(Math.min(i * 0.05, 0.3))}>
                  <GlassCard premium className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-amber-400/15 border border-amber-400/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-amber-400" aria-hidden="true" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold">
                          {pub.year}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-black text-white leading-snug mb-2">{pub.title}</h3>
                        <p className="text-sm font-semibold text-amber-300 mb-1">
                          {pub.journal}
                          {pub.volumeIssue ? `, ${pub.volumeIssue}` : ''}
                          {pub.pages ? `, ${pub.pages}` : ''}
                        </p>
                        <p className="text-xs text-slate-400 mb-4">{pub.authors} ({pub.year})</p>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200"
                          >
                            {pub.linkLabel}
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}

          {/* ── POLICY & PRESS ARTICLES ── */}
          {tab === 'press' && (
            <div className="grid md:grid-cols-2 gap-5" role="tabpanel" aria-label="Policy and press articles">
              {pressArticles.map((art, i) => (
                <motion.div key={art.id} {...fadeUp(Math.min(i * 0.05, 0.3))}>
                  <GlassCard hover className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                        <Newspaper className="w-4 h-4 text-amber-400" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-white leading-snug mb-1.5">{art.title}</h3>
                        <p className="text-xs text-slate-400">
                          {art.outlet} &bull; {art.date}
                        </p>
                      </div>
                    </div>
                    <a
                      href={art.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-lg text-xs font-bold text-white border border-white/15 bg-white/[0.08] hover:bg-white/[0.14] hover:border-amber-400/40 transition-all duration-200"
                    >
                      Read Article
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
