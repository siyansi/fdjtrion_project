"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import PageShell from "@/pages/hero";
import { blogCategories, getCategory, postsByCategory } from "@/lib/blogdetails";
import Image from "next/image"; // Import Next.js Image component

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = use(params);
  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = postsByCategory(categorySlug);

  return (
    <PageShell
      eyebrow="Blog"
      title={<span className="text-gradient">{category.name}</span>}
      subtitle={category.blurb}
    >
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-5">
        <Link href="/blogs" className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition">
          All
        </Link>
        {blogCategories.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/${c.slug}`}
            className={`rounded-full px-4 py-2 text-sm transition ${
              c.slug === category.slug ? "glass-strong text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
            whileHover={{ y: -5 }}
          >
            <Link
              href={`/blog/${category.slug}/${p.slug}`}
              className="group relative block overflow-hidden rounded-3xl glass h-full"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-background/60">
                <Image
                  src={p.image.toString()}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                  {category.name}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground">{p.date}</span>
                  {p.industry && <span className="text-brand font-medium">{p.industry}</span>}
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl leading-snug transition group-hover:text-gradient">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-brand">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}