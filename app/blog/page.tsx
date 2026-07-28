// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { CATEGORIES, POSTS, type CategoryId } from "@/lib/blog";
// import { Reveal, ScrollProgress, SiteFooter, SiteNav } from "@/component/site/chrome";

// export default function BlogHub() {
//   const [filter, setFilter] = useState<CategoryId | "all">("all");
//   const latest = POSTS.filter((p) => filter === "all" || p.category === filter).slice(0, 9);

//   return (
//     <div className="blog-theme min-h-screen bg-black text-white antialiased">
//       <ScrollProgress />
//       <SiteNav />

//       {/* Hero */}
//       <section className="relative flex min-h-[70vh] items-end overflow-hidden">
//         <video
//           src={CATEGORIES[1].video.toString()}
//           poster={CATEGORIES[1].cover.toString()}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
//         <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40">
//           <Reveal>
//             <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
//               Resource Center
//             </p>
//           </Reveal>
//           <Reveal delay={120}>
//             <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
//               Everything we learn,{" "}
//               <span className="bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] bg-clip-text text-transparent">shared</span>
//             </h1>
//           </Reveal>
//           <Reveal delay={240}>
//             <p className="mt-6 max-w-2xl text-lg text-white/65">
//               Choose a channel below — firmware and software release notes, stories from
//               the field, or news and technical insight from our engineering teams.
//             </p>
//           </Reveal>
//         </div>
//       </section>

//       {/* Three category cards */}
//       <section className="mx-auto max-w-[1400px] px-6 py-24">
//         <div className="grid gap-6 md:grid-cols-3">
//           {CATEGORIES.map((c, i) => (
//             <Reveal key={c.id} delay={i * 140}>
//               <Link
//                 href={`/blog/${c.id}`}
//                 className="group relative block h-[420px] overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:ring-[color:var(--brand)]/60"
//               >
//                 <img
//                   src={c.cover.toString()}
//                   alt={c.name}
//                   loading="lazy"
//                   className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-30"
//                 />
//                 <video
//                   src={c.video.toString()}
//                   muted
//                   loop
//                   playsInline
//                   autoPlay
//                   className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-60"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//                 <div className="relative flex h-full flex-col justify-end p-8">
//                   <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand)]">
//                     {POSTS.filter((p) => p.category === c.id).length} articles
//                   </span>
//                   <h2 className="mt-3 text-3xl font-bold tracking-tight">{c.name}</h2>
//                   <p className="mt-3 text-sm text-white/60">{c.blurb}</p>
//                   <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-4 group-hover:text-[color:var(--brand)]">
//                     Explore <span>→</span>
//                   </span>
//                 </div>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* Latest with filter */}
//       <section className="mx-auto max-w-[1400px] px-6 pb-28">
//         <Reveal>
//           <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Latest articles</h2>
//             <div className="flex flex-wrap gap-2">
//               {(["all", ...CATEGORIES.map((c) => c.id)] as const).map((id) => (
//                 <button
//                   key={id}
//                   onClick={() => setFilter(id as CategoryId | "all")}
//                   className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
//                     filter === id
//                       ? "border-transparent bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] text-black"
//                       : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
//                   }`}
//                 >
//                   {id === "all" ? "All" : CATEGORIES.find((c) => c.id === id)!.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </Reveal>

//         <div className="mt-10 grid gap-8 md:grid-cols-3">
//           {latest.map((p, i) => (
//             <Reveal key={p.slug} delay={(i % 3) * 120}>
//               <Link
//                 href={`/blog/${p.category}/${p.slug}`}
//                 className="group block"
//               >
//                 <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-[color:var(--brand)]/50">
//                   <img
//                     src={p.cover.toString()}
//                     alt={p.title}
//                     loading="lazy"
//                     className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="mt-4 flex items-center gap-3 text-xs text-white/45">
//                   <span>{p.date}</span>
//                   <span className="h-1 w-1 rounded-full bg-white/30" />
//                   <span className="text-[color:var(--brand)]">
//                     {CATEGORIES.find((c) => c.id === p.category)!.name}
//                   </span>
//                 </div>
//                 <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-[color:var(--brand)]">
//                   {p.title}
//                 </h3>
//                 <p className="mt-2 line-clamp-3 text-sm text-white/55">{p.excerpt}</p>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       <SiteFooter />
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, POSTS, type CategoryId, type AssetSrc } from "@/lib/blog";
import { Reveal, ScrollProgress, SiteFooter} from "@/component/site/chrome";

// Helper to safely extract image string URL from StaticImageData or string
function getAssetUrl(src: AssetSrc): string {
  if (typeof src === "string") return src;
  return src.src;
}

export default function BlogHubClient() {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const latest = POSTS.filter((p) => filter === "all" || p.category === filter).slice(0, 9);

  return (
    <div className="blog-theme min-h-screen bg-black text-white antialiased">
      {/* <ScrollProgress />
      <SiteNav /> */}

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <video
          src={getAssetUrl(CATEGORIES[1].video)}
          poster={getAssetUrl(CATEGORIES[1].cover)}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
              Resource Center
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Everything we learn,{" "}
              <span className="bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] bg-clip-text text-transparent">
                shared
              </span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-lg text-white/65">
              Choose a channel below — firmware and software release notes, stories from
              the field, or news and technical insight from our engineering teams.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three category cards */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 140}>
              <Link
                href={`/blog/${c.id}`}
                className="group relative block h-[420px] overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:ring-[color:var(--brand)]/60"
              >
                <img
                  src={getAssetUrl(c.cover)}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-30"
                />
                <video
                  src={getAssetUrl(c.video)}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand)]">
                    {POSTS.filter((p) => p.category === c.id).length} articles
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight">{c.name}</h2>
                  <p className="mt-3 text-sm text-white/60">{c.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-4 group-hover:text-[color:var(--brand)]">
                    Explore <span>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Latest with filter */}
      <section className="mx-auto max-w-[1400px] px-6 pb-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Latest articles</h2>
            <div className="flex flex-wrap gap-2">
              {(["all", ...CATEGORIES.map((c) => c.id)] as const).map((id) => (
                <button
                  key={id}
                  onClick={() => setFilter(id as CategoryId | "all")}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    filter === id
                      ? "border-transparent bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] text-black"
                      : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {id === "all" ? "All" : CATEGORIES.find((c) => c.id === id)!.name}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 120}>
              <Link
                href={`/blog/${p.category}/${p.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:ring-[color:var(--brand)]/50">
                  <img
                    src={getAssetUrl(p.cover)}
                    alt={p.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-white/45">
                  <span>{p.date}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="text-[color:var(--brand)]">
                    {CATEGORIES.find((c) => c.id === p.category)!.name}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-[color:var(--brand)]">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-white/55">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}