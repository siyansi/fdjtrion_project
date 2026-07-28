"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "opacity-100 blur-0" : "opacity-0 blur-[6px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,var(--brand),var(--brand-2))] transition-[width] duration-150 ease-out"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

// export function SiteNav({ active = "Blogs" }: { active?: string }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const on = () => setScrolled(window.scrollY > 20);
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Products", href: "/products" },
//     { label: "Industries", href: "/industries" },
//     { label: "Blogs", href: "/blog" },
//     { label: "Support", href: "/support" },
//     { label: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
//           : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent"
//       }`}
//     >
//       <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
//         <Link href="/" className="text-lg font-black tracking-tight text-white">
//           FJD<span className="text-[color:var(--brand)]">Trion</span>
//         </Link>
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className={`group relative text-sm transition-colors ${
//                 active === item.label ? "text-white" : "text-white/70 hover:text-white"
//               }`}
//             >
//               {item.label}
//               <span
//                 className={`absolute -bottom-1 left-0 h-[2px] bg-[linear-gradient(90deg,var(--brand),var(--brand-2))] transition-all duration-300 ${
//                   active === item.label ? "w-full" : "w-0 group-hover:w-full"
//                 }`}
//               />
//             </Link>
//           ))}
//         </nav>
//         <Link
//           href="/contact"
//           className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-[color:var(--brand)] hover:bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] hover:text-black"
//         >
//           Get a Quote
//         </Link>
//       </div>
//     </header>
//   );
// }

export function SiteFooter() {
  const cols = [
    {
      h: "Products",
      links: [
        { label: "P2 LiDAR Scanner", href: "/products/p2-lidar" },
        { label: "P2 Vision+", href: "/products/p2-vision-plus" },
        { label: "S2 Series", href: "/products/s2-series" },
        { label: "V4e LiDAR", href: "/products/v4e-lidar" },
        { label: "V10L Receiver", href: "/products/v10l-receiver" },
      ],
    },
    {
      h: "Solutions",
      links: [
        { label: "Surveying", href: "/industries/surveying" },
        { label: "Forestry", href: "/industries/forestry" },
        { label: "Construction", href: "/industries/construction" },
        { label: "Digital Preservation", href: "/industries/digital-preservation" },
      ],
    },
    {
      h: "Resource",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Product Updates", href: "/blog/product-updates" },
        { label: "Customer Stories", href: "/blog/customer-stories" },
        { label: "News & Insights", href: "/blog/news" },
      ],
    },
    {
      h: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Support", href: "/support" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">
      {/* <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {cols.map((c) => (
          <div key={c.h}>
            <h5 className="text-sm font-bold">{c.h}</h5>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-[color:var(--brand)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] px-6 text-xs text-neutral-500">
        © 2026 FJD Trion. All rights reserved.
      </div> */}
    </footer>
  );
}