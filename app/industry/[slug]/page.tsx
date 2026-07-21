"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import  PageShell  from "@/pages/hero";
import { findIndustry, findProduct, industries, type IndustryDetail } from "@/lib/catalog";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  // Unwrap params safely in App Router
  const resolvedParams = use(params);
  const it = findIndustry(resolvedParams.slug) as IndustryDetail;

  // Trigger 404 if data object is not found
  if (!it) {
    notFound();
  }

  const others = industries.filter((x) => x.slug !== it.slug).slice(0, 4);
  const kit = it.recommended.map(findProduct).filter(Boolean) as NonNullable<ReturnType<typeof findProduct>>[];

  return (
    <PageShell eyebrow="Industry Workflow" title={<span className="text-gradient">{it.name}</span>} subtitle={it.tagline}>
      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-3xl p-10 relative overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${it.hue} opacity-70`} />
        <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
        <div className="relative grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.28em] text-brand">Overview</div>
            <p className="mt-4 text-lg text-foreground/90 leading-relaxed">{it.overview}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              {it.outcomes.map((o) => (
                <div key={o.k} className="glass rounded-xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{o.k}</div>
                  <div className="mt-1 font-display text-xl text-gradient">{o.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition">
                Book a workflow demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/15 transition">See recommended kit</Link>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="md:col-span-2 aspect-square rounded-2xl bg-[image:var(--gradient-brand)] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">Deliverables</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {it.deliverables.map((d) => (
                  <span key={d} className="text-xs bg-white/15 backdrop-blur rounded-full px-3 py-1">{d}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Challenges */}
      <div className="mt-20">
        <div className="text-xs uppercase tracking-[0.28em] text-brand">The Challenge</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Why traditional workflows fall short</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {it.challenges.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="mt-1 h-8 w-8 rounded-full bg-brand/20 text-brand flex items-center justify-center font-display">{i+1}</div>
              <p className="text-foreground/90">{c}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Workflow steps */}
      <div className="mt-20">
        <div className="text-xs uppercase tracking-[0.28em] text-brand">The Trion Workflow</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">From site to deliverable in 4 steps</h2>
        <div className="mt-10 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent hidden md:block" />
          <div className="space-y-6">
            {it.workflow.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-6 md:pl-20 relative hover:-translate-y-1 transition"
              >
                <div className="absolute left-2 top-6 h-10 w-10 rounded-full bg-[image:var(--gradient-brand)] flex items-center justify-center font-display text-lg shadow-lg hidden md:flex">
                  {i+1}
                </div>
                <div className="md:hidden text-xs text-brand mb-2">Step {i+1}</div>
                <div className="font-display text-xl">{s.title}</div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="mt-20 glass-strong rounded-3xl p-10">
        <div className="text-xs uppercase tracking-[0.28em] text-brand">What you get</div>
        <h2 className="mt-3 font-display text-3xl">Deliverables</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {it.deliverables.map((d) => (
            <div key={d} className="glass rounded-xl p-4 flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              <span className="text-sm">{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended kit */}
      {kit.length > 0 && (
        <div className="mt-20">
          <div className="text-xs uppercase tracking-[0.28em] text-brand">Recommended Kit</div>
          <h2 className="mt-3 font-display text-3xl">Purpose-built hardware for {it.name}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {kit.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}
                className="group glass-strong rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-brand/25 to-transparent flex items-center justify-center overflow-hidden mb-4">
                  {p.image ? (
                    <img src={p.image.toString()} alt={p.name} className="max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="font-display text-3xl text-gradient opacity-70">{p.name.slice(0,2)}</div>
                  )}
                </div>
                <div className="text-xs text-brand">{p.category}</div>
                <div className="mt-1 font-display text-lg">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Other industries */}
      <div className="mt-24">
        <h3 className="font-display text-2xl mb-6">Explore more workflows</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`}
              className="group relative overflow-hidden glass rounded-2xl p-5 hover:bg-white/10 transition hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${o.hue} opacity-0 group-hover:opacity-40 transition`} />
              <div className="relative">
                <div className="text-sm font-medium">{o.name}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{o.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}