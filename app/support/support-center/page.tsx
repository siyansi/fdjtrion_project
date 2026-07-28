"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Download, LifeBuoy, MessageSquare, Play, Wrench, ChevronDown, Search, Mail, Phone, MapPin } from "lucide-react";
// import { Nav } from "@/components/site/Nav";
// import { Footer } from "@/components/site/Footer";
import heroSupport from "@/assets/hero-support.jpg";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Support Center — JAS geomatics  India | Help, Docs & Downloads" },
      { name: "description", content: "Firmware, drivers, tutorials, on-site service and pan-India engineer support for every JAS geomatics  product." },
      { property: "og:title", content: "Support Center — JAS geomatics  India" },
      { property: "og:description", content: "Docs, downloads, tutorials, warranty and pan-India technical service." },
    ],
  }),
  component: SupportCenter,
});

const cards = [
  { icon: BookOpen, title: "Product Documentation", desc: "User manuals, quick-starts and datasheets for every scanner, receiver and software module.", tag: "150+ docs" },
  { icon: Download, title: "Firmware & Downloads", desc: "Firmware, drivers, Trion Survey and desktop software — updated every quarter.", tag: "Latest builds" },
  { icon: Play, title: "Video Tutorials", desc: "Setup, scanning, post-processing and workflow videos in English and हिन्दी.", tag: "80+ videos" },
  { icon: Wrench, title: "Service & Repair", desc: "Authorised service centres in Delhi, Mumbai, Bengaluru, Chennai, Hyderabad & Kolkata.", tag: "6 cities" },
  { icon: MessageSquare, title: "Community & Forums", desc: "Ask questions, share workflows and connect with Indian surveyors and BIM teams.", tag: "5k members" },
  { icon: LifeBuoy, title: "Talk to an Engineer", desc: "Direct line to Trion engineers, 9am–7pm IST, Monday to Saturday.", tag: "Live support" },
];

const faqs = [
  { q: "How do I register the warranty for my new Trion device?", a: "Register your serial number in the JAS geomatics  India portal within 30 days of purchase. Warranty starts from the invoice date and is valid pan-India, with on-site service available in 6 metros." },
  { q: "Which mobile devices are supported by Trion Survey / Trion Scan?", a: "Android 10+ and iOS 15+. We recommend flagship devices with LiDAR support for best real-time preview performance. A full compatibility matrix is in the Downloads section." },
  { q: "Can I get on-site training in my city?", a: "Yes — our certified trainers cover 40+ Indian cities. Request an on-site session from the Contact page and we'll schedule within 5 working days." },
  { q: "Do you provide GST invoices and export docs?", a: "All sales are billed with GST-compliant invoices. Export documentation is available for SAARC deployments — talk to your account manager." },
  { q: "How often is firmware updated?", a: "Major firmware releases ship every quarter; critical fixes ship out-of-band. Enable auto-updates in Trion Scan to receive them automatically." },
  { q: "What is the RMA process for a hardware issue?", a: "Log a ticket in the Support portal with your serial number and issue description. We aim for a 24-hour first response and 7-working-day turnaround on covered repairs." },
  { q: "Is training certified?", a: "Yes — all Trion training courses are certified with a completion credential recognised by our channel partners across India." },
];

function SupportCenter() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      {/* <Nav /> */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img src={heroSupport.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> Support Center
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05]">
              Help that <span className="text-gradient">moves at your pace</span>.
            </h1>
            <p className="mt-5 text-lg text-foreground/80 max-w-2xl mx-auto">
              One place for downloads, docs, tutorials, warranty and India-wide engineer support — 24×7 for every JAS geomatics  product.
            </p>
            <div className="mt-8 flex items-center gap-2 max-w-xl mx-auto glass-strong rounded-full px-5 py-3 border border-white/10">
              <Search className="h-4 w-4 text-brand" />
              <input placeholder="Search articles, downloads, videos…" className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground" />
              <button className="rounded-full bg-brand text-primary-foreground text-xs font-medium px-4 py-1.5">Search</button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.28em] text-brand">Get the right help, faster</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Where would you like to start?</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <motion.a
                key={c.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass p-7 hover:glow-brand transition"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand/20 blur-3xl group-hover:bg-brand/40 transition" />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] text-background">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand glass px-2.5 py-1 rounded-full">{c.tag}</span>
                </div>
                <div className="relative mt-6 font-display text-xl font-semibold">{c.title}</div>
                <p className="relative mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl">Frequently asked</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="glass rounded-2xl overflow-hidden border border-white/5">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition">
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-brand transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                <motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-5">
          {[
            { icon: Mail, k: "Email", v: "support@fjdtrion.in" },
            { icon: Phone, k: "Call", v: "1800-266-8746 (toll-free)" },
            { icon: MapPin, k: "Visit", v: "Service centres in 6 cities" },
          ].map((c) => (
            <div key={c.k} className="glass-strong rounded-3xl p-7 border border-white/10">
              <c.icon className="h-6 w-6 text-brand" />
              <div className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">{c.k}</div>
              <div className="mt-1 font-display text-lg">{c.v}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-foreground text-background px-7 py-3 text-sm font-medium hover:scale-[1.03] transition">Contact Support</Link>
          <Link to="/slam-sdk" className="rounded-full glass px-7 py-3 text-sm font-medium hover:bg-white/15 transition">Developer? Explore SLAM SDK</Link>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}