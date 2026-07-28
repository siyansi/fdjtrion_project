// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Code2, Cpu, Layers, Zap, ShieldCheck, GitBranch, Terminal, ArrowRight } from "lucide-react";
// // import { Nav } from "@/components/site/Nav";
// // import { Footer } from "@/components/site/Footer";
// import heroSlam from "@/assets/hero-slam-sdk.jpg";
// import featPointcloud from "@/assets/feat-pointcloud.jpg";

// export const Route = createFileRoute()({
//   head: () => ({
//     meta: [
//       { title: "SLAM SDK — FJD Trion India | Build with our reality-capture engine" },
//       { name: "description", content: "Embed FJD Trion's production SLAM engine into robots, drones and mobile mapping platforms. C++/Python SDK with real-time colorised point clouds." },
//       { property: "og:title", content: "SLAM SDK — FJD Trion India" },
//       { property: "og:description", content: "Production-grade SLAM engine for robots, drones and mobile mapping." },
//     ],
//   }),
//   component: SlamSdk,
// });

// const capabilities = [
//   { icon: Zap, title: "Real-Time SLAM", desc: "Sub-10 ms per-frame LiDAR + IMU + visual fusion. Runs on Jetson-class edge GPUs and x86 rovers alike." },
//   { icon: Layers, title: "Colorised Output", desc: "RGB-fused point clouds and dense mesh reconstruction — the same engine that powers Trion P-series scanners." },
//   { icon: Cpu, title: "Sensor Agnostic", desc: "Plug in Velodyne, Ouster, Livox, RealSense, ZED or FJD sensor stacks. Bring your calibration; we do the fusion." },
//   { icon: ShieldCheck, title: "Loop Closure", desc: "Global optimisation with tactical-grade drift bounds — validated across 500 m indoor and 5 km outdoor loops." },
//   { icon: GitBranch, title: "ROS 2 Native", desc: "First-class ROS 2 nodes, launch files and rosbag replay for existing robotics stacks." },
//   { icon: Terminal, title: "C++ / Python / Rust", desc: "Idiomatic bindings across languages, with a stable ABI and semantic versioning." },
// ];

// const codeSample = `// C++ — 20 lines to your first cloud
// #include <trion/slam.hpp>
// using namespace trion;

// int main() {
//   Slam slam(Config::from_yaml("config.yaml"));
//   slam.on_frame([](const Frame& f) {
//     auto cloud = f.point_cloud();      // rgb + xyz + intensity
//     auto pose  = f.pose();             // global 6-DoF
//     export_e57(cloud, "out.e57");
//   });
//   return slam.run();  // consumes LiDAR + IMU + camera streams
// }`;

// const platforms = [
//   { k: "Linux", v: "Ubuntu 20.04 / 22.04 · aarch64 · x86_64" },
//   { k: "Robotics", v: "ROS 2 Humble / Iron" },
//   { k: "Edge GPU", v: "NVIDIA Jetson Orin / AGX / Xavier" },
//   { k: "Languages", v: "C++17 · Python 3.10+ · Rust 1.75+" },
//   { k: "Sensors", v: "Livox, Velodyne, Ouster, RealSense, ZED, FJD" },
//   { k: "License", v: "Commercial · India-hosted registry" },
// ];

// function SlamSdk() {
//   return (
//     <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-full bg-brand/10 blur-[140px]" />
//         <div className="absolute inset-0 bg-grid opacity-30" />
//       </div>
//       <Nav ></Nav>/

//       <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
//         <img src={heroSlam} alt="" className="absolute inset-0 h-full w-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
//         <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
//           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
//             <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-brand">
//               <Code2 className="h-3 w-3" /> For Developers
//             </div>
//             <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05] drop-shadow-2xl">
//               <span className="text-gradient">SLAM SDK</span>
//             </h1>
//             <p className="mt-6 text-xl md:text-2xl text-foreground/90 font-light max-w-3xl mx-auto">
//               The reality-capture engine behind FJD Trion — now embeddable in your robots, drones and mobile mapping platforms.
//             </p>
//             <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:scale-[1.03] transition">
//                 Request Access <ArrowRight className="h-4 w-4" />
//               </Link>
//               <a href="#docs" className="inline-flex items-center gap-2 rounded-full glass-strong border border-white/20 px-7 py-3.5 text-sm font-medium hover:bg-white/15 transition">
//                 Read the Docs
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="relative py-32 px-6">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="text-xs uppercase tracking-[0.3em] text-brand">Capabilities</div>
//             <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Production SLAM, out of the box</h2>
//             <p className="mt-5 text-muted-foreground">Battle-tested across 2 million+ scans on Trion hardware. Now shipping as an SDK.</p>
//           </div>
//           <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {capabilities.map((c, i) => (
//               <motion.div key={c.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-80px" }}
//                 transition={{ duration: 0.5, delay: i * 0.05 }}
//                 whileHover={{ y: -6 }}
//                 className="group relative overflow-hidden rounded-3xl glass p-7 hover:glow-brand transition"
//               >
//                 <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand/15 blur-3xl group-hover:bg-brand/30 transition" />
//                 <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] text-background">
//                   <c.icon className="h-6 w-6" />
//                 </div>
//                 <div className="relative mt-6 font-display text-xl font-semibold">{c.title}</div>
//                 <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="docs" className="relative py-32 px-6">
//         <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="text-xs uppercase tracking-[0.3em] text-brand">Getting started</div>
//             <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">From zero to first cloud in an afternoon.</h2>
//             <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
//               Install with a single command, point the SDK at your sensor stream, and receive georeferenced colorised point clouds in real time. Ship the SDK inside your robot; ship the output to your customer.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] transition">Talk to Engineering</Link>
//               <Link to="/support-center" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/15 transition">Support Center</Link>
//             </div>
//           </div>
//           <motion.pre
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="glass-strong rounded-3xl p-6 border border-white/10 overflow-x-auto text-xs leading-relaxed font-mono text-foreground/90"
//           ><code>{codeSample}</code></motion.pre>
//         </div>
//       </section>

//       <section className="relative py-24 px-6">
//         <div className="mx-auto max-w-6xl relative overflow-hidden rounded-3xl glass-strong border border-white/10">
//           <img src={featPointcloud} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
//           <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
//           <div className="relative p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <div className="text-xs uppercase tracking-[0.3em] text-brand">Platform Matrix</div>
//               <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">Runs where your robots run.</h2>
//               <p className="mt-4 text-muted-foreground">First-class support for edge Linux, ROS 2 and Jetson. Bring-your-own sensor calibration and coordinate systems.</p>
//             </div>
//             <div className="grid grid-cols-1 gap-2">
//               {platforms.map((p) => (
//                 <div key={p.k} className="glass rounded-xl px-5 py-3 flex items-center justify-between">
//                   <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.k}</span>
//                   <span className="text-sm font-medium text-right">{p.v}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative py-32 px-6">
//         <div className="mx-auto max-w-5xl relative overflow-hidden rounded-3xl glass-strong p-12 md:p-16 text-center border border-white/10">
//           <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent" />
//           <div className="relative">
//             <div className="text-xs uppercase tracking-[0.3em] text-brand">Ready to build?</div>
//             <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">Get an SDK license and NDA in 48 hours.</h2>
//             <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Tell us about your platform and use-case — our engineering team will scope a pilot and issue evaluation keys.</p>
//             <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:scale-[1.03] transition">
//                 Request SDK Access <ArrowRight className="h-4 w-4" />
//               </Link>
//               <Link to="/products" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/15 transition">
//                 See Trion hardware
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }