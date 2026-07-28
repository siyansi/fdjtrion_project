// "use client";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { Metadata } from "next";
// import PageShell from "@/pages/hero";
// import { findSupport, supportItems } from "@/lib/catalog";

// interface Props {
//   params: Promise<{ slug: string }>;
// }

// // 1. Dynamic SEO Metadata Generation (Server-Side)
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   const s = findSupport(slug);

//   return {
//     title: `${s?.name ?? "Support"} — JAS geomatics India`,
//     description: s?.tagline ?? "",
//   };
// }

// // 2. Main Page Component (Server Component)
// export default async function SupportDetailPage({ params }: Props) {
//   const { slug } = await params;
//   const it = findSupport(slug);

//   // Triggers Next.js 404 page shell if support item isn't found
//   if (!it) {
//     notFound();
//   }

//   return (
//     <PageShell eyebrow="Support" title={<span className="text-gradient">{it.name}</span>} subtitle={it.tagline}>
//       <div className="glass-strong rounded-3xl p-10">
//         <p className="text-muted-foreground max-w-2xl">
//           The {it.name} hub gives you everything you need to get the most out of your JAS geomatics hardware and software — updated regularly by our India team.
//         </p>
//         <div className="mt-8 grid md:grid-cols-3 gap-4">
//           {supportItems.filter((s) => s.slug !== it.slug).map((s) => (
//             <Link 
//               key={s.slug} 
//               href={`/support/${s.slug}`} 
//               className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 block"
//             >
//               <div className="text-sm font-medium">{s.name}</div>
//               <div className="text-xs text-muted-foreground mt-1">{s.tagline}</div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </PageShell>
//   );
// }