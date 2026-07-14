"use client";



import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pointcloud from "@/assets/pointcloud.jpg";
import p2Vision from "@/assets/product-p2-vision.png";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rot = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax point cloud bg */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={pointcloud.src}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </motion.div>

      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
        <motion.div style={{ scale }} className="relative flex justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-brand/30 blur-[100px]" />
          <motion.img
            style={{ rotate: rot }}
            src={p2Vision.src}
            alt="P2 Vision+ scanner"
            loading="lazy"
            className="relative h-[520px] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          />
          {/* Orbit ring */}
          <div className="absolute h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute h-[600px] w-[600px] rounded-full border border-brand/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-brand">
            3D Gaussian Splatting
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold leading-[1.05]">
            Turn scans into
            <br />
            <span className="text-gradient">immersive digital twins.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Skip complex meshing and manual modelling. Our engine renders
            photorealistic scenes from raw scan data in minutes — ready to
            view, share and review in the browser.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "500 M+", v: "Points / second" },
              { k: "±5 mm", v: "Scan accuracy" },
              { k: "10×", v: "Faster capture" },
            ].map((s) => (
              <div key={s.k} className="glass rounded-2xl p-5">
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-brand hover:scale-[1.04] transition-transform"
          >
            Explore Reality Modeling
          </a>
        </motion.div>
      </div>
    </section>
  );
}