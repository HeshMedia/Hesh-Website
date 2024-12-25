import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary/10 dark:text-blue-500/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          style={{ color: "#3975FA" }}
        >
          Hesh Media
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground dark:text-white">
          Transform Your <span className="text-red-500 dark:text-red-400">Social Media</span> Presence
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Empowering brands with impactful content, elevated strategies, and unmatched growth to thrive in the digital landscape.
        </p>

        {/* Updated Button */}
        <Link
          to="contact"
          smooth={true}
          duration={200}
          offset={-53}
          className="inline-block"
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-primary dark:bg-blue-600 text-primary-foreground hover:bg-primary/90 dark:hover:bg-blue-500 w-full"
          >
            Work With Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
