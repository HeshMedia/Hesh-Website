import { ServiceLayout } from "@/components/serviceLayout";

export function WebDevelopmentPage() {
  const workExamples = [
    {
      image: "/assets/services/web/1.png",
      link: "https://dentalexcellenceludhiana.graphionicinfotech.com/",
    },
    {
      image: "/assets/services/web/2.png",
      link: "https://daysinnsalina.com/",
    },
    {
      image: "/assets/services/web/3.png",
      link: "https://trevixgloble.com/",
    },
    {
      image: "/assets/services/web/4.png",
      link: "https://relaxservices.in/",
    },
  ];
  
  const serviceContent = `
    We specialize in crafting responsive and visually engaging websites that align seamlessly with your brand identity. Our skilled team ensures robust functionality, and user-friendly interfaces to meet and exceed your business objectives.
  `;

  return (
    <ServiceLayout
      title="Web Development"
      description="Build high-quality websites with our expert web development services."
      content={serviceContent}
      images={["/assets/services/web/web1.png", "/assets/services/web/web2.jpg"]}
      hideWorkSection = {false}
    >
      {workExamples.map((work, index) => (
        <a
          key={index}
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={work.image}
            alt={`Web Example ${index + 1}`}
            className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
          />
        </a>
      ))}
    </ServiceLayout>
  );
}
