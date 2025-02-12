import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function About() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate("/about");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <section className="relative bg-background dark:bg-gray-900 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Image Section with Continuous Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0], // Floating effect
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 1, ease: "easeOut" }
          }}
          className="mt-10 md:mt-0 mx-auto"
        >
          <img
            src="/assets/About-vector.png"
            alt="Teamwork"
            className="w-full max-w-md md:max-w-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            We're More Than Just Another Agency
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            At <span className="font-semibold text-blue-600">Hesh Media</span>, our mission is to elevate your brand’s presence with bold ideas and smart strategies. From crafting compelling campaigns to delivering tangible results, our team is dedicated to your success in the ever-changing digital landscape.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            Founded in 2023 in Amritsar, we’ve partnered with brands to achieve exceptional growth and redefine their digital impact.
          </p>

          {/* Button with Advanced Hover Effects */}
          <motion.button
            onClick={handleNavigateToAbout}
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold text-lg transition-all duration-300 hover:shadow-lg"
          >
            Know Our Team →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
