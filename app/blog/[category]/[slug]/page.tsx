"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { getCategory, getPost, postsByCategory } from "@/lib/blogdetails";

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default function PostPage({ params }: PostPageProps) {
  const { category: categorySlug, slug } = use(params);

  const category = getCategory(categorySlug);
  const post = getPost(categorySlug, slug);

  if (!category || !post) {
    notFound();
  }

  const related = postsByCategory(categorySlug)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const heroImage = post.hero ?? post.image;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <section className="relative h-[68vh] min-h-[460px] w-full overflow-hidden">
        <Image
          src={heroImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-14">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <Link
              href={`/blog/${category.slug}`}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-brand hover:bg-white/15 transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> {category.name}
            </Link>
            <h1 className="mt-6 font-display text-3xl md:text-5xl font-semibold leading-[1.1]">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>{post.date}</span>
              {post.industry && <span className="text-brand font-medium">{post.industry}</span>}
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="relative mx-auto max-w-4xl px-6 pb-10">
        <p className="glass-strong rounded-3xl border border-white/10 p-7 text-lg leading-relaxed text-foreground/85">
          {post.excerpt}
        </p>

        {post.facts && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {post.facts.map((f) => (
              <div key={f.k} className="glass rounded-2xl p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{f.k}</div>
                <div className="mt-1 font-display text-base">{f.v}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-14 space-y-12">
          {post.sections.map((s, i) => (
            <motion.section
              key={s.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.05 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold">
                <span className="text-gradient">{s.heading}</span>
              </h2>
              {s.body?.map((p2) => (
                <p key={p2.slice(0, 24)} className="mt-4 leading-relaxed text-muted-foreground">
                  {p2}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-5 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 rounded-2xl glass px-5 py-3.5 text-sm text-foreground/85 transition hover:bg-white/10">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.image && (
                <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={s.image}
                    alt={s.heading}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </motion.section>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-foreground text-background px-7 py-3 text-sm font-medium hover:scale-[1.03] transition">
            Talk to a Trion specialist
          </Link>
          <Link href="/products" className="rounded-full glass px-7 py-3 text-sm font-medium hover:bg-white/15 transition">
            Explore the hardware
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-2xl md:text-3xl">More in {category.name}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${category.slug}/${r.slug}`}
                className="group overflow-hidden rounded-3xl glass transition hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                  <div className="mt-2 font-display leading-snug group-hover:text-gradient transition">{r.title}</div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs text-brand">
                    Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}