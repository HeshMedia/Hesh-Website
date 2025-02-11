import React from "react";
import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";

// Updated projects array with Cloudinary publicIds and founder flag
const projects = [
  {
    title: "Rachit Gupta",
    subtitle: "Co-Founder and CEO",
    description:
      "Rachit, as the head of Hesh Media, embodies a growth-oriented mindset focused on delivering excellence. He leads the team with a goal to provide the best quality services, ensuring every project is handled with care and delivers great results.",
    publicId: "team/wlgsdo8xqaefwu0rrgf1",
    isHighlighted: true,
  },
  {
    title: "Simran Khosla",
    subtitle: "Co-Founder and Graphic Designer",
    description:
      "Simran is the creative force who turned bold ideas into visual masterpieces. With a sharp eye for design and a passion for innovation, she crafts stunning visuals that make brands pop and leave a lasting impression.",
    publicId: "team/ifhdkubvziuhyswwslex",
    isHighlighted: true,
  },
  {
    title: "Arushi Juneja",
    subtitle: "Creative Head",
    description:
      "Arushi merges innovative creativity with strategic insight to produce compelling content that accelerates brand growth and fosters deep audience engagement.",
    publicId: "team/t015qcabut4918wngiuv",
  },
  {
    title: "Ashwath Soni",
    subtitle: "The Tech Guy",
    description:
      "Ashwath, our tech expert, powers with innovative solutions and seamless digital experiences, keeping us ahead of the curve. He creates responsive modern websites with ease and specializes in developing backend systems.",
    publicId: "team/kr9eqvz63rmhfwa0yqmr",
  },
  {
    title: "Naman",
    subtitle: "Video Editor",
    description:
      "Naman, our skilled video editor, brings stories to life with expert editing, turning raw footage into captivating visuals that engage and inspire audiences.",
    publicId: "team/jnpombv8rrvzf3xf9xxn",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const TeamSection: React.FC = () => {
  const firstRow = projects.slice(0, 2);
  const secondRow = projects.slice(2);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
        >
          Our Team Helps Businesses Succeed
        </motion.h2>

        {/* First Row: Two large cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
        >
          {firstRow.map((member) => (
            <motion.div key={member.title} variants={item} className="group">
              <TeamCard {...member} isLarge={true} />
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row: Three standard cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {secondRow.map((member) => (
            <motion.div key={member.title} variants={item} className="group">
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
