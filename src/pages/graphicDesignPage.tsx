import { ServiceLayout } from "@/components/ServiceLayout";

export function GraphicDesignPage() {
  const workExamples = ["assets/design1.jpg", "assets/design2.jpg"];
  const serviceContent = `
    Our graphic design services include creating logos, infographics, and engaging visual content tailored to your brand's needs.
  `;
  return (
    <ServiceLayout
      title="Graphic Designing"
      description="Create visually stunning content with our professional graphic design services."
      content={serviceContent}
      images={["assets/design_cover1.jpg", "assets/design_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Design Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
