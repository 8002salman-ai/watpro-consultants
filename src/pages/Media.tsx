import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import {
  CHANNEL_NAME,
  CHANNEL_URL,
  embedUrl,
  mediaCategories,
  mediaVideos,
  thumbnailUrl,
  videoCount,
  watchUrl,
  type MediaVideo,
} from '../data/media';
import { GlassCard, PageHero } from '../components/ui';

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

type Category = (typeof mediaCategories)[number];

function VideoCard({ video, delay }: { video: MediaVideo; delay: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div {...fadeUp(delay)}>
      <GlassCard premium className="p-0 overflow-hidden h-full flex flex-col group">
        {/* Player / thumbnail */}
        <div className="relative aspect-video bg-slate-900">
          {playing ? (
            <iframe
              src={embedUrl(video)}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play video: ${video.title}`}
              className="absolute inset-0 w-full h-full cursor-pointer"
            >
              <img
                src={thumbnailUrl(video.id)}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              {/* Play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-amber-400/90 flex items-center justify-center shadow-2xl shadow-amber-900/50 transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 text-slate-950 ml-1" fill="currentColor" aria-hidden="true" />
                </span>
              </span>
              {/* Category badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm border border-white/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                {video.category}
              </span>
            </button>
          )}
        </div>

        {/* Details */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-sm font-bold text-white leading-snug mb-2 flex-1">{video.title}</h3>
          <a
            href={video.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors mb-4"
          >
            <YoutubeIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{video.channel}</span>
          </a>
          <a
            href={watchUrl(video)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-lg text-xs font-bold text-white border border-white/15 bg-white/[0.08] hover:bg-white/[0.14] hover:border-amber-400/40 transition-all duration-200"
          >
            Watch on YouTube
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Media() {
  const [category, setCategory] = useState<Category>('All');

  const filtered = useMemo(
    () => (category === 'All' ? mediaVideos : mediaVideos.filter(v => v.category === category)),
    [category],
  );

  const filterButtonClass = (active: boolean) =>
    [
      'px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200',
      active
        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 shadow-lg shadow-amber-900/30'
        : 'border border-white/15 bg-white/[0.06] text-slate-300 hover:bg-white/[0.12] hover:text-white',
    ].join(' ');

  return (
    <div style={{ background: '#07111e' }}>
      <PageHero
        eyebrow="Media & Lectures"
        title="Watch. Learn. Apply."
        subtitle={`${videoCount} video lectures and media appearances by Dr. Waseem Ali Tipu — covering public-private partnerships, MS Project training, and risk management.`}
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg"
          >
            <YoutubeIcon className="w-4 h-4" />
            Visit YouTube Channel
          </a>
        </div>
      </PageHero>

      {/* Channel strip */}
      <section className="py-10 border-y border-white/8" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0">
              <YoutubeIcon className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{CHANNEL_NAME}</p>
              <p className="text-xs text-slate-400">
                Educational lectures on PPP, project management, MS Project, and risk — plus national TV appearances.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2.5 mb-12" role="group" aria-label="Filter videos by category">
            {mediaCategories.map(cat => (
              <button
                key={cat}
                type="button"
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
                className={filterButtonClass(category === cat)}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 opacity-70">
                    ({mediaVideos.filter(v => v.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <VideoCard key={video.id} video={video} delay={Math.min(i * 0.06, 0.3)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-white/8">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl font-black text-white mb-4">Want structured training instead?</h2>
            <p className="text-slate-400 mb-8">
              The WATPRO Academy delivers these topics as full professional programmes — PPP, project
              management, MS Project, and risk management.
            </p>
            <Link
              to="/academy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-900/30 transition-all duration-200"
            >
              Explore WATPRO Academy
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
