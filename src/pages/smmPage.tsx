import { ServiceLayout } from "@/components/serviceLayout";

export function SMMPage() {
  const workExamples = [
    "/assets/office.jpg",
    "assets/smm_2.jpg",
    "assets/smm_3.jpg",
  ];

  const smmContent = `
    Our Social Media Management services help you build a consistent online presence. 
    We craft content that engages your audience, manages campaigns to drive traffic, 
    and monitor analytics to ensure your growth.
  `;

  return (
    <div>
    <ServiceLayout
      title="Social Media Management"
      description="Transform your social presence with professional, consistent branding and engaging posts."
      content={smmContent}
      images={["/assets/office.jpg", "/assets/office2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Work ${index + 1}`}
          className="rounded-md"
        />
      ))}
    </ServiceLayout>
    </div>
  );
}
