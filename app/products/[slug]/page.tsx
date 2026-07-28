"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import PageShell from "@/pages/hero";
import { findProduct, productCategories } from "@/lib/catalog";
import { getProductDetail } from "@/lib/productdetails";
import { ArrowRight, Download, Play, ChevronRight } from "lucide-react";

interface ShowcaseProps {
  title: string;
  body: string;
  media?: string | StaticImageData;
}

// Next.js App Router Page Component (Exported as Default)
export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const p = findProduct(slug);

  if (!p) {
    notFound();
  }

  const detail = getProductDetail(p.slug);
  const related = productCategories
    .flatMap((c) => c.groups.flatMap((g) => g.items))
    .filter((i) => i.category === p.category && i.slug !== p.slug)
    .slice(0, 3);

  if (!detail) return <FallbackDetail p={p} related={related} />;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <ProductHero detail={detail} name={p.name} />
      <SubNav name={p.name} />
      {detail.intro && <IntroBlock title={detail.intro.title} body={detail.intro.body} />}
      <FeatureBlocks blocks={detail.features} />
      {detail.showcase && <Showcase title={detail.showcase.title} body={detail.showcase.body} media={detail.showcase.media} />}
      {detail.specs && <SpecsTable groups={detail.specs} inTheBox={detail.inTheBox} />}
      <RelatedProducts related={related} category={p.category} />
      <CtaFooter name={p.name} />
    </div>
  );
}

function ProductHero({ detail, name }: { detail: NonNullable<ReturnType<typeof getProductDetail>>; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const heroImgSrc = typeof detail.hero.image === "string" ? detail.hero.image : (detail.hero.image as StaticImageData).src;

  return (
    <section ref={ref} className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImgSrc} alt={name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] drop-shadow-2xl">
            <span className="text-gradient">{detail.hero.headline}</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-foreground/90 font-light">{detail.hero.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {detail.hero.ctas?.map((c, i) => (
              <Link
                key={c.label}
                href={c.to ?? "/contact"}
                className={
                  c.primary || i === 0
                    ? "inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:scale-[1.03] transition"
                    : "inline-flex items-center gap-2 rounded-full glass-strong border border-white/20 px-7 py-3.5 text-sm font-medium hover:bg-white/15 transition"
                }
              >
                {i === 0 ? <Play className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                {c.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-xs uppercase tracking-[0.3em] text-white/60">
        Scroll to explore
      </div>
    </section>
  );
}

function SubNav({ name }: { name: string }) {
  const items = ["Overview", "Features", "Specs", "Quote"];
  return (
    <div className="sticky top-20 z-40 mx-auto max-w-7xl px-6">
      <div className="glass-strong rounded-full flex items-center justify-between px-6 py-3 border border-white/10">
        <div className="text-sm font-medium truncate">{name}</div>
        <div className="hidden md:flex items-center gap-1">
          {items.map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="px-4 py-1.5 rounded-full text-xs text-foreground/70 hover:text-foreground hover:bg-white/10 transition">
              {i}
            </a>
          ))}
        </div>
        <Link href="/contact" className="rounded-full bg-brand text-primary-foreground px-4 py-1.5 text-xs font-medium hover:scale-[1.03] transition">
          Free Quote
        </Link>
      </div>
    </div>
  );
}

