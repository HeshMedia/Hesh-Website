import { ServiceLayout } from "@/components/serviceLayout";

export function CameraShootsPage() {
  const workExamples = ["assets/shoot1.jpg", "assets/shoot2.jpg"];
  const serviceContent = `
    High-quality professional camera shoots for events, brand promotion, and more.
  `;
  return (
    <ServiceLayout
      title="Professional Camera Shoots"
      description="Capture the perfect moments with our professional camera shoots."
      content={serviceContent}
      images={["assets/shoot_cover1.jpg", "assets/shoot_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Shoot Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
