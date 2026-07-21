"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p2Vision from "@/assets/P2 LiDAR Thermal.png";
import v4e from "@/assets/V4E Lidar & V4e Mini.png";
import p2Lidar from "@/assets/P2 LiDAR.png";
import s2Lidar from "@/assets/S2 Max LiDAR with INsta X5 Camera.png";
import v10l from "@/assets/V10l with controller 1.png";
import v4Lidar from "@/assets/V4E LiDAR.png";


const products = [
  { name: "P2 Vision+", tag: "3D Thermal Insight", img: p2Vision },
  { name: "V4e LiDAR", tag: "Entry-level 3D Scanning", img: v4e },
  { name: "P2 LiDAR Scanner", tag: "Handheld Precision", img: p2Lidar },
  { name: "S2 Series LiDAR", tag: "Larger Capability", img: s2Lidar },
  { name: "V4e Pro", tag: "Mini RTK Receiver", img: v4Lidar },
  { name: "V10L GNSS System", tag: "Pinpoint Accuracy", img: v10l },
];

// Changed to 'export default function' to satisfy the Next.js router constraint
export default function ProductGrid() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand">
            The Product Line
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            One toolkit for every <span className="text-gradient">reality</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Handheld LiDAR, precision GNSS and machine guidance — engineered
            for surveyors, contractors and BIM teams across India.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.a
              key={p.name}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:glass-strong"
            >
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-3xl bg-[image:var(--gradient-brand)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />

              <div className="relative flex h-56 items-center justify-center">
                <div className="absolute h-40 w-40 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/25 transition-all duration-700" />
                <img
                  src={p.img.src}
                  alt={p.name}
                  loading="lazy"
                  className="relative h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              <div className="relative mt-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand/80">
                    {p.tag}
                  </div>
                  <div className="mt-2 text-2xl font-semibold">{p.name}</div>
                </div>
                <div className="glass rounded-full p-2.5 transition-all duration-300 group-hover:bg-brand group-hover:text-primary-foreground group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}