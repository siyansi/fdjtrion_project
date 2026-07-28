// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { productCategories, industries, supportItems, type Item } from "@/lib/catalog";
// import Link from 'next/link';

// type MenuKey = "products" | "industries" | "support" | null;

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState<MenuKey>(null);
//   const [activeCat, setActiveCat] = useState<string>(productCategories[0].slug);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileExpanded, setMobileExpanded] = useState<MenuKey>(null);
//   const closeTimer = useRef<number | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Prevent background scrolling when mobile menu is active
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileMenuOpen]);

//   const openMenu = (k: MenuKey) => {
//     if (closeTimer.current) window.clearTimeout(closeTimer.current);
//     setOpen(k);
//   };


//   const menuIndices = { products: 0, industries: 1, support: 2 };

// // 2. Add this state inside your Navbar component
// const [direction, setDirection] = useState<"left" | "right">("right");
//   const scheduleClose = () => {
//     if (closeTimer.current) window.clearTimeout(closeTimer.current);
//     closeTimer.current = window.setTimeout(() => setOpen(null), 140);
//   };


//   const openMenus = (k: MenuKey) => {
//   if (closeTimer.current) window.clearTimeout(closeTimer.current);
//   if (open && k && open !== k) {
//     const prevIdx = menuIndices[open as keyof typeof menuIndices] ?? 0;
//     const nextIdx = menuIndices[k as keyof typeof menuIndices] ?? 0;
//     setDirection(nextIdx > prevIdx ? "right" : "left");
//   }
//   setOpen(k);
// };
//   const toggleMobileExpand = (k: MenuKey) => {
//     setMobileExpanded(mobileExpanded === k ? null : k);
//   };

//   const links: { label: string; href: string; menu?: MenuKey }[] = [
//     { label: "Home", href: "/" },
//     { label: "Products", href: "/products", menu: "products" },
//     { label: "Industries", href: "/industry", menu: "industries" },
//     { label: "Blogs", href: "/blog" },
//     { label: "Support", href: "/support", menu: "support" },
//     { label: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
//       onMouseLeave={scheduleClose}
//       style={{ fontFamily: 'Poppins, sans-serif' }}
//     >
//       <div
//         className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
//           scrolled || open || mobileMenuOpen
//             ? "rounded-full border border-white/20 bg-[rgba(30,41,54,0.72)] backdrop-blur-[28px] supports-[backdrop-filter]:bg-[rgba(39,56,65,0.55)] shadow-[0_15px_45px_rgba(0,0,0,.35)] py-3"
//             : "bg-transparent"
//         }`}
//       >
//         {/* Brand Logo */}
//         <Link href="/" className="flex items-center gap-2 group z-50">
//           <div className="relative h-8 w-8">
//             <div className="absolute inset-0 rounded-md bg-[image:var(--gradient-brand)] opacity-90 group-hover:opacity-100 transition" />
//             <div className="absolute inset-[3px] rounded-[4px] bg-background flex items-center justify-center text-[10px] font-bold text-brand">
//               FJD
//             </div>
//           </div>
//           <span className="font-display text-lg font-semibold tracking-tight text-white">
//             Trion<span className="text-brand">.in</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation Links */}
//         <nav className="hidden md:flex items-center gap-1 text-white">
//           {links.map((l) => (
//             <div
//               key={l.label}
//               onMouseEnter={() => (l.menu ? openMenu(l.menu) : openMenu(null))}
//             >
//               <Link
//                 href={l.href}
//                 className={`relative px-4 py-2 text-[17px] font-semibold tracking-wide transition-all duration-300 hover:text-cyan-400 ${
//                   open === l.menu && l.menu ? "text-cyan-400" : "text-white/80"
//                 }`}
//               >
//                 {l.label}
//               </Link>
//             </div>
//           ))}
//         </nav>

//         {/* Book a Demo Button (Desktop) / Mobile Toggle Button */}
//         <div className="flex items-center gap-4">
//           <Link
//             href="/contact"
//             className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-2 text-sm font-semibold text-white transition-all duration-500 hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.45)] hover:scale-105"
//           >
//             Book a Demo
//           </Link>

