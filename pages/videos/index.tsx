"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import scannerHero from "@/assets/P2 LiDAR.png";
import graffitiHd from "@/assets/graffiti-hd.jpg";
import graffitiLo from "@/assets/graffiti-lo.jpg";
import pointcloudCastle from "@/assets/pointcloud-castle.jpg";
import meshBuilding from "@/assets/mesh-building.jpg";
import scannerCpu from "@/assets/scanner-cpu.jpg";
import scannerCamera from "@/assets/scanner-camera.jpg";
import appPhone from "@/assets/app-phone.jpg";
import laptopSoftware from "@/assets/laptop-software.jpg";
import tabletApp from "@/assets/tablet-app.jpg";

export const Route = createFileRoute()({
  component: Index,
});

const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setShown(true));
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-[6px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const on = () => setScrolled(window.scrollY > 20);
//     on();
//     window.addEventListener("scroll", on, { passive: true });
//     return () => window.removeEventListener("scroll", on);
//   }, []);
//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-[oklch(0.14_0.03_240)]/90 backdrop-blur-xl text-white shadow-[0_1px_0_rgba(255,255,255,0.06)]"
//           : "bg-[oklch(0.10_0.03_240)]/60 backdrop-blur-md text-white"
//       }`}
//     >
//       <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
//         <a href="#" className="text-sm font-semibold tracking-tight">
//           JAS geomatics  P2 LiDAR Scanner
//         </a>
//         <nav className="hidden gap-8 text-sm md:flex">
//           {["Specs", "Download Center", "Free Quote", "Store"].map((l) => (
//             <a
//               key={l}
//               href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
//               className="relative py-1 transition-colors hover:text-[oklch(0.75_0.16_220)] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[oklch(0.75_0.16_220)] after:transition-all after:duration-300 hover:after:w-full"
//             >
//               {l}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

export function HeroIntro() {
      return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(600px circle at 20% 30%, oklch(0.55 0.18 220 / 0.35), transparent 60%), radial-gradient(700px circle at 80% 70%, oklch(0.5 0.15 210 / 0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <img
            src={scannerHero.src}
            alt="JAS geomatics  P2 LiDAR Scanner"
            className="mx-auto max-h-[75vh] w-auto drop-shadow-[0_30px_60px_rgba(0,210,255,0.35)] transition-transform duration-[1200ms] hover:scale-[1.03]"
          />
        </Reveal>
        <Reveal delay={200}>
          <h1 className="text-white text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Next-Generation Portable Design,
            <br />
            <span className="bg-gradient-to-r from-[oklch(0.85_0.14_215)] to-[oklch(0.78_0.16_230)] bg-clip-text text-transparent">
              Industrial-Grade Accuracy
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Weighing just 700g, the JAS geomatics  P2 LiDAR Scanner delivers
            centimeter-level precision, real-time colorized point clouds, and
            multi-format outputs. Its field-ready design lets professionals
            capture complex landscapes and intricate details with ease.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group relative overflow-hidden rounded-full bg-[oklch(0.82_0.15_220)] px-8 py-3 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_oklch(0.72_0.16_290/0.6)]">
              <span className="relative z-10">Get a Free Quote</span>
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            </button>
            <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-black">
              Watch Video
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VideoSlamSection() {
  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <video
              src={SAMPLE_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <div className="pointer-events-none absolute bottom-6 left-6 text-white/90">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Field Demo
              </p>
              <p className="mt-1 text-lg font-medium">
                JAS geomatics  P2 redefines scanning possibilities
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Multi-SLAM Fusion, Robust Performance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Eliminate drift with hybrid constraints, even in featureless areas
              like beaches, tunnels, and parks.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HyperDense() {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100));
      setPos(p);
    };
    const onMove = (e: MouseEvent) => drag.current && move(e.clientX);
    const onTouch = (e: TouchEvent) =>
      drag.current && move(e.touches[0].clientX);
    const stop = () => (drag.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              HyperDense+
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              With the HyperDense+ feature in the JAS geomatics  Model, it delivers
              5–7× denser clouds, giving you better colorization and overall
              quality.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div
            ref={wrap}
            className="relative mx-auto aspect-[16/9] max-w-[1100px] cursor-ew-resize overflow-hidden rounded-2xl ring-1 ring-white/10 select-none"
            onMouseDown={() => (drag.current = true)}
            onTouchStart={() => (drag.current = true)}
          >
            <img
              src={graffitiLo.src}
              alt="Point Cloud"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={graffitiHd.src}
                alt="HyperDense+"
                className="absolute inset-y-0 left-0 h-full w-[100vw] max-w-none object-cover"
                style={{ width: wrap.current?.clientWidth ?? "100%" }}
              />
            </div>
            <span className="absolute left-4 top-4 rounded-md bg-[oklch(0.82_0.15_220)] px-3 py-1 text-xs font-semibold text-black">
              HyperDense+
            </span>
            <span className="absolute right-4 top-4 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-black">
              Point Cloud
            </span>
            <div
              className="absolute inset-y-0 w-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]"
              style={{ left: `calc(${pos}% - 1.5px)` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform hover:scale-110">
                <span className="text-lg leading-none">‹›</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

 export function CameraCarousel() {
  const slides = [
    {
      tab: "Built-in Camera",
      img: scannerCamera,
      caption: "2MP Front Camera · Global Shutter, 70° FOV",
      desc: "Capture motion without blur with a 2MP global shutter, and record high detail textures using dual 12MP RGB cameras.",
    },
    {
      tab: "Upgrade CPU",
      img: scannerCpu,
      caption: "On-device CPU · Real-time processing",
      desc: "Real-time on-device CPU processing delivers colorized point clouds once the scan is complete.",
    },
  ];
  const [i, setI] = useState(0);
  const cur = slides[i];

  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
            Real-Time True-Color Point Clouds
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mt-14">
            <button
              onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
              aria-label="Prev"
            >
              ‹
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % slides.length)}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
              aria-label="Next"
            >
              ›
            </button>
            <div className="mx-auto grid max-w-[900px] gap-4 md:grid-cols-2">
              {slides.map((s, idx) => (
                <div
                  key={idx}
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-700 ${
                    idx === i ? "opacity-100 scale-100" : "opacity-40 scale-95"
                  }`}
                >
                  <img
                    src={s.img.src}
                    alt={s.tab}
                    className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-semibold">{s.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex rounded-full bg-white/5 p-1 ring-1 ring-white/10">
              {slides.map((s, idx) => (
                <button
                  key={s.tab}
                  onClick={() => setI(idx)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    idx === i
                      ? "bg-white text-black shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {s.tab}
                </button>
              ))}
            </div>
            <p key={cur.desc} className="max-w-2xl text-center text-neutral-400 animate-fade-in">
              {cur.desc}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Deliverables() {
  const items = [
    { label: "Point Clouds", img: pointcloudCastle },
    { label: "2D Floor Plans", img: meshBuilding },
    { label: "3D Mesh Models", img: meshBuilding },
    { label: "3D Gaussian Splatting", img: pointcloudCastle },
    { label: "Georeferenced Panoramas", img: meshBuilding },
  ];
  const [i, setI] = useState(0);
  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1300px] px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              One Scan, Multiple Deliverables
            </h2>
            <p className="mt-4 text-neutral-400">
              Maximize efficiency with multi-format deliverables from a single scan.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 grid gap-8 md:grid-cols-[1fr_260px]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10">
              {items.map((it, idx) => (
                <img
                  key={it.label}
                  src={it.img.src}
                  alt={it.label}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    idx === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <ul className="relative flex flex-col justify-center gap-8 border-l border-white/10 pl-6">
              {items.map((it, idx) => (
                <li key={it.label}>
                  <button
                    onClick={() => setI(idx)}
                    className={`relative text-left text-lg transition-all duration-300 ${
                      idx === i
                        ? "font-semibold text-white"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {idx === i && (
                      <span className="absolute -left-[26px] top-1 h-6 w-[2px] rounded bg-white" />
                    )}
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EcosystemCard({
  eyebrow,
  title,
  desc,
  img,
  reverse,
  cta,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
  cta?: "store" | "download";
}) {
  return (
    <Reveal>
      <div
        className={`grid items-center gap-10 py-16 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.82_0.15_220)]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-neutral-400">{desc}</p>
          {cta === "download" ? (
            <button className="mt-8 rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
              Download the Latest Version
            </button>
          ) : (
            <div className="mt-8 flex gap-3">
              <div className="flex h-14 w-44 items-center justify-center gap-2 rounded-md bg-white text-black transition-transform hover:scale-105 cursor-pointer">
                <span className="text-2xl">▶</span>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </div>
              <div className="flex h-14 w-44 items-center justify-center gap-2 rounded-md bg-white text-black transition-transform hover:scale-105 cursor-pointer">
                <span className="text-2xl"></span>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="mx-auto max-h-[440px] w-auto transition-transform duration-700 hover:-translate-y-2"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Ecosystem() {
  return (
    <section className="bg-transparent py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Designed to Work Together
            </h2>
            <p className="mt-4 text-neutral-400">
              Capture, process, and deliver your 3D data within one connected JAS geomatics  workflow.
            </p>
          </div>
        </Reveal>
        <EcosystemCard
          eyebrow="Data Collection"
          title="JAS geomatics  Scan"
          desc="App based real time control and scan file management."
          img={appPhone.src}
          reverse
        />
        <EcosystemCard
          eyebrow="Data Processing"
          title="JAS geomatics  Model"
          desc="Generate reports for construction, forestry, mining, and more."
          img={laptopSoftware.src}
          cta="download"
        />
        <EcosystemCard
          eyebrow="Generate Deliverables"
          title="JAS geomatics  Model for Tablets"
          desc="On site post processing and preview with iPad and Android support."
          img={tabletApp.src}
          reverse
        />
        <EcosystemCard
          eyebrow="Cloud Collaboration"
          title="JAS geomatics  Model Web"
          desc="Share data online and collaborate with your team using different tools."
          img={laptopSoftware.src}
        />
      </div>
    </section>
  );
}

export function SpecsHero() {
  return (
    <section id="specs" className="relative bg-transparent py-24">
      <Reveal>
        <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
          JAS geomatics  P2 Specifications
        </h2>
      </Reveal>
      <div className="mt-16 flex flex-wrap items-end justify-center gap-4 px-6">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 150}>
            <img
              src={scannerHero.src}
              alt="Scanner"
              className="h-[380px] w-auto object-contain transition-transform duration-700 hover:-translate-y-3 hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SpecAccordion() {
  const sections: { title: string; rows: [string, string][] }[] = [
    {
      title: "LiDAR",
      rows: [
        ["Speed", "200,000 pts/s"],
        ["Field of View", "360° × 59°"],
        ["Scanning Range", "40 m @ 10% reflectivity  /  70 m @ 80% reflectivity"],
        ["Laser Wavelength", "905 nm"],
        ["Safety Level", "Eye-safety Class I"],
        ["Point Cloud Processing", "Real-time processing"],
        ["Point Cloud Display", "Real-time point cloud preview"],
        ["Continue Scanning", "✓"],
        ["HyperDense+", "✓"],
      ],
    },
    {
      title: "Accuracy",
      rows: [
        ["Real-Time Point Cloud Accuracy", "Relative: 2 cm  /  Absolute: 5 cm"],
        ["Post-Processed Point Cloud Accuracy", "Relative: 1 cm  /  Absolute: 3 cm"],
      ],
    },
    {
      title: "Build-in Camera",
      rows: [
        ["FOV (Front Camera)", "70°"],
        ["FOV (Side Camera)", "280° × 149°"],
        ["Resolution (Front Camera)", "2 MP"],
        ["Resolution (Side Camera)", "2 × 12 MP"],
        ["Visual SLAM", "✓"],
        ["Image Export", "✓"],
        ["Image Format", ".jpg"],
      ],
    },
    {
      title: "System Parameters",
      rows: [
        ["Dimensions", "110 × 106 × 280 mm"],
        ["Weight", "700 g (bare) · 1200 g (+battery & GNSS) · 1500 g (+external camera)"],
        ["Storage", "512 GB SSD (1 TB expandable)"],
        ["Operating Temperature", "-20 °C – 50 °C"],
        ["Storage Temperature", "-40 °C – 60 °C"],
        ["Ingress Protection", "IP 54"],
        ["Data Export", "Wireless Network, USB Type-C, USB Flash Disk"],
      ],
    },
    {
      title: "Electrical Specifications",
      rows: [
        ["Battery Life", "4 H (excl. external camera) · 3 H (incl. external camera)"],
        ["Power Supply", "DC Handheld Battery"],
        ["Power Consumption", "15 W (excl. camera) · 21 W (incl. camera)"],
        ["Charger", "67 W Fast Charging"],
        ["Simultaneous Dual-Battery Charging", "✓"],
      ],
    },
    {
      title: "GNSS",
      rows: [
        ["Satellite Constellation", "BDS: B1I / B2I / B3I / B1C / B2a / B2b · GPS: L1 C/A / L1C / L2P(Y) / L2C / L5 · GLONASS: G1 / G2 / G3"],
        ["PPK", "✓"],
      ],
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-transparent pb-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {sections.map((s, i) => {
          const isOpen = open === i;
          return (
            <div key={s.title} className="border-b border-white/15">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-2xl font-bold italic text-white transition-colors group-hover:text-[oklch(0.82_0.15_220)] md:text-3xl">
                  {s.title}
                </span>
                <span
                  className={`text-3xl text-white transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-500 ${
                  isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <div className="divide-y divide-white/10">
                    {s.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex flex-col gap-2 py-4 text-neutral-300 md:flex-row md:items-start md:justify-between"
                      >
                        <span className="font-medium text-white">{k}</span>
                        <span className="md:text-right md:max-w-[60%] text-[oklch(0.85_0.03_220)]">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-transparent py-10 text-center text-sm text-neutral-500">
//       © 2026 JAS geomatics  India. All rights reserved.
//     </footer>
//   );
// }
export default function Index() {
  return (
    <div className="min-h-screen bg-[oklch(0.10_0.025_240)] text-white antialiased">
      {/* <Nav /> */}
      <main>
        <HeroIntro />
        <VideoSlamSection />
        <HyperDense />
        <CameraCarousel />
        <Deliverables />
        <Ecosystem />
        <SpecsHero />
        <SpecAccordion />
      </main>
      {/* <Footer /> */}
    </div>
  );
}