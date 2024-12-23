import { AboutNavbar } from "@/components/aboutNavbar";
import { AboutHero } from "@/components/aboutHero";
import { TeamSection } from "@/components/teamSection";
import { ValuesSection } from "@/components/valuesSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/footer";

export function AboutPage() {
      
  return (
    <>
      <AboutNavbar />
      <main>
        <AboutHero />
        <TeamSection />
        <ValuesSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
