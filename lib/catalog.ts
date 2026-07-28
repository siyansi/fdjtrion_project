
import type { StaticImageData } from "next/image";
import p2Vision from "@/assets/product-p2-vision.png";
import p2Lidar from "@/assets/product-p2-lidar.png";
import v4e from "@/assets/product-v4e-lidar.png";
import v10l from "@/assets/V10l.png";
import p1Lidar from "@/assets/product-p1-lidar.png";
import sSeries from "@/assets/product-s-series.png";
import v4ePro from "@/assets/product-v4e-pro.png";
import baseStation from "@/assets/product-base-station.png";
import excavatorImg from "@/assets/product-excavator.png";
import graderImg from "@/assets/product-grader.png";
import o1Urban from "@/assets/product-o1-urban.png";
import urbanCamera from "@/assets/product-urban-camera.png";
import softwareImg from "@/assets/product-software.jpg";
import indTurf from "@/assets/ind-turf.jpg";
import indBim from "@/assets/ind-bim.jpg";
import indCad from "@/assets/ind-cad.jpg";
import indTraffic from "@/assets/ind-traffic.jpg";
import indForest from "@/assets/ind-forest.jpg";
import indSubstation from "@/assets/ind-substation.jpg";
import indDairy from "@/assets/ind-dairy.jpg";
import indCleaning from "@/assets/ind-cleaning.jpg";

export type Item = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image?: string | StaticImageData;
  highlights?: string[];
  specs?: { k: string; v: string }[];
};

