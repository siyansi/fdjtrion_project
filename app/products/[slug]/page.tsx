import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import  PageShell  from "@/pages/hero";
import { findProduct, productCategories } from "@/lib/catalog";
import { ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Dynamic SEO Metadata Generation (Replaces Route.head)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findProduct(slug);

  return {
    title: `${p?.name ?? "Product"} — FJD Trion India`,
    description: p?.tagline ?? "FJD Trion product",
  };
}

// 2. Main Page Component (Server Component)
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = findProduct(slug);

  // Triggers the standard Next.js 404 page shell if product isn't found
  if (!p) {
    notFound();
  }

  const related = productCategories
    .flatMap((c) => c.groups.flatMap((g) => g.items))
    .filter((i) => i.category === p.category && i.slug !== p.slug)
    .slice(0, 3);

  return (
    <PageShell eyebrow={p.category} title={<span className="text-gradient">{p.name}</span>} subtitle={p.tagline}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Container with a clean entrance animation using CSS transitions */}
        <div className="relative aspect-square glass-strong rounded-3xl flex items-center justify-center overflow-hidden transition-all duration-700 hover:border-white/20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />
          {p.image ? (
            <img
              src={p.image.toString()}
              alt={p.name}
              className="relative z-10 max-h-[70%] object-contain animate-float transition-transform duration-500 hover:rotate-6 hover:scale-105"
            />
          ) : (
            <div className="relative z-10 text-6xl font-display text-gradient">{p.name.slice(0, 2)}</div>
          )}
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div>
          {p.highlights && (
            <>
              <div className="text-xs uppercase tracking-[0.24em] text-brand">Highlights</div>
              <ul className="mt-4 space-y-3">
                {p.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
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
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-transform duration-300">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/15 transition-colors duration-300">
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
                className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="text-sm text-brand">{r.category}</div>
                <div className="mt-2 font-display text-lg">{r.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{r.tagline}</div>
                <div className="mt-4 text-xs text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}