"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import p2Vision from "@/assets/P2 LiDAR Thermal.png";
import v4e from "@/assets/V4E Lidar & V4e Mini.png";
import p2Lidar from "@/assets/P2 LiDAR.png";
import v10l from "@/assets/V10l.png";

const slides = [
  {
    tag: "Just Landed",
    title: "P2 Vision+",
    sub: "Act faster with 3D thermal insight.",
    img: p2Vision,
  },
  {
    tag: "New Release",
    title: "V4e LiDAR",
    sub: "The easy way into 3D scanning.",
    img: v4e,
  },
  {
    tag: "Bestseller",
    title: "P2 LiDAR ",
    sub: "Smaller. Smarter. Scan more.",
    img: p2Lidar,
  },
  {
    tag: "Precision GNSS",
    title: "V10L GNSS ",
    sub: "Pinpoint accuracy at laser speed.",
    img: v10l,
  },
];

// Changed to 'export default function' to satisfy the Next.js router constraint
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <div>
      <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg.src}
            alt=""
            className="h-full w-full object-cover scale-110"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Purple gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060915]/30 via-[#0b1220]/35 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#070b13cc]/30 to-transparent" />

          {/* Grid */}
          <div className="absolute inset-0 bg-grid opacity-15" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-[#211c2b]/70
                    backdrop-blur-xl
                    px-6
                    py-3
                    uppercase
                    tracking-[2px]
                    text-[#11C4FF]
                    text-sm
                    font-bold
                    "
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"/>
                    {s.tag}
                  </span>
                  <h1 className="mt-6 text-6xl md:text-8xl font-bold leading-[0.95]">
                    <span className="bg-gradient-to-b from-[#2DD4FF] to-[#0C87FF] bg-clip-text text-transparent ">{s.title}</span>
                  </h1>
                  <p className="mt-8 text-[32px] font-medium text-white/80 max-w-[620px] leading-relaxed ">
                    {s.sub}
                  </p>
                  <div className="mt-12 flex flex-wrap items-center gap-5">
                    {/* Primary Button */}
                    <a
                      href="/contact"
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full
                      bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500
                      px-9 py-4 text-[15px] font-bold text-white
                      shadow-[0_10px_35px_rgba(0,170,255,.35)]
                      transition-all duration-500
                      hover:scale-105
                      hover:shadow-[0_15px_50px_rgba(0,170,255,.6)]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative z-10">Book a Demo</span>
                      <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                    {/* Secondary Button */}
                    <a
                      href="/products"
                      className="group inline-flex items-center gap-3
                      rounded-full
                      border border-white/15
                      bg-white/5
                      backdrop-blur-xl
                      px-9 py-4
                      text-[15px]
                      font-semibold
                      text-white
                      transition-all duration-500
                      hover:border-sky-400
                      hover:bg-white/10
                      hover:shadow-[0_0_30px_rgba(56,189,248,.25)]
                      hover:scale-105"
                    >
                      Learn More
                      <ArrowUpRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-400" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative hidden md:flex items-center justify-center">
              {/* Glow rings */}
              <div className="absolute w-[700px] h-[700px] rounded-full border border-cyan-400/10"/>
              <div className="absolute w-[560px] h-[560px] rounded-full border border-cyan-400/15"/>
              <div className="absolute w-[430px] h-[430px] rounded-full border border-cyan-400/20"/>
              <div className="absolute w-[650px] h-[650px] rounded-full bg-cyan-400/10 blur-[120px] animate-pulse"/>
              
              <AnimatePresence mode="wait">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img
                    key={typeof s.img === "string" ? s.img : s.img.src}
                    src={typeof s.img === "string" ? s.img : s.img.src}
                    alt={s.title}
                    initial={{ opacity: 0, y: 40, scale: 0.9, rotateY: -20 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, y: -40, scale: 0.9, rotateY: 20 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 h-[520px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-float"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              {slides.map((sl, idx) => (
                <button
                  key={sl.title}
                  onClick={() => setI(idx)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    idx === i ? "w-16 bg-cyan-400" : "w-8 bg-white/20"
                  }`}
                >
                  <div className={`mt-1.5 h-0.5 rounded-full transition-all ${
                    idx === i ? "w-20 bg-brand" : "w-14 bg-white/30"
                  }`} />
                  <div className="text-xs text-cyan-200 ">{sl.title}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setI((i - 1 + slides.length) % slides.length)}
                className="group rounded-full border border-white/10 bg-[#24263b]/70 backdrop-blur-xl px-5 py-5 font-bold text-white transition-all duration-500 hover:bg-[#31344c] hover:border-cyan-400"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setI((i + 1) % slides.length)}
                className="group rounded-full border border-white/10 bg-[#24263b]/70 backdrop-blur-xl px-5 py-5 text-white transition-all duration-500 hover:bg-[#31344c] hover:border-cyan-400"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}