export const productCategories: {
  slug: string;
  name: string;
  blurb: string;
  groups: { title: string; items: Item[] }[];
}[] = [
   {
    slug: "lidar-scanners",
    name: "LiDAR Scanners",
    blurb: "Handheld and mobile LiDAR systems built for reality capture at any scale.",
    groups: [
      { title: "V4e Series", items: [
        { slug: "v4e-lidar", name: "V4e LiDAR", tagline: "The easy way into 3D scanning.", category: "LiDAR Scanners", image: v4e,
          highlights: ["One-button capture", "Auto-registration", "Cloud pipeline"],
          specs: [{k:"Range",v:"120 m"},{k:"Accuracy",v:"±3 cm"},{k:"Weight",v:"850 g"}] },
      ]},
      { title: "P Series", items: [
        { slug: "p2-vision-plus", name: "P2 Vision+", tagline: "Act faster with 3D thermal insight.", category: "LiDAR Scanners", image: p2Vision,
          highlights: ["Real-time SLAM", "Colorised point cloud", "Thermal fusion"],
          specs: [{k:"Range",v:"320 m"},{k:"Accuracy",v:"±2 cm"},{k:"Weight",v:"1.2 kg"}] },
        { slug: "p2-lidar", name: "P2 LiDAR Scanner", tagline: "Go-anywhere scanning.", category: "LiDAR Scanners", image: p2Lidar,
          highlights: ["Rugged IP54", "8-hour battery", "Live preview"],
          specs: [{k:"Range",v:"270 m"},{k:"Accuracy",v:"±2.5 cm"},{k:"Weight",v:"1.35 kg"}] },
        { slug: "p1-lidar", name: "P1 LiDAR Scanner", tagline: "Reality capture made easy.", category: "LiDAR Scanners", image: p1Lidar,
          highlights: ["Compact handheld", "Fast SLAM", "One-click export"],
          specs: [{k:"Range",v:"120 m"},{k:"Accuracy",v:"±3 cm"},{k:"Weight",v:"1.0 kg"}] },
      ]},
      { title: "S Series", items: [
        { slug: "s2-series", name: "S2 Series LiDAR Scanner", tagline: "Scan the toughest without compromise.", category: "LiDAR Scanners", image: sSeries,
          highlights: ["Long-range 450 m", "Dual-return", "Survey-grade IMU"] },
        { slug: "s1-3d", name: "S1 3D LiDAR Scanner", tagline: "A new way to scan the world.", category: "LiDAR Scanners", image: sSeries,
          highlights: ["Compact form", "Colorised output", "Cloud pipeline"] },
      ]},
      { title: "Software", items: [
        { slug: "fjd-trion-model", name: "FJD Trion Model", tagline: "From scans to solutions.", category: "LiDAR Scanners", image: softwareImg },
      ]},
      { title: "Cloud Platform", items: [
        { slug: "fjd-trion-model-web", name: "FJD Trion Model Web", tagline: "Make scan data work for everyone.", category: "LiDAR Scanners", image: softwareImg },
      ]},
    ],
  },
  {
    slug: "gnss-systems",
    name: "GNSS Systems",
    blurb: "Multi-band RTK receivers, base stations and field software.",
    groups: [
      { title: "V4e Series", items: [
        { slug: "v4e-pro", name: "V4e Pro", tagline: "Laser precision made easy.", category: "GNSS Systems", image: v4ePro,
          highlights: ["1408-channel", "IMU tilt survey", "Laser plummet"] },
      ]},
      { title: "V1 Series", items: [
        { slug: "v1t", name: "V1t", tagline: "Work farther with stable GNSS.", category: "GNSS Systems", image: v4ePro,
          highlights: ["Long-range UHF", "Rugged aluminum body"] },
      ]},
      { title: "V10 Series", items: [
        { slug: "v10a", name: "V10a", tagline: "Make stakeout easier with AR.", category: "GNSS Systems", image: v10l },
        { slug: "v10i", name: "V10i", tagline: "Locate points with visual positioning.", category: "GNSS Systems", image: v10l },
        { slug: "v10l", name: "V10L", tagline: "Measure hard-to-reach points.", category: "GNSS Systems", image: v10l },
      ]},
      { title: "Base Station", items: [
        { slug: "base-v1", name: "V1", tagline: "Position every point with confidence.", category: "GNSS Systems", image: baseStation },
        { slug: "n10-cors", name: "N10 Cors System", tagline: "Keep every rover on point.", category: "GNSS Systems", image: baseStation },
      ]},
      { title: "Software", items: [
        { slug: "trion-survey", name: "Trion Survey", tagline: "Field work made easy.", category: "GNSS Systems", image: softwareImg },
        { slug: "gnss-studio", name: "GNSS Studio", tagline: "From observation to output, precisely.", category: "GNSS Systems", image: softwareImg },
      ]},
    ],
  },
  {
    slug: "digital-construction",
    name: "Digital Construction",
    blurb: "3D machine guidance and layout automation for the jobsite.",
    groups: [
      { title: "Excavator", items: [
        { slug: "eg10", name: "EG10 Excavator Guidance System", tagline: "Get more done, with less setup.", category: "Digital Construction", image: excavatorImg,
          highlights: ["Rapid install", "Dual-antenna GNSS", "Live cut/fill"] },
        { slug: "ec100-g31", name: "EC100 (G31 PRO) Excavator Guidance System", tagline: "Less rework, more control.", category: "Digital Construction", image: excavatorImg,
          highlights: ["3D design overlay", "Tilt-bucket ready", "Rugged display"] },
      ]},
      { title: "Motor Grader", items: [
        { slug: "gc100-h36", name: "GC100 (H36 PRO) 3D Motor Grader Control System", tagline: "Achieve accurate grading in one go.", category: "Digital Construction", image: graderImg,
          highlights: ["Auto blade control", "cm-grade accuracy", "One-pass finishing"] },
      ]},
      { title: "Dozer", items: [
        { slug: "dc100-h39", name: "DC100 (H39 PRO) 3D Dozer Control System", tagline: "Smarter cuts, smoother execution.", category: "Digital Construction", image: graderImg,
          highlights: ["Automatic blade", "Slope + elevation", "Design-model aware"] },
      ]},
      { title: "Snow Plow", items: [
        { slug: "sg10", name: "SG10 Snow Removal Guidance System", tagline: "Snow removal, clearly guided.", category: "Digital Construction", image: graderImg,
          highlights: ["Route guidance", "Blade feedback", "All-weather display"] },
      ]},
      { title: "Software", items: [
        { slug: "fjd-trion-terramind", name: "FJD Trion TerraMind", tagline: "A digital bridge to your jobsite.", category: "Digital Construction", image: softwareImg },
      ]},
    ],
  },
  {
    slug: "urban-mapping",
    name: "Urban Mapping",
    blurb: "Mobile mapping platforms for city-scale digital twins.",
    groups: [
      { title: "Urban 3D Modeling", items: [
        { slug: "o1-urban-3d", name: "O1 Urban 3D Modeling", tagline: "A new way to urban-map the world.", category: "Urban Mapping", image: o1Urban,
          highlights: ["Aerial + ground fusion", "Automated meshing", "City-scale output"] },
      ]},
      { title: "Urban Camera", items: [
        { slug: "am150a", name: "AM150A Medium Format Urban Camera", tagline: "Capture every detail in flight.", category: "Urban Mapping", image: urbanCamera,
          highlights: ["Medium-format sensor", "Oblique-ready", "Metric-grade optics"] },
      ]},
    ],
  },
];

