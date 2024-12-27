import { ServiceLayout } from "@/components/serviceLayout";

export function GraphicDesignPage() {
  const workExamples = [
    "/assets/services/gd/6.png",
    "/assets/services/gd/2.png",
    "/assets/services/gd/3.png",
    "/assets/services/gd/4.png",
    "/assets/services/gd/5.png",
    "/assets/services/gd/1.png",
    "/assets/services/gd/7.png",
    "/assets/services/gd/8.png",
  ];
  const serviceContent = `
    Our graphic design services include creating infographics and visually engaging content tailored to your brand's unique needs. We transform information into creative, eye-catching designs that effectively communicate your message.
  `;
  return (
    <ServiceLayout
      title="Graphic Designing"
      description="Create visually stunning content with our professional graphic design services."
      content={serviceContent}
      images={["/assets/services/gd/gd1.png", "/assets/services/gd/gd2.png"]}
      hideWorkSection = {false}
    >
      {workExamples.map((image, index) => (
        // Pass only <img> directly as a child to ensure `props.src` extraction works
        <img key={index} src={image} alt={`Design Example ${index + 1}`} />
      ))}
    </ServiceLayout>
  );
}
