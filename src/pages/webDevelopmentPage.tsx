import { ServiceLayout } from "@/components/ServiceLayout";

export function WebDevelopmentPage() {
  const workExamples = ["assets/web1.jpg", "assets/web2.jpg"];
  const serviceContent = `
    Build responsive, visually engaging websites tailored to meet your business goals.
  `;
  return (
    <ServiceLayout
      title="Web Development"
      description="Build high-quality websites with our expert web development services."
      content={serviceContent}
      images={["assets/web_cover1.jpg", "assets/web_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Web Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
