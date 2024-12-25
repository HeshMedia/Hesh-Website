import { ServiceLayout } from "@/components/serviceLayout";

export function ConsultancyPage() {
  const workExamples = ["assets/consultancy1.jpg", "assets/consultancy2.jpg"];
  const serviceContent = `
    Leverage data-driven insights and competitor analysis for effective, actionable strategies.
  `;
  return (
    <ServiceLayout
      title="Consultancy"
      description="Make informed decisions with our expert consultancy services."
      content={serviceContent}
      images={["assets/consultancy_cover1.jpg", "assets/consultancy_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Consultancy Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
