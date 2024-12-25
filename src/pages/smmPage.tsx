import { ServiceLayout } from "@/components/serviceLayout";

export function SMMPage() {
  const workExamples = [
    "/assets/k.jpg",
    "assets/k.jpg",
    "assets/k.jpg",
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
      images={["/assets/k.jpg", "/assets/k.jpg"]}
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
