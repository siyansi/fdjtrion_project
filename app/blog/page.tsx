"use client";

import { useState } from "react";
import * as motion from "framer-motion/client"; // Next.js 15+ friendly client wrapper
import { Search } from "lucide-react";
import  PageShell  from "@/pages/hero"; 

const tabs = ["All", "Product Updates", "Customer Stories", "News & Insights"] as const;

const posts = [
  { tab: "Customer Stories", date: "Mar 26, 2026", tag: "Surveying", title: "From Paper to Digital: How FJD Trion Revolutionised Building Measurement in Rajasthan", hue: "from-orange-500/30 to-rose-900/40" },
  { tab: "Customer Stories", date: "Mar 26, 2026", tag: "Forestry", title: "Seeing the Forest Through the Trees: LiDAR Captures Today for the Future", hue: "from-emerald-500/30 to-green-900/40" },
  { tab: "Customer Stories", date: "Dec 29, 2025", tag: "Digital Preservation", title: "Capturing Old Delhi's Havelis in 3D with FJD Trion P2", hue: "from-amber-500/30 to-orange-900/40" },
  { tab: "Customer Stories", date: "Dec 29, 2025", tag: "Surveying", title: "Safe, Fast, Accurate: V10L Receiver in Action on the Konkan Coast", hue: "from-sky-500/30 to-indigo-900/40" },
  { tab: "Product Updates", date: "Jun 22, 2026", tag: "Firmware", title: "FJD Trion P2 Firmware V1.2.0 — Rover Management & Orientation Display", hue: "from-fuchsia-500/30 to-purple-900/40" },
  { tab: "Product Updates", date: "May 21, 2026", tag: "Software", title: "FJD Trion Scan V3.6.0 — Improved Field Mapping & RTK Stability", hue: "from-violet-500/30 to-indigo-900/40" },
  { tab: "News & Insights", date: "Feb 10, 2026", tag: "Event", title: "Meet FJD Trion India at Geo-Spatial World Forum, Hyderabad 2026", hue: "from-cyan-500/30 to-teal-900/40" },
  { tab: "News & Insights", date: "Jan 05, 2026", tag: "Announcement", title: "FJD Trion India Opens New Support HQ in Bengaluru", hue: "from-brand/30 to-blue-900/40" },
];

export default function BlogsPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [q, setQ] = useState("");
  
  const filtered = posts.filter(
    (p) => (active === "All" || p.tab === active) && p.title.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      {/* Managing Metadata inside "use client" via the standard Head API tag */}
      <title>Blogs — FJD Trion India | News, Updates & Stories</title>
      <meta name="description" content="Product updates, customer stories and news from FJD Trion India — the reality-capture leader for Indian surveyors." />

      <PageShell
        eyebrow="Insights"
        title={
          <>
            Stories, updates <span className="text-gradient">& field notes</span>.
          </>
        }
        subtitle="Product releases, customer wins and the state of reality-capture in India."
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  active === t
                    ? "glass-strong text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="w-72 rounded-full glass py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand/50 bg-transparent"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl glass cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
                <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                  {p.tab}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground">{p.date}</span>
                  <span className="text-brand font-medium">{p.tag}</span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-gradient transition">
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full py-16 text-center text-muted-foreground">
              No articles match your search.
            </div>
          )}
        </div>
      </PageShell>
    </>
  );
}