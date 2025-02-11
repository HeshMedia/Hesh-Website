import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { OptimizedImage } from "@/components/optimizedImage"; // Import your Cloudinary component

export function About() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate("/about");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <section id="about" className="bg-background dark:bg-gray-900 px-4 sm:px-10 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-6 text-foreground dark:text-white">
              We're More Than Just Another Agency
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-400 mb-6">
              At Hesh Media, our mission is to elevate your brand’s presence with bold ideas and smart strategies. From crafting compelling campaigns to delivering tangible results, our team is dedicated to your success in the ever-changing digital landscape.
            </p>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Founded in 2023 in Amritsar, we’ve partnered with brands to achieve exceptional growth and redefine their digital impact.
            </p>
            <div className="mt-10 flex justify-center md:justify-start">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary dark:bg-blue-600 text-primary-foreground hover:bg-primary/90 dark:hover:bg-blue-500"
                onClick={handleNavigateToAbout}
              >
                Know Our Team
              </Button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl overflow-hidden">
              <OptimizedImage
                publicId="Gallery/e4pmkm398fwenuajhnrv"
                alt="Office"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/9] rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-[#58a6ff]/50 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