export type WorkflowStep = { title: string; description: string };

export type IndustryDetail = Item & {
  hue: string;
  image?: StaticImageData | string; // Added image field
  overview: string;
  challenges: string[];
  workflow: WorkflowStep[];
  outcomes: { k: string; v: string }[];
  recommended: string[]; // product slugs
  deliverables: string[];
};

export const industries: IndustryDetail[] = [
  {
    slug: "turf-management",
    name: "Turf Management",
    category: "Industries",
    image: indTurf,
    tagline: "Precision surveying for golf courses, stadiums & sports turf.",
    hue: "from-emerald-500/40 to-emerald-900/60",
    overview:
      "Capture cm-grade elevation and drainage data across fairways, greens and pitches. Trion turns handheld LiDAR walks into contour maps, slope analytics and irrigation-ready models — no total station required.",
    challenges: [
      "Micro-topography under grass canopy",
      "Drainage & runoff planning",
      "Repeat surveys across seasons",
      "Non-disruptive capture during play",
    ],
    workflow: [
      {
        title: "Walk & Capture",
        description:
          "Handheld P-series LiDAR captures the full course in a single walkthrough — greens, bunkers, cart paths and slopes.",
      },
      {
        title: "SLAM Processing",
        description:
          "Real-time SLAM stitches trajectories into a georeferenced point cloud with sub-3 cm accuracy.",
      },
      {
        title: "Contour & Slope",
        description:
          "Trion Model auto-generates 10 cm contours, slope heat-maps and drainage vectors for the grounds team.",
      },
      {
        title: "Deliverables",
        description:
          "Export DWG, LandXML or IFC for irrigation planners, architects and maintenance crews.",
      },
    ],
    outcomes: [
      { k: "Accuracy", v: "±2 cm" },
      { k: "Coverage", v: "18 holes / day" },
      { k: "Rework", v: "−70%" },
    ],
    recommended: ["p2-vision-plus", "p2-lidar", "v10a"],
    deliverables: [
      "Contour DWG",
      "Slope heat-map",
      "Drainage plan",
      "Irrigation model",
    ],
  },
  {
    slug: "scan-to-bim",
    name: "Scan-to-BIM",
    category: "Industries",
    image: indBim,
    tagline: "From handheld reality capture to Revit-ready BIM.",
    hue: "from-indigo-500/40 to-purple-900/60",
    overview:
      "Turn any existing building into an intelligent BIM model. Walk the site with a P-series scanner and Trion pipelines deliver LOD 200–400 Revit models, ready for renovation, MEP coordination and heritage documentation.",
    challenges: [
      "As-built vs. design mismatches",
      "Complex MEP routing",
      "Occupied buildings & tight schedules",
      "Multi-floor registration",
    ],
    workflow: [
      {
        title: "Scan the Space",
        description:
          "One operator walks the building — floor by floor — capturing walls, ceilings, MEP and façade in a single session.",
      },
      {
        title: "Register & Georeference",
        description:
          "Auto-registration in Trion Model produces a unified, coordinated point cloud with control-point ties.",
      },
      {
        title: "Model in Revit",
        description:
          "Feed the cloud into Revit / ArchiCAD with our BIM templates — walls, slabs, columns, doors, windows, MEP.",
      },
      {
        title: "QA & Deviation",
        description:
          "Deviation analysis colour-codes the model vs. cloud, giving BIM managers instant confidence.",
      },
    ],
    outcomes: [
      { k: "LOD", v: "200–400" },
      { k: "Deviation", v: "< 15 mm" },
      { k: "Time", v: "−60%" },
    ],
    recommended: ["p2-vision-plus", "p2-lidar", "fjd-trion-model"],
    deliverables: [
      "Revit RVT",
      "IFC 2x3 / 4",
      "E57 point cloud",
      "Deviation report",
    ],
  },
  {
    slug: "scan-to-cad",
    name: "Scan-to-CAD",
    category: "Industries",
     image: indCad,
    tagline: "As-built 2D plans, elevations and sections from point clouds.",
    hue: "from-sky-500/40 to-blue-900/60",
    overview:
      "For teams that live in AutoCAD, Trion converts reality-capture data into clean, layered DWGs — floorplans, elevations, sections and site plans — in a fraction of the manual time.",
    challenges: [
      "Manual measure-ups are slow & error-prone",
      "Legacy buildings without drawings",
      "Coordinating trades across sites",
    ],
    workflow: [
      {
        title: "Capture",
        description:
          "P2 LiDAR or V4e walks the interior + exterior in one pass; exterior GNSS-tied via V10 series.",
      },
      {
        title: "Section & Slice",
        description:
          "Generate horizontal and vertical slices at every floor level, cleaned and orthorectified.",
      },
      {
        title: "Vectorise",
        description:
          "Semi-automated vectorisation extracts walls, openings, columns and dimensions into layered DWG.",
      },
      {
        title: "Issue Drawings",
        description:
          "Deliver title-blocked, dimensioned CAD sets — ready for tender, renovation or permits.",
      },
    ],
    outcomes: [
      { k: "Turnaround", v: "3–5 days" },
      { k: "Accuracy", v: "±5 mm" },
      { k: "Layers", v: "AIA / BS" },
    ],
    recommended: ["p2-lidar", "v4e-lidar", "fjd-trion-model"],
    deliverables: [
      "Layered DWG",
      "PDF drawing set",
      "Elevations & sections",
      "Site plan",
    ],
  },
  {
    slug: "traffic-accident",
    name: "Traffic Accident Investigation",
    category: "Industries",
   image: indTraffic,
    tagline: "Millimetre-grade forensic capture that reopens the road in minutes.",
    hue: "from-rose-500/40 to-red-900/60",
    overview:
      "Every minute a lane is closed costs money and lives. Trion's handheld LiDAR lets first responders document a full crash scene — skids, debris, damage, roadway — in under 10 minutes, with courtroom-ready fidelity.",
    challenges: [
      "Live-traffic scene safety",
      "Perishable evidence",
      "Multi-vehicle reconstruction",
      "Chain-of-custody documentation",
    ],
    workflow: [
      {
        title: "Secure & Scan",
        description:
          "One officer walks the perimeter with a P2 scanner — no cones, no manual measurements needed.",
      },
      {
        title: "Clear the Road",
        description:
          "Scene is preserved digitally; roadway reopens while investigation continues off-site.",
      },
      {
        title: "Reconstruct",
        description:
          "Import into forensics software for skid analysis, PDOF and vehicle-dynamics simulation.",
      },
      {
        title: "Report",
        description:
          "Export annotated point clouds, animations and diagrams for court submission.",
      },
    ],
    outcomes: [
      { k: "On-scene", v: "< 10 min" },
      { k: "Accuracy", v: "±2 cm" },
      { k: "Evidence", v: "3D + video" },
    ],
    recommended: ["p2-vision-plus", "p2-lidar"],
    deliverables: [
      "Georeferenced cloud",
      "Skid-mark measurement",
      "Scene animation",
      "Court-ready PDF",
    ],
  },
  {
    slug: "forestry-survey",
    name: "Forestry Survey",
    category: "Industries",
     image: indForest,
    tagline: "DBH, canopy height and biomass — plot after plot, at scale.",
    hue: "from-lime-500/40 to-green-900/60",
    overview:
      "Replace tape, calipers and clinometers with a single 15-minute walk per plot. Trion delivers DBH, tree height, canopy density and biomass estimates automatically — for carbon credits, forest management and biodiversity studies.",
    challenges: [
      "Dense understory & occlusion",
      "Manual DBH is slow",
      "Repeatable plot revisits",
      "GNSS-denied canopy environments",
    ],
    workflow: [
      {
        title: "Plot Walk",
        description:
          "Handheld P-series LiDAR walks the plot in a serpentine pattern — SLAM handles the trees, no GNSS lock needed.",
      },
      {
        title: "Auto-segment",
        description:
          "Trion Model isolates individual trees, extracts stems and derives DBH, height and crown diameter.",
      },
      {
        title: "Biomass Model",
        description:
          "Apply species-specific allometric equations for above-ground biomass and carbon stock.",
      },
      {
        title: "Reporting",
        description:
          "Export CSV, GeoJSON and PDF reports aligned to VCS / Verra methodologies.",
      },
    ],
    outcomes: [
      { k: "Plot time", v: "~15 min" },
      { k: "DBH accuracy", v: "±1 cm" },
      { k: "Trees / day", v: "800+" },
    ],
    recommended: ["p2-lidar", "v4e-lidar"],
    deliverables: [
      "Tree inventory CSV",
      "DBH & height plots",
      "Canopy raster",
      "Carbon report",
    ],
  },
  {
    slug: "substation-inspection",
    name: "Substation Inspection",
    category: "Industries",
     image: indSubstation,
    tagline: "Safe, digital twins of live utility yards — without powering down.",
    hue: "from-amber-500/40 to-orange-900/60",
    overview:
      "Walk the perimeter of an energised substation with a handheld scanner and receive a fully classified digital twin — bushings, transformers, gantries, cable trays — for clearance analysis, maintenance planning and asset management.",
    challenges: [
      "High-voltage safety clearances",
      "Complex overhead structures",
      "Vegetation encroachment",
      "Ageing paper drawings",
    ],
    workflow: [
      {
        title: "Safe-Distance Scan",
        description:
          "Operator walks the outer walkways with a P2 scanner — no ladders, no drone permits, no shutdowns.",
      },
      {
        title: "Classify Assets",
        description:
          "Auto-classification tags conductors, insulators, gantries and equipment for GIS ingestion.",
      },
      {
        title: "Clearance Analysis",
        description:
          "Detect thermal/mechanical clearance violations and vegetation encroachment against IE standards.",
      },
      {
        title: "Digital Twin",
        description:
          "Publish to your GIS / EAM platform for maintenance planning and future capex.",
      },
    ],
    outcomes: [
      { k: "Downtime", v: "Zero" },
      { k: "Coverage", v: "1 yard / day" },
      { k: "Assets", v: "Auto-tagged" },
    ],
    recommended: ["p2-vision-plus", "p2-lidar", "v10l"],
    deliverables: [
      "Classified point cloud",
      "Clearance report",
      "GIS layers",
      "3D digital twin",
    ],
  },
  {
    slug: "dairy-farms",
    name: "Dairy Farms Digitalization",
    category: "Industries",
     image: indDairy,
    tagline: "3D layouts and workflow analytics for modern agri-infrastructure.",
    hue: "from-teal-500/40 to-cyan-900/60",
    overview:
      "From free-stall barns to milking parlours, Trion captures the full facility in 3D — enabling flow-planning, ventilation studies, biosecurity mapping and expansion design for modern Indian dairy operations.",
    challenges: [
      "Complex barn geometries",
      "Animal welfare & flow",
      "Ventilation planning",
      "Expansion feasibility",
    ],
    workflow: [
      {
        title: "Facility Scan",
        description:
          "Walk barns, parlours and yards with a P-series scanner in under an hour per facility.",
      },
      {
        title: "Flow Analysis",
        description:
          "Model cow-flow paths, feed-lane widths and ventilation corridors from the point cloud.",
      },
      {
        title: "Design & Simulate",
        description:
          "Overlay expansion plans directly onto the as-built model — see conflicts before construction.",
      },
      {
        title: "Handover",
        description:
          "3D models integrate with farm-management software and biosecurity zoning.",
      },
    ],
    outcomes: [
      { k: "Capture", v: "1 farm / day" },
      { k: "Detail", v: "Stall-level" },
      { k: "Yield insight", v: "Layout ROI" },
    ],
    recommended: ["p2-lidar", "v4e-lidar"],
    deliverables: [
      "Barn 3D model",
      "Flow diagram",
      "Ventilation plan",
      "Expansion overlay",
    ],
  },
  {
    slug: "cleaning-solutions",
    name: "Cleaning Solutions Deployment",
    category: "Industries",
     image: indCleaning,
    tagline: "LiDAR maps that teach robots where — and how — to clean.",
    hue: "from-fuchsia-500/40 to-pink-900/60",
    overview:
      "Deploy autonomous cleaning robots faster. Trion pre-maps facilities — malls, airports, factories — producing SLAM-ready floor plans, no-go zones and coverage routes that plug straight into leading robotics platforms.",
    challenges: [
      "Cold-start SLAM in dynamic spaces",
      "Multi-floor coordination",
      "No-go & compliance zones",
      "Facility change management",
    ],
    workflow: [
      {
        title: "Pre-Map",
        description:
          "Walk the site once with a P-series scanner to build a georeferenced base map — before robots arrive.",
      },
      {
        title: "Zone & Annotate",
        description:
          "Tag obstacles, no-go zones, docks and elevator interfaces directly in Trion Model.",
      },
      {
        title: "Route Plan",
        description:
          "Auto-generate coverage routes with time and battery estimates per zone.",
      },
      {
        title: "Export to Robot",
        description:
          "One-click export to the SLAM SDK — compatible with major indoor cleaning-robot platforms.",
      },
    ],
    outcomes: [
      { k: "Onboarding", v: "−80%" },
      { k: "Coverage", v: "Optimised" },
      { k: "Change-mgmt", v: "Instant re-map" },
    ],
    recommended: ["p2-lidar", "v4e-lidar", "fjd-trion-model"],
    deliverables: [
      "SLAM base map",
      "Zoned floorplan",
      "Route file",
      "SDK bundle",
    ],
  },
];

export const supportItems: Item[] = [
  { slug: "download-center", name: "Download Center", tagline: "Firmware, drivers & documentation.", category: "Support" },
  { slug: "slam-sdk", name: "SLAM SDK", tagline: "Build with our reality-capture engine.", category: "Support" },
  { slug: "training", name: "Training & Certification", tagline: "Live and on-demand courses.", category: "Support" },
  { slug: "warranty", name: "Warranty & RMA", tagline: "Service across India.", category: "Support" },
];

export function findProduct(slug: string): Item | undefined {
  for (const c of productCategories)
    for (const g of c.groups)
      for (const it of g.items) if (it.slug === slug) return it;
  return undefined;
}

export function findIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function findSupport(slug: string) {
  return supportItems.find((i) => i.slug === slug);
}