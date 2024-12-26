import { ServiceLayout } from "@/components/serviceLayout";

export function SMMPage() {
  const workExamples = [
    "/assets/services/smm/1.png",
    "/assets/services/smm/2.png",
    "/assets/services/smm/3.png",
    "/assets/services/smm/4.png",
  ];

  const smmContent = `
    Our Social Media Management services help you establish a consistent and visually appealing online presence. We focus on creating engaging content with well-coordinated aesthetics and colors, ensuring your page stands out. With timely posting according to a proper schedule and effective campaign management, we drive traffic and track analytics to ensure your growth.
  `;

  return (
    <ServiceLayout
      title="Social Media Management"
      description="Transform your social presence with professional, consistent branding and engaging posts."
      content={smmContent}
      images={["/assets/services/smm/smm1.png", "/assets/services/smm/smm2.png"]}
      aspectRatio="9/16" // Apply Instagram reel ratio
      hideWorkSection = {false}
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
  );
}
