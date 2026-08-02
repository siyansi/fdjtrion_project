
import imgProduct from "@/assets/product-excavator.png";
import imgCustomer from "@/assets/product-software.jpg";
import imgNews from "@/assets/blog-pointcloud.jpg";
import indBim from "@/assets/product-grader.png";
import indCad from "@/assets/product-urban-camera.png";
import indForest from "@/assets/ind-forest.jpg";
import indSubstation from "@/assets/ind-substation.jpg";
import indTraffic from "@/assets/ind-traffic.jpg";
import indDairy from "@/assets/ind-dairy.jpg";
import pointcloud from "@/assets/pointcloud.jpg";
import heroP2 from "@/assets/hero-p2-pointcloud.jpg";
import softwareImg from "@/assets/product-software.jpg";
import excavatorImg from "@/assets/product-excavator.png";
import graderImg from "@/assets/product-grader.png";
import p1Lidar from "@/assets/product-p1-lidar.png";
import v10l from "@/assets/product-v10l-gnss.png";
import type { StaticImageData } from "next/image";

export type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
  image?: string | StaticImageData;
};

export type Post = {
  slug: string;
  category: string;
  title: string;
  date: string;
  industry?: string;
  readTime: string;
  excerpt: string;
  image: string | StaticImageData;
  hero?: string | StaticImageData;
  facts?: { k: string; v: string }[];
  sections: Section[];
};

export type BlogCategory = {
  slug: string;
  name: string;
  blurb: string;
  image: string | StaticImageData;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "product-updates-2",
    name: "Product Updates",
    blurb:
      "Firmware, app and cloud release notes for every FJD Trion scanner, receiver and software module.",
    image: imgProduct,
  },
  {
    slug: "customer-stories-3",
    name: "Customer Stories",
    blurb:
      "How surveyors, contractors and forestry teams across India deliver more with Trion reality capture.",
    image: imgCustomer,
  },
  {
    slug: "news-insights-6",
    name: "News & Insights",
    blurb:
      "Company announcements, event coverage and technology deep-dives from the FJD Trion India team.",
    image: imgNews,
  },
];

