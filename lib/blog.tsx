import blogTownhall from "@/assets/blog-townhall.jpg";
import blogForest from "@/assets/blog-forest.jpg";
import blogExcavator from "@/assets/blog-excavator.jpg";
import blogSoftware from "@/assets/blog-software.jpg";
import pointcloudCastle from "@/assets/pointcloud-castle.jpg";
import meshBuilding from "@/assets/mesh-building.jpg";
import scannerHero from "@/assets/scanner-hero.jpg";
import scannerCamera from "@/assets/scanner-camera.jpg";
import scannerCpu from "@/assets/scanner-cpu.jpg";
import laptopSoftware from "@/assets/laptop-software.jpg";
import tabletApp from "@/assets/tablet-app.jpg";
import appPhone from "@/assets/app-phone.jpg";
import gnssV4e from "@/assets/gnss-v4e.jpg";
import golfSurveyor from "@/assets/golf-surveyor.jpg";
import golfPointcloud from "@/assets/golf-pointcloud.jpg";
import golfPointcloudTop from "@/assets/golf-pointcloud-top.jpg";

export type AssetSrc = string | { src: string };

export function getAssetUrl(src: AssetSrc): string {
  if (typeof src === "string") return src;
  return src.src;
}
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; by?: string }
  | { type: "image"; src: AssetSrc; caption?: string }
  | { type: "video"; src: string; caption?: string }
  | { type: "specs"; rows: [string, string][] };

export type Post = {
  slug: string;
  category: CategoryId;
  title: string;
  date: string;
  industry?: string;
  excerpt: string;
  cover: AssetSrc;
  readTime: string;
  body: Block[];
};

export type CategoryId = "product-updates" | "customer-stories" | "news-insights";