//           {/* Hamburger Icon */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 md:hidden z-50"
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? (
//               // X Mark Close Icon
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               // Hamburger Icon
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>


//       {/* --- DESKTOP MEGA PANEL --- */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             key={open}
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
//             onMouseEnter={() => openMenu(open)}
//             onMouseLeave={scheduleClose}
//             className="hidden md:block mx-auto mt-3 max-w-7xl px-6"
//           >
//             <div className="text-white border border-white/10 bg-[rgba(27,20,35,0.72)] backdrop-blur-[28px] supports-[backdrop-filter]:bg-[rgba(27,20,35,0.55)] shadow-[0_15px_45px_rgba(0,0,0,.35)] rounded-3xl overflow-hidden">
//               {open === "products" && <ProductsPanel activeCat={activeCat} setActiveCat={setActiveCat} onNav={() => setOpen(null)} />}
//               {open === "industries" && <SimpleGridPanel items={industries} base="/industry" onNav={() => setOpen(null)} />}
//               {open === "support" && <SimpleGridPanel items={supportItems} base="/support" onNav={() => setOpen(null)} />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="fixed inset-0 top-0 left-0 z-40 h-screen w-screen bg-[#070a13] px-6 pt-24 pb-10 overflow-y-auto text-white md:hidden"
//           >
//             <div className="flex flex-col space-y-2 border-t border-white/10 pt-4">
//               {links.map((link) => {
//                 const isExpandable = !!link.menu;
//                 const isExpanded = mobileExpanded === link.menu;

//                 return (
//                   <div key={link.label} className="border-b border-white/5 py-3">
//                     {isExpandable ? (
//                       <div>
//                         {/* Interactive Header for Dropdown */}
//                         <button
//                           onClick={() => toggleMobileExpand(link.menu!)}
//                           className="flex w-full items-center justify-between py-2 text-xl font-medium text-white/90 hover:text-cyan-400"
//                         >
//                           <span>{link.label}</span>
//                           <span className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
//                             ▼
//                           </span>
//                         </button>

//                         {/* Accordion Panels */}
//                         <AnimatePresence initial={false}>
//                           {isExpanded && (
//                             <motion.div
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: "auto", opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.3 }}
//                               className="overflow-hidden"
//                             >
//                               {link.menu === "products" && (
//                                 <MobileProductsMenu activeCat={activeCat} setActiveCat={setActiveCat} onNav={() => setMobileMenuOpen(false)} />
//                               )}
//                               {link.menu === "industries" && (
//                                 <MobileSimpleGridMenu items={industries} base="/industry" onNav={() => setMobileMenuOpen(false)} />
//                               )}
//                               {link.menu === "support" && (
//                                 <MobileSimpleGridMenu items={supportItems} base="/support" onNav={() => setMobileMenuOpen(false)} />
//                               )}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <Link
//                         href={link.href}
//                         onClick={() => setMobileMenuOpen(false)}
//                         className="block py-2 text-xl font-medium text-white/90 hover:text-cyan-400"
//                       >
//                         {link.label}
//                       </Link>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Social media or branding items at the bottom of drawer */}
//             <div className="mt-12 flex gap-6 px-2 justify-start">
//               <a href="#" className="text-white/60 hover:text-cyan-400 transition">
//                 <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//               </a>
//               <a href="#" className="text-white/60 hover:text-cyan-400 transition">
//                 <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//               </a>
//               <a href="#" className="text-white/60 hover:text-cyan-400 transition">
//                 <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.022-1.078-1.826-2.1-2.102-1.853-.5-9.398-.5-9.398-.5s-7.546 0-9.399.5c-1.022.276-1.828 1.08-2.1 2.102-.5 1.852-.5 5.72-.5 5.72s0 3.87.5 5.719c.272 1.022 1.078 1.826 2.1 2.102 1.853.5 9.399.5 9.399.5s7.546 0 9.398-.5c1.022-.276 1.828-1.08 2.1-2.102.5-1.849.5-5.719.5-5.719s0-3.868-.5-5.719zm-14.248 9.418v-7.162l6.236 3.581-6.236 3.581z"/></svg>
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

// /* ==========================================================================
//    MOBILE-SPECIFIC INNER ACCORDION COMPONENTS
//    ========================================================================== */

