// import type { StaticImageData } from "next/image";
// import heroV4e from "@/assets/hero-v4e.jpg";
// import heroP2Vision from "@/assets/hero-p2vision.jpg";
// import heroP2 from "@/assets/hero-p2-pointcloud.jpg";
// import heroV4eRtk from "@/assets/hero-v4e-rtk.jpg";
// import featThermal from "@/assets/feat-thermal.jpg";
// import featPointcloud from "@/assets/feat-pointcloud.jpg";

// export type MediaSource = string | StaticImageData;

// export type FeatureBlock = {
//   eyebrow?: string;
//   title: string;
//   body: string;
//   image?: MediaSource;
//   reverse?: boolean;
// };

// export type SpecGroup = { group: string; rows: { k: string; v: string }[] };

// export type ProductDetail = {
//   hero: {
//     image: MediaSource;
//     tagline: string;
//     headline: string;
//     ctas?: { label: string; to?: string; primary?: boolean }[];
//   };
//   intro?: { title: string; body: string };
//   pitch?: { newTo: string; experienced: string; media?: MediaSource };
//   features: FeatureBlock[];
//   showcase?: { title: string; body: string; media?: MediaSource };
//   specs?: SpecGroup[];
//   inTheBox?: string[];
// };

// export const productDetails: Record<string, ProductDetail> = {
//   "v4e-lidar": {
//     hero: {
//       image: heroV4e,
//       headline: "FJD Trion V4e LiDAR",
//       tagline: "The easy way into 3D scanning.",
//       ctas: [
//         { label: "Book a Free Demo", to: "/contact", primary: true },
//         { label: "Download Brochure" },
//       ],
//     },
//     intro: {
//       title: "Built for Teams at Every Stage",
//       body: "New to 3D scanning and ready to bring clarity into your projects? FJD Trion V4e LiDAR is a straightforward entry into professional reality capture. Already experienced in the field? V4e LiDAR delivers reliable performance that helps established teams work faster, reduce overhead, and scale output without adding complexity.",
//     },
//     features: [
//       {
//         eyebrow: "Real-Time SLAM",
//         title: "Walk. Capture. Done.",
//         body: "One-button capture with live SLAM previews on your phone. Every step you walk is stitched into a georeferenced point cloud in real time — no post-processing wait.",
//         image: featPointcloud,
//       },
//       {
//         eyebrow: "Colorised Point Clouds",
//         title: "True-color detail out of the box",
//         body: "Dual RGB cameras fuse full-color context with every LiDAR return, so your as-built delivers photorealistic clarity — walls, signage, materials — not just geometry.",
//         image: heroP2,
//         reverse: true,
//       },
//       {
//         eyebrow: "One-Day Delivery",
//         title: "From site to deliverable, same day",
//         body: "Auto-registration and cloud-assisted processing turn a 15-minute walk into an E57, DWG or RVT-ready model before you leave the site.",
//         image: heroV4e,
//       },
//     ],
//     showcase: {
//       title: "Your Go-To Choice for Serious Results",
//       body: "The world demands workflows lighter than ever, but still expects the results to be great, as always. FJD Trion V4e LiDAR is built to meet both. More than a scanning device, it is a complete solution designed to turn site reality into usable results with confidence and speed.",
//       media: featPointcloud,
//     },
//     specs: [
//       { group: "Performance", rows: [
//         { k: "Range", v: "120 m" },
//         { k: "Point Rate", v: "320,000 pts/s" },
//         { k: "Accuracy", v: "±3 cm" },
//         { k: "FOV", v: "360° × 270°" },
//       ]},
//       { group: "Physical", rows: [
//         { k: "Weight", v: "850 g" },
//         { k: "Battery", v: "3 hrs hot-swap" },
//         { k: "IP Rating", v: "IP54" },
//         { k: "Storage", v: "256 GB SSD" },
//       ]},
//     ],
//     inTheBox: ["V4e LiDAR Scanner", "Hot-swap battery ×2", "Charger", "Field case", "USB-C data cable", "Quick-start guide"],
//   },

//   "p2-vision-plus": {
//     hero: {
//       image: heroP2Vision,
//       headline: "FJD Trion P2 Vision+",
//       tagline: "Act faster with 3D thermal insight.",
//       ctas: [
//         { label: "Book a Free Demo", to: "/contact", primary: true },
//         { label: "Download Brochure" },
//       ],
//     },
//     intro: {
//       title: "From hidden risks to clear 3D locations",
//       body: "By the time damage becomes visible, repair costs have already started to rise. Infrared detection uncovers hidden risks earlier, and 3D spatial context makes every issue easier to locate, document, and act on.",
//     },
//     features: [
//       {
//         eyebrow: "Water Leakage",
//         title: "Spot leaks before they become damage",
//         body: "Moisture can hide behind surfaces that appear dry, leading to wall damage and mold growth. P2 Vision+ places each thermal anomaly on a 3D map so teams can find the problem quickly and accurately — without lengthy site notes.",
//         image: featThermal,
//       },
//       {
//         eyebrow: "Electrical Faults",
//         title: "Overheating, mapped to a location",
//         body: "Hot connections, overloaded circuits and failing insulation reveal themselves in the thermal band. P2 Vision+ tags every hotspot to its exact position in the digital twin.",
//         image: heroP2Vision,
//         reverse: true,
//       },
//       {
//         eyebrow: "Building Envelope",
//         title: "Insulation gaps you can prove",
//         body: "Walk the façade once and receive a colour-coded heat-loss map — perfect for retrofit planning, energy audits and dispute resolution.",
//         image: featPointcloud,
//       },
//     ],
//     showcase: {
//       title: "3D Thermal Insight, on demand",
//       body: "P2 Vision+ fuses a high-resolution thermal core with a 32-line LiDAR and true-colour cameras. Every capture is a live, georeferenced, thermally-tagged point cloud — ready for insurance reports, facility management and predictive maintenance.",
//       media: featThermal,
//     },
//     specs: [
//       { group: "Thermal", rows: [
//         { k: "Resolution", v: "640 × 512" },
//         { k: "NETD", v: "< 40 mK" },
//         { k: "Spectral Range", v: "8–14 μm" },
//       ]},
//       { group: "LiDAR", rows: [
//         { k: "Range", v: "320 m" },
//         { k: "Accuracy", v: "±2 cm" },
//         { k: "Point Rate", v: "640,000 pts/s" },
//       ]},
//       { group: "Physical", rows: [
//         { k: "Weight", v: "1.2 kg" },
//         { k: "Battery", v: "4 hrs" },
//         { k: "IP Rating", v: "IP54" },
//       ]},
//     ],
//     inTheBox: ["P2 Vision+ Scanner", "Thermal calibration cap", "2× Battery", "Charger", "Rugged case", "Neck strap", "Quick-start guide"],
//   },

