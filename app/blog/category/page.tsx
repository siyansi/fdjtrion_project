
"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, getAssetUrl, type Post } from "@/lib/blog";
import { Reveal, ScrollProgress, SiteFooter} from "@/component/site/chrome";

type Category = (typeof CATEGORIES)[number];

interface CategoryClientContentProps {
  cat: Category;
  posts?: Post[]; // Mark as optional for safety
}

export default function CategoryClientContent({ cat, posts = [] }: CategoryClientContentProps) {
  const [q, setQ] = useState("");

  // Ensure posts is always an array before calling filter
  const safePosts = Array.isArray(posts) ? posts : [];

  const filtered = safePosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase()),
  );

  const [featured, ...rest] = filtered;

  return (
    <div className="blog-theme min-h-screen bg-black text-white antialiased">
      {/* <ScrollProgress />
      <SiteNav />

      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <video
          src={getAssetUrl(cat.video)}
          poster={getAssetUrl(cat.cover)}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 pt-40">
          <Reveal>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Link href="/blog" className="transition-colors hover:text-[color:var(--brand)]">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white/80">{cat.name}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">{cat.name}</h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-2xl text-lg text-white/60">{cat.blurb}</p>
          </Reveal>
        </div>
      </section> */}

      {/* Category switcher */}
      <div className="sticky top-[72px] z-40 border-y border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={`/blog/${c.id}`}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  c.id === cat.id
                    ? "border-transparent bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] text-black"
                    : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles…"
            className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[color:var(--brand)] focus:bg-white/10 md:w-64"
          />
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-16">
        {featured && (
          <Reveal>
            <Link
              href={`/blog/${featured.category}/${featured.slug}`}
              className="group grid gap-8 overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all duration-500 hover:ring-[color:var(--brand)]/50 md:grid-cols-2"
            >
              <div className="overflow-hidden">
                <img
                  src={getAssetUrl(featured.cover)}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full min-h-[320px] w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:pr-12">
                <div className="flex items-center gap-3 text-xs text-white/45">
                  <span>{featured.date}</span>
                  {featured.industry && (
                    <span className="rounded-full border border-white/15 px-2 py-0.5 text-[color:var(--brand)]">
                      {featured.industry}
                    </span>
                  )}
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold leading-tight transition-colors duration-300 group-hover:text-[color:var(--brand)] md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-white/60">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-[color:var(--brand)]">
                  Read article <span>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 120}>
              <Link
                href={`/blog/${p.category}/${p.slug}`}
                className="group block h-full"
              >
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:ring-[color:var(--brand)]/50">
                  <img
                    src={getAssetUrl(p.cover)}
                    alt={p.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-white/45">
                  <span>{p.date}</span>
                  {p.industry && <span className="text-[color:var(--brand)]">{p.industry}</span>}
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-[color:var(--brand)]">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-white/55">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-white/50">No articles match “{q}”.</p>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