// /**
//  * Animated category scrollbar + dynamic content rendering for products on mobile screens.
//  */
// function MobileProductsMenu({
//   activeCat,
//   setActiveCat,
//   onNav,
// }: {
//   activeCat: string;
//   setActiveCat: (s: string) => void;
//   onNav: () => void;
// }) {
//   const cat = productCategories.find((c) => c.slug === activeCat) ?? productCategories[0];

//   return (
//     <div className="mt-4 space-y-4">
//       {/* Horizontally scrollable slider representing product categories */}
//       <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-2 px-2 mask-gradient-edge">
//         {productCategories.map((c) => (
//           <button
//             key={c.slug}
//             onClick={() => setActiveCat(c.slug)}
//             className={`flex-shrink-0 rounded-lg px-4 py-2 text-xs font-semibold tracking-wide border transition-all ${
//               activeCat === c.slug
//                 ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
//                 : "bg-white/5 border-white/5 text-white/70"
//             }`}
//           >
//             {c.name}
//           </button>
//         ))}
//       </div>

//       {/* Render selected category's dynamic content with animations */}
//       <motion.div
//         key={cat.slug}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="space-y-6"
//       >
//         {cat.groups.map((g) => (
//           <div key={g.title}>
//             {/* Group Subtitle Heading */}
//             <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/80 mb-4 mt-2">
//               {g.title}
//             </div>

//             {/* Visual product item card grid */}
//             <div className="grid grid-cols-2 gap-3">
//               {g.items.map((it) => (
//                 <Link
//                   key={it.slug}
//                   href={`/products/${it.slug}`}
//                   onClick={onNav}
//                   className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 group"
//                 >
//                   <div className="mb-3 h-24 w-24 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
//                     {it.image ? (
//                       <img
//                         src={typeof it.image === "string" ? it.image : it.image.src}
//                         alt={it.name}
//                         className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
//                       />
//                     ) : (
//                       <div className="h-12 w-12 rounded bg-[image:var(--gradient-brand)] opacity-60" />
//                     )}
//                   </div>
//                   <div className="text-sm font-semibold text-white/90 group-hover:text-cyan-400 transition-colors">
//                     {it.name}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// /**
//  * Grid layout render for Industries and Support items on mobile.
//  */
// function MobileSimpleGridMenu({
//   items,
//   base,
//   onNav,
// }: {
//   items: Item[];
//   base: "/industry" | "/support";
//   onNav: () => void;
// }) {
//   return (
//     <div className="mt-4 grid grid-cols-2 gap-3">
//       {items.map((it) => (
//         <Link
//           key={it.slug}
//           href={`${base}/${it.slug}`}
//           onClick={onNav}
//           className="block rounded-2xl border border-white/5 bg-white/5 p-4 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
//         >
//           <div className="h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-transparent mb-3" />
//           <div className="text-sm font-semibold text-white/95">{it.name}</div>
//           <div className="text-xs text-white/50 mt-1 line-clamp-1">{it.tagline}</div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// /* ==========================================================================
//    DESKTOP PANELS (UNCHANGED ORIGINAL DESIGNS)
//    ========================================================================== */

