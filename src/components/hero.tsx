import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "./ui/typewriter";

export function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-24 px-6 sm:px-10 md:px-20 min-h-screen bg-background dark:bg-gray-900 relative overflow-hidden">
      {/* Left Side Content */}
      <div className="space-y-6 md:space-y-8 max-w-xl md:w-1/2 relative z-10 text-center md:text-left">
        <div
          className={`border-2 border-gray-300 w-fit rounded-full px-6 py-3 text-lg font-semibold transition-all duration-300 mx-auto md:mx-0 ${
            hovered ? "bg-blue-500 text-white" : "text-gray-600 dark:text-white"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Welcome To Heshmedia
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Empower Your Business <br />
          <span>
            <Typewriter
              text={[
                "Stand Out Online",
                "Boost Engagement",
                "Grow Your Business",
                "Dominate Digital",
                "Convert More Customers",
                "Build Stunning Websites",
              ]}
              speed={70}
              className="text-blue-600"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </span>
        </h1>
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
          Get Started Now
        </button>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="md:w-1/2 flex justify-center relative mt-8 md:mt-0"
      >
        <img
          src="/assets/hero-banner.png"
          alt="Floating Illustration"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg opacity-90"
        />
      </motion.div>
    </div>
  );
}
