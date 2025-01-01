import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate("/about");
    // Scroll to the top of the page after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <section id="about" className="py-24 pt-44 bg-background dark:bg-gray-900">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 text-foreground dark:text-white">
              We're More Than Just Another Agency
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-400 mb-6">
              At Hesh Media, our mission is to elevate your brand’s presence
              with bold ideas and smart strategies. From crafting compelling
              campaigns to delivering tangible results, our team is dedicated to
              your success in the ever-changing digital landscape.
            </p>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Founded in 2023 in Amritsar, we’ve partnered with brands to
              achieve exceptional growth and redefine their digital impact.
            </p>
            <div className="mt-10 -ml-30 flex justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary dark:bg-blue-600 text-primary-foreground hover:bg-primary/90 dark:hover:bg-blue-500"
                onClick={handleNavigateToAbout}
              >
                Know Our Team
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group">
              <img
                src="https://imgur.com/yrVWA8e.png"
                alt="Office"
                className="w-full h-full object-cover rounded-2xl border-4 border-gray-300 dark:border-gray-700"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-[#58a6ff]/50 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
