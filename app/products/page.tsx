"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/pages/hero";
import p2Vision from "@/assets/product-p2-vision.png";
import v4e from "@/assets/product-v4e-lidar.png";
import p2Lidar from "@/assets/product-p2-lidar.png";
import v10l from "@/assets/product-v10l-gnss.png";

const categories = [
  {
    name: "LiDAR Scanners",
    items: [
      { title: "V4e LiDAR", sub: "The easy way into 3D scanning.", img: v4e },
      { title: "P2 Vision+", sub: "Act faster with 3D thermal insight.", img: p2Vision },
      { title: "P2 LiDAR Scanner", sub: "Go-anywhere scanning.", img: p2Lidar },
      { title: "S2 Series LiDAR", sub: "Scan the toughest without compromise.", img: p2Lidar },
    ],
  },
  {
    name: "GNSS Systems",
    items: [
      { title: "V10L GNSS", sub: "Pinpoint accuracy at laser speed.", img: v10l },
      { title: "V4e Pro", sub: "IMU-tilt survey, all day.", img: v10l },
    ],
  },
  {
    name: "Digital Construction",
    items: [
      { title: "EC100 Excavator Guidance", sub: "Less rework. More control.", img: p2Lidar },
      { title: "GC100 Motor Grader", sub: "Accurate grading in one go.", img: p2Lidar },
      { title: "DC100 Dozer Control", sub: "Smarter cuts, smoother execution.", img: p2Lidar },
    ],
  },
  {
    name: "Urban Mapping",
    items: [
      { title: "JAS geomatics  Model", sub: "From scans to solutions.", img: p2Vision },
      { title: "JAS geomatics  SLAM SDK", sub: "Autonomous 3D inspection everywhere.", img: v4e },
    ],
  },
];

// MUST be exported as 'default' for Next.js
export default function ProductSlugPage() {
  return (
    <PageShell
      eyebrow="The Lineup"
      title={<>Reality capture <span className="text-gradient">for every jobsite</span>.</>}
      subtitle="From handheld LiDAR to machine guidance — engineered for India's surveyors, contractors and BIM teams."
    >
      <div className="space-y-20">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="flex items-end justify-between border-b border-white/10 pb-4">
              <h2 className="font-display text-3xl md:text-4xl">{cat.name}</h2>
              <span className="text-xs uppercase tracking-widest text-brand">{cat.items.length} products</span>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((it, i) => (
                <motion.a
                  key={it.title}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl glass p-6 hover:glow-brand transition-all"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[image:var(--gradient-brand)] mix-blend-overlay" />
                  <div className="relative flex h-56 items-center justify-center">
                    <div className="absolute h-40 w-40 rounded-full bg-brand/20 blur-3xl group-hover:bg-brand/40 transition" />
                    <img src={typeof it.img === "string" ? it.img : it.img.src} alt={it.title} className="relative h-52 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative mt-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-display text-xl font-semibold">{it.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{it.sub}</div>
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 text-brand transition-transform group-hover:rotate-45" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}