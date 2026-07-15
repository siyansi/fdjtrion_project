import  PageShell from "@/pages/hero";
import  Hero  from "@/pages/homepage";
import  ProductGrid  from "@/pages/product";
import  Showcase  from "@/pages/showcase";
import  Tour  from "@/pages/tour";
import { HeroIntro } from "@/pages/videos";
import { VideoSlamSection } from "@/pages/videos";
import { HyperDense } from "@/pages/videos";
import { CameraCarousel } from "@/pages/videos";
import { Deliverables } from "@/pages/videos";
import { Ecosystem } from "@/pages/videos";
import { SpecsHero } from "@/pages/videos";
import { SpecAccordion } from "@/pages/videos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="" style={{ fontFamily: 'Poppins' }}>
     <main>
      <Hero />
      <ProductGrid />
      <Showcase />
      <Tour />
  <PageShell title={undefined} children={undefined} />
  <HeroIntro />
  <VideoSlamSection />
   <HyperDense />
        <CameraCarousel />
        <Deliverables />
        <Ecosystem />
        <SpecsHero />
        <SpecAccordion />
     </main>
    </div>
  );
}
