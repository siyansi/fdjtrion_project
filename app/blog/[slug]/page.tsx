

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, POSTS, getPost, getAssetUrl, type Block } from "@/lib/blog";
// import { Reveal, ScrollProgress, SiteFooter, SiteNav } from "@/component/site/chrome";

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = POSTS.find((p) => p.category === category && p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — FJD Trion",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title} — FJD Trion`,
    description: post.excerpt.slice(0, 155),
    openGraph: {
      title: post.title,
      description: post.excerpt.slice(0, 155),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt.slice(0, 155),
    },
  };
}
function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "h":
      return <h2 className="mt-10 mb-4 text-2xl font-bold tracking-tight text-white">{b.text}</h2>;
    
    case "p":
      return <p className="mt-4 text-lg leading-relaxed text-white/70">{b.text}</p>;
    
    case "list":
      return (
        <ul className="my-6 space-y-3 list-disc list-inside text-white/80">
          {b.items.map((item, idx) => (
            <li key={idx} className="text-base leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-[color:var(--brand)] pl-6 italic text-white/90">
          <p className="text-xl">{b.text}</p>
          {b.by && <footer className="mt-2 text-sm text-white/50">— {b.by}</footer>}
        </blockquote>
      );
    
    case "image":
      return (
        <figure className="my-8">
          <img
            src={getAssetUrl(b.src)}
            alt={b.caption || "Blog image"}
            className="w-full rounded-2xl ring-1 ring-white/10"
          />
          {b.caption && (
            <figcaption className="mt-3 text-center text-xs text-white/50">
              {b.caption}
            </figcaption>
          )}
        </figure>
      );
    
    case "video":
      return (
        <figure className="my-8">
          <video
            src={b.src}
            controls
            className="w-full rounded-2xl ring-1 ring-white/10"
          />
          {b.caption && (
            <figcaption className="mt-3 text-center text-xs text-white/50">
              {b.caption}
            </figcaption>
          )}
        </figure>
      );
    
    case "specs":
      return (
        <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
          <table className="w-full text-left text-sm">
            <tbody>
              {b.rows.map(([label, val], idx) => (
                <tr key={idx} className="border-b border-white/10 last:border-0">
                  <td className="py-3 font-semibold text-white/60">{label}</td>
                  <td className="py-3 font-medium text-white">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
    default:
      return null;
  }
}
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const post = getPost(category, slug);

  if (!post) {
    notFound();
  }

  const cat = CATEGORIES.find((c) => c.id === post.category)!;
  const related = POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(
    0,
    3,
  );

  return (
    // <div className="blog-theme min-h-screen bg-black text-white antialiased">
    //   {/* <ScrollProgress />
    //   <SiteNav /> */}

    //   <section className="relative flex min-h-[75vh] items-end overflow-hidden">
    //     <img
    //       src={getAssetUrl(post.cover)}
    //       alt={post.title}
    //       className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
    //     <div className="relative mx-auto w-full max-w-[900px] px-6 pb-20 pt-40">
    //       <Reveal>
    //         <div className="flex flex-wrap items-center gap-2 text-xs text-white/50">
    //           <Link href="/blog" className="transition-colors hover:text-[color:var(--brand)]">
    //             Blog
    //           </Link>
    //           <span>/</span>
    //           <Link
    //             href={`/blog/${cat.id}`}
    //             className="transition-colors hover:text-[color:var(--brand)]"
    //           >
    //             {cat.name}
    //           </Link>
    //         </div>
    //       </Reveal>
    //       <Reveal delay={120}>
    //         <h1 className="mt-5 text-4xl font-black leading-[1.06] tracking-tight md:text-6xl">
    //           {post.title}
    //         </h1>
    //       </Reveal>
    //       <Reveal delay={240}>
    //         <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/50">
    //           <span>{post.date}</span>
    //           <span className="h-1 w-1 rounded-full bg-white/30" />
    //           <span>{post.readTime}</span>
    //           {post.industry && (
    //             <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[color:var(--brand)]">
    //               {post.industry}
    //             </span>
    //           )}
    //         </div>
    //       </Reveal>
    //     </div>
    //   </section>

    //   <article className="mx-auto max-w-[900px] px-6 py-16">
    //     <Reveal>
    //       <p className="border-l-2 border-[color:var(--brand)] pl-6 text-xl leading-relaxed text-white/80">
    //         {post.excerpt}
    //       </p>
    //     </Reveal>
    //     {post.body.map((b, i) => (
    //       <BlockView key={i} b={b} />
    //     ))}

    //     <Reveal>
    //       <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
    //         <Link
    //           href={`/blog/${cat.id}`}
    //           className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:text-[color:var(--brand)]"
    //         >
    //           <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
    //           All {cat.name}
    //         </Link>
    //         <div className="flex gap-3 text-xs text-white/45">
    //           {["Share", "LinkedIn", "X", "Copy link"].map((s) => (
    //             <button
    //               key={s}
    //               className="rounded-full border border-white/15 px-4 py-2 transition-all duration-300 hover:border-[color:var(--brand)] hover:text-white"
    //             >
    //               {s}
    //             </button>
    //           ))}
    //         </div>
    //       </div>
    //     </Reveal>
    //   </article>

    //   <section className="mx-auto max-w-[1400px] px-6 pb-28">
    //     <Reveal>
    //       <h2 className="text-2xl font-bold tracking-tight md:text-3xl">More in {cat.name}</h2>
    //     </Reveal>
    //     <div className="mt-8 grid gap-8 md:grid-cols-3">
    //       {related.map((p, i) => (
    //         <Reveal key={p.slug} delay={i * 120}>
    //           <Link
    //             href={`/blog/${p.category}/${p.slug}`}
    //             className="group block"
    //           >
    //             <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:ring-[color:var(--brand)]/50">
    //               <img
    //                 src={getAssetUrl(p.cover)}
    //                 alt={p.title}
    //                 loading="lazy"
    //                 className="h-48 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
    //               />
    //             </div>
    //             <h3 className="mt-4 text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-[color:var(--brand)]">
    //               {p.title}
    //             </h3>
    //             <p className="mt-2 text-xs text-white/45">{p.date}</p>
    //           </Link>
    //         </Reveal>
    //       ))}
    //     </div>
    //   </section>

      {/* <SiteFooter /> */}
    // </div>
  );
}
