import { ServiceLayout } from "@/components/ServiceLayout";

export function VideoEditingPage() {
  const workExamples = ["assets/video1.jpg", "assets/video2.jpg"];
  const serviceContent = `
    Professionally edited videos with seamless transitions, effects, and compelling storytelling to captivate your audience.
  `;
  return (
    <ServiceLayout
      title="Video Editing"
      description="Create compelling videos with our professional editing services."
      content={serviceContent}
      images={["assets/video_cover1.jpg", "assets/video_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Video Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