export const CATEGORIES: {
  id: CategoryId;
  name: string;
  blurb: string;
  cover: AssetSrc;
  video: string;
}[] = [
  {
    id: "product-updates",
    name: "Product Updates",
    blurb:
      "Firmware, app and cloud release notes for every Trion scanner, receiver and software platform.",
    cover: blogSoftware,
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "customer-stories",
    name: "Customer Stories",
    blurb:
      "Real jobs, real teams — how surveyors, foresters and contractors put reality capture to work.",
    cover: blogTownhall,
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "news-insights",
    name: "News & Insights",
    blurb:
      "Company announcements, technology deep dives and field-tested perspectives from our engineers.",
    cover: blogExcavator,
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
];

const VID_A =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";
const VID_B =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4";

export const POSTS: Post[] = [
  /* ---------------- PRODUCT UPDATES ---------------- */
  {
    slug: "trion-model-web-v1-4-5",
    category: "product-updates",
    title: "FJD Trion Model Web V1.4.5",
    date: "Jul 6, 2026",
    excerpt:
      "UI redesign of the home and model browsing pages, theme switching, faster cloud rendering and a reworked sharing flow.",
    cover: blogSoftware,
    readTime: "4 min read",
    body: [
      { type: "h", text: "I. New Features" },
      {
        type: "list",
        items: [
          "UI redesign of home and model browsing pages — a more refined visual experience with larger previews and cleaner grouping.",
          "Theme switching — supports switching between light and dark themes, with the preference stored per account.",
          "Model comparison view — open two point cloud versions side by side with synchronised cameras.",
          "Shared link permissions — set view-only, measure or download rights per recipient.",
        ],
      },
      { type: "image", src: laptopSoftware, caption: "Redesigned model browsing page in dark theme" },
      { type: "h", text: "II. Optimizations" },
      {
        type: "list",
        items: [
          "Up to 40% faster first-frame rendering for models above 500 million points.",
          "Measurement tools now snap to planes and edges automatically.",
          "Improved upload resume after network interruption.",
        ],
      },
      { type: "video", src: VID_A, caption: "Walkthrough of the new browsing experience" },
      { type: "h", text: "III. Fixes" },
      {
        type: "list",
        items: [
          "Fixed occasional colourisation mismatch on GNSS-registered scans.",
          "Fixed thumbnail generation failure for projects with non-ASCII names.",
        ],
      },
      {
        type: "specs",
        rows: [
          ["Product Name", "FJD Trion Model Web"],
          ["Version", "V1.4.5"],
          ["Release Date", "2026-07-06"],
          ["Update Method", "Online"],
        ],
      },
    ],
  },
  {
    slug: "trion-s2-firmware-v1-4-2",
    category: "product-updates",
    title: "FJD Trion S2 Firmware V1.4.2",
    date: "Jul 6, 2026",
    excerpt:
      "Movement speed display, overspeed detection with voice and vibration alerts, and improved SLAM stability in tunnels.",
    cover: scannerHero,
    readTime: "3 min read",
    body: [
      { type: "h", text: "I. New Features" },
      {
        type: "list",
        items: [
          "Added movement speed display — speed limit indicators are now provided for different scanning modes.",
          "Added overspeed detection with voice and vibration alerts when the speed threshold is exceeded.",
          "Added quick loop-closure prompt when the operator returns to a previously scanned area.",
        ],
      },
      { type: "image", src: scannerCpu, caption: "S2 processing unit — real-time SLAM on device" },
      { type: "h", text: "II. Optimizations" },
      {
        type: "list",
        items: [
          "Improved SLAM stability in long featureless corridors and tunnels.",
          "Reduced cold-start time from 18s to 11s.",
          "Battery gauge accuracy improved below 20%.",
        ],
      },
      {
        type: "specs",
        rows: [
          ["Product Name", "FJD Trion S2"],
          ["Version", "V1.4.2"],
          ["Release Date", "2026-07-06"],
          ["Update Method", "OTA / FJD Trion Scan"],
        ],
      },
    ],
  },
  {
    slug: "trion-p2-firmware-v1-2-0",
    category: "product-updates",
    title: "FJD Trion P2 Firmware V1.2.0",
    date: "Jun 22, 2026",
    excerpt:
      "Rover management, device orientation display in the real-time point cloud view, and a refreshed file manager.",
    cover: scannerCamera,
    readTime: "4 min read",
    body: [
      { type: "h", text: "I. New Features" },
      {
        type: "list",
        items: [
          "Rover Management — enter rover information before connecting an RTK receiver and reapply saved configurations.",
          "Device orientation display — the real-time point cloud interface now shows a radar-head icon with a front spotlight that moves and rotates with the scanner.",
          "Infrared preview improvements for P2 Vision+ units.",
        ],
      },
      { type: "video", src: VID_B, caption: "Real-time point cloud with orientation indicator" },
      { type: "image", src: pointcloudCastle, caption: "Colourised capture from a P2 running V1.2.0" },
      {
        type: "specs",
        rows: [
          ["Product Name", "FJD Trion P2"],
          ["Version", "V1.2.0"],
          ["Release Date", "2026-06-22"],
          ["Update Method", "OTA"],
        ],
      },
    ],
  },
  {
    slug: "trion-scan-v3-7-0",
    category: "product-updates",
    title: "FJD Trion Scan V3.7.0",
    date: "May 21, 2026",
    excerpt:
      "Upgrades V4e / V4e Pro mapping capability to improve field efficiency, RTK stability and data reliability.",
    cover: tabletApp,
    readTime: "3 min read",
    body: [
      { type: "h", text: "I. Version Overview" },
      {
        type: "p",
        text: "This release upgrades V4e / V4e Pro mapping capabilities to improve field mapping efficiency, RTK work stability, and data reliability.",
      },
      {
        type: "list",
        items: [
          "Adds V4e Series point cloud mapping mode.",
          "Adds automatic reconnection for RTK links after signal loss.",
          "Adds on-device data integrity check before project export.",
        ],
      },
      { type: "image", src: gnssV4e, caption: "V4e receiver paired with FJD Trion Scan" },
      {
        type: "specs",
        rows: [
          ["Product Name", "FJD Trion Scan"],
          ["Version", "V3.7.0"],
          ["Platform", "Android 8 or above / iOS 14 or above"],
          ["Release Date", "2026-05-21"],
        ],
      },
    ],
  },
  {
    slug: "trion-survey-v2-1-8",
    category: "product-updates",
    title: "FJD Trion Survey V2.1.8",
    date: "Apr 29, 2026",
    excerpt:
      "Controller support for E200 / E600 / E800 / UA80 / D10, new stakeout workflow and CAD background layers.",
    cover: appPhone,
    readTime: "3 min read",
    body: [
      { type: "h", text: "1. Basic Information" },
      {
        type: "specs",
        rows: [
          ["Product Name", "FJD Trion Survey"],
          ["Version", "v2.1.8.5"],
          ["Release Date", "2026-04-30"],
          ["Controller", "FJD E200 / E600 / E800 / UA80 / D10"],
          ["Platform", "Android 8 or above"],
          ["Update Method", "OTA"],
        ],
      },
      { type: "h", text: "2. New Features" },
      {
        type: "list",
        items: [
          "New stakeout workflow with large-format guidance arrows.",
          "CAD background layers (DXF) can be loaded directly on the map view.",
          "Point library filtering by code, layer and collection time.",
        ],
      },
    ],
  },
  {
    slug: "trion-model-v2-0-8",
    category: "product-updates",
    title: "FJD Trion Model V2.0.8",
    date: "Apr 23, 2026",
    excerpt:
      "One-click floor plan extraction for indoor scenes within 200 m² plus building correction for scanned facades.",
    cover: meshBuilding,
    readTime: "4 min read",
    body: [
      { type: "h", text: "I. Drawing Module Upgrade" },
      {
        type: "list",
        items: [
          "Floor plan extraction — one-click extraction for indoor scenes within 200 m².",
          "Building correction — aligns scanned building point clouds to true vertical and orthogonal axes.",
          "Section generation at arbitrary heights with automatic dimensioning.",
        ],
      },
      { type: "image", src: meshBuilding, caption: "Mesh generated from a P2 indoor capture" },
      { type: "h", text: "II. Forestry Enhancements" },
      {
        type: "list",
        items: [
          "Supports individual tree circumference calculation.",
          "Preset ground and forest types for quick selection.",
          "Total tree count statistics in exported reports.",
        ],
      },
    ],
  },

  /* ---------------- CUSTOMER STORIES ---------------- */
  {
    slug: "paper-to-digital-turkiye",
    category: "customer-stories",
    title:
      "From Paper to Digital: How FJD Trion Revolutionized Building Measurement in Türkiye",
    date: "Mar 26, 2026",
    industry: "Surveying",
    excerpt:
      "Tape measures, theodolites and blueprint paper gave way to a handheld scanner — and a two-day job became two hours.",
    cover: golfSurveyor,
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Traditionally, building measurement in Türkiye, as in many other parts of the world, relied heavily on manual techniques. Surveyors would use tape measures, theodolites and blueprint paper to record dimensions room by room, then redraw everything back at the office.",
      },
      { type: "h", text: "The challenge" },
      {
        type: "p",
        text: "For a renovation project covering eleven floors of a 1970s office block in Istanbul, the client needed accurate as-built drawings within a week. Manual measurement alone would have consumed most of that window, and any transcription error would surface only once construction began.",
      },
      { type: "image", src: golfSurveyor, caption: "Field team preparing the handheld scan route" },
      { type: "h", text: "The workflow" },
      {
        type: "list",
        items: [
          "Single continuous walk-through capture per floor with the FJD Trion P2.",
          "Loop closure at the stairwell to tie floors into one coordinate frame.",
          "Automatic floor plan extraction in FJD Trion Model.",
          "Export to DWG for the architectural team.",
        ],
      },
      { type: "video", src: VID_A, caption: "Walk-through capture inside the building" },
      {
        type: "quote",
        text: "What used to take our team two full days of measuring and drafting now takes a two-hour walk and an afternoon in the office.",
        by: "Survey lead, Istanbul",
      },
      { type: "h", text: "The result" },
      {
        type: "specs",
        rows: [
          ["Area captured", "9,400 m² over 11 floors"],
          ["Field time", "2 hours 10 minutes"],
          ["Drafting time saved", "~70%"],
          ["Deliverable", "DWG floor plans + colourised point cloud"],
        ],
      },
    ],
  },
  {
    slug: "seeing-the-forest-through-the-trees",
    category: "customer-stories",
    title: 'Seeing the Forest Through the Trees: "LiDAR Captures Today for the Future"',
    date: "Mar 26, 2026",
    industry: "Forestry",
    excerpt:
      "Forest inventory teams use handheld LiDAR to measure DBH, height and stem count without touching a single tree.",
    cover: blogForest,
    readTime: "7 min read",
    body: [
      {
        type: "p",
        text: "As an integral part of our ecosystem, forests are invaluable by any measure. They provide habitat for wildlife and play a crucial role in carbon sequestration, water purification and soil stability. Measuring them, however, has always been slow, physical work.",
      },
      { type: "image", src: blogForest, caption: "Canopy captured as a classified point cloud" },
      { type: "h", text: "From calipers to point clouds" },
      {
        type: "p",
        text: "A traditional inventory plot takes a two-person crew roughly 45 minutes: measure diameter at breast height with calipers, estimate height with a clinometer, record species, repeat. With a handheld scanner the same plot is a three-minute walk, and every stem in the plot is measured rather than sampled.",
      },
      {
        type: "list",
        items: [
          "Individual tree circumference and DBH computed automatically.",
          "Total stem count per plot with species tagging from imagery.",
          "Canopy height model derived from the same capture.",
          "Repeat scans compared year over year to track growth.",
        ],
      },
      { type: "video", src: VID_B, caption: "Walking a 0.1 ha inventory plot" },
      {
        type: "quote",
        text: "LiDAR captures today for the future. In ten years we can go back to this exact dataset and ask questions we haven't even thought of yet.",
        by: "Forest inventory manager",
      },
    ],
  },
  {
    slug: "frankfurt-old-town-hall-p2",
    category: "customer-stories",
    title: "Capturing Frankfurt's Old Town Hall in 3D with FJD Trion P2",
    date: "Dec 29, 2025",
    industry: "Digital Preservation",
    excerpt:
      "A Gothic landmark on Römerberg Square, recorded in a single afternoon as a millimetre-detailed digital twin.",
    cover: blogTownhall,
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "In the heart of Frankfurt's historic district lies Römerberg Square, home to the city's iconic Old Town Hall — a Gothic-style building complex that has stood as a symbol of civic pride for more than six centuries.",
      },
      { type: "image", src: blogTownhall, caption: "Scanning the facade at dusk" },
      { type: "h", text: "Why 3D" },
      {
        type: "p",
        text: "Heritage teams needed a record accurate enough to plan stone restoration and complete enough to serve as a permanent archive. Photogrammetry alone struggled with the deep ornament and low winter light; terrestrial laser scanning would have required dozens of tripod setups across a busy public square.",
      },
      { type: "h", text: "The capture" },
      {
        type: "specs",
        rows: [
          ["Scanner", "FJD Trion P2"],
          ["Capture time", "3 hours 40 minutes"],
          ["Points collected", "1.9 billion"],
          ["Absolute accuracy", "Better than 2 cm after GNSS registration"],
          ["Deliverables", "Colourised point cloud, textured mesh, elevation drawings"],
        ],
      },
      { type: "image", src: pointcloudCastle, caption: "Colourised point cloud of the facade" },
      { type: "video", src: VID_A, caption: "Fly-through of the finished digital twin" },
    ],
  },
  {
    slug: "v10l-cotopaxi-volcano",
    category: "customer-stories",
    title: "Safe, Fast, Accurate: V10L Receiver in Action on Cotopaxi Volcano",
    date: "Dec 29, 2025",
    industry: "Surveying",
    excerpt:
      "At 5,897 m on one of Earth's most active volcanoes, control points had to be established in minutes, not hours.",
    cover: gnssV4e,
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Towering 5,897 metres above sea level, Cotopaxi is not only Ecuador's second-highest peak — it is also one of the most active volcanoes on Earth. Known for its snow-capped cone and unpredictable seismic behaviour, it is a place where every extra minute on the mountain carries risk.",
      },
      { type: "image", src: gnssV4e, caption: "V10L receiver on a high-altitude control point" },
      { type: "h", text: "Working against the clock" },
      {
        type: "list",
        items: [
          "Sub-minute fix times using multi-constellation tracking (BDS, GPS, GLONASS, Galileo).",
          "IP68 housing and −40 °C cold start for exposed summit work.",
          "Tilt compensation so points could be logged without levelling the pole in wind.",
          "16-hour battery covering the full ascent and descent.",
        ],
      },
      {
        type: "quote",
        text: "We cut our time in the hazard zone by more than half. That is not a convenience — that is a safety outcome.",
        by: "Field geodesist, Quito",
      },
    ],
  },
  {
    slug: "320-floors-in-one-day-hong-kong",
    category: "customer-stories",
    title: "320 Floors in One Day: Mapping a Public Housing Estate in Hong Kong",
    date: "Nov 13, 2025",
    industry: "Surveying",
    excerpt:
      "A robotics team replaced weeks of cleaning-robot mapping with a few days of handheld LiDAR capture.",
    cover: golfPointcloudTop,
    readTime: "5 min read",
    body: [
      {
        type: "quote",
        text: "What used to take us weeks of tedious work with cleaning-robot mapping, the FJD Trion P1 helped us accomplish in just a few days. It's not just an improvement; it's a revolution in how we map.",
        by: "Robotics deployment lead, Hong Kong",
      },
      {
        type: "p",
        text: "Autonomous cleaning robots need a prior map of every corridor, lobby and lift landing they serve. Driving the robot itself to build that map ties up the fleet and can only happen outside resident hours.",
      },
      { type: "image", src: golfPointcloudTop, caption: "Aerial view of the estate scan" },
      { type: "h", text: "Numbers from the job" },
      {
        type: "specs",
        rows: [
          ["Floors captured", "320 in a single day"],
          ["Buildings", "8 residential towers"],
          ["Crew", "2 operators"],
          ["Output", "2D occupancy maps + 3D point cloud per tower"],
        ],
      },
      { type: "video", src: VID_B, caption: "Corridor capture during daytime operation" },
    ],
  },
  {
    slug: "scan-to-cad-workflow",
    category: "customer-stories",
    title: "Transforming Building Surveying: A Seamless Scan-to-CAD Workflow",
    date: "Nov 10, 2025",
    industry: "Surveying",
    excerpt:
      "How to convert physical space into drafted CAD deliverables without ever redrawing from scratch.",
    cover: laptopSoftware,
    readTime: "8 min read",
    body: [
      {
        type: "p",
        text: "In architecture, construction and facility management there is one big question for anyone recording information about a place: how can we efficiently and accurately convert physical space into a drawing someone can build from?",
      },
      { type: "h", text: "The five-step workflow" },
      {
        type: "list",
        items: [
          "1. Plan the loop — walk a closed route so SLAM can tie the start and end together.",
          "2. Capture — one continuous scan per floor, pausing at doorways for overlap.",
          "3. Process — automatic registration and colourisation in FJD Trion Model.",
          "4. Extract — one-click floor plans, sections and elevations.",
          "5. Deliver — export DWG/DXF and hand the point cloud over as a reference layer.",
        ],
      },
      { type: "image", src: laptopSoftware, caption: "Extracted floor plan over the source point cloud" },
      { type: "video", src: VID_A, caption: "Scan-to-CAD in practice" },
    ],
  },

  /* ---------------- NEWS & INSIGHTS ---------------- */
  {
    slug: "notice-non-official-sales-channels",
    category: "news-insights",
    title: "Notice Regarding Purchases from Non-Official Sales Channels",
    date: "Jun 22, 2026",
    excerpt:
      "An important customer notice about unverified third-party sellers and how to confirm an authorised dealer.",
    cover: blogSoftware,
    readTime: "2 min read",
    body: [
      {
        type: "p",
        text: "FJDynamics has recently become aware that certain third-party platforms and sellers may be displaying, promoting or offering FJDynamics / FJD Trion products and related services that are unverified by us.",
      },
      { type: "h", text: "What this means for you" },
      {
        type: "list",
        items: [
          "Products from unauthorised channels may not carry a valid warranty.",
          "Firmware and cloud services may not be activatable on grey-market serial numbers.",
          "Technical support and calibration certificates cannot be guaranteed.",
        ],
      },
      { type: "h", text: "How to verify a seller" },
      {
        type: "p",
        text: "Purchase only through the official store or an authorised distributor listed on our website. If you are unsure, send the seller name and product serial number to our support team and we will confirm before you buy.",
      },
    ],
  },
  {
    slug: "dc100-dozer-can-bus-control",
    category: "news-insights",
    title:
      "DC100 Dozer Control System: CAN Bus Electronic Control Officially Integrated",
    date: "Mar 23, 2026",
    industry: "Construction",
    excerpt:
      "Dozer automation moves from a supporting feature toward sophisticated intelligent control.",
    cover: blogExcavator,
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "As the level of intelligence in construction machinery continues to advance, dozer automation is evolving from a supporting feature toward more sophisticated intelligent control. Our goal is to enable the blade to respond directly to the design surface rather than to the operator's correction.",
      },
      { type: "image", src: blogExcavator, caption: "Machine control on a live earthworks site" },
      { type: "h", text: "What CAN bus control changes" },
      {
        type: "list",
        items: [
          "Commands go straight to the machine's electronic valves — no aftermarket hydraulic kit.",
          "Faster blade response and smoother finish passes on grade.",
          "Cleaner installation with fewer external hoses and sensors.",
          "Diagnostics read directly from the machine ECU.",
        ],
      },
      { type: "video", src: VID_B, caption: "Automatic blade control holding design grade" },
    ],
  },
  {
    slug: "multiple-design-files-one-operation",
    category: "news-insights",
    title:
      "Multiple Design Files, One Operation: Capability Upgrade for GC100 and DC100",
    date: "Feb 25, 2026",
    industry: "Construction",
    excerpt:
      "On real sites a single design file is rarely enough. Operators can now load and switch surfaces without leaving the cab.",
    cover: tabletApp,
    readTime: "4 min read",
    body: [
      { type: "h", text: "Real job sites: one design file is often not enough" },
      {
        type: "p",
        text: "On real construction sites, design files are rarely single or static. As projects grow in scale and construction becomes more refined, multiple design surfaces — subgrade, base course, final grade — are in play on the same shift.",
      },
      {
        type: "list",
        items: [
          "Load multiple design files into one project and switch between them in the cab.",
          "Per-surface offsets so a single design can drive several lift levels.",
          "Visual indicator of the active surface at all times.",
        ],
      },
      { type: "image", src: tabletApp, caption: "In-cab display with multiple loaded surfaces" },
    ],
  },
  {
    slug: "g31-pro-utility-excavation-case-study",
    category: "news-insights",
    title:
      "Revolutionizing Utility Excavation: 30% Efficiency Boost with FJD G31 PRO",
    date: "Feb 11, 2026",
    industry: "Construction",
    excerpt:
      "A 50,000 sqm utility installation in Vaughan, Ontario — timelines cut by 30% and rework effectively eliminated.",
    cover: blogExcavator,
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Discover how the FJD G31 PRO 3D excavator guidance system transformed a 50,000 sqm utility installation in Vaughan, Ontario, slashing timelines by 30% and eliminating costly rework.",
      },
      {
        type: "specs",
        rows: [
          ["Site", "Vaughan, Ontario, Canada"],
          ["Scope", "50,000 m² utility installation"],
          ["System", "FJD G31 PRO 3D excavator guidance"],
          ["Schedule improvement", "30% faster"],
          ["Rework", "Effectively eliminated"],
        ],
      },
      { type: "h", text: "Where the time came from" },
      {
        type: "list",
        items: [
          "No grade checker in the trench — depth is read from the cab.",
          "Fewer survey callouts between lifts.",
          "As-built capture logged automatically as the bucket works.",
        ],
      },
      { type: "video", src: VID_A, caption: "Trenching to design depth with 3D guidance" },
    ],
  },
  {
    slug: "rtk-calibration-without-total-station",
    category: "news-insights",
    title:
      "New RTK Calibration Without a Total Station: Digital Construction Made Simpler",
    date: "Dec 31, 2025",
    industry: "Construction",
    excerpt:
      "For years calibration was the barrier between contractors and millimetre precision. Not any more.",
    cover: golfPointcloud,
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "For years, technology promised to revolutionise earthmoving, delivering millimetre precision right to the blade. But for many contractors a single barrier remained: calibration — that complex, time-consuming ritual that usually required a total station and a specialist.",
      },
      { type: "image", src: golfPointcloud, caption: "Reference surface captured for calibration" },
      { type: "h", text: "The new procedure" },
      {
        type: "list",
        items: [
          "Set the machine on a known point and confirm with the RTK rover.",
          "Run a guided three-pose routine — the system solves the geometry itself.",
          "Verify against a second point; the whole process takes under 15 minutes.",
        ],
      },
      {
        type: "quote",
        text: "The first calibration I did on my own took twelve minutes. I had budgeted half a day and a surveyor.",
        by: "Owner-operator, Austria",
      },
    ],
  },
];

export function postsByCategory(id: CategoryId) {
  return POSTS.filter((p) => p.category === id);
}

export function getPost(category: string, slug: string) {
  return POSTS.find((p) => p.category === category && p.slug === slug);
}

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}