//   "v4e-pro": {
//     hero: {
//       image: heroV4eRtk,
//       headline: "FJD Trion V4e Pro",
//       tagline: "Laser precision made easy.",
//       ctas: [
//         { label: "Book a Free Demo", to: "/contact", primary: true },
//         { label: "Download Brochure" },
//       ],
//     },
//     intro: {
//       title: "The mini RTK receiver, redefined",
//       body: "1408-channel multi-band tracking, laser plummet and IMU tilt survey in a receiver that fits your palm. Set up faster, measure hard-to-reach corners, and cut stakeout time without sacrificing precision.",
//     },
//     features: [
//       {
//         eyebrow: "1408 Channels",
//         title: "Every constellation, every band",
//         body: "GPS, GLONASS, Galileo, BeiDou, QZSS and IRNSS — plus L1/L2/L5 tri-frequency tracking — for rock-solid fixes even under canopy and in urban canyons.",
//         image: heroV4eRtk,
//       },
//       {
//         eyebrow: "IMU Tilt Survey",
//         title: "Tilt up to 60°, keep your accuracy",
//         body: "Measure into corners, under eaves and against walls without levelling the pole. The industrial-grade IMU compensates continuously to cm-grade precision.",
//         image: heroV4e,
//         reverse: true,
//       },
//       {
//         eyebrow: "Laser Plummet",
//         title: "Measure what a pole can't reach",
//         body: "A built-in laser plummet extends the receiver's reach to hazardous or obstructed points — safely, accurately, and without additional targets.",
//         image: heroP2,
//       },
//     ],
//     showcase: {
//       title: "Field work made lighter",
//       body: "Pair V4e Pro with Trion Survey on any Android device and get CORS-ready RTK, one-tap stakeout and cloud sync — from open sites to dense city blocks.",
//       media: heroV4eRtk,
//     },
//     specs: [
//       { group: "GNSS", rows: [
//         { k: "Channels", v: "1408" },
//         { k: "Bands", v: "L1 / L2 / L5" },
//         { k: "RTK Accuracy", v: "H: 8 mm + 1 ppm · V: 15 mm + 1 ppm" },
//       ]},
//       { group: "IMU & Laser", rows: [
//         { k: "Tilt Range", v: "0–60°" },
//         { k: "Laser Plummet", v: "Yes, class-2" },
//         { k: "Calibration", v: "Instant, no shake" },
//       ]},
//       { group: "Physical", rows: [
//         { k: "Weight", v: "620 g" },
//         { k: "Battery", v: "12 hrs" },
//         { k: "IP Rating", v: "IP68" },
//       ]},
//     ],
//     inTheBox: ["V4e Pro Receiver", "Carbon-fibre pole", "Controller mount", "2× Battery", "Charging dock", "Rugged case"],
//   },
// };

// export function getProductDetail(slug: string): ProductDetail | undefined {
//   return productDetails[slug];
// }


"use client";

import heroV4e from "@/assets/hero-v4e.jpg";
import heroP2Vision from "@/assets/hero-p2vision.jpg";
import heroP2 from "@/assets/hero-p2-pointcloud.jpg";
import heroV4eRtk from "@/assets/hero-v4e-rtk.jpg";
import featThermal from "@/assets/feat-thermal.jpg";
import featPointcloud from "@/assets/feat-pointcloud.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import indBim from "@/assets/ind-bim.jpg";
import indCad from "@/assets/ind-cad.jpg";
import indSubstation from "@/assets/ind-substation.jpg";
import indTraffic from "@/assets/ind-traffic.jpg";
import indForest from "@/assets/ind-forest.jpg";
import indDairy from "@/assets/ind-dairy.jpg";
import indCleaning from "@/assets/ind-cleaning.jpg";
import indTurf from "@/assets/ind-turf.jpg";
import { StaticImageData } from "next/dist/shared/lib/image-external";

export type MediaSource = string | StaticImageData;

export type FeatureBlock = {
  eyebrow?: string;
  title: string;
  body: string;
  image?: MediaSource;
  reverse?: boolean;
};

export type SpecGroup = { group: string; rows: { k: string; v: string }[] };

export type ProductDetail = {
  hero: {
    image: MediaSource;
    tagline: string;
    headline: string;
    ctas?: { label: string; to?: string; primary?: boolean }[];
  };
  intro?: { title: string; body: string };
  pitch?: { newTo: string; experienced: string; media?: MediaSource };
  features: FeatureBlock[];
  showcase?: { title: string; body: string; media?: MediaSource };
  specs?: SpecGroup[];
  inTheBox?: string[];
};

