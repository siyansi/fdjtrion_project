// "use client";

// import Link from "next/link";
// import { useState } from "react";
// // import { SiteHeader } from "@/components/SiteHeader";
// // import { SiteFooter } from "@/components/SiteFooter";
// import { ArticleCard } from "@/component/article";
// import { articles, categories, type CategoryId } from "@/lib/blog";

// // 1. Export as Default React Component for Next.js Page
// export default function BlogHome() {
//   const [filter, setFilter] = useState<CategoryId | "all">("all");
//   const featured = articles[0]!;
//   const rest = articles.slice(1);
//   const visible = filter === "all" ? rest : rest.filter((a) => a.category === filter);

//   return (
//     <div className="min-h-screen">
//       {/* <SiteHeader /> */}

//       <main>
//         <section className="hero-glow border-b border-border/60">
//           <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
//             <p className="eyebrow">FJD Trion Blog</p>
//             <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-6xl">
//               Reality capture, from the field to the finished model.
//             </h1>
//             <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
//               Release notes, customer results and engineering perspectives on LiDAR scanning, RTK surveying and
//               digital construction — written by the people who build and use the tools.
//             </p>
//           </div>
//         </section>

//         <section className="mx-auto max-w-6xl px-5 py-14">
//           <div className="grid gap-5 md:grid-cols-3">
//             {categories.map((c) => (
//               <Link
//                 key={c.id}
//                 href={`/blog/${c.id}`}
//                 className="group relative overflow-hidden rounded-2xl border border-border/60 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
//               >
//                 <img
//                   src={c.image.toString()}
//                   alt={c.name}
//                   loading="lazy"
//                   width={1280}
//                   height={800}
//                   className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="card-veil absolute inset-0" />
//                 <div className="absolute inset-x-0 bottom-0 p-6">
//                   <p className="eyebrow">
//                     {articles.filter((a) => a.category === c.id).length} articles
//                   </p>
//                   <h2 className="mt-2 text-2xl font-semibold">{c.name}</h2>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.tagline}</p>
//                   <span className="mt-4 inline-block text-sm font-medium text-primary">Explore →</span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>

//         <section className="mx-auto max-w-6xl px-5 pb-8">
//           <ArticleCard article={featured} featured />
//         </section>

//         <section className="mx-auto max-w-6xl px-5 py-10">
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <h2 className="text-2xl font-semibold md:text-3xl">Latest articles</h2>
//             <div className="flex flex-wrap gap-2">
//               {(["all", ...categories.map((c) => c.id)] as const).map((id) => {
//                 const label = id === "all" ? "All" : categories.find((c) => c.id === id)!.name;
//                 const active = filter === id;
//                 return (
//                   <button
//                     key={id}
//                     onClick={() => setFilter(id as CategoryId | "all")}
//                     className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
//                       active
//                         ? "border-transparent bg-accent text-accent-foreground"
//                         : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
//                     }`}
//                   >
//                     {label}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {visible.map((a) => (
//               <ArticleCard key={a.slug} article={a} />
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* <SiteFooter /> */}
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Clock, Search, Sparkles } from "lucide-react";
import PageShell from "@/pages/hero";
import { blogCategories, posts as allPosts } from "@/lib/blogdetails";

export default function BlogsPage() {
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = allPosts.filter(
    (p) =>
      (active === "All" || p.category === active) &&
      (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase()),
  );

  const catName = (slug: string) => blogCategories.find((c) => c.slug === slug)?.name ?? "";

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Ambient Glows & Grids */}
   
   <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-r from-brand/20 via-purple-500 to-cyan-500/20 blur-[130px] opacity-70" />
        <div className="absolute top-[40%] -left-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-10 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>
      <PageShell
        eyebrow="Insights"
        title={<>Stories, updates <span className="text-gradient">& field notes</span>.</>}
        subtitle="Product releases, customer wins and the state of reality-capture in India."
        
      >
        {/* Top Category Hero Cards */}
        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {blogCategories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <Link
                href={`/blog/${c.slug}`}
                className="group relative block h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:border-brand/40 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(var(--brand-rgb),0.25)]"
              >
                {/* Background Image & Overlay */}
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover opacity-60 transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative flex h-full flex-col justify-end p-7 z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-gradient">
                      {c.name}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground/90 line-clamp-2 leading-relaxed">
                    {c.blurb}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                    <span>Explore Category</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[{ slug: "All", name: "All Articles" }, ...blogCategories].map((t) => {
              const isActive = active === t.slug;
              return (
                <button
                  key={t.slug}
                  onClick={() => setActive(t.slug)}
                  className={`relative rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/15 text-foreground shadow-[0_0_20px_rgba(255,255,255,0.15)] border border-white/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {t.name}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles, stories..."
              className="w-full rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-lg py-2.5 pl-11 pr-4 text-sm text-foreground outline-none transition-all duration-300 focus:border-brand/50 focus:bg-white/[0.08] focus:ring-4 focus:ring-brand/15 placeholder:text-muted-foreground/60"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            >
              <Link
                href={`/blog/${p.category}/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 right-4 rounded-full border border-white/20 bg-background/60 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand shadow-sm z-10">
                    {catName(p.category)}
                  </span>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{p.date}</span>
                      {p.industry && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-white/20" />
                          <span className="text-brand font-medium">{p.industry}</span>
                        </>
                      )}
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {p.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl md:text-2xl font-semibold leading-snug transition-colors duration-300 group-hover:text-gradient">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground/80 line-clamp-2 leading-relaxed">
                      {p.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-brand transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
              <Sparkles className="mx-auto h-8 w-8 text-muted-foreground/40 mb-3" />
              <div className="text-lg font-medium text-foreground">No articles match your search</div>
              <p className="mt-1 text-sm text-muted-foreground">Try searching with a different term or filter.</p>
            </div>
          )}
        </div>
      </PageShell>
    </div>
  );
}