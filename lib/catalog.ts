import type { StaticImageData } from "next/image";
import p2Vision from "@/assets/product-p2-vision.png";
import p2Lidar from "@/assets/product-p2-lidar.png";
import v4e from "@/assets/product-v4e-lidar.png";
import v10l from "@/assets/product-v10l-gnss.png";

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
        { slug: "p1-lidar", name: "P1 LiDAR Scanner", tagline: "Reality capture made easy.", category: "LiDAR Scanners", image: p2Lidar,
          highlights: ["Compact handheld", "Fast SLAM", "One-click export"],
          specs: [{k:"Range",v:"120 m"},{k:"Accuracy",v:"±3 cm"},{k:"Weight",v:"1.0 kg"}] },
      ]},
      { title: "S Series", items: [
        { slug: "s2-series", name: "S2 Series LiDAR Scanner", tagline: "Scan the toughest without compromise.", category: "LiDAR Scanners",
          highlights: ["Long-range 450 m", "Dual-return", "Survey-grade IMU"] },
        { slug: "s1-3d", name: "S1 3D LiDAR Scanner", tagline: "A new way to scan the world.", category: "LiDAR Scanners",
          highlights: ["Compact form", "Colorised output", "Cloud pipeline"] },
      ]},
      { title: "Software", items: [
        { slug: "fjd-trion-model", name: "FJD Trion Model", tagline: "From scans to solutions.", category: "LiDAR Scanners" },
      ]},
      { title: "Cloud Platform", items: [
        { slug: "fjd-trion-model-web", name: "FJD Trion Model Web", tagline: "Make scan data work for everyone.", category: "LiDAR Scanners" },
      ]},
    ],
  },
  {
    slug: "gnss-systems",
    name: "GNSS Systems",
    blurb: "Multi-band RTK receivers, base stations and field software.",
    groups: [
      { title: "V4e Series", items: [
        { slug: "v4e-pro", name: "V4e Pro", tagline: "Laser precision made easy.", category: "GNSS Systems",
          highlights: ["1408-channel", "IMU tilt survey", "Laser plummet"] },
      ]},
      { title: "V1 Series", items: [
        { slug: "v1t", name: "V1t", tagline: "Work farther with stable GNSS.", category: "GNSS Systems",
          highlights: ["Long-range UHF", "Rugged aluminum body"] },
      ]},
      { title: "V10 Series", items: [
        { slug: "v10a", name: "V10a", tagline: "Make stakeout easier with AR.", category: "GNSS Systems", image: v10l },
        { slug: "v10i", name: "V10i", tagline: "Locate points with visual positioning.", category: "GNSS Systems", image: v10l },
        { slug: "v10l", name: "V10L", tagline: "Measure hard-to-reach points.", category: "GNSS Systems", image: v10l },
      ]},
      { title: "Base Station", items: [
        { slug: "base-v1", name: "V1", tagline: "Position every point with confidence.", category: "GNSS Systems" },
        { slug: "n10-cors", name: "N10 Cors System", tagline: "Keep every rover on point.", category: "GNSS Systems" },
      ]},
      { title: "Software", items: [
        { slug: "trion-survey", name: "Trion Survey", tagline: "Field work made easy.", category: "GNSS Systems" },
        { slug: "gnss-studio", name: "GNSS Studio", tagline: "From observation to output, precisely.", category: "GNSS Systems" },
      ]},
    ],
  },
  {
    slug: "digital-construction",
    name: "Digital Construction",
    blurb: "3D machine guidance and layout automation for the jobsite.",
    groups: [
      { title: "Excavator", items: [
        { slug: "eg10", name: "EG10 Excavator Guidance System", tagline: "Get more done, with less setup.", category: "Digital Construction",
          highlights: ["Rapid install", "Dual-antenna GNSS", "Live cut/fill"] },
        { slug: "ec100-g31", name: "EC100 (G31 PRO) Excavator Guidance System", tagline: "Less rework, more control.", category: "Digital Construction",
          highlights: ["3D design overlay", "Tilt-bucket ready", "Rugged display"] },
      ]},
      { title: "Motor Grader", items: [
        { slug: "gc100-h36", name: "GC100 (H36 PRO) 3D Motor Grader Control System", tagline: "Achieve accurate grading in one go.", category: "Digital Construction",
          highlights: ["Auto blade control", "cm-grade accuracy", "One-pass finishing"] },
      ]},
      { title: "Dozer", items: [
        { slug: "dc100-h39", name: "DC100 (H39 PRO) 3D Dozer Control System", tagline: "Smarter cuts, smoother execution.", category: "Digital Construction",
          highlights: ["Automatic blade", "Slope + elevation", "Design-model aware"] },
      ]},
      { title: "Snow Plow", items: [
        { slug: "sg10", name: "SG10 Snow Removal Guidance System", tagline: "Snow removal, clearly guided.", category: "Digital Construction",
          highlights: ["Route guidance", "Blade feedback", "All-weather display"] },
      ]},
      { title: "Software", items: [
        { slug: "fjd-trion-terramind", name: "FJD Trion TerraMind", tagline: "A digital bridge to your jobsite.", category: "Digital Construction" },
      ]},
    ],
  },
  {
    slug: "urban-mapping",
    name: "Urban Mapping",
    blurb: "Mobile mapping platforms for city-scale digital twins.",
    groups: [
      { title: "Urban 3D Modeling", items: [
        { slug: "o1-urban-3d", name: "O1 Urban 3D Modeling", tagline: "A new way to urban-map the world.", category: "Urban Mapping",
          highlights: ["Aerial + ground fusion", "Automated meshing", "City-scale output"] },
      ]},
      { title: "Urban Camera", items: [
        { slug: "am150a", name: "AM150A Medium Format Urban Camera", tagline: "Capture every detail in flight.", category: "Urban Mapping",
          highlights: ["Medium-format sensor", "Oblique-ready", "Metric-grade optics"] },
      ]},
    ],
  },
];

export const industries: Item[] = [
  { slug: "turf-management", name: "Turf Management", tagline: "Precision surveying for golf courses & stadiums.", category: "Industries" },
  { slug: "scan-to-bim", name: "Scan-to-BIM", tagline: "Reality capture to Revit-ready BIM.", category: "Industries" },
  { slug: "scan-to-cad", name: "Scan-to-CAD", tagline: "As-built plans from point clouds.", category: "Industries" },
  { slug: "traffic-accident", name: "Traffic Accident Investigation", tagline: "Millimetre-grade forensic capture in minutes.", category: "Industries" },
  { slug: "forestry-survey", name: "Forestry Survey", tagline: "DBH, canopy and biomass at scale.", category: "Industries" },
  { slug: "substation-inspection", name: "Substation Inspection", tagline: "Safe digital twins of live utility yards.", category: "Industries" },
  { slug: "dairy-farms", name: "Dairy Farms Digitalization", tagline: "3D layouts for modern agri infrastructure.", category: "Industries" },
  { slug: "cleaning-solutions", name: "Cleaning Solutions Deployment", tagline: "Robotic cleaning routes from LiDAR maps.", category: "Industries" },
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