export const posts: Post[] = [
  // ---------------- Product Updates ----------------
  {
    slug: "fjd-trion-survey-v2-1-9-1069",
    category: "product-updates-2",
    title: "FJD Trion Survey V2.1.9",
    date: "Jul 31, 2026",
    readTime: "4 min read",
    excerpt:
      "Smarter CAD workflows, four new lot-staking methods, improved area calculation and wider coordinate-system support for Indian grids.",
    image: softwareImg,
    hero: softwareImg,
    facts: [
      { k: "Product", v: "FJD Trion Survey" },
      { k: "Version", v: "v2.1.9.5" },
      { k: "Release date", v: "2026-07-31" },
      { k: "Controller", v: "FJD E200 / E600 / E800 / UA80 / D10" },
      { k: "Platform", v: "Android 8 or above" },
      { k: "Update method", v: "OTA" },
    ],
    sections: [
      {
        heading: "I. Overview",
        body: [
          "This release focuses on field productivity for cadastral and layout crews. CAD handling is faster on large DXF sheets, lot staking gains four new methods, and area computation now reports both projected and geodetic values.",
          "Coordinate-system support has been extended for Indian users, including WGS84 / UTM 42N–46N and Everest-based local grids, with a one-tap localisation wizard.",
        ],
      },
      {
        heading: "II. New features",
        bullets: [
          "Four lot-staking methods: by area, by frontage, by parallel line and by point count.",
          "CAD layer manager with per-layer snap, colour and visibility control.",
          "Area calculation now outputs sq m, hectares, acres, bigha and guntha.",
          "Extended coordinate library with Indian zones and custom seven-parameter transformations.",
          "Localisation improvements — Hindi and regional-language field labels.",
        ],
      },
      {
        heading: "III. Optimisations",
        bullets: [
          "40% faster DXF import for drawings above 50 MB.",
          "More stable Bluetooth reconnection with V10 and V4e receivers.",
          "Stake-out screen redraws smoothly at 60 fps on mid-range controllers.",
        ],
      },
      {
        heading: "IV. Fixes",
        bullets: [
          "Fixed occasional wrong elevation when switching between geoid models.",
          "Fixed export failure when a project name contained special characters.",
          "Fixed base-station coordinate not carrying over after app restart.",
        ],
      },
    ],
  },
  {
    slug: "fjd-trion-model-web-v1-4-6-1070",
    category: "product-updates-2",
    title: "FJD Trion Model Web V1.4.6",
    date: "Jul 29, 2026",
    readTime: "3 min read",
    excerpt:
      "Introduces the Construction Management module — centralised BIM models, scan data and site issues in one collaborative cloud workspace.",
    image: pointcloud,
    hero: pointcloud,
    facts: [
      { k: "Product", v: "FJD Trion Model Web" },
      { k: "Version", v: "V1.4.6" },
      { k: "Release date", v: "2026-07-29" },
      { k: "Update method", v: "Online" },
    ],
    sections: [
      {
        heading: "I. Overview",
        body: [
          "V1.4.6 adds a Construction Management module so project teams can host BIM models, registered scan data and site issues in a single cloud workspace, then share a link with clients and consultants.",
        ],
      },
      {
        heading: "II. New features",
        bullets: [
          "Construction Management: model + point-cloud overlay with clash and deviation heat-maps.",
          "Issue tracker with photo, position pin, assignee and due date.",
          "Progress comparison between two scan dates.",
          "Role-based sharing links with view-only or markup permissions.",
        ],
      },
      {
        heading: "III. Optimisations",
        bullets: [
          "Faster streaming of clouds above 2 billion points.",
          "Improved measurement snapping on planar surfaces.",
          "Reduced tile loading time on 4G field connections.",
        ],
      },
    ],
  },
  {
    slug: "fjd-trion-s2-firmware-v1-4-2-1059",
    category: "product-updates-2",
    title: "FJD Trion S2 Firmware V1.4.2",
    date: "Jul 6, 2026",
    readTime: "3 min read",
    excerpt:
      "Movement-speed display, overspeed detection with voice and vibration alerts, plus improved loop closure in long corridors.",
    image: heroP2,
    hero: heroP2,
    facts: [
      { k: "Product", v: "FJD Trion S2 Series" },
      { k: "Version", v: "V1.4.2" },
      { k: "Release date", v: "2026-07-06" },
      { k: "Update method", v: "Trion Scan OTA" },
    ],
    sections: [
      {
        heading: "I. New features",
        bullets: [
          "Movement speed display with per-mode speed-limit indicators.",
          "Overspeed detection with voice prompt and vibration alert.",
          "Scan-quality bar showing live feature richness of the environment.",
        ],
      },
      {
        heading: "II. Optimisations",
        bullets: [
          "Improved loop closure in long, feature-poor corridors and stairwells.",
          "Better colourisation exposure when moving from indoor to bright outdoor light.",
          "Lower power draw — around 12% longer runtime per battery.",
        ],
      },
      {
        heading: "III. Fixes",
        bullets: [
          "Fixed rare data-package error when a scan exceeded 45 minutes.",
          "Fixed Wi-Fi hotspot name resetting after firmware upgrade.",
        ],
      },
    ],
  },
  {
    slug: "fjd-trion-p2-firmware-v1-2-0-1053",
    category: "product-updates-2",
    title: "FJD Trion P2 Firmware V1.2.0",
    date: "Jun 22, 2026",
    readTime: "3 min read",
    excerpt:
      "Rover management and a new device-orientation display in the real-time point-cloud interface.",
    image: heroP2,
    hero: heroP2,
    facts: [
      { k: "Product", v: "FJD Trion P2 / P2 Vision" },
      { k: "Version", v: "V1.2.0" },
      { k: "Release date", v: "2026-06-22" },
      { k: "Update method", v: "Trion Scan OTA" },
    ],
    sections: [
      {
        heading: "I. New features",
        bullets: [
          "Rover management — enter and save rover details before connecting an RTK receiver.",
          "Device orientation display: a radar-head icon with front spotlight moves and rotates with the scanner.",
          "Quick control-point capture directly from the live cloud view.",
        ],
      },
      {
        heading: "II. Optimisations",
        bullets: [
          "Sharper live preview at 30 fps on mid-range Android devices.",
          "More reliable RTK fix retention under tree canopy.",
        ],
      },
    ],
  },
  {
    slug: "fjd-trion-scan-v3-7-0-1047",
    category: "product-updates-2",
    title: "FJD Trion Scan V3.7.0",
    date: "May 21, 2026",
    readTime: "3 min read",
    excerpt:
      "Upgrades V4e / V4e Pro mapping to improve field efficiency, RTK stability and data reliability.",
    image: softwareImg,
    hero: softwareImg,
    facts: [
      { k: "Product", v: "FJD Trion Scan" },
      { k: "Version", v: "V3.7.0" },
      { k: "Release date", v: "2026-05-21" },
      { k: "Platform", v: "Android 10+ / iOS 15+" },
    ],
    sections: [
      {
        heading: "I. Version overview",
        body: [
          "This release upgrades V4e and V4e Pro mapping capability, targeting field mapping efficiency, RTK working stability and data reliability during long survey days.",
        ],
      },
      {
        heading: "II. What's included",
        bullets: [
          "V4e Series point-cloud thinning for faster on-device preview.",
          "Auto-resume of an interrupted scan after an app or battery event.",
          "New data-integrity check before project export.",
          "Improved NTRIP profile management for Indian CORS providers.",
        ],
      },
    ],
  },
  {
    slug: "digital-construction-platform-v0-0-3-263",
    category: "product-updates-2",
    title: "Digital Construction Platform V0.0.3",
    date: "Mar 31, 2026",
    readTime: "2 min read",
    excerpt:
      "First public build of the Digital Construction Platform — dashboard, device management, project management and reporting.",
    image: excavatorImg,
    hero: indCad,
    facts: [
      { k: "Product", v: "Digital Construction Platform" },
      { k: "Version", v: "V0.0.3" },
      { k: "Release date", v: "2026-03-30" },
      { k: "Update method", v: "Online" },
    ],
    sections: [
      {
        heading: "I. Overview",
        body: [
          "The Digital Construction Platform brings machine-control fleets, design files and site progress into one browser workspace for earthmoving contractors.",
        ],
      },
      {
        heading: "II. New features",
        bullets: [
          "Dashboard with fleet utilisation and daily earthwork volumes.",
          "Device management for excavator, grader and dozer control kits.",
          "Project management with design-file versioning.",
          "Exportable daily progress reports.",
        ],
      },
    ],
  },

  // ---------------- Customer Stories ----------------
  {
    slug: "affordable-machine-control-reduces-labour-and-improves-roi-1071",
    category: "customer-stories-3",
    title:
      "How Affordable Machine Control Helps Contractors Reduce Labour and Improve ROI",
    date: "Jun 18, 2026",
    industry: "Construction",
    readTime: "6 min read",
    excerpt:
      "For many civil contractors, machine guidance meant high cost and complex systems. A Pune earthworks firm shows what changes when the barrier drops.",
    image: excavatorImg,
    hero: indCad,
    facts: [
      { k: "Client", v: "Civil earthworks contractor, Pune" },
      { k: "Kit", v: "EG10 excavator guidance + V10L base" },
      { k: "Site", v: "1.8 km industrial access road" },
      { k: "Result", v: "31% less rework, 2 fewer grade checkers" },
    ],
    sections: [
      {
        heading: "The challenge",
        body: [
          "Traditional earthwork on the project depended on grade checkers walking the cut with a staff and level. Every check stopped the machine, and any error surfaced only after the layer was already placed.",
          "The contractor had looked at machine control before but the cost per excavator, plus training time, made the payback hard to justify on medium-size jobs.",
        ],
      },
      {
        heading: "The deployment",
        bullets: [
          "EG10 guidance installed on two 20-tonne excavators in a single day.",
          "Design surfaces loaded straight from the consultant's DWG.",
          "Operators trained in one shift using the on-screen cut/fill guidance.",
          "V10L set as an on-site base with local calibration, no total station required.",
        ],
      },
      {
        heading: "The outcome",
        body: [
          "Grade checkers no longer stand in the trench: the operator sees cut and fill live on the display and reaches design in fewer passes.",
        ],
        bullets: [
          "31% reduction in rework volume across the first two months.",
          "Two grade checkers redeployed to survey and QA duties.",
          "Fuel savings from fewer passes recovered a measurable share of kit cost.",
          "Daily as-built volumes exported for client billing without extra survey visits.",
        ],
      },
      {
        heading: "In their words",
        body: [
          "\"The system paid for itself before the road did. Operators trust the screen now — they stop when it says stop.\" — Site manager, Pune",
        ],
      },
    ],
  },
  {
    slug: "from-paper-to-digital-building-measurement-rajasthan-252",
    category: "customer-stories-3",
    title:
      "From Paper to Digital: How FJD Trion Revolutionised Building Measurement in Rajasthan",
    date: "Mar 26, 2026",
    industry: "Surveying",
    readTime: "5 min read",
    excerpt:
      "Tape measures, theodolites and blueprint paper gave way to a handheld SLAM scanner — and turned a two-week measurement job into two days.",
    image: indBim,
    hero: indBim,
    facts: [
      { k: "Client", v: "Architecture practice, Jaipur" },
      { k: "Kit", v: "FJD Trion P2 Vision" },
      { k: "Scope", v: "4,200 sq m heritage-adjacent commercial block" },
      { k: "Result", v: "10 days → 2 days on site" },
    ],
    sections: [
      {
        heading: "Measuring the old way",
        body: [
          "Building measurement in Rajasthan, like much of India, relied on manual technique — tape, theodolite and hand-annotated sheets. Redrawing in CAD happened days later, often with gaps that forced a second site visit.",
        ],
      },
      {
        heading: "Switching to handheld SLAM",
        bullets: [
          "Whole floors captured in continuous 8–12 minute walks.",
          "Colourised cloud reviewed on the tablet before leaving the site.",
          "Panoramic imagery attached for material and condition notes.",
          "No line-of-sight setup, no tripod moves in narrow lanes.",
        ],
      },
      {
        heading: "Results",
        bullets: [
          "Site time cut from ten days to two.",
          "Floor plans extracted in Trion Model, then finished in CAD.",
          "Zero return visits for missed dimensions across the project.",
          "Client received a shareable 3D view alongside the drawings.",
        ],
      },
    ],
  },
  {
    slug: "seeing-the-forest-through-the-trees-lidar-253",
    category: "customer-stories-3",
    title:
      "Seeing the Forest Through the Trees: LiDAR Captures Today for the Future",
    date: "Mar 26, 2026",
    industry: "Forestry",
    readTime: "5 min read",
    excerpt:
      "A Western Ghats inventory team replaces sample plots and calipers with under-canopy SLAM scanning and automated tree metrics.",
    image: indForest,
    hero: indForest,
    facts: [
      { k: "Client", v: "Forestry research unit, Karnataka" },
      { k: "Kit", v: "FJD Trion P2 + Trion Model forestry module" },
      { k: "Plot size", v: "40 plots of 0.1 ha" },
      { k: "Result", v: "6× faster inventory, DBH within ±1.2 cm" },
    ],
    sections: [
      {
        heading: "Why it matters",
        body: [
          "Forests are habitat, carbon sink and watershed. Managing them needs measurement that is repeatable — and manual plot inventory is slow, subjective and hard to revisit.",
        ],
      },
      {
        heading: "The field method",
        bullets: [
          "One operator walks a figure-of-eight path through each plot.",
          "Under-canopy SLAM holds trajectory without GNSS.",
          "Trion Model auto-segments stems and computes DBH, height and count.",
          "Plots re-scanned annually for growth and mortality tracking.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Inventory throughput about six times manual caliper work.",
          "DBH agreement within ±1.2 cm against tape reference.",
          "Permanent 3D record for future re-measurement and audit.",
          "Carbon-stock reporting generated directly from the cloud.",
        ],
      },
    ],
  },
  {
    slug: "capturing-old-delhi-havelis-in-3d-with-fjd-trion-p2-1",
    category: "customer-stories-3",
    title: "Capturing Old Delhi's Havelis in 3D with FJD Trion P2",
    date: "Dec 29, 2025",
    industry: "Digital Preservation",
    readTime: "5 min read",
    excerpt:
      "Narrow lanes, fragile façades and no room for tripods — a conservation team documents Shahjahanabad courtyard houses in a single week.",
    image: pointcloud,
    hero: pointcloud,
    facts: [
      { k: "Client", v: "Heritage conservation trust, Delhi" },
      { k: "Kit", v: "FJD Trion P2 Vision" },
      { k: "Scope", v: "9 havelis, courtyards and street elevations" },
      { k: "Result", v: "Complete record in 6 field days" },
    ],
    sections: [
      {
        heading: "The site",
        body: [
          "The lanes of Shahjahanabad are barely two metres wide in places, with overhangs, cables and constant foot traffic. Static scanning would have meant dozens of setups per building and permission to block access.",
        ],
      },
      {
        heading: "How it was captured",
        bullets: [
          "Continuous walking scans through courtyards, stairs and terraces.",
          "Street elevations captured while walking the lane, no road closure.",
          "Colourised cloud plus imagery for plaster and timber condition mapping.",
        ],
      },
      {
        heading: "What the trust got",
        bullets: [
          "Measured plans, sections and elevations for each haveli.",
          "A permanent digital twin for conservation planning and grant applications.",
          "A web-shareable model for public outreach.",
        ],
      },
    ],
  },
  {
    slug: "safe-fast-accurate-v10l-receiver-konkan-coast-2",
    category: "customer-stories-3",
    title: "Safe, Fast, Accurate: V10L Receiver in Action on the Konkan Coast",
    date: "Dec 29, 2025",
    industry: "Surveying",
    readTime: "4 min read",
    excerpt:
      "Exposed cliff edges and shifting monsoon ground make traditional control work risky. A V10L-based workflow shortens exposure time dramatically.",
    image: v10l,
    hero: indSubstation,
    facts: [
      { k: "Client", v: "Coastal infrastructure surveyor, Maharashtra" },
      { k: "Kit", v: "FJD Trion V10L RTK system" },
      { k: "Scope", v: "11 km of coastal alignment control" },
      { k: "Result", v: "Field time halved, cm-level repeatability" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Control observation along cliff edges and tidal margins puts crews in exposed positions for long periods. Every minute saved on a point is a safety gain, not just a schedule gain.",
        ],
      },
      {
        heading: "The approach",
        bullets: [
          "IMU tilt compensation to shoot points without levelling the pole.",
          "Reliable fix retention on multi-constellation tracking near cliff walls.",
          "Long battery runtime for full-tide-window sessions.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Observation time per point cut by more than half.",
          "Centimetre-level repeatability on check points.",
          "Crew exposure at hazardous stations reduced significantly.",
        ],
      },
    ],
  },
  {
    slug: "mapping-a-busy-cbd-tower-without-downtime-22",
    category: "customer-stories-3",
    title:
      "Mapping with Zero Interruption: How to Map a Busy CBD Tower Without Downtime",
    date: "Nov 13, 2025",
    industry: "Surveying",
    readTime: "4 min read",
    excerpt:
      "A facilities team in BKC, Mumbai maps an occupied 32-floor tower during working hours — no shutdowns, no night shifts.",
    image: p1Lidar,
    hero: indBim,
    facts: [
      { k: "Client", v: "Facilities management firm, Mumbai" },
      { k: "Kit", v: "FJD Trion P1" },
      { k: "Scope", v: "32 occupied floors, BKC" },
      { k: "Result", v: "Full tower mapped in 3 working days" },
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "Daytime mapping in busy buildings used to be a logistical headache — tripods in corridors, cordons, and tenant complaints. Most teams pushed the work to nights and weekends at premium cost.",
        ],
      },
      {
        heading: "The workflow",
        bullets: [
          "One operator walks each floor loop in 6–9 minutes with a handheld scanner.",
          "Moving people filtered out during processing.",
          "Floors registered into a single vertical model using stair links.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Whole tower captured in three normal working days.",
          "No tenant disruption and no overtime premium.",
          "Floor plans and asset positions delivered to the CAFM system.",
        ],
      },
    ],
  },
  {
    slug: "scan-to-cad-workflow-guide-fjd-trion-p1-147",
    category: "customer-stories-3",
    title:
      "Transforming Building Surveying: A Seamless Scan-to-CAD Workflow with Handheld LiDAR",
    date: "Nov 10, 2025",
    industry: "Surveying",
    readTime: "6 min read",
    excerpt:
      "How an Ahmedabad practice converts physical space into clean 2D CAD deliverables without re-measuring anything twice.",
    image: indCad,
    hero: indCad,
    facts: [
      { k: "Client", v: "Architectural surveying practice, Ahmedabad" },
      { k: "Kit", v: "FJD Trion P1 + Trion Model PC" },
      { k: "Deliverable", v: "Plans, sections, elevations in DWG" },
      { k: "Result", v: "Drafting effort down ~45%" },
    ],
    sections: [
      {
        heading: "The question every surveyor asks",
        body: [
          "How do you convert physical space into accurate CAD, efficiently, without a second visit? The answer is a workflow where capture, registration and drafting are designed as one chain instead of three separate jobs.",
        ],
      },
      {
        heading: "Step-by-step",
        bullets: [
          "Capture: continuous walk per floor, closing loops at the entry point.",
          "Register: automatic loop closure, control points applied where required.",
          "Slice: horizontal and vertical sections generated at chosen levels.",
          "Draft: vector traced over the slice, exported to DWG with layer standards.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "About 45% less drafting effort per building.",
          "Dimensional checks resolved against the cloud instead of site visits.",
          "Consistent layer and lineweight standards across all deliverables.",
        ],
      },
    ],
  },
  {
    slug: "dairy-farm-digitalisation-anand-31",
    category: "customer-stories-3",
    title: "Digitalising a Dairy Cooperative's Sheds in Anand, Gujarat",
    date: "Oct 22, 2025",
    industry: "Agriculture",
    readTime: "4 min read",
    excerpt:
      "Shed layouts, feed-lane widths and drainage falls captured in one afternoon to plan a mechanisation upgrade.",
    image: indDairy,
    hero: indDairy,
    facts: [
      { k: "Client", v: "Dairy cooperative, Anand" },
      { k: "Kit", v: "FJD Trion P2" },
      { k: "Scope", v: "6 sheds, 11,000 sq m" },
      { k: "Result", v: "Layout model in one afternoon" },
    ],
    sections: [
      {
        heading: "Why scan a dairy shed",
        body: [
          "Mechanisation upgrades need real dimensions: feed-lane widths, stall spacing, headroom under trusses and drainage falls. Drawings were decades old and no longer matched what was built.",
        ],
      },
      {
        heading: "Capture and delivery",
        bullets: [
          "Walking scans with animals in place — no shed clearing required.",
          "Drainage falls extracted from the cloud surface.",
          "Equipment clearances checked before ordering machinery.",
        ],
      },
      {
        heading: "Outcome",
        bullets: [
          "Accurate as-built base for the mechanisation tender.",
          "Two clashes with proposed feed conveyors caught before purchase.",
        ],
      },
    ],
  },

  // ---------------- News & Insights ----------------
  {
    slug: "notice-regarding-purchases-from-non-official-sales-channels-1054",
    category: "news-insights-6",
    title: "Notice Regarding Purchases from Non-Official Sales Channels",
    date: "Jun 22, 2026",
    readTime: "2 min read",
    excerpt:
      "FJD Trion India advises customers to purchase only through authorised channels to ensure warranty, firmware and calibration support.",
    image: imgNews,
    hero: imgNews,
    sections: [
      {
        heading: "Notice",
        body: [
          "We have become aware that certain third-party platforms and sellers may be displaying, promoting or offering FJD Trion products and related services that are not verified by us.",
          "Devices bought through unverified channels may carry non-original accessories, unsupported firmware or expired calibration, and may not be eligible for warranty or on-site service in India.",
        ],
      },
      {
        heading: "What we recommend",
        bullets: [
          "Buy only from FJD Trion India or an authorised channel partner.",
          "Verify the serial number in the customer portal before payment.",
          "Insist on a GST invoice issued in the buyer's name.",
          "Report suspicious listings to our support team.",
        ],
      },
      {
        heading: "Support",
        body: [
          "If you are unsure whether a seller is authorised, contact our team before purchase and we will confirm within one working day.",
        ],
      },
    ],
  },
  {
    slug: "dc100-dozer-can-bus-electronic-control-mode-240",
    category: "news-insights-6",
    title:
      "DC100 Dozer Control System: CAN Bus Electronic Control Mode Officially Integrated",
    date: "Mar 23, 2026",
    industry: "Construction",
    readTime: "4 min read",
    excerpt:
      "Dozer automation moves from a supporting feature toward genuine intelligent control with native CAN bus integration in the main software.",
    image: graderImg,
    hero: indCad,
    sections: [
      {
        heading: "Why CAN bus matters",
        body: [
          "As construction machinery becomes more intelligent, dozer automation is evolving from an assistive display into closed-loop control. Talking directly to the machine over CAN bus removes the hydraulic add-on layer and gives smoother, faster blade response.",
        ],
      },
      {
        heading: "What's new",
        bullets: [
          "CAN bus electronic control mode is now part of the main DC100 software — no separate build.",
          "Faster blade reaction and reduced overshoot on finishing passes.",
          "Simplified installation on compatible electronically controlled dozers.",
          "Unified diagnostics for both hydraulic-valve and CAN configurations.",
        ],
      },
      {
        heading: "What it means on site",
        bullets: [
          "Flatter finished surfaces with fewer corrective passes.",
          "Lower installation time and fewer aftermarket components.",
          "Consistent operator experience across mixed fleets.",
        ],
      },
    ],
  },
  {
    slug: "multiple-design-files-one-operation-gc100-dc100-215",
    category: "news-insights-6",
    title:
      "Multiple Design Files, One Operation: Capability Upgrade for GC100 Grader and DC100 Dozer",
    date: "Mar 13, 2026",
    industry: "Construction",
    readTime: "4 min read",
    excerpt:
      "Real job sites rarely run on a single design file. Operators can now load, switch and reference several surfaces without leaving the cab.",
    image: graderImg,
    hero: indCad,
    sections: [
      {
        heading: "One design file is often not enough",
        body: [
          "On real construction sites, design files are rarely single or static. As projects grow and construction becomes more refined, multiple design surfaces — subgrade, base, wearing course, drainage — coexist on the same stretch of work.",
        ],
      },
      {
        heading: "The upgrade",
        bullets: [
          "Load multiple design files into one project and switch between them in the cab.",
          "Set an active working surface while keeping others visible as reference.",
          "Per-layer offsets for staged construction.",
          "Consistent behaviour across GC100 grader and DC100 dozer systems.",
        ],
      },
      {
        heading: "Benefit",
        bullets: [
          "No downtime to reload files between layers.",
          "Fewer wrong-surface errors on multi-layer roadworks.",
        ],
      },
    ],
  },
  {
    slug: "g31-pro-3d-excavator-system-case-study-128",
    category: "news-insights-6",
    title:
      "Revolutionising Utility Excavation: 30% Efficiency Boost with 3D Guidance",
    date: "Feb 11, 2026",
    industry: "Construction",
    readTime: "5 min read",
    excerpt:
      "A 50,000 sqm utility installation shows how 3D excavator guidance cuts timelines by 30% and removes costly rework.",
    image: excavatorImg,
    hero: indTraffic,
    facts: [
      { k: "Scope", v: "50,000 sqm utility installation" },
      { k: "System", v: "3D excavator guidance" },
      { k: "Timeline", v: "30% faster" },
      { k: "Rework", v: "Effectively eliminated" },
    ],
    sections: [
      {
        heading: "The job",
        body: [
          "Utility excavation demands depth accuracy around live services. Traditional practice means repeated manual checks, an exposed worker in the trench and frequent over-dig that must be backfilled and compacted again.",
        ],
      },
      {
        heading: "With 3D guidance",
        bullets: [
          "Operator sees bucket position against design depth in real time.",
          "Trench profile achieved in fewer passes with no manual depth checks.",
          "As-dug data captured for records and billing.",
        ],
      },
      {
        heading: "Results",
        bullets: [
          "30% shorter programme on the excavation package.",
          "Over-dig and re-compaction costs largely removed.",
          "Improved trench safety through fewer people at the face.",
        ],
      },
    ],
  },
  {
    slug: "rtk-calibration-without-total-station-157",
    category: "news-insights-6",
    title:
      "New RTK Calibration Without a Total Station: Digital Construction Made Simpler",
    date: "Dec 31, 2025",
    industry: "Construction",
    readTime: "4 min read",
    excerpt:
      "Calibration was the last barrier to millimetre guidance for many contractors. A total-station-free procedure removes it.",
    image: excavatorImg,
    hero: indSubstation,
    sections: [
      {
        heading: "The barrier",
        body: [
          "For years technology promised millimetre precision at the blade. For many contractors one barrier remained: calibration — a complex, time-consuming step that usually required a total station and a specialist visit.",
        ],
      },
      {
        heading: "The new procedure",
        bullets: [
          "Guided on-screen routine using the RTK receiver alone.",
          "Completed by the operator in under 15 minutes.",
          "Repeatable when the machine moves to a new site.",
          "Validation check reports residuals before work starts.",
        ],
      },
      {
        heading: "Impact",
        bullets: [
          "No specialist visit for routine recalibration.",
          "Machine guidance becomes viable on smaller, shorter-duration jobs.",
        ],
      },
    ],
  },
  {
    slug: "fjd-trion-india-support-hq-bengaluru-2026",
    category: "news-insights-6",
    title: "FJD Trion India Opens New Support HQ in Bengaluru",
    date: "Jan 05, 2026",
    industry: "Announcement",
    readTime: "3 min read",
    excerpt:
      "A dedicated calibration lab, training floor and RMA centre now serve customers across South India from Bengaluru.",
    image: imgNews,
    hero: imgNews,
    sections: [
      {
        heading: "Announcement",
        body: [
          "FJD Trion India has opened a new support headquarters in Bengaluru, adding local calibration, repair and training capacity for customers across the region.",
        ],
      },
      {
        heading: "What the facility offers",
        bullets: [
          "Accredited calibration bench for LiDAR and GNSS hardware.",
          "Training floor with scan-to-BIM and machine-control labs.",
          "RMA centre targeting a 7-working-day turnaround on covered repairs.",
          "Demo bay for on-request product trials.",
        ],
      },
    ],
  },
];

export const getCategory = (slug: string) =>
  blogCategories.find((c) => c.slug === slug);

export const postsByCategory = (slug: string) =>
  posts.filter((p) => p.category === slug);

export const getPost = (category: string, slug: string) =>
  posts.find((p) => p.category === category && p.slug === slug);