// function ProductsPanel({
//   activeCat,
//   setActiveCat,
//   onNav,
// }: {
//   activeCat: string;
//   setActiveCat: (s: string) => void;
//   onNav: () => void;
// }) {
//   const cat = productCategories.find((c) => c.slug === activeCat) ?? productCategories[0];
//   return (
//     <div className="grid grid-cols-[220px_1fr] min-h-[380px]" style={{ fontFamily: 'Poppins' }} >
//       <aside className="border-r text-cyan-200 border-white/10 p-6">
//         <div className="text-[10px] uppercase tracking-[0.24em] text-brand mb-4">Categories</div>
//         <ul className="space-y-1">
//           {productCategories.map((c) => (
//             <li key={c.slug}>
//               <button
//                 onMouseEnter={() => setActiveCat(c.slug)}
//                 onFocus={() => setActiveCat(c.slug)}
//                 className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
//                   activeCat === c.slug
//                     ? "bg-white/10 text-cyan-200 border-l-2 border-brand transition-all duration-300 hover:text-cyan-400"
//                     : "text-foreground/70 group relative font-semibold tracking-wide text-[17px] transition-all duration-300 hover:text-cyan-400 hover:bg-white/5"
//                 }`}
//               >
//                 {c.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>
//       <motion.div
//         key={cat.slug}
//         initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
//         animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//         exit={{ opacity: 0, x: -12, filter: "blur(6px)" }}
//         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//         className="p-8"
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={cat.slug + "-head"}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className="flex items-baseline justify-between"
//           >
//             <div>
//               <h3 className="font-display text-2xl">{cat.name}</h3>
//               <p className="text-sm text-muted-foreground mt-1 max-w-md">{cat.blurb}</p>
//             </div>
//             <Link
//               href={`/products/category/${cat.slug}`}
//               onClick={onNav}
//               className="text-xs text-brand hover:underline"
//             >
//               View all →
//             </Link>
//           </motion.div>
//         </AnimatePresence>
//         <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-6">
//           {cat.groups.map((g, gi) => (
//             <motion.div
//               key={g.title}
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35, delay: 0.05 + gi * 0.04, ease: [0.22, 1, 0.36, 1] }}
//             >
//               <div className="text-[11px] uppercase tracking-[0.2em] text-brand/80 mb-3">{g.title}</div>
//               <ul className="space-y-3">
//                 {g.items.map((it) => (
//                   <li key={it.slug}>
//                     <Link
//                       href={`/products/${it.slug}`}
//                       onClick={onNav}
//                       className="group flex items-center gap-3 rounded-xl p-2 -m-2 hover:bg-white/5 hover:translate-x-1 transition-all duration-300"
//                     >
//                       {it.image ? (
//                         <div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center overflow-hidden">
//                           <img
//                             src={typeof it.image === "string" ? it.image : it.image.src}
//                             alt=""
//                             className="h-full w-full object-contain group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500"
//                           />
//                         </div>
//                       ) : (
//                         <div className="h-10 w-10 rounded-md bg-[image:var(--gradient-brand)] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
//                       )}
//                       <div>
//                         <div className="text-sm font-medium group-hover:text-brand transition-colors">{it.name}</div>
//                         <div className="text-xs text-muted-foreground line-clamp-1">{it.tagline}</div>
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function SimpleGridPanel({ items, base, onNav }: { items: Item[]; base: "/industry" | "/support"; onNav: () => void }) {
//   return (
//     <div className="p-8 grid grid-cols-4 gap-4" style={{ fontFamily: 'Poppins' }}>
//       {items.map((it, i) => (
//         <motion.div
//           key={it.slug}
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: i * 0.03 }}
//         >
//           <Link
//             href={`${base}/${it.slug}`}
//             onClick={onNav}
//             className="block group rounded-2xl p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
//           >
//             <div className="h-24 rounded-lg bg-gradient-to-br from-brand/30 to-transparent mb-3 group-hover:from-brand/50 transition" />
//             <div className="text-sm font-medium">{it.name}</div>
//             <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{it.tagline}</div>
//           </Link>
//         </motion.div>
//       ))}
//     </div>
//   );
// }



"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  productCategories,
  industries,
  supportItems,
  type Item,
  type IndustryDetail,
} from "@/lib/catalog";

type MenuKey = "products" | "industries" | "support" | null;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [activeCat, setActiveCat] = useState<string>(productCategories[0].slug);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MenuKey>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openMenu = (k: MenuKey) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(k);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };

  const toggleMobileExpand = (k: MenuKey) => {
    setMobileExpanded(mobileExpanded === k ? null : k);
  };

  const links: { label: string; href: string; menu?: MenuKey }[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", menu: "products" },
    { label: "Industries", href: "/industry", menu: "industries" },
    { label: "Blogs", href: "/blog" },
    { label: "Support", href: "/support", menu: "support" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      onMouseLeave={scheduleClose}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled || open || mobileMenuOpen
            ? "rounded-full border border-white/20 bg-[rgba(30,41,54,0.72)] backdrop-blur-[28px] supports-[backdrop-filter]:bg-[rgba(39,56,65,0.55)] shadow-[0_15px_45px_rgba(0,0,0,.35)] py-3"
            : "bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-md bg-[image:var(--gradient-brand)] opacity-90 group-hover:opacity-100 transition" />
            <div className="absolute inset-[3px] rounded-[4px] bg-background flex items-center justify-center text-[10px] font-bold text-brand">
              JAS
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            geomatics <span className="text-brand">.in</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-white">
          {links.map((l) => (
            <div
              key={l.label}
              onMouseEnter={() => (l.menu ? openMenu(l.menu) : openMenu(null))}
            >
              <Link
                href={l.href}
                className={`relative px-4 py-2 text-[17px] font-semibold tracking-wide transition-all duration-300 hover:text-cyan-400 ${
                  open === l.menu && l.menu ? "text-cyan-400" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Book a Demo Button (Desktop) / Mobile Toggle Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-2 text-sm font-semibold text-white transition-all duration-500 hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.45)] hover:scale-105"
          >
            Book a Demo
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 md:hidden z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- DESKTOP MEGA PANEL --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => openMenu(open)}
            onMouseLeave={scheduleClose}
            className="hidden md:block mx-auto mt-3 max-w-7xl px-6"
          >
            <div className="text-white border border-white/10 bg-[rgba(27,20,35,0.72)] backdrop-blur-[28px] supports-[backdrop-filter]:bg-[rgba(27,20,35,0.55)] shadow-[0_15px_45px_rgba(0,0,0,.35)] rounded-3xl overflow-hidden">
              {open === "products" && (
                <ProductsPanel activeCat={activeCat} setActiveCat={setActiveCat} onNav={() => setOpen(null)} />
              )}
              {open === "industries" && (
                <SimpleGridPanel items={industries} base="/industry" onNav={() => setOpen(null)} />
              )}
              {open === "support" && (
                <SimpleGridPanel items={supportItems} base="/support" onNav={() => setOpen(null)} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 left-0 z-40 h-screen w-screen bg-[#070a13] px-6 pt-24 pb-10 overflow-y-auto text-white md:hidden"
          >
            <div className="flex flex-col space-y-2 border-t border-white/10 pt-4">
              {links.map((link) => {
                const isExpandable = !!link.menu;
                const isExpanded = mobileExpanded === link.menu;

                return (
                  <div key={link.label} className="border-b border-white/5 py-3">
                    {isExpandable ? (
                      <div>
                        <button
                          onClick={() => toggleMobileExpand(link.menu!)}
                          className="flex w-full items-center justify-between py-2 text-xl font-medium text-white/90 hover:text-cyan-400"
                        >
                          <span>{link.label}</span>
                          <span className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                            ▼
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              {link.menu === "products" && (
                                <MobileProductsMenu activeCat={activeCat} setActiveCat={setActiveCat} onNav={() => setMobileMenuOpen(false)} />
                              )}
                              {link.menu === "industries" && (
                                <MobileSimpleGridMenu items={industries} base="/industry" onNav={() => setMobileMenuOpen(false)} />
                              )}
                              {link.menu === "support" && (
                                <MobileSimpleGridMenu items={supportItems} base="/support" onNav={() => setMobileMenuOpen(false)} />
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-xl font-medium text-white/90 hover:text-cyan-400"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ==========================================================================
   DESKTOP GRID PANEL WITH NEXT.JS IMAGE SUPPORT
   ========================================================================== */
function SimpleGridPanel({
  items,
  base,
  onNav,
}: {
  items: (IndustryDetail | Item)[];
  base: "/industry" | "/support";
  onNav: () => void;
}) {
  return (
    <div className="p-8 grid grid-cols-4 gap-4" style={{ fontFamily: "Poppins" }}>
      {items.map((it, i) => (
        <motion.div
          key={it.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
        >
          <Link
            href={`${base}/${it.slug}`}
            onClick={onNav}
            className="group flex flex-col rounded-2xl p-3.5 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all h-full"
          >
            {/* Image Placeholder Frame replaced with Next.js <Image /> */}
            <div className="relative h-28 w-full rounded-xl bg-white/5 overflow-hidden mb-3 border border-white/10">
              {"image" in it && it.image ? (
                <Image
                  src={it.image}
                  alt={it.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1200px) 25vw, 20vw"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 to-transparent group-hover:from-cyan-500/40 transition-all" />
              )}
            </div>

            <div className="text-sm font-semibold text-white/95 group-hover:text-cyan-400 transition-colors">
              {it.name}
            </div>
            <div className="text-xs text-white/60 mt-1 line-clamp-2">
              {it.tagline}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

/* ==========================================================================
   MOBILE INNER ACCORDIONS
   ========================================================================== */
function MobileProductsMenu({
  activeCat,
  setActiveCat,
  onNav,
}: {
  activeCat: string;
  setActiveCat: (s: string) => void;
  onNav: () => void;
}) {
  const cat = productCategories.find((c) => c.slug === activeCat) ?? productCategories[0];

  return (
    <div className="mt-4 space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-2 px-2">
        {productCategories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActiveCat(c.slug)}
            className={`flex-shrink-0 rounded-lg px-4 py-2 text-xs font-semibold tracking-wide border transition-all ${
              activeCat === c.slug
                ? "bg-cyan-500/10 border-cyan-400 text-cyan-400"
                : "bg-white/5 border-white/5 text-white/70"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <motion.div
        key={cat.slug}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {cat.groups.map((g) => (
          <div key={g.title}>
            <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/80 mb-4 mt-2">
              {g.title}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {g.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/products/${it.slug}`}
                  onClick={onNav}
                  className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-4 text-center transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 group"
                >
                  <div className="relative mb-3 h-20 w-full rounded-lg bg-white/5 flex items-center justify-center overflow-hidden">
                    {it.image ? (
                      <Image
                        src={it.image}
                        alt={it.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded bg-[image:var(--gradient-brand)] opacity-60" />
                    )}
                  </div>
                  <div className="text-sm font-semibold text-white/90 group-hover:text-cyan-400 transition-colors">
                    {it.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function MobileSimpleGridMenu({
  items,
  base,
  onNav,
}: {
  items: (IndustryDetail | Item)[];
  base: "/industry" | "/support";
  onNav: () => void;
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {items.map((it) => (
        <Link
          key={it.slug}
          href={`${base}/${it.slug}`}
          onClick={onNav}
          className="block rounded-2xl border border-white/5 bg-white/5 p-3 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
        >
          <div className="relative h-20 rounded-lg bg-white/5 mb-2 overflow-hidden border border-white/10">
            {"image" in it && it.image ? (
              <Image src={it.image} alt={it.name} fill className="object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 to-transparent" />
            )}
          </div>
          <div className="text-sm font-semibold text-white/95">{it.name}</div>
          <div className="text-xs text-white/50 mt-1 line-clamp-1">{it.tagline}</div>
        </Link>
      ))}
    </div>
  );
}

function ProductsPanel({
  activeCat,
  setActiveCat,
  onNav,
}: {
  activeCat: string;
  setActiveCat: (s: string) => void;
  onNav: () => void;
}) {
  const cat = productCategories.find((c) => c.slug === activeCat) ?? productCategories[0];
  return (
    <div className="grid grid-cols-[220px_1fr] min-h-[380px]" style={{ fontFamily: "Poppins" }}>
      <aside className="border-r text-cyan-200 border-white/10 p-6">
        <div className="text-[10px] uppercase tracking-[0.24em] text-brand mb-4">Categories</div>
        <ul className="space-y-1">
          {productCategories.map((c) => (
            <li key={c.slug}>
              <button
                onMouseEnter={() => setActiveCat(c.slug)}
                onFocus={() => setActiveCat(c.slug)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  activeCat === c.slug
                    ? "bg-white/10 text-cyan-200 border-l-2 border-brand font-semibold text-[17px]"
                    : "text-foreground/70 font-semibold tracking-wide text-[17px] hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <motion.div
        key={cat.slug}
        initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -12, filter: "blur(6px)" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="p-8"
      >
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h3 className="font-display text-2xl">{cat.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-md">{cat.blurb}</p>
          </div>
          <Link href={`/products/category/${cat.slug}`} onClick={onNav} className="text-xs text-brand hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          {cat.groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + gi * 0.04 }}
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand/80 mb-3">{g.title}</div>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it.slug}>
                    <Link
                      href={`/products/${it.slug}`}
                      onClick={onNav}
                      className="group flex items-center gap-3 rounded-xl p-2 -m-2 hover:bg-white/5 hover:translate-x-1 transition-all duration-300"
                    >
                      <div className="relative h-10 w-10 shrink-0 rounded-md bg-white/5 overflow-hidden">
                        {it.image ? (
                          <Image
                            src={it.image}
                            alt={it.name}
                            fill
                            className="object-contain group-hover:scale-125 transition-transform duration-500"
                          />
                        ) : (
                          <div className="h-full w-full bg-[image:var(--gradient-brand)] opacity-70" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium group-hover:text-brand transition-colors">{it.name}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{it.tagline}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}