export const productDetails: Record<string, ProductDetail> = {
  "v4e-lidar": {
    hero: {
      image: heroV4e,
      headline: "FJD Trion V4e LiDAR",
      tagline: "The easy way into 3D scanning.",
      ctas: [
        { label: "Book a Free Demo", to: "/contact", primary: true },
        { label: "Download Brochure" },
      ],
    },
    intro: {
      title: "Built for Teams at Every Stage",
      body: "New to 3D scanning and ready to bring clarity into your projects? FJD Trion V4e LiDAR is a straightforward entry into professional reality capture. Already experienced in the field? V4e LiDAR delivers reliable performance that helps established teams work faster, reduce overhead, and scale output without adding complexity.",
    },
    features: [
      {
        eyebrow: "Real-Time SLAM",
        title: "Walk. Capture. Done.",
        body: "One-button capture with live SLAM previews on your phone. Every step you walk is stitched into a georeferenced point cloud in real time — no post-processing wait.",
        image: featPointcloud,
      },
      {
        eyebrow: "Colorised Point Clouds",
        title: "True-color detail out of the box",
        body: "Dual RGB cameras fuse full-color context with every LiDAR return, so your as-built delivers photorealistic clarity — walls, signage, materials — not just geometry.",
        image: heroP2,
        reverse: true,
      },
      {
        eyebrow: "One-Day Delivery",
        title: "From site to deliverable, same day",
        body: "Auto-registration and cloud-assisted processing turn a 15-minute walk into an E57, DWG or RVT-ready model before you leave the site.",
        image: heroV4e,
      },
    ],
    showcase: {
      title: "Your Go-To Choice for Serious Results",
      body: "The world demands workflows lighter than ever, but still expects the results to be great, as always. FJD Trion V4e LiDAR is built to meet both. More than a scanning device, it is a complete solution designed to turn site reality into usable results with confidence and speed.",
      media: featPointcloud,
    },
    specs: [
      { group: "Performance", rows: [
        { k: "Range", v: "120 m" },
        { k: "Point Rate", v: "320,000 pts/s" },
        { k: "Accuracy", v: "±3 cm" },
        { k: "FOV", v: "360° × 270°" },
      ]},
      { group: "Physical", rows: [
        { k: "Weight", v: "850 g" },
        { k: "Battery", v: "3 hrs hot-swap" },
        { k: "IP Rating", v: "IP54" },
        { k: "Storage", v: "256 GB SSD" },
      ]},
    ],
    inTheBox: ["V4e LiDAR Scanner", "Hot-swap battery ×2", "Charger", "Field case", "USB-C data cable", "Quick-start guide"],
  },

  "p2-vision-plus": {
    hero: {
      image: heroP2Vision,
      headline: "FJD Trion P2 Vision+",
      tagline: "Act faster with 3D thermal insight.",
      ctas: [
        { label: "Book a Free Demo", to: "/contact", primary: true },
        { label: "Download Brochure" },
      ],
    },
    intro: {
      title: "From hidden risks to clear 3D locations",
      body: "By the time damage becomes visible, repair costs have already started to rise. Infrared detection uncovers hidden risks earlier, and 3D spatial context makes every issue easier to locate, document, and act on.",
    },
    features: [
      {
        eyebrow: "Water Leakage",
        title: "Spot leaks before they become damage",
        body: "Moisture can hide behind surfaces that appear dry, leading to wall damage and mold growth. P2 Vision+ places each thermal anomaly on a 3D map so teams can find the problem quickly and accurately — without lengthy site notes.",
        image: featThermal,
      },
      {
        eyebrow: "Electrical Faults",
        title: "Overheating, mapped to a location",
        body: "Hot connections, overloaded circuits and failing insulation reveal themselves in the thermal band. P2 Vision+ tags every hotspot to its exact position in the digital twin.",
        image: heroP2Vision,
        reverse: true,
      },
      {
        eyebrow: "Building Envelope",
        title: "Insulation gaps you can prove",
        body: "Walk the façade once and receive a colour-coded heat-loss map — perfect for retrofit planning, energy audits and dispute resolution.",
        image: featPointcloud,
      },
    ],
    showcase: {
      title: "3D Thermal Insight, on demand",
      body: "P2 Vision+ fuses a high-resolution thermal core with a 32-line LiDAR and true-colour cameras. Every capture is a live, georeferenced, thermally-tagged point cloud — ready for insurance reports, facility management and predictive maintenance.",
      media: featThermal,
    },
    specs: [
      { group: "Thermal", rows: [
        { k: "Resolution", v: "640 × 512" },
        { k: "NETD", v: "< 40 mK" },
        { k: "Spectral Range", v: "8–14 μm" },
      ]},
      { group: "LiDAR", rows: [
        { k: "Range", v: "320 m" },
        { k: "Accuracy", v: "±2 cm" },
        { k: "Point Rate", v: "640,000 pts/s" },
      ]},
      { group: "Physical", rows: [
        { k: "Weight", v: "1.2 kg" },
        { k: "Battery", v: "4 hrs" },
        { k: "IP Rating", v: "IP54" },
      ]},
    ],
    inTheBox: ["P2 Vision+ Scanner", "Thermal calibration cap", "2× Battery", "Charger", "Rugged case", "Neck strap", "Quick-start guide"],
  },

  "v4e-pro": {
    hero: {
      image: heroV4eRtk,
      headline: "FJD Trion V4e Pro",
      tagline: "Laser precision made easy.",
      ctas: [
        { label: "Book a Free Demo", to: "/contact", primary: true },
        { label: "Download Brochure" },
      ],
    },
    intro: {
      title: "The mini RTK receiver, redefined",
      body: "1408-channel multi-band tracking, laser plummet and IMU tilt survey in a receiver that fits your palm. Set up faster, measure hard-to-reach corners, and cut stakeout time without sacrificing precision.",
    },
    features: [
      {
        eyebrow: "1408 Channels",
        title: "Every constellation, every band",
        body: "GPS, GLONASS, Galileo, BeiDou, QZSS and IRNSS — plus L1/L2/L5 tri-frequency tracking — for rock-solid fixes even under canopy and in urban canyons.",
        image: heroV4eRtk,
      },
      {
        eyebrow: "IMU Tilt Survey",
        title: "Tilt up to 60°, keep your accuracy",
        body: "Measure into corners, under eaves and against walls without levelling the pole. The industrial-grade IMU compensates continuously to cm-grade precision.",
        image: heroV4e,
        reverse: true,
      },
      {
        eyebrow: "Laser Plummet",
        title: "Measure what a pole can't reach",
        body: "A built-in laser plummet extends the receiver's reach to hazardous or obstructed points — safely, accurately, and without additional targets.",
        image: heroP2,
      },
    ],
    showcase: {
      title: "Field work made lighter",
      body: "Pair V4e Pro with Trion Survey on any Android device and get CORS-ready RTK, one-tap stakeout and cloud sync — from open sites to dense city blocks.",
      media: heroV4eRtk,
    },
    specs: [
      { group: "GNSS", rows: [
        { k: "Channels", v: "1408" },
        { k: "Bands", v: "L1 / L2 / L5" },
        { k: "RTK Accuracy", v: "H: 8 mm + 1 ppm · V: 15 mm + 1 ppm" },
      ]},
      { group: "IMU & Laser", rows: [
        { k: "Tilt Range", v: "0–60°" },
        { k: "Laser Plummet", v: "Yes, class-2" },
        { k: "Calibration", v: "Instant, no shake" },
      ]},
      { group: "Physical", rows: [
        { k: "Weight", v: "620 g" },
        { k: "Battery", v: "12 hrs" },
        { k: "IP Rating", v: "IP68" },
      ]},
    ],
    inTheBox: ["V4e Pro Receiver", "Carbon-fibre pole", "Controller mount", "2× Battery", "Charging dock", "Rugged case"],
  },

  "p2-lidar": {
    hero: {
      image: heroP2,
      headline: "FJD Trion P2 LiDAR Scanner",
      tagline: "Handheld precision, go-anywhere ready.",
      ctas: [
        { label: "Book a Free Demo", to: "/contact", primary: true },
        { label: "Download Brochure" },
      ],
    },
    intro: {
      title: "The everyday workhorse of reality capture",
      body: "P2 LiDAR is engineered for full-day fieldwork — 32-line LiDAR, dual RGB cameras and a rugged IP54 body deliver survey-grade point clouds indoors, outdoors and everywhere in between.",
    },
    features: [
      { eyebrow: "Real-Time SLAM", title: "Live preview on your phone", body: "Watch the point cloud grow live over Wi-Fi. Catch missed corridors before you leave the site.", image: featPointcloud },
      { eyebrow: "Colorised Output", title: "True-color point clouds", body: "Dual global-shutter cameras drape every LiDAR return with photo-real color for context-rich as-builts.", image: heroP2, reverse: true },
      { eyebrow: "All-Day Battery", title: "8 hours, hot-swappable", body: "Two hot-swap packs keep you scanning across every shift — no downtime, no plug-hunting.", image: heroV4e },
    ],
    showcase: { title: "One scanner, every jobsite", body: "From heritage interiors to industrial yards, P2 LiDAR captures the site once and delivers E57, LAS, RVT and DWG deliverables the same day.", media: featPointcloud },
    specs: [
      { group: "Performance", rows: [{k:"Range",v:"270 m"},{k:"Point Rate",v:"640,000 pts/s"},{k:"Accuracy",v:"±2.5 cm"},{k:"FOV",v:"360° × 270°"}] },
      { group: "Physical", rows: [{k:"Weight",v:"1.35 kg"},{k:"Battery",v:"8 hrs (2× hot-swap)"},{k:"IP Rating",v:"IP54"},{k:"Storage",v:"512 GB SSD"}] },
    ],
    inTheBox: ["P2 LiDAR Scanner","2× Hot-swap battery","Charger","Rugged case","Neck strap","USB-C cable","Quick-start guide"],
  },

  "p1-lidar": {
    hero: { image: heroP2, headline: "FJD Trion P1 LiDAR Scanner", tagline: "Reality capture made easy.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Your first professional scanner", body: "P1 is the entry point into the FJD Trion ecosystem — compact, one-button, and priced for teams starting their reality-capture journey." },
    features: [
      { eyebrow: "One-Button Capture", title: "Zero learning curve", body: "Press to start, walk, press to stop. On-device SLAM does the rest.", image: featPointcloud },
      { eyebrow: "Compact Form", title: "Under 1 kg", body: "A handheld body engineered for long walks, tight interiors and complex facades.", image: heroP2, reverse: true },
      { eyebrow: "Cloud Pipeline", title: "Auto-upload to Trion Model", body: "Finish a scan and it's queued for auto-registration in the cloud before you're back at the truck.", image: heroV4e },
    ],
    specs: [
      { group: "Performance", rows: [{k:"Range",v:"120 m"},{k:"Accuracy",v:"±3 cm"},{k:"Point Rate",v:"320,000 pts/s"}] },
      { group: "Physical", rows: [{k:"Weight",v:"1.0 kg"},{k:"Battery",v:"3 hrs"},{k:"IP Rating",v:"IP54"}] },
    ],
    inTheBox: ["P1 LiDAR Scanner","2× Battery","Charger","Field case","USB-C cable","Quick-start guide"],
  },

  "s2-series": {
    hero: { image: indSubstation, headline: "FJD Trion S2 Series LiDAR Scanner", tagline: "Scan the toughest, without compromise.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Long-range, survey-grade reality capture", body: "S2 pairs a 450 m LiDAR with dual-return and a survey-grade IMU for large industrial yards, infrastructure corridors and expansive outdoor sites." },
    features: [
      { eyebrow: "450 m Range", title: "See the whole yard", body: "Reach across substations, quarries and highway corridors in a single walkthrough.", image: indSubstation },
      { eyebrow: "Dual Return", title: "Punch through vegetation", body: "Second-return LiDAR sees ground beneath canopy, cable trays behind foliage and structure through mesh.", image: indForest, reverse: true },
      { eyebrow: "Survey-Grade IMU", title: "Confident trajectories", body: "Tactical-grade IMU keeps trajectory drift below 5 cm across 500 m loops.", image: featPointcloud },
    ],
    specs: [
      { group: "Performance", rows: [{k:"Range",v:"450 m"},{k:"Accuracy",v:"±2 cm"},{k:"Returns",v:"Dual"},{k:"Point Rate",v:"1.2 M pts/s"}] },
      { group: "Physical", rows: [{k:"Weight",v:"1.8 kg"},{k:"Battery",v:"6 hrs"},{k:"IP Rating",v:"IP65"}] },
    ],
    inTheBox: ["S2 Scanner","2× Battery","Charger","Backpack mount","Rugged case","Quick-start guide"],
  },

  "s1-3d": {
    hero: { image: featPointcloud, headline: "FJD Trion S1 3D LiDAR Scanner", tagline: "A new way to scan the world.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Compact 3D LiDAR, colorised output", body: "S1 packs professional LiDAR + RGB fusion into a compact chassis for interiors, façades and small-to-medium sites." },
    features: [
      { eyebrow: "RGB Fusion", title: "Photo-real point clouds", body: "Every point carries true color for context-rich deliverables.", image: heroP2 },
      { eyebrow: "Cloud Pipeline", title: "Trion Model ready", body: "Auto-registration and one-click export to E57 / RVT / DWG.", image: featPointcloud, reverse: true },
    ],
    specs: [
      { group: "Performance", rows: [{k:"Range",v:"120 m"},{k:"Accuracy",v:"±3 cm"}] },
      { group: "Physical", rows: [{k:"Weight",v:"1.1 kg"},{k:"Battery",v:"4 hrs"},{k:"IP Rating",v:"IP54"}] },
    ],
    inTheBox: ["S1 Scanner","Battery","Charger","Case","USB-C cable"],
  },

  "fjd-trion-model": {
    hero: { image: featPointcloud, headline: "FJD Trion Model", tagline: "From scans to solutions.", ctas: [{label:"Request Access",to:"/contact",primary:true},{label:"Watch the Demo"}] },
    intro: { title: "The processing workbench for your scanner", body: "Desktop software that turns raw LiDAR walks into registered point clouds, meshes and BIM-ready deliverables — with automation built in for surveyors and BIM teams." },
    features: [
      { eyebrow: "Auto-Registration", title: "Zero-click alignment", body: "SLAM + loop-closure locks projects to control points with sub-centimetre drift.", image: featPointcloud },
      { eyebrow: "Deliverables", title: "One click, every format", body: "Export E57, LAS, PTS, DWG, RVT, IFC — with layered CAD templates included.", image: indBim, reverse: true },
      { eyebrow: "Classification", title: "AI-assisted tagging", body: "Automatic classification of walls, floors, ceilings, MEP and vegetation.", image: indForest },
    ],
    specs: [
      { group: "Requirements", rows: [{k:"OS",v:"Windows 10/11 x64"},{k:"GPU",v:"NVIDIA RTX (8 GB+)"},{k:"RAM",v:"32 GB min"}] },
      { group: "Exports", rows: [{k:"Point Cloud",v:"E57, LAS, PTS, PLY"},{k:"CAD/BIM",v:"DWG, RVT, IFC"},{k:"Mesh",v:"OBJ, FBX, GLB"}] },
    ],
  },

  "fjd-trion-model-web": {
    hero: { image: heroBg, headline: "FJD Trion Model Web", tagline: "Make scan data work for everyone.", ctas: [{label:"Request Access",to:"/contact",primary:true},{label:"Watch the Demo"}] },
    intro: { title: "The cloud twin for your team", body: "Share, review and annotate point clouds from a browser. No plugins, no downloads — every stakeholder walks the site from their desk." },
    features: [
      { eyebrow: "Browser Native", title: "WebGL streaming", body: "Stream billion-point clouds smoothly on any modern browser.", image: featPointcloud },
      { eyebrow: "Collaboration", title: "Comment, measure, share", body: "Threaded comments, measurements and viewpoints — all pinned to 3D space.", image: indBim, reverse: true },
      { eyebrow: "Access Control", title: "Enterprise-ready", body: "SSO, per-project permissions and audit logs for regulated industries.", image: indSubstation },
    ],
    specs: [
      { group: "Platform", rows: [{k:"Access",v:"Browser (Chrome, Edge, Safari)"},{k:"Auth",v:"SSO / SAML"},{k:"Regions",v:"India + Global CDN"}] },
    ],
  },

  "v1t": {
    hero: { image: heroV4eRtk, headline: "FJD Trion V1t RTK Rover", tagline: "Work farther, with stable GNSS.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Long-range UHF RTK for open sites", body: "Rugged aluminum-bodied rover built for corridor surveys, highway staking and cadastral work where UHF radio range matters." },
    features: [
      { eyebrow: "1408 Channels", title: "All constellations, all bands", body: "GPS, GLONASS, Galileo, BeiDou, QZSS, IRNSS — L1/L2/L5 tri-band.", image: heroV4eRtk },
      { eyebrow: "UHF Radio", title: "15 km base-rover baseline", body: "Internal 2 W UHF radio reaches far across open terrain.", image: heroV4e, reverse: true },
      { eyebrow: "Rugged Body", title: "IP68 magnesium alloy", body: "Drops, dust and monsoon — engineered to keep going.", image: featPointcloud },
    ],
    specs: [
      { group: "GNSS", rows: [{k:"Channels",v:"1408"},{k:"Bands",v:"L1/L2/L5"},{k:"RTK Accuracy",v:"H: 8mm+1ppm · V: 15mm+1ppm"}] },
      { group: "Radio", rows: [{k:"Type",v:"UHF 410–470 MHz"},{k:"Power",v:"0.5 / 1 / 2 W"},{k:"Range",v:"Up to 15 km"}] },
      { group: "Physical", rows: [{k:"Weight",v:"960 g"},{k:"Battery",v:"14 hrs"},{k:"IP Rating",v:"IP68"}] },
    ],
    inTheBox: ["V1t Rover","Carbon-fibre pole","Controller bracket","2× Battery","Dual-bay charger","Rugged case"],
  },

  "v10a": {
    hero: { image: heroV4eRtk, headline: "FJD Trion V10a RTK System", tagline: "Make stakeout easier with AR.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "AR stakeout, one-tap navigation", body: "V10a fuses GNSS with the receiver's onboard camera to overlay stakeout targets in live augmented reality — no more staring at map arrows." },
    features: [
      { eyebrow: "AR Stakeout", title: "See the point in the world", body: "The controller camera shows exactly where to place the pole — even on featureless sites.", image: heroV4eRtk },
      { eyebrow: "Visual Positioning", title: "Works under obstruction", body: "Camera-assisted positioning fills in where sky is blocked.", image: heroP2, reverse: true },
      { eyebrow: "IMU Tilt", title: "Tilt up to 60°", body: "Measure corners and edges without levelling the pole.", image: heroV4e },
    ],
    specs: [
      { group: "GNSS", rows: [{k:"Channels",v:"1408"},{k:"Bands",v:"L1/L2/L5"},{k:"RTK Accuracy",v:"H: 8mm+1ppm"}] },
      { group: "Vision", rows: [{k:"Camera",v:"Wide-angle color"},{k:"AR",v:"Yes"},{k:"IMU",v:"Industrial-grade, 0–60°"}] },
      { group: "Physical", rows: [{k:"Weight",v:"920 g"},{k:"Battery",v:"12 hrs"},{k:"IP Rating",v:"IP68"}] },
    ],
    inTheBox: ["V10a Receiver","Pole","Controller mount","Battery","Charger","Case"],
  },

  "v10i": {
    hero: { image: heroV4eRtk, headline: "FJD Trion V10i RTK System", tagline: "Locate points with visual positioning.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Visual positioning, wherever GNSS struggles", body: "V10i extends RTK survey into urban canyons, tunnels and dense canopy with fused visual-inertial positioning." },
    features: [
      { eyebrow: "Visual-Inertial", title: "GNSS-denied capable", body: "Continues cm-grade tracking when satellite lock drops.", image: heroP2 },
      { eyebrow: "1408 Channels", title: "Full constellation coverage", body: "Every band, every satellite, every fix.", image: heroV4eRtk, reverse: true },
      { eyebrow: "IMU Tilt", title: "60° pole tilt", body: "Reach into corners and against walls with confidence.", image: heroV4e },
    ],
    specs: [
      { group: "GNSS", rows: [{k:"Channels",v:"1408"},{k:"Bands",v:"L1/L2/L5"},{k:"RTK",v:"H: 8mm+1ppm"}] },
      { group: "Physical", rows: [{k:"Weight",v:"950 g"},{k:"Battery",v:"12 hrs"},{k:"IP Rating",v:"IP68"}] },
    ],
    inTheBox: ["V10i Receiver","Pole","Battery","Charger","Case"],
  },

  "v10l": {
    hero: { image: heroV4eRtk, headline: "FJD Trion V10L RTK System", tagline: "Measure hard-to-reach points.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Laser plummet meets GNSS", body: "V10L combines a class-2 laser plummet with full 1408-channel RTK — measure hazardous, obstructed and inaccessible points safely." },
    features: [
      { eyebrow: "Laser Plummet", title: "Reach past obstacles", body: "Shoot to a target from a stable stance — no crawling under machinery.", image: heroV4e },
      { eyebrow: "1408 Channels", title: "Full-constellation lock", body: "Rock-solid RTK under canopy and in city corridors.", image: heroV4eRtk, reverse: true },
      { eyebrow: "IMU Tilt", title: "0–60° tilt survey", body: "Precise corners and edges without levelling the pole.", image: heroP2 },
    ],
    specs: [
      { group: "GNSS", rows: [{k:"Channels",v:"1408"},{k:"RTK",v:"H: 8mm+1ppm"}] },
      { group: "Laser", rows: [{k:"Type",v:"Class-2 plummet"},{k:"Range",v:"Up to 50 m"}] },
      { group: "Physical", rows: [{k:"Weight",v:"980 g"},{k:"Battery",v:"12 hrs"},{k:"IP Rating",v:"IP68"}] },
    ],
    inTheBox: ["V10L Receiver","Pole","Battery","Charger","Case"],
  },

  "base-v1": {
    hero: { image: heroV4eRtk, headline: "FJD Trion V1 Base Station", tagline: "Position every point with confidence.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "The foundation of your RTK network", body: "Rugged base station with internal UHF radio and network RTK — set it up in minutes, stream corrections to every rover on site." },
    features: [
      { eyebrow: "Dual Corrections", title: "UHF + NTRIP", body: "Broadcast over UHF locally and stream corrections to remote rovers via 4G NTRIP.", image: heroV4eRtk },
      { eyebrow: "All Constellations", title: "1408-channel base", body: "Match your rovers — every band, every satellite.", image: heroV4e, reverse: true },
    ],
    specs: [
      { group: "GNSS", rows: [{k:"Channels",v:"1408"},{k:"Bands",v:"L1/L2/L5"}] },
      { group: "Comms", rows: [{k:"Radio",v:"UHF 2 W"},{k:"Cellular",v:"4G LTE"},{k:"NTRIP",v:"Caster/Server"}] },
    ],
    inTheBox: ["V1 Base","Tripod","Tribrach","External battery","Charger","Case"],
  },

  "n10-cors": {
    hero: { image: heroBg, headline: "FJD Trion N10 CORS System", tagline: "Keep every rover on point.", ctas: [{label:"Talk to Sales",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Permanent reference station for your region", body: "N10 is a full CORS-grade continuously operating reference station — deploy across state utilities, ports and university networks for network RTK." },
    features: [
      { eyebrow: "24×7 Operation", title: "Redundant power & comms", body: "Dual power supplies and dual SIMs keep corrections streaming through outages.", image: heroBg },
      { eyebrow: "Network RTK", title: "VRS / MAC ready", body: "Feeds into standard network-RTK software for state-wide services.", image: heroV4eRtk, reverse: true },
    ],
    specs: [
      { group: "GNSS", rows: [{k:"Channels",v:"1408"},{k:"Data Rate",v:"Up to 50 Hz"}] },
      { group: "Site", rows: [{k:"Power",v:"AC + backup"},{k:"Comms",v:"Ethernet + 4G"},{k:"Enclosure",v:"IP67"}] },
    ],
  },

  "trion-survey": {
    hero: { image: heroBg, headline: "FJD Trion Survey", tagline: "Field work made easy.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Android field software for surveyors", body: "Trion Survey drives every FJD Trion GNSS receiver — stakeout, topo, cogo, control-point ties and cloud sync, all from your handheld." },
    features: [
      { eyebrow: "One-Tap Stakeout", title: "Guided to the point", body: "Map, compass and AR views — pick your workflow.", image: heroV4eRtk },
      { eyebrow: "CAD Import", title: "DWG / DXF native", body: "Load design files straight into the field controller.", image: indCad, reverse: true },
      { eyebrow: "Cloud Sync", title: "No cables, no cards", body: "Every observation syncs to Trion Cloud automatically.", image: heroBg },
    ],
    specs: [
      { group: "Platform", rows: [{k:"OS",v:"Android 10+"},{k:"Languages",v:"English, हिन्दी"},{k:"Coord Systems",v:"WGS84, UTM, India Grid, custom"}] },
    ],
  },

  "gnss-studio": {
    hero: { image: heroBg, headline: "FJD Trion GNSS Studio", tagline: "From observation to output, precisely.", ctas: [{label:"Request Access",to:"/contact",primary:true},{label:"Watch the Demo"}] },
    intro: { title: "Post-processing for the office", body: "Static baseline processing, network adjustment, PPK trajectories and reporting — the professional office companion to Trion Survey." },
    features: [
      { eyebrow: "PPK", title: "Kinematic post-processing", body: "Recover cm-grade trajectories where RTK dropped.", image: heroV4eRtk },
      { eyebrow: "Network Adjust", title: "Least-squares adjustment", body: "Publish adjusted control networks with QA reports.", image: indBim, reverse: true },
    ],
    specs: [
      { group: "Requirements", rows: [{k:"OS",v:"Windows 10/11 x64"},{k:"RAM",v:"16 GB"}] },
      { group: "Exports", rows: [{k:"Reports",v:"PDF, CSV"},{k:"Coords",v:"RINEX, CSV, DXF"}] },
    ],
  },

  "eg10": {
    hero: { image: indCad, headline: "EG10 Excavator Guidance System", tagline: "Get more done, with less setup.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "2D-to-3D guidance for every excavator", body: "Retrofit any excavator with dual-antenna GNSS and cabin display — live bucket-tip position, target elevation and cut/fill in real time." },
    features: [
      { eyebrow: "Rapid Install", title: "Up in a day", body: "Bolt-on mounts, magnetic sensors — no drilling required.", image: indCad },
      { eyebrow: "Live Cut/Fill", title: "Bucket-tip precision", body: "cm-grade elevation feedback right in the cab.", image: heroV4eRtk, reverse: true },
    ],
    specs: [
      { group: "Sensing", rows: [{k:"GNSS",v:"Dual-antenna RTK"},{k:"Sensors",v:"Boom / arm / bucket tilt"}] },
      { group: "Display", rows: [{k:"Screen",v:"10-inch sunlight-readable"},{k:"IP Rating",v:"IP65"}] },
    ],
  },

  "ec100-g31": {
    hero: { image: indCad, headline: "EC100 (G31 PRO) Excavator Guidance", tagline: "Less rework, more control.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Full 3D guidance with design overlay", body: "EC100 overlays the design model directly onto the operator's screen — pipelines, benches, slopes — with tilt-bucket support and rugged cabin display." },
    features: [
      { eyebrow: "3D Design Overlay", title: "See the model in the cab", body: "IFC / LandXML designs load directly into the display.", image: indCad },
      { eyebrow: "Tilt-Bucket Ready", title: "Rotating bucket support", body: "Full 6-axis guidance for tilt-rotator equipment.", image: heroV4e, reverse: true },
    ],
    specs: [
      { group: "Sensing", rows: [{k:"GNSS",v:"Dual-antenna RTK"},{k:"Sensors",v:"6-axis IMU + tilt"}] },
      { group: "Design Formats", rows: [{k:"CAD",v:"DXF, DWG"},{k:"Model",v:"IFC, LandXML"}] },
    ],
  },

  "gc100-h36": {
    hero: { image: indCad, headline: "GC100 (H36 PRO) 3D Motor Grader", tagline: "Accurate grading in one go.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Automatic blade control", body: "GC100 automates blade elevation and slope to the design model — one-pass finishing, cm-grade accuracy, minimal rework." },
    features: [
      { eyebrow: "Auto Blade", title: "Elevation + slope", body: "Hydraulic control drives the blade to design in real time.", image: indCad },
      { eyebrow: "One-Pass Finish", title: "Fewer passes, less fuel", body: "Achieve finished grade in a single pass across the pad.", image: heroV4eRtk, reverse: true },
    ],
    specs: [
      { group: "Sensing", rows: [{k:"GNSS",v:"Dual-antenna RTK"},{k:"Control",v:"Hydraulic auto"}] },
    ],
  },

  "dc100-h39": {
    hero: { image: indCad, headline: "DC100 (H39 PRO) 3D Dozer Control", tagline: "Smarter cuts, smoother execution.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Automatic blade control for dozers", body: "DC100 tracks the design model with cm-grade precision — accurate benches, slopes and stockpiles in fewer passes." },
    features: [
      { eyebrow: "Design-Aware", title: "Live model tracking", body: "Blade drives to the model automatically across the site.", image: indCad },
      { eyebrow: "Slope + Elevation", title: "Full 3D control", body: "Independent slope and elevation actuation.", image: heroV4e, reverse: true },
    ],
    specs: [
      { group: "Sensing", rows: [{k:"GNSS",v:"Dual-antenna RTK"},{k:"Control",v:"Hydraulic auto"}] },
    ],
  },

  "sg10": {
    hero: { image: heroBg, headline: "SG10 Snow Removal Guidance", tagline: "Snow removal, clearly guided.", ctas: [{label:"Book a Free Demo",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "See the road, even under snow", body: "SG10 overlays a pre-mapped road model onto the operator display — clear the road accurately even when curbs and lanes are hidden." },
    features: [
      { eyebrow: "Pre-Mapped Roads", title: "Know the geometry", body: "Loads road models with curbs, medians, drains and no-plow zones.", image: heroBg },
      { eyebrow: "All-Weather Display", title: "Sunlight to snowstorm", body: "10-inch bright display rated for winter operations.", image: heroV4eRtk, reverse: true },
    ],
    specs: [
      { group: "Sensing", rows: [{k:"GNSS",v:"RTK"},{k:"Display",v:"10-inch IP65"}] },
    ],
  },

  "fjd-trion-terramind": {
    hero: { image: indCad, headline: "FJD Trion TerraMind", tagline: "A digital bridge to your jobsite.", ctas: [{label:"Request Access",to:"/contact",primary:true},{label:"Watch the Demo"}] },
    intro: { title: "The command center for digital construction", body: "TerraMind unifies fleet data, design models and progress reports — one dashboard for every machine on site." },
    features: [
      { eyebrow: "Fleet Awareness", title: "Every machine, one map", body: "Live position, activity and productivity for every guided machine.", image: indCad },
      { eyebrow: "Progress vs Design", title: "As-built delta", body: "Compare current surface to design and quantify earthworks daily.", image: featPointcloud, reverse: true },
    ],
    specs: [
      { group: "Platform", rows: [{k:"Access",v:"Browser + mobile"},{k:"Regions",v:"India-hosted"}] },
    ],
  },

  "o1-urban-3d": {
    hero: { image: heroBg, headline: "O1 Urban 3D Modeling", tagline: "A new way to urban-map the world.", ctas: [{label:"Talk to Sales",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "City-scale digital twins", body: "O1 fuses aerial + ground reality capture into a single automated mesh pipeline — for smart cities, utilities and government." },
    features: [
      { eyebrow: "Aerial + Ground Fusion", title: "One unified twin", body: "Nadir, oblique and ground scans meshed into a single continuous model.", image: heroBg },
      { eyebrow: "Automated Meshing", title: "Hands-off production", body: "GPU-accelerated pipeline turns terabytes into a mesh in hours, not weeks.", image: featPointcloud, reverse: true },
    ],
    specs: [
      { group: "Output", rows: [{k:"Formats",v:"OSGB, 3D Tiles, glTF"},{k:"Scale",v:"City-wide"}] },
    ],
  },

  "am150a": {
    hero: { image: heroBg, headline: "AM150A Medium Format Urban Camera", tagline: "Capture every detail in flight.", ctas: [{label:"Talk to Sales",to:"/contact",primary:true},{label:"Download Brochure"}] },
    intro: { title: "Medium-format aerial imaging", body: "150 MP medium-format sensor with metric-grade optics — engineered for oblique urban mapping missions." },
    features: [
      { eyebrow: "150 MP Sensor", title: "See the sign, not just the block", body: "Ground-sample distances that resolve doorways from 500 m up.", image: heroBg },
      { eyebrow: "Oblique Ready", title: "5-head configuration", body: "Nadir + 4-oblique heads capture façades and roofs in a single pass.", image: featPointcloud, reverse: true },
    ],
    specs: [
      { group: "Sensor", rows: [{k:"Resolution",v:"150 MP"},{k:"Format",v:"Medium format"},{k:"Trigger",v:"Sync 5-head"}] },
    ],
  },
};

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}