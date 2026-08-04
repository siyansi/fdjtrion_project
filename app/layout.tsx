import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
// @ts-ignore
import { Navbar } from "@/component/navbar";
import { Footers } from "@/component/footer";
import "@/app/globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Comprehensive SEO Metadata for Google #1 Ranking
export const metadata: Metadata = {
  metadataBase: new URL("https://jasgeomatics.com"), // Update to your official domain
  title: {
    default: "JAS Geomatics India | Leading RTK Rovers, LiDAR & 3D Guidance Systems",
    template: "%s | JAS Geomatics India",
  },
  description:
    "JAS Geomatics India is the authorized provider of FJD Trion RTK Rovers, 3D Excavator & Dozer Machine Control Systems, LiDAR Scanners, and Survey Solutions in Tamil Nadu.",
  keywords: [
    "JAS Geomatics India",
    "FJD Trion RTK Rover",
    "LiDAR Scanner India",
    "3D Machine Control System",
    "Excavator Guidance System",
    "Geomatics Dharmapuri",
    "Land Surveying Equipment Tamil Nadu",
  ],
  authors: [{ name: "JAS Geomatics India" }],
  creator: "JAS Geomatics India",
  openGraph: {
    title: "JAS Geomatics India | Advanced Surveying & 3D Control Systems",
    description:
      "Authorized provider of high-precision FJD Trion RTK Rovers, LiDAR Scanners, and 3D Guidance Systems.",
    url: "https://jasgeomatics.com",
    siteName: "JAS Geomatics India",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jasgeomatics.com",
  },
};

// Structured JSON-LD Data for Local Business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JAS Geomatics India",
  image: "https://jasgeomatics.com/logo.png",
  telePhone: "+91-9150764647",
  email: "jasgeomatics2026@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop # 61-B2, First Floor, DKG Complex, Salai Vinayagar St, next to DAWN SHIKSHALAYA PUBLIC SCHOOL, Gandhi Nagar",
    addressLocality: "Dharmapuri",
    addressRegion: "TN",
    postalCode: "636701",
    addressCountry: "IN",
  },
  url: "https://jasgeomatics.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Schema injection for Google Knowledge Graph & Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-sans antialiased bg-[#060913] text-white selection:bg-cyan-500 selection:text-black`}
      >
        <Providers>
          <Navbar />
          <main className="min-h-screen bg-[#060913]">{children}</main>
          <Footers />
        </Providers>
      </body>
    </html>
  );
}