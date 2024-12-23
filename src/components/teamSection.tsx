import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  backgroundImage: string; // Added backgroundImage field
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const projects = [
  {
    title: "Rachit Gupta",
    subtitle: "Co-Founder and CEO",
    description: "Rachit leads the team with a vision for growth and success.",
    src: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    backgroundImage:
      "assets/bg.jpg", // Subtle blue
  },
  {
    title: "Simran Khosla",
    subtitle: "Co-Founder and Graphic Designer",
    description: "Simran is the creative force behind our designs and visuals.",
    src: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    backgroundImage:
      "assets/bg.jpg", // Subtle pink
  },
  {
    title: "Arushi Juneja",
    subtitle: "Creative Head",
    description: "Arushi crafts compelling stories through stunning visuals.",
    src: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    backgroundImage:
      "assets/bg.jpg", // Subtle green
  },
  {
    title: "Ashwath Soni",
    subtitle: "The Tech Guy",
    description: "Ashwath handles all things tech with precision and expertise.",
    src: "assets/Ashwath.jpg",
    backgroundImage:
      "assets/bg.jpg", // Subtle orange
  },
  {
    title: "Naman",
    subtitle: "Editor",
    description: "Naman crafts compelling stories and ensures quality output.",
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop",
    backgroundImage:
      "assets/bg.jpg", // Subtle purple
  },
];


export function TeamSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="bg-background dark:bg-gray-900">
      <section className="text-foreground h-[70vh] w-full bg-background dark:bg-gray-900 grid place-content-center">
        <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] text-black dark:text-white">
          Meet Our Team. Scroll down! 👇
        </h1>
      </section>

      <section className="text-foreground w-full bg-background dark:bg-gray-900">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              src={project.src}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              backgroundImage={project.backgroundImage} // Pass background image
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </div>
  );
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  subtitle,
  description,
  src,
  backgroundImage, // Use background image
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "start start"],
  // });

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Apply background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top shadow-lg"
      >
        <div className="flex justify-center mb-4">
          <img
            src={src}
            alt="Team Member"
            className="w-48 h-48 object-cover rounded-full border-4 border-black dark:border-white"
          />
        </div>
        <h2 className="text-2xl text-center font-semibold mb-2 text-black dark:text-white">{title}</h2>
        <h3 className="text-lg text-center font-medium text-black dark:text-white mb-4">
          {subtitle}
        </h3>
        <p className="text-sm text-center text-black dark:text-white">
          {description}
        </p>
      </motion.div>
    </div>
  );
};
