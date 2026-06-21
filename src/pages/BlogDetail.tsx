import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import {
  GlassCard,
  SectionShell,
} from "../components/ui";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { pageMeta } from "../data/watproContent";
import { blogPosts } from "../data/blogContent";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  useDocumentMeta({
    ...pageMeta.blog,
    title: post ? `${post.title} | WATPRO Blog` : pageMeta.blog.title,
    description: post ? post.excerpt : pageMeta.blog.description,
  });

  if (!post) {
    return (
      <SectionShell className="pt-28 md:pt-32">
        <GlassCard className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Article Not Found</h2>
          <p className="mt-3 text-[14px] text-slate-600">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-[13px] font-bold text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </GlassCard>
      </SectionShell>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <SectionShell className="pt-28 md:pt-32">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-2 text-[13px] font-semibold text-slate-700 transition hover:text-amber-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <GlassCard className="overflow-hidden">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-400/30 bg-amber-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-700">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600">
                <MapPin className="h-3.5 w-3.5" />
                {post.country}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-600">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="text-[12px] font-semibold text-slate-600">• {post.readTime}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl md:leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-sm font-bold text-slate-900 shadow-md">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-900">{post.author}</p>
                <p className="text-[12px] text-slate-600">{post.authorRole}</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <p className="text-[16px] font-semibold leading-8 text-slate-800 md:text-lg">
                {post.excerpt}
              </p>
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-[14.5px] leading-8 text-slate-700 md:text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2 border-t border-slate-100 pt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </SectionShell>

      {/* Related Posts */}
      <SectionShell>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Related Articles</h2>
            <p className="mt-2 text-[14px] text-slate-600">Continue exploring insights from WATPRO Consulting</p>
          </div>
          <Link
            to="/blog"
            className="hidden items-center gap-2 text-[13px] font-bold text-amber-700 transition hover:gap-3 md:inline-flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              to={`/blog/${relatedPost.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-700">
                    {relatedPost.category}
                  </span>
                  <span>•</span>
                  <span>{relatedPost.date}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-slate-900">
                  {relatedPost.title}
                </h3>
                <p className="mb-4 flex-1 text-[13px] leading-6 text-slate-600">
                  {relatedPost.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-[12px] font-bold text-amber-700 transition group-hover:gap-2">
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
