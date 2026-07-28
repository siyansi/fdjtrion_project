import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productCategories } from "@/lib/catalog";
import CategoryClient from "@/lib/CategoryClient";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Dynamic SEO Metadata Generation (Server Side)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = productCategories.find((x) => x.slug === slug);

  return {
    title: `${c?.name ?? "Category"} — JAS geomatics India`,
    description: c?.blurb ?? "",
  };
}

// 2. Main Page Component (Server Component)
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const c = productCategories.find((x) => x.slug === slug);

  if (!c) {
    notFound();
  }

  return <CategoryClient category={c} />;
}