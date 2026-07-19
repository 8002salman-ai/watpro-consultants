// ─── CENTRAL MEDIA / VIDEO DATA ───────────────────────────────────────────────
// Single source of truth for Dr. Tipu's video lectures and media appearances.
// Metadata (titles, channel names) fetched from YouTube oEmbed.

export interface MediaVideo {
  id: string; // YouTube video ID
  title: string;
  channel: string;
  channelUrl: string;
  category: 'Public-Private Partnership' | 'MS Project Tutorials' | 'Risk Management' | 'TV & Interviews';
  start?: number; // optional start time in seconds
}

export const CHANNEL_NAME = 'AM - Educates by Dr Waseem Ali Tipu (Consultant)';
export const CHANNEL_URL = 'https://www.youtube.com/@WaseemTipu-p8u';

export const mediaVideos: MediaVideo[] = [
  {
    id: 'pwXTeSC3AeU',
    title: 'What is Public Private Partnership',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'Public-Private Partnership',
  },
  {
    id: 'yN4YGX5JmWE',
    title: 'Why Public Private Partnership is important for Pakistan',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'Public-Private Partnership',
  },
  {
    id: '_N3nMe2-_ok',
    title: 'Is it Public Private / Private Public Partnership Project?',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'Public-Private Partnership',
  },
  {
    id: '6I1azk74KHw',
    title: 'Public Private Partnership',
    channel: 'SDTV',
    channelUrl: 'https://www.youtube.com/@SDTVPakistan',
    category: 'TV & Interviews',
    start: 573,
  },
  {
    id: 'aSYJa4Sax2E',
    title: 'How to Enter Task in MS Project (Part 1)',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'MS Project Tutorials',
    start: 63,
  },
  {
    id: 'JqyeNPmdhUQ',
    title: 'Task Relationship Types, Task Splitting & Milestone Entry (Part 2)',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'MS Project Tutorials',
  },
  {
    id: 'STPo4Q216Us',
    title: 'WBS, Task Connection & Tagging Tasks on Timeline (Part 3)',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'MS Project Tutorials',
    start: 16,
  },
  {
    id: 'xwjz_DYbgVU',
    title: 'Understanding Project Risk Management — Dr W A Tipu',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'Risk Management',
  },
  {
    id: 'G4EQ6LT6xtQ',
    title: 'Risk vs Uncertainty — Dr W A Tipu',
    channel: CHANNEL_NAME,
    channelUrl: CHANNEL_URL,
    category: 'Risk Management',
  },
];

export const mediaCategories = [
  'All',
  'Public-Private Partnership',
  'MS Project Tutorials',
  'Risk Management',
  'TV & Interviews',
] as const;

export const videoCount = mediaVideos.length;

export const thumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const watchUrl = (v: MediaVideo) =>
  `https://www.youtube.com/watch?v=${v.id}${v.start ? `&t=${v.start}s` : ''}`;
export const embedUrl = (v: MediaVideo) =>
  `https://www.youtube.com/embed/${v.id}?autoplay=1${v.start ? `&start=${v.start}` : ''}`;
