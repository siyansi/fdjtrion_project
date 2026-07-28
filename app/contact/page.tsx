"use client";

import { useState } from "react";
import * as motion from "framer-motion/client"; // Next.js 15+ compatible client wrapper
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import  PageShell  from "@/pages/hero";

const offices = [
  { city: "Bengaluru", addr: "Level 4, Prestige Tech Park, Sarjapur Rd, Bengaluru 560103", phone: "+91 80 4000 1234" },
  { city: "Mumbai", addr: "Unit 902, Nirlon Knowledge Park, Goregaon East, Mumbai 400063", phone: "+91 22 4200 5678" },
  { city: "Delhi NCR", addr: "Tower B, DLF Cyber City, Sector 25, Gurugram 122002", phone: "+91 124 500 4321" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      {/* Inline Metadata Handling for "use client" Pages */}
      <title>Contact — JAS geomatics  India | Book a Demo</title>
      <meta name="description" content="Talk to JAS geomatics  India — book a demo, request a quote, or connect with our team in Delhi, Mumbai and Bengaluru." />

      <PageShell
        eyebrow="Say hello"
        title={<>Let's build the <span className="text-gradient">next scan</span> together.</>}
        subtitle="Book a live demo, request pricing, or ask us anything about deploying Trion in your workflow."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" placeholder="Aarav Sharma" />
              <Field label="Company" placeholder="Bharat Surveys Pvt Ltd" />
              <Field label="Work email" type="email" placeholder="you@company.in" />
              <Field label="Phone" placeholder="+91 98xxx xxxxx" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Interested in</label>
              <select className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/50">
                <option>LiDAR Scanners</option>
                <option>GNSS Systems</option>
                <option>Machine Guidance</option>
                <option>Software & SDK</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project…"
                className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/50"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3 font-medium text-background hover:glow-brand transition"
            >
              {sent ? "Thanks — we'll be in touch" : "Send message"}
              <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </motion.form>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 text-brand">
                <Mail className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">Email</span>
              </div>
              <div className="mt-3 font-display text-2xl">hello@jasgeomatrcs.in</div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 text-brand">
                <Phone className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">Sales</span>
              </div>
              <div className="mt-3 font-display text-2xl">1800-121-TRION</div>
            </div>
            <div className="grid gap-4">
              {offices.map((o, i) => (
                <motion.div
                  key={o.city}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 hover:glass-strong transition"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 text-brand shrink-0" />
                    <div>
                      <div className="font-display font-semibold">{o.city}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{o.addr}</div>
                      <div className="mt-2 text-sm text-brand">{o.phone}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/50 placeholder:text-muted-foreground/50"
      />
    </div>
  );
}