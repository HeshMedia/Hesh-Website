import { ServiceLayout } from "@/components/serviceLayout";
import { Resize } from "@cloudinary/url-gen/actions"; // Cloudinary Resize actions
import { cloudinary } from "../config/cloudinary"; // Cloudinary config to generate URLs

export function WebDevelopmentPage() {
  const workExamples = [
    {
      image: "Services/web/kgmpk3i7xyydfvptsm98.png", 
      link: "https://dentalexcellenceludhiana.graphionicinfotech.com/",
    },
    {
      image: "Services/web/olklraxot0qy8rflfxqa.png", 
      link: "https://daysinnsalina.com/",
    },
    {
      image: "Services/web/mrxlmjoxifxo9v7pujzv.png",  
      link: "https://trevixgloble.com/",
    },
    {
      image: "Services/web/lnetcaboqrro5kkcwkxs.png",  
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
      images={[
        "Services/web/uhazr445raenvzecuujk.png", // Cloudinary public ID for the first image
        "Services/web/ncp3aqkb7qzyv293swte.png", // Cloudinary public ID for the second image
      ]}
      hideWorkSection={false}
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
            // Use Cloudinary to generate the image URL
            src={cloudinary.image(work.image).resize(Resize.fill().width(820).height(520)).toURL()} // Resize and transform
            alt={`Web Example ${index + 1}`}
            className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
          />
        </a>
      ))}
    </ServiceLayout>
  );
}
