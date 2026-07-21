import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Suppress TypeScript error for side-effect CSS import when no global CSS types are declared
// @ts-ignore
import{ Navbar } from "@/component/navbar";
import { Footers } from "@/component/footer";
import "@/app/globals.css"; // Your Tailwind styles
 import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAS geomatics  India",
  description: "Modern trion website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
      </head>

      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1220] text-white`}
      >
                <Providers>

          <Navbar />
          {/* Main Page Content */}
          <main className="bg-b">
            {children}
          </main>

          <Footers />
          </Providers>  
      </body>
    </html>
  );
}



// // app/layout.tsx
// import { Navbar } from "../component/navbar";
// import { Footer } from "../component/footer";
// import "@/app/globals.css"; // Your Tailwind styles

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-neutral-950 text-white antialiased">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }