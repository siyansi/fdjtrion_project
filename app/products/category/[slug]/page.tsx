import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import PageShell from "@/pages/hero";
import { productCategories, type Item } from "@/lib/catalog";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Dynamic SEO Metadata Generation (Replaces Route.head)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = productCategories.find((x) => x.slug === slug);

  return {
    title: `${c?.name ?? "Category"} — FJD Trion India`,
    description: c?.blurb ?? "",
  };
}

// 2. Main Page Component (Server Component)
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const c = productCategories.find((x) => x.slug === slug);

  // Triggers Next.js 404 page shell if category isn't found
  if (!c) {
    notFound();
  }

  return (
    <PageShell eyebrow="Products" title={<span className="text-gradient">{c.name}</span>} subtitle={c.blurb}>
      <div className="space-y-14">
        {c.groups.map((g: { title: string; items: Item[] }) => (
          <section key={g.title}>
            <div className="text-xs uppercase tracking-[0.24em] text-brand mb-4">{g.title}</div>
            <div className="grid md:grid-cols-3 gap-4">
              {g.items.map((it: Item, i: number) => (
                /* Replaced motion.div with standard performance-friendly CSS transitions and animations */
                <div
                  key={it.slug}
                  className="transition-all duration-500 ease-out"
                >
                  <Link
                    href={`/products/${it.slug}`}
                    className="group block glass-strong rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-brand/30 to-transparent flex items-center justify-center overflow-hidden mb-4">
                      {it.image ? (
                        <img 
                          src={it.image.toString()} 
                          alt={it.name} 
                          className="max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-300" 
                        />
                      ) : (
                        <div className="font-display text-3xl text-gradient opacity-60">{it.name.slice(0, 2)}</div>
                      )}
                    </div>
                    <div className="font-display text-lg">{it.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{it.tagline}</div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}