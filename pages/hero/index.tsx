"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
};

// Changed from 'export function PageShell' to 'export default function PageShell'
export default function PageShell({ eyebrow, title, subtitle, children }: Props) {
  return (
    <div className="relative bg-background text-foreground overflow-hidden">
      {/* <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div> */}
      <main className="pt-32 pb-20">
        <section className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                {eyebrow}
              </div>
            )}
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16"
          >
            {children}
          </motion.div>
        </section>
      </main>
    </div>
  );
}