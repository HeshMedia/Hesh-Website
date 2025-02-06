import { WhatsApp } from "./whatsapp";
import { TeamCard } from "./ui/teamCard";

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
  const firstRow = projects.slice(0, 2);
  const secondRow = projects.slice(2);

  return (
    <section className="py-16 bg-background dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        {/* First Row - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {firstRow.map((member) => (
            <TeamCard
              key={member.title}
              {...member}
              isLarge={true}
            />
          ))}
        </div>

        {/* Second Row - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondRow.map((member) => (
            <TeamCard
              key={member.title}
              {...member}
            />
          ))}
        </div>
      </div>
      <WhatsApp />
    </section>
  );
}
