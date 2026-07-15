import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/pages/hero";
import { findIndustry, industries } from "@/lib/catalog";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Next.js Dynamic Metadata Generation (Replaces Route.head)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = findIndustry(slug);

  return {
    title: `${industry?.name ?? "Industry"} — FJD Trion India`,
    description: industry?.tagline ?? "",
  };
}

// 2. The Main Page Component (Server Component)
export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const it = findIndustry(slug);

  if (!it) {
    notFound();
  }

  const others = industries.filter((x) => x.slug !== it.slug).slice(0, 4);

  return (
    <PageShell eyebrow="Industries" title={<span className="text-gradient">{it.name}</span>} subtitle={it.tagline}>
      {/* Replaced motion.div with standard styling for a smooth server render */}
      <div className="glass-strong rounded-3xl p-10 relative overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-transparent" />
        <div className="relative grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl">Built for {it.name.toLowerCase()}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              FJD Trion's reality-capture stack accelerates {it.name.toLowerCase()} workflows —
              from field capture to deliverable — with cm-grade accuracy and Indian-market pricing.
            </p>
            <ul className="mt-6 space-y-3">
              {["Rapid on-site capture", "Automated data pipeline", "Deliverable-ready exports", "Nationwide support"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />{f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition-all">
                Talk to an expert
              </Link>
              <Link href="/products" className="rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/15 transition-all">
                Recommended kit
              </Link>
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-[image:var(--gradient-brand)] opacity-80 animate-float" />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl mb-6">Explore more industries</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {others.map((o) => (
            <Link 
              key={o.slug} 
              href={`/industry/${o.slug}`} // Changed from /industries/ to /industry/ to match route structural changes
              className="glass rounded-2xl p-5 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="text-sm font-medium">{o.name}</div>
              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{o.tagline}</div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}