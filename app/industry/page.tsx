"use client";

import { motion } from "framer-motion";
import  PageShell  from "@/pages/hero";

const industries = [
  { name: "Turf Management", tag: "Sports & Golf", hue: "from-emerald-500/40 to-emerald-900/40" },
  { name: "Scan-to-BIM", tag: "AEC", hue: "from-indigo-500/40 to-purple-900/40" },
  { name: "Scan-to-CAD", tag: "Engineering", hue: "from-sky-500/40 to-blue-900/40" },
  { name: "Traffic Accident Investigation", tag: "Forensics", hue: "from-rose-500/40 to-red-900/40" },
  { name: "Forestry Survey", tag: "Environment", hue: "from-lime-500/40 to-green-900/40" },
  { name: "Substation Inspection", tag: "Utilities", hue: "from-amber-500/40 to-orange-900/40" },
  { name: "Dairy Farm Digitalization", tag: "Agri-tech", hue: "from-teal-500/40 to-cyan-900/40" },
  { name: "Cleaning Solutions Deployment", tag: "Robotics", hue: "from-fuchsia-500/40 to-pink-900/40" },
  { name: "Mining & Quarry", tag: "Extraction", hue: "from-yellow-500/40 to-amber-900/40" },
  { name: "Highway & Rail", tag: "Infrastructure", hue: "from-blue-500/40 to-indigo-900/40" },
  { name: "Heritage Preservation", tag: "Culture", hue: "from-violet-500/40 to-purple-900/40" },
  { name: "Urban Planning", tag: "Smart City", hue: "from-cyan-500/40 to-sky-900/40" },
];

// Added 'export default' so Next.js knows this is the primary component for the route
export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Where we work"
      title={<>Purpose-built for <span className="text-gradient">every field</span>.</>}
      subtitle="From highway surveys in Gujarat to heritage scans in Rajasthan — Trion delivers survey-grade data anywhere in Bharat."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <motion.a
            key={ind.name}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${ind.hue} transition-transform duration-700 group-hover:scale-110`} />
            <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_120%,var(--brand-glow),transparent_60%)]" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <div className="text-[10px] uppercase tracking-[0.25em] text-brand">{ind.tag}</div>
              <div className="mt-2 font-display text-2xl font-semibold group-hover:text-gradient transition">{ind.name}</div>
              <div className="mt-3 h-px w-10 bg-brand transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}