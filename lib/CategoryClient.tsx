"use client";

import Link from "next/link";
import PageShell from "@/pages/hero";
import type { Item } from "@/lib/catalog";
import { motion } from "framer-motion";

interface CategoryClientProps {
  category: {
    name: string;
    blurb: string;
    groups: {
      title: string;
      items: Item[];
    }[];
  };
}

export default function CategoryClient({ category }: CategoryClientProps) {
  return (
    <PageShell
      eyebrow="Products"
      title={<span className="text-gradient">{category.name}</span>}
      subtitle={category.blurb}
    >
      <div className="space-y-14">
        {category.groups.map((g) => (
          <section key={g.title}>
            <div className="mb-4 text-xs tracking-[0.24em] uppercase text-brand">
              {g.title}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {g.items.map((it: Item, i: number) => (
                <motion.div
                  key={it.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/products/${it.slug}`}
                    className="glass-strong group block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/10"
                  >
                    <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand/30 to-transparent">
                      {it.image ? (
                        <img
                          src={it.image.toString()}
                          alt={it.name}
                          className="max-h-[80%] object-contain transition-transform group-hover:scale-110"
                        />
                      ) : (
                        <div className="font-display text-gradient text-3xl opacity-60">
                          {it.name.slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div className="font-display text-lg">{it.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {it.tagline}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}