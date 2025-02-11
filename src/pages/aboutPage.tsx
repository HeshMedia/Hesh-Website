import { AboutNavbar } from "@/components/aboutNavbar";

import { TeamSection } from "@/components/teamSection";
import { ValuesSection } from "@/components/valuesSection";
import { GallerySection } from "@/components/gallerySection";
import { Footer } from "@/components/footer";

export function AboutPage() {
      
  return (
    <>
      <AboutNavbar />
      <main>
        
        <TeamSection />
        <ValuesSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
