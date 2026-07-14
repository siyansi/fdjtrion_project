"use client";


import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const events = [
  { name: "GEO INDIA", date: "Feb 16-18", city: "Hyderabad" },
  { name: "CONBUILD", date: "Mar 3-7", city: "New Delhi" },
  { name: "GEO CONNECT ASIA", date: "Mar 31 - Apr 1", city: "Singapore" },
  { name: "SMART CITIES EXPO", date: "Apr 29-30", city: "Mumbai" },
  { name: "SURVEY WORLD", date: "Jun 3-4", city: "Bengaluru" },
  { name: "INTERGEO 2026", date: "Sep 15-17", city: "Munich, DE" },
];

export function Tour() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand">
              Trion on Tour
            </span>
            <h2 className="mt-3 text-5xl md:text-6xl font-bold">
              Meet us in person.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            See where we're heading next across India and Asia. Book a live
            demo at any of these events and scan with us on the floor.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover:glass-strong transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs text-brand">
                  <MapPin className="h-3.5 w-3.5" /> {e.city}
                </div>
                <div className="mt-4 text-xl font-semibold">{e.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.date}, 2026
                </div>
                <div className="mt-6 h-px bg-white/10" />
                <div className="mt-4 text-xs font-medium text-foreground/70 group-hover:text-brand transition">
                  Book a meeting →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}