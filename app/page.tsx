import { PageShell } from "@/pages/hero";
import { Hero } from "@/pages/homepage";
import { ProductGrid } from "@/pages/product";
import { Showcase } from "@/pages/showcase";
import { Tour } from "@/pages/tour";
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
     </main>
    </div>
  );
}
