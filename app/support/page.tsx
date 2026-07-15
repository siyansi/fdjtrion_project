
"use client";

import { useState } from "react";
import * as motion from "framer-motion/client"; // Next.js 15+ compatible client wrapper
import { BookOpen, Download, LifeBuoy, MessageSquare, Play, Wrench, ChevronDown } from "lucide-react";
import  PageShell  from "@/pages/hero";

const cards = [
  { icon: BookOpen, title: "Documentation", desc: "User manuals, quick-starts and datasheets for every product." },
  { icon: Download, title: "Downloads", desc: "Firmware, drivers, and desktop / mobile software." },
  { icon: Play, title: "Tutorials", desc: "Step-by-step videos for setup, scanning and post-processing." },
  { icon: Wrench, title: "Service & Repair", desc: "Authorised service centres across Delhi, Mumbai & Bengaluru." },
  { icon: MessageSquare, title: "Community", desc: "Ask questions and share workflows with Indian surveyors." },
  { icon: LifeBuoy, title: "Contact Support", desc: "Talk to a Trion engineer, 9am–7pm IST, Mon–Sat." },
];

const faqs = [
  { q: "How do I register the warranty for my new Trion device?", a: "Register your serial number in the FJD Trion India portal within 30 days of purchase. Warranty starts from the invoice date and is valid pan-India." },
  { q: "Which mobile devices are supported by FJD Trion Scan?", a: "Android 10+ and iOS 15+. We recommend flagship devices with LiDAR support for best real-time preview performance." },
  { q: "Can I get on-site training in my city?", a: "Yes — our certified trainers cover 40+ Indian cities. Request an on-site session from the Contact page." },
  { q: "Do you provide GST invoices and export docs?", a: "All sales are billed with GST-compliant invoices. Export documentation is available for SAARC deployments." },
  { q: "How often is firmware updated?", a: "Major firmware releases ship every quarter; critical fixes ship out-of-band. Enable auto-updates in Trion Scan." },
];

export default function SupportPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {/* Inline Metadata Handling for Client-Side Next.js Components */}
      <title>Support — FJD Trion India | Help Centre, Docs, Downloads</title>
      <meta name="description" content="Guides, firmware downloads, tutorials and pan-India technical support for FJD Trion products." />

      <PageShell
        eyebrow="We've got your back"
        title={<>Support that <span className="text-gradient">moves with you</span>.</>}
        subtitle="Docs, downloads, tutorials and India-wide service — everything you need to keep scanning."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 hover:glow-brand transition cursor-pointer"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand/20 blur-3xl group-hover:bg-brand/40 transition" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] text-background">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="relative mt-5 font-display text-xl font-semibold">{c.title}</div>
              <p className="relative mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl">Frequently asked</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left outline-none"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-brand transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}