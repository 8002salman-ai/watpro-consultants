import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import {
  GlassCard,
  PageHero,
  SectionShell,
} from "../components/ui";
import { cn } from "../utils/cn";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { pageMeta } from "../data/watproContent";
import { blogPosts, ceoMessage } from "../data/blogContent";

export default function Blog() {
  useDocumentMeta(pageMeta.blog);
  const [countryFilter, setCountryFilter] = useState<string>("All");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((post) => post.country)))],
    []
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    []
  );

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const countryMatch = countryFilter === "All" || post.country === countryFilter;
      const categoryMatch = categoryFilter === "All" || post.category === categoryFilter;
      return countryMatch && categoryMatch;
    });
  }, [countryFilter, categoryFilter]);

  return (
    <>
      <PageHero meta={pageMeta.blog} />

      {/* CEO Message Section */}
      <SectionShell>
        <GlassCard className="overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                <img
                  src={ceoMessage.picture}
                  alt={ceoMessage.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-md lg:block">
                <p className="text-sm font-bold text-slate-900">{ceoMessage.name}</p>
                <p className="text-[11px] text-slate-600">{ceoMessage.role}</p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-50 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.28em] text-amber-700">
                {ceoMessage.title}
              </span>
              <div className="mt-4 space-y-4">
                {ceoMessage.body.map((paragraph, index) => (
                  <p key={index} className="text-[14px] leading-7 text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-sm font-bold italic text-amber-700">{ceoMessage.signature}</p>
            </div>
          </div>
        </GlassCard>
      </SectionShell>

      {/* Blog Posts */}
      <SectionShell>
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Latest Articles</h2>
            <p className="mt-2 text-[14px] text-slate-600">
              Perspectives on infrastructure, PPP, project delivery, and governance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country === "All" ? "All Countries" : country}
                </option>
              ))}
            </select>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm focus:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <GlassCard>
            <p className="text-center text-[14px] text-slate-600">No articles found matching your filters.</p>
          </GlassCard>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                  index === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                )}
              >
                <div className={cn("relative overflow-hidden", index === 0 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[10.5px] font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[10.5px] font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                      <MapPin className="h-3 w-3" />
                      {post.country}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-3 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={cn("mb-3 font-bold tracking-tight text-slate-900", index === 0 ? "text-2xl md:text-3xl" : "text-lg")}>
                    {post.title}
                  </h3>
                  <p className={cn("mb-4 flex-1 text-slate-600", index === 0 ? "text-[14px] leading-7" : "text-[13px] leading-6")}>
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-[11px] font-semibold text-slate-700">{post.author}</span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-bold text-amber-700 transition group-hover:gap-2">
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </SectionShell>
    </>
  );
}
