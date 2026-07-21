import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import golfHero from "@/assets/golf-hero.jpg";
import golfSurveyor from "@/assets/golf-surveyor.jpg";
import golfPointcloud from "@/assets/golf-pointcloud.jpg";
import golfPointcloudTop from "@/assets/golf-pointcloud-top.jpg";
import golfDashboard from "@/assets/golf-dashboard.jpg";
import mowerRcm from "@/assets/mower-rcm01.jpg";
import mowerTitan from "@/assets/mower-titan.jpg";
import gnssV4e from "@/assets/gnss-v4e.jpg";
import scannerHero from "@/assets/scanner-hero.jpg";
import Hero from "../homepage";
import { Footer } from "react-day-picker";

export const Route = createFileRoute()({
  component: Index,
});

const HERO_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, shown };
}

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "opacity-100 blur-0" : "opacity-0 blur-[6px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function  Heros() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        src={HERO_VIDEO}
        poster={golfHero.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={golfHero.src}
        alt="Golf course aerial"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <Reveal>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Golf<span className="text-[color:var(--brand)]">Mind</span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-xl font-medium text-white md:text-3xl">
            Know Your Course. Plan with Real Data.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="group relative overflow-hidden rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)]">
              <span className="relative z-10">Download Brochure</span>
            </button>
            <button className="rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:border-white hover:bg-white/10">
              ▶ Watch Video
            </button>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  const cards = [
    {
      t: "Repeated Site Checks",
      d: "Work areas, boundaries, sprinklers, and missed spots still need to be checked manually.",
    },
    {
      t: "Scattered Records",
      d: "Asset data and planning notes are often spread across maps, files, and staff memory.",
    },
    {
      t: "Slow Measurements",
      d: "Area and terrain estimates can delay planning and lead to repeated work or material waste.",
    },
  ];
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1300px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
            Traditional Course Management is Holding Teams Back
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-3xl">
              <img
                src={golfSurveyor.src}
                alt="Superintendent"
                loading="lazy"
                className="h-full min-h-[420px] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-5">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 120}>
                <div className="group cursor-pointer rounded-3xl bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
                  <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-[color:var(--brand)]">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const stats = [
    { icon: "▤", n: "50%", l: "Fewer manual course checks" },
    { icon: "◉", n: "30%", l: "Less coordination time" },
    { icon: "☰", n: "24/7", l: "Searchable work records" },
    { icon: "⇘", n: "60%", l: "Lower repeat surveying cost" },
  ];
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1300px] px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Why <span className="text-[color:var(--brand)]">GolfMind</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-neutral-400">
              GolfMind turns your course scans into searchable, measurable, and
              practical course data for golf course maintenance and planning.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 120}>
              <div className="group text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand)]/10 text-2xl text-[color:var(--brand)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[color:var(--brand)]/20 group-hover:shadow-[0_10px_40px_rgba(34,197,94,0.35)]">
                  {s.icon}
                </div>
                <div className="mt-6 text-4xl font-bold text-white">{s.n}</div>
                <p className="mt-2 text-sm text-neutral-400">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      tab: "01 Map the Course",
      desc: "Capture 3D course data with S2 Max and mark key areas with V4e Pro.",
      media: golfSurveyor,
    },
    {
      tab: "02 Visualize Course Data",
      desc: "Review point clouds and 3D course maps inside the GolfMind workspace.",
      media: golfPointcloud,
    },
    {
      tab: "03 Export Reports",
      desc: "Share searchable maps, mowing zones, and asset reports with your team.",
      media: golfDashboard,
    },
  ];
  const [i, setI] = useState(0);
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
            How it Works
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mt-14">
            <button
              onClick={() => setI((v) => (v - 1 + steps.length) % steps.length)}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
            >
              ‹
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % steps.length)}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20"
            >
              ›
            </button>
            <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-2">
              {steps.map((s, idx) => (
                <div
                  key={s.tab}
                  className={`relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10 transition-all duration-700 ${
                    idx === i ? "scale-100 opacity-100" : "scale-95 opacity-40"
                  }`}
                >
                  <img
                    src={s.media.src}
                    alt={s.tab}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
              {steps.map((s, idx) => (
                <button
                  key={s.tab}
                  onClick={() => setI(idx)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    idx === i
                      ? "bg-white text-black shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {s.tab}
                </button>
              ))}
            </div>
            <p
              key={steps[i].desc}
              className="max-w-2xl text-center text-neutral-400 animate-fade-in"
            >
              {steps[i].desc}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AssetRow({
  eyebrow,
  title,
  desc,
  tags,
  img,
  reverse,
}: {
  eyebrow?: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
  reverse?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`grid items-center gap-10 py-16 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--brand)]">
              {eyebrow}
            </p>
          )}
          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h3>
          <button className="mt-6 rounded-full border border-white/20 px-6 py-2 text-sm text-white transition-all hover:border-white hover:bg-white hover:text-black">
            View Sample Report
          </button>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-400">{desc}</p>
          <p className="mt-5 text-xs italic text-[color:var(--brand)]">Applications:</p>
          <p className="mt-1 text-xs text-[color:var(--brand)]/80">
            {tags.map((t) => `#${t}`).join(" ")}
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </Reveal>
  );
}

export function Manage() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1300px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
            What GolfMind Helps You Manage
          </h2>
        </Reveal>
        <AssetRow
          eyebrow="Turf & Greens"
          title="Tree Assets"
          desc="Track tree locations, counts, density, and maintenance notes in one searchable record."
          tags={["Tree Inventory", "Pruning Plans", "Safety Review", "Landscape Planning"]}
          img={golfPointcloud.src}
        />
        <AssetRow
          eyebrow="Infrastructure"
          title="Irrigation & Field Asset Map"
          desc="Map sprinklers, control boxes, valves, drainage points, and field assets as searchable layers on your 3D course map — so teams know where to inspect, repair, update, or dig before work begins."
          tags={["Asset Inspection", "Repair Work", "System Updates", "Field Checks"]}
          img={golfPointcloudTop.src}
          reverse
        />
      </div>
    </section>
  );
}

export function TextOverlay() {
  const bgStyle = {
    backgroundImage: `url(${golfHero.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    WebkitBackgroundClip: "text",
  } as const;
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="relative mx-auto max-w-[1400px] px-6">
        <Reveal>
          <h2 className="text-center text-[14vw] font-black leading-[0.9] tracking-tighter md:text-[10vw]">
            <span className="bg-clip-text text-transparent" style={bgStyle}>
              From Course Data
            </span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mx-auto mt-8 aspect-[16/8] max-w-[1000px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={golfPointcloudTop.src}
              alt="Course"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-8 text-center text-[14vw] font-black leading-[0.9] tracking-tighter md:text-[10vw]">
            <span className="bg-clip-text text-transparent" style={bgStyle}>
              to Your Wins
            </span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

export function MowingPlan() {
  const feats = [
    { t: "Easier Team Alignment", d: "Share plans, zones, and work notes clearly." },
    { t: "Work Review Records", d: "Review completed work, missed zones, and follow-ups." },
  ];
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
            Plan Mowing with Clear Course Data
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mt-14 overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src={golfDashboard.src}
              alt="Dashboard"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-8 grid gap-4 md:inset-x-auto md:right-8 md:max-w-md md:grid-cols-2">
              {feats.map((f, i) => (
                <Reveal key={f.t} delay={i * 120}>
                  <div className="rounded-2xl bg-white p-5 shadow-xl transition-transform hover:-translate-y-1">
                    <h4 className="text-base font-bold text-[color:var(--brand)]">{f.t}</h4>
                    <p className="mt-2 text-sm text-neutral-700">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Solutions() {
  const products = [
    { name: "S2 Max", tag: "Smaller Size, Larger Capability.", img: scannerHero },
    { name: "V4e Pro", tag: "Laser-precise GNSS, made simpler.", img: gnssV4e },
    { name: "RCM01", tag: "Professional Fairway Mowing", img: mowerRcm },
    { name: "Titan", tag: "Best-Value Fairway Mowing", img: mowerTitan },
    { name: "RM21", tag: "Primary Rough Mowing", img: mowerRcm },
  ];
  const [start, setStart] = useState(0);
  const visible = 4;
  const max = Math.max(0, products.length - visible);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
            Connected Course Solutions
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative mt-14">
            <button
              onClick={() => setStart((v) => Math.max(0, v - 1))}
              className="absolute -left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 disabled:opacity-30"
              disabled={start === 0}
            >
              ‹
            </button>
            <button
              onClick={() => setStart((v) => Math.min(max, v + 1))}
              className="absolute -right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 disabled:opacity-30"
              disabled={start >= max}
            >
              ›
            </button>
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(calc(-${start} * (25% + 18px)))` }}
              >
                {products.map((p) => (
                  <div
                    key={p.name}
                    className="group w-full shrink-0 rounded-3xl bg-neutral-950 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(34,197,94,0.25)] hover:ring-[color:var(--brand)]/50 sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                  >
                    <div className="aspect-square overflow-hidden rounded-t-3xl bg-black">
                      <img
                        src={p.img.src}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-lg font-bold text-white">{p.name}</h4>
                      <p className="mt-1 text-xs text-neutral-400">{p.tag}</p>
                      <div className="mt-4 flex flex-col gap-2">
                        <button className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white transition-all hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">
                          Learn More
                        </button>
                        <button className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-white transition-all hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">
                          Download Brochure
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Unlock() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      <img
        src={golfHero.src}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Unlock Your Course Data
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-300">
            Subscribe for updates, sample reports, and news from the GolfMind team.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-xl gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/20 backdrop-blur-md"
          >
            <input
              type="email"
              placeholder="johnsmith@example.com"
              className="flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button className="rounded-full bg-[color:var(--brand)] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-white/60">
            I agree to the Privacy Policy and to receive news and email updates.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// export function Footer() {
//   const cols = [
//     {
//       h: "Products",
//       links: [
//         "FJD PaintMaster Pro",
//         "FJD PaintMaster Mini",
//         "FJD PaintMaster Parking",
//         "FJD Rough Ranger",
//         "FJD RM21",
//         "FJD RCM01",
//         "FJD FRX",
//         "FJD Vela",
//         "FJD FR4000",
//         "FJD FV2000",
//         "FJD Z42P",
//       ],
//     },
//     { h: "Solutions", links: ["Golf Course Solution", "Sports Field Solution"] },
//     { h: "Contact Us", links: ["Contact Us"] },
//     { h: "About Us", links: ["About Us"] },
//     { h: "Resource", links: ["Blog"] },
//   ];
//   return (
//     <footer className="border-t border-white/10 bg-black py-16 text-white">
//       <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-5">
//         {cols.map((c) => (
//           <div key={c.h}>
//             <h5 className="text-sm font-bold">{c.h}</h5>
//             <ul className="mt-4 space-y-2 text-sm text-neutral-400">
//               {c.links.map((l) => (
//                 <li key={l}>
//                   <a
//                     href="#"
//                     className="transition-colors hover:text-[color:var(--brand)]"
//                   >
//                     {l}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="mx-auto mt-12 max-w-[1400px] px-6 text-xs text-neutral-500">
//         © 2026 GolfMind. All rights reserved.
//       </div>
//     </footer>
//   );
// }

export default function Index() {
   return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* <Nav /> */}
      <main>
        <Heros />
        <Problem />
        <Why />
        <HowItWorks />
        <Manage />
        <TextOverlay />
        <MowingPlan />
        <Solutions />
        <Unlock />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
