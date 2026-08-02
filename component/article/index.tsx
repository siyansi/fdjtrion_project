// "use client";

// import Link from "next/link";
// // import type { Article } from "@/lib/blogdetails";
// import { getCategory } from "@/lib/blogdetails";

// export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
//   const category = getCategory(article.category);

//   return (
//     <Link
//       href={`/blog/${article.category}/${article.slug}`}
//       className={`group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 ${
//         featured ? "md:flex-row" : ""
//       }`}
//     >
//       <div className={`overflow-hidden ${featured ? "md:w-1/2" : ""}`}>
//         <img
//           src={article.image.toString()}
//           alt={article.title}
//           loading="lazy"
//           width={1280}
//           height={800}
//           className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
//         />
//       </div>
//       <div className={`flex flex-1 flex-col gap-3 p-5 ${featured ? "md:justify-center md:p-8" : ""}`}>
//         <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
//           <span>{article.date}</span>
//           <span className="rounded-full bg-primary/12 px-2 py-0.5 text-primary">{category?.name}</span>
//           {article.industry ? <span>{article.industry}</span> : null}
//           <span>· {article.readTime}</span>
//         </div>
//         <h3
//           className={`font-semibold leading-snug transition-colors group-hover:text-primary ${
//             featured ? "text-2xl md:text-3xl" : "text-lg"
//           }`}
//         >
//           {article.title}
//         </h3>
//         <p className={`text-sm leading-relaxed text-muted-foreground ${featured ? "md:text-base" : "line-clamp-3"}`}>
//           {article.excerpt}
//         </p>
//         <span className="mt-1 text-sm font-medium text-primary">Read article →</span>
//       </div>
//     </Link>
//   );
// }