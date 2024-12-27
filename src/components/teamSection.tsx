import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { WhatsApp } from "./whatsapp";

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
    description: "Rachit, as the head of Hesh Media, embodies a growth-oriented mindset focused on delivering excellence. He leads the team with a goal to provide the best quality services, ensuring every project is handled with care and delivers great results.",
    src: "assets/team/Rachit.jpg",
    backgroundImage:
      "assets/team/3.png", 
  },
  {
    title: "Simran Khosla",
    subtitle: "Co-Founder and Graphic Designer",
    description: "Simran is the creative force who turned bold ideas into visual masterpieces. With a sharp eye for design and a passion for innovation, she leads the team in crafting stunning visuals that make brands pop and leave a lasting impression.",
    src: "assets/team/Simran.png",
    backgroundImage:
      "assets/team/2.png", 
  },
  {
    title: "Arushi Juneja",
    subtitle: "Creative Head",
    description: "Arushi merges innovative creativity with strategic insight to produce compelling content that accelerates brand growth and fosters deep audience engagement.",
    src: "assets/team/Arushi.png",
    backgroundImage:
      "assets/team/1.png", 
  },
  {
    title: "Ashwath Soni",
    subtitle: "The Tech Guy",
    description: "Ashwath, our tech expert, powers with innovative solutions and seamless digital experiences, keeping us ahead of the curve.He can create responsive modern websites with ease and specilaises in developing backend systems.",
    src: "assets/team/Ashwath.jpg",
    backgroundImage:
      "assets/team/5.png", 
  },
  {
    title: "Naman",
    subtitle: "Video Editor",
    description: "Naman, our skilled video editor, brings stories to life with his expert editing, turning raw footage into captivating visuals that engage and inspire audiences.",
    src: "assets/team/Naman.jpg",
    backgroundImage:
      "assets/team/4.png",
  }
];


export function TeamSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="mt- pt-4 bg-background dark:bg-gray-900">
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
              backgroundImage={project.backgroundImage} 
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
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[515px] w-[70%] rounded-md p-10 origin-top shadow-lg"
      >
        <div className="flex justify-center mb-4">
          <img
            src={src}
            alt="Team Member"
            className="w-48 h-48 object-cover rounded-full border-4 border-black dark:border-white"
          />
        </div>
        <h2 className="text-2xl text-center font-semibold mb-2 text-black ">{title}</h2>
        <h3 className="text-lg text-center font-medium text-black e mb-4">
          {subtitle}
        </h3>
        <p className="text-sm text-center text-black mx-auto "
        style={{
          maxWidth: "80ch", 
          wordWrap: "break-word", 
          overflowWrap: "break-word",
        }}>
          {description}
        </p>
      </motion.div>
      <WhatsApp />
    </div>
  );
};