function IntroBlock({ title, body }: { title: string; body: string }) {
  return (
    <section id="overview" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-semibold"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );
}

function FeatureBlocks({ blocks }: { blocks: NonNullable<ReturnType<typeof getProductDetail>>["features"] }) {
  return (
    <section id="features" className="relative py-16 px-6">
      <div className="mx-auto max-w-7xl space-y-32">
        {blocks.map((b, i) => {
          const imgSrc = typeof b.image === "string" ? b.image : (b.image as StaticImageData)?.src;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-2 gap-12 items-center ${b.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {imgSrc && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl glass-strong"
                >
                  <img src={imgSrc} alt={b.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-brand/10" />
                </motion.div>
              )}
              <div>
                {b.eyebrow && (
                  <div className="text-xs uppercase tracking-[0.28em] text-brand mb-4">{b.eyebrow}</div>
                )}
                <h3 className="font-display text-3xl md:text-4xl font-semibold">{b.title}</h3>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Showcase({ title, body, media }: ShowcaseProps) {
  const mediaSrc = typeof media === "string" ? media : (media as StaticImageData)?.src;

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-semibold"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
        >
          {body}
        </motion.p>
        {mediaSrc && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 relative rounded-3xl overflow-hidden glass-strong aspect-[16/9] max-w-5xl mx-auto"
          >
            <Image
              src={mediaSrc}
              alt={title || "Showcase"}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function SpecsTable({ groups, inTheBox }: { groups: NonNullable<ReturnType<typeof getProductDetail>>["specs"]; inTheBox?: string[] }) {
  const [tab, setTab] = useState(0);
  return (
    <section id="specs" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-xs uppercase tracking-[0.3em] text-brand text-center">Technical</div>
        <h2 className="mt-3 text-center font-display text-4xl md:text-5xl font-semibold">Specifications</h2>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {groups?.map((g, i) => (
            <button
              key={g.group}
              onClick={() => setTab(i)}
              className={`relative px-5 py-2 rounded-full text-sm transition ${
                tab === i ? "text-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab === i && (
                <motion.span layoutId="spec-tab" className="absolute inset-0 rounded-full bg-white/10 border border-white/15" transition={{ type: "spring", stiffness: 500, damping: 40 }} />
              )}
              <span className="relative">{g.group}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 glass-strong rounded-3xl overflow-hidden"
        >
          <div className="divide-y divide-white/10">
            {groups?.[tab].rows.map((r) => (
              <div key={r.k} className="grid grid-cols-3 px-8 py-5 hover:bg-white/5 transition">
                <div className="text-sm text-muted-foreground">{r.k}</div>
                <div className="col-span-2 text-sm font-medium">{r.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {inTheBox && (
          <div className="mt-16">
            <div className="text-xs uppercase tracking-[0.3em] text-brand">In the Box</div>
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {inTheBox.map((i) => (
                <div key={i} className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                  <ChevronRight className="h-4 w-4 text-brand" />
                  <span className="text-sm">{i}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function RelatedProducts({ related, category }: { related: ReturnType<typeof findProduct>[] extends (infer U)[] ? U[] : never; category: string }) {
  if (!related.length) return null;
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl">More in <span className="text-gradient">{category}</span></h2>
          <Link href="/products" className="text-sm text-brand hover:underline">All products →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link
              key={r!.slug}
              href={`/products/${r!.slug}`}
              className="group glass rounded-3xl p-6 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
            >
              {r!.image && (
                <div className="relative h-40 mb-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute h-32 w-32 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/25 transition" />
                  <img src={r!.image.toString()} alt={r!.name} loading="lazy" className="relative h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3" />
                </div>
              )}
              <div className="text-xs text-brand">{r!.category}</div>
              <div className="mt-2 font-display text-lg">{r!.name}</div>
              <div className="text-sm text-muted-foreground mt-1 line-clamp-2">{r!.tagline}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFooter({ name }: { name: string }) {
  return (
    <section id="quote" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.3em] text-brand">Ready to see it live?</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">Book a live demo of {name}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our India team will bring the unit to your site or set up a remote walkthrough — no obligations.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:scale-[1.03] transition">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/15 transition">
              Compare products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FallbackDetail({ p, related }: { p: NonNullable<ReturnType<typeof findProduct>>; related: NonNullable<ReturnType<typeof findProduct>>[] }) {
  return (
    <PageShell eyebrow={p.category} title={<span className="text-gradient">{p.name}</span>} subtitle={p.tagline}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square glass-strong rounded-3xl flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />
          {p.image ? (
            <motion.img
              src={p.image.toString()}
              alt={p.name}
              className="relative z-10 max-h-[70%] object-contain animate-float"
              whileHover={{ rotate: 6, scale: 1.05 }}
            />
          ) : (
            <div className="relative z-10 text-6xl font-display text-gradient">{p.name.slice(0, 2)}</div>
          )}
          <div className="absolute inset-0 bg-grid opacity-30" />
        </motion.div>
        <div>
          {p.highlights && (
            <>
              <div className="text-xs uppercase tracking-[0.24em] text-brand">Highlights</div>
              <ul className="mt-4 space-y-3">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {p.specs && (
            <div className="mt-8 grid grid-cols-3 gap-3">
              {p.specs.map((s: { k: string; v: string }) => (
                <div key={s.k} className="glass rounded-xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                  <div className="mt-1 font-display text-lg">{s.v}</div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/15 transition">
              All products
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="font-display text-2xl mb-6">Related in {p.category}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="text-sm text-brand">{r.category}</div>
                <div className="mt-2 font-display text-lg">{r.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{r.tagline}</div>
                <div className="mt-4 text-xs text-brand opacity-0 group-hover:opacity-100 transition">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}