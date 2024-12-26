import { ServiceLayout } from "@/components/serviceLayout";

export function CameraShootsPage() {
  const workExamples = [
    { type: "video", src: "/assets/services/shoots/video1.mp4" },
    { type: "video", src: "/assets/services/shoots/video3.mp4" },
    { type: "video", src: "/assets/services/shoots/video2.mp4" },
    { type: "video", src: "/assets/services/shoots/video4.mp4" },
  ];

  const serviceContent = `
    High-quality professional camera shoots for events, brand promotions, and more. We ensure every moment is captured with professional cameras, lighting, and mics for the best results.
  `;

  return (
    <ServiceLayout
      title="Professional Camera Shoots"
      description="Capture the perfect moments with our professional camera shoots."
      content={serviceContent}
      images={["/assets/services/shoots/shoot1.png", "/assets/services/shoots/shoot2.png"]}
      hideWorkSection = {false}
    >
      {workExamples.map((item, index) => {
        if (item.type === "image") {
          return (
            <img
              key={index}
              src={item.src}
              alt={`Shoot Example ${index + 1}`}
              className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
            />
          );
        } else if (item.type === "video") {
          return (
            <video
              key={index}
              src={item.src}
              controls
              muted
              autoPlay
              loop
              playsInline
              className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
            />
          );
        }
      })}
    </ServiceLayout>
  );
}
