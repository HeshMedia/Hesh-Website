import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { WhatsApp } from "./whatsapp";
import { useIsMobile } from "../hooks/useIsMobile"; 
import { OptimizedImage } from "./optimizedImage";
import { cloudinary } from "../config/cloudinary";
import { Resize } from "@cloudinary/url-gen/actions";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { RoundCorners } from "@cloudinary/url-gen/actions";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

interface CardProps {
  i: number;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  backgroundImage: string; // Added backgroundImage field
  mobileBackgroundImage: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const projects = [
  {
    title: "Rachit Gupta",
    subtitle: "Co-Founder and CEO",
    description: "Rachit, as the head of Hesh Media, embodies a growth-oriented mindset focused on delivering excellence. He leads the team with a goal to provide the best quality services, ensuring every project is handled with care and delivers great results.",
    src: "Team/wlgsdo8xqaefwu0rrgf1",
    backgroundImage:"Team/xbkowdq0zusmkkyobget",
    mobileBackgroundImage:"Team/qrb50myvwqys5udypwop",
  },
  {
    title: "Simran Khosla",
    subtitle: "Co-Founder and Graphic Designer",
    description: "Simran is the creative force who turned bold ideas into visual masterpieces. With a sharp eye for design and a passion for innovation, she crafts stunning visuals that make brands pop and leave a lasting impression.",
    src: "Team/ifhdkubvziuhyswwslex",
    backgroundImage:"Team/puvcqwfmpynqq3wf3ukg", 
    mobileBackgroundImage:"Team/l9wgpelrd2ezqadbnfda",
  },
  {
    title: "Arushi Juneja",
    subtitle: "Creative Head",
    description: "Arushi merges innovative creativity with strategic insight to produce compelling content that accelerates brand growth and fosters deep audience engagement.",
    src: "Team/t015qcabut4918wngiuv",
    backgroundImage:"Team/snqfxidtcttwklsiz00y",
    mobileBackgroundImage:"Team/qjmwaybom1pdmfwqtjrc",
  },
  {
    title: "Ashwath Soni",
    subtitle: "The Tech Guy",
    description: "Ashwath, our tech expert, powers with innovative solutions and seamless digital experiences, keeping us ahead of the curve. He can create responsive modern websites with ease and specilaises in developing backend systems.",
    src: "Team/kr9eqvz63rmhfwa0yqmr",
    backgroundImage:"Team/o48yo2sjqvm2vyughndd",
    mobileBackgroundImage:"Team/ssmxxuod0pz5i5kyjkx5",
  },
  {
    title: "Naman",
    subtitle: "Video Editor",
    description: "Naman, our skilled video editor, brings stories to life with his expert editing, turning raw footage into captivating visuals that engage and inspire audiences.",
    src: "Team/jnpombv8rrvzf3xf9xxn",
    backgroundImage:"Team/u7m0cpjqxedlrns9ppw0",
    mobileBackgroundImage:"Team/ksknczmwqueae1k9aieu",
  }
];


export function TeamSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="pt-4 bg-background dark:bg-gray-900">
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
              mobileBackgroundImage={project.mobileBackgroundImage}
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
  backgroundImage,
  progress,
  range,
  targetScale,
  mobileBackgroundImage,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const isMobile = useIsMobile();
  const bgImage = isMobile ? mobileBackgroundImage : backgroundImage;

  const bgImageUrl = cloudinary
    .image(bgImage)
    .resize(Resize.fill().width(800).height(600))
    .toURL();

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[530px] w-[70%] rounded-md p-10 origin-top shadow-lg"
      >
        <div className="flex justify-center mb-4">
        <OptimizedImage
          publicId={src}
          alt={`${title}'s Profile Picture`}
          transformations={(image) =>
            image
              .resize(
                Resize.fill().width(192).height(192).gravity(Gravity.focusOn(FocusOn.face()))
              )
              .roundCorners(RoundCorners.max())
          }
          className="rounded-full border-4 border-black dark:border-white"
        />
          </div>
        <h2 className="text-2xl text-center font-semibold mb-2 text-black">
          {title}
        </h2>
        <h3 className="text-lg text-center font-medium text-black mb-4">
          {subtitle}
        </h3>
        <p
          className="text-sm text-center text-black mx-auto"
          style={{
            maxWidth: "80ch",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          {description}
        </p>
      </motion.div>
      <WhatsApp />
    </div>
  );
};

