"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { productCategories, industries, supportItems, type Item } from "@/lib/catalog";
import Link from 'next/link';

type MenuKey = "products" | "industries" | "support" | null;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [activeCat, setActiveCat] = useState<string>(productCategories[0].slug);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (k: MenuKey) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };

  const links: { label: string; to: string; menu?: MenuKey }[] = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products", menu: "products" },
    { label: "Industries", to: "/industries", menu: "industries" },
    { label: "Blogs", to: "/blogs" },
    { label: "Support", to: "/support", menu: "support" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      onMouseLeave={scheduleClose}
    style={{ fontFamily: 'Poppins' }}>
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled || open ? "rounded-ful border border-white/20 bg-[rgba(30,41,54,0.72)] backdrop-blur-[28px] rounded-full supports-[backdrop-filter]:bg-[rgba(39,56,65,0.55)] shadow-[0_15px_45px_rgba(0,0,0,.35)] transition-all duration-500 py-3" : "bg-transparent"
        }`}
      >
       <Link href="/" className="flex items-center gap-2 group">
  <div className="relative h-8 w-8">
    <div className="absolute inset-0 rounded-md bg-[image:var(--gradient-brand)] opacity-90 group-hover:opacity-100 transition" />
    <div className="absolute inset-[3px] rounded-[4px] bg-background flex items-center justify-center text-[10px] font-bold text-brand">
      FJD
    </div>
  </div>
  <span className="font-display text-lg font-semibold tracking-tight">
    Trion<span className="text-brand">.in</span>
  </span>
</Link>

        <nav className="hidden md:flex items-center gap-1 text-white">
          {links.map((l) => (
            <div
              key={l.label}
              onMouseEnter={() => (l.menu ? openMenu(l.menu) : openMenu(null))}
            >
              <Link
                href={l.to}
                
                className={`relative px-4 py-2 text-sm text-foreground/80group
relative
font-semibold
tracking-wide
text-[17px]
transition-all
duration-300
hover:text-cyan-400 transition-colors
pathname==l.to
?
"text-white after:scale-x-100"
:
"text-white/80"                  open === l.menu && l.menu ? "text-foreground after:scale-x-100" : ""
                }`}
              >
                {l.label}
              </Link>
            </div>
          ))}



          
        </nav>



          

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full rounded-full
border
border-white/10
bg-white/10
backdrop-blur-xl
px-8
py-3
font-semibold
transition-all
duration-500
hover:bg-cyan-500
hover:border-cyan-400
hover:shadow-[0_0_35px_rgba(34,211,238,.45)]
hover:scale-105 px-5 py-2 text-sm font-medium hover:bg-white/15 transition-all hover:scale-[1.03] text-white"
        >
          Book a Demo
        </Link>
      </div>

      {/* Mega panel */}
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
            className="mx-auto mt-3 max-w-7xl px-6"
          >
            <div className="text-white
border border-white/10
bg-[rgba(27,20,35,0.72)]
backdrop-blur-[28px]
supports-[backdrop-filter]:bg-[rgba(27,20,35,0.55)]
shadow-[0_15px_45px_rgba(0,0,0,.35)]
transition-all
duration-500 rounded-3xl overflow-hidden">
              {open === "products" && <ProductsPanel activeCat={activeCat} setActiveCat={setActiveCat} onNav={() => setOpen(null)} />}
              {open === "industries" && <SimpleGridPanel items={industries} base="/industries" onNav={() => setOpen(null)} />}
              {open === "support" && <SimpleGridPanel items={supportItems} base="/support" onNav={() => setOpen(null)} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
    <div className="grid grid-cols-[220px_1fr] min-h-[380px]" style={{ fontFamily: 'Poppins' }} >

      
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
                    ? "bg-white/10 text-cyan-200 border-l-2 border-brand transition-all duration-300 hover:text-cyan-400"
                    : "text-foreground/70 group relative font-semibold tracking-wide text-[17px] transition-all duration-300 hover:text-cyan-400 hover:bg-white/5"
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
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.slug + "-head"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-baseline justify-between"
          >
          <div>
            <h3 className="font-display text-2xl">{cat.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-md">{cat.blurb}</p>
          </div>
          <Link
           href={`/products/category/${cat.slug}`}
            onClick={onNav}
            className="text-xs text-brand hover:underline"
          >
            View all →
          </Link>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 grid grid-cols-3 gap-x-8 gap-y-6">
          {cat.groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 + gi * 0.04, ease: [0.22, 1, 0.36, 1] }}
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
                      {it.image ? (
                        <div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center overflow-hidden">
                          <img
                            src={typeof it.image === "string" ? it.image : it.image.src}
                            alt=""
                            className="h-full w-full object-contain group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-md bg-[image:var(--gradient-brand)] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                      )}
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

function SimpleGridPanel({ items, base, onNav }: { items: Item[]; base: "/industries" | "/support"; onNav: () => void }) {
  return (
    <div className="p-8 grid grid-cols-4 gap-4 " style={{ fontFamily: 'Poppins' }}>
      {items.map((it, i) => (
        <motion.div
          key={it.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
        >
          {base === "/industries" ? (
            <Link
              href={`/industries/${it.slug}`}
              onClick={onNav}
              className="block group rounded-2xl p-4 hover:bg-white/5  border border-transparent hover:border-white/10 transition-all"
            >
              <div className="h-24 rounded-lg bg-gradient-to-br from-brand/30 to-transparent mb-3 group-hover:from-brand/50 transition" />
              <div className="text-sm font-medium">{it.name}</div>
              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{it.tagline}</div>
            </Link>
          ) : (
            <Link
              href ={`/support/${it.slug}`}
              onClick={onNav}
              className="block group rounded-2xl p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
            >
              <div className="h-24 rounded-lg bg-gradient-to-br from-brand/30 to-transparent mb-3 group-hover:from-brand/50 transition" />
              <div className="text-sm font-medium">{it.name}</div>
              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{it.tagline}</div>
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
}
