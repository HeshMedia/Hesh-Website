import { ServiceLayout } from "@/components/serviceLayout";

export function VideoEditingPage() {
  const workExamples = [
    "/assets/services/ve/video1.mp4",
    "/assets/services/ve/video2.mp4",
    "/assets/services/ve/video3.mp4",
    "/assets/services/ve/video4.mp4",
    "/assets/services/ve/video5.mp4",
    "/assets/services/ve/video6.mp4",
    "/assets/services/ve/video7.mp4",
    "/assets/services/ve/video8.mp4",
  ];
  const serviceContent = `
    Professionally edited videos featuring seamless transitions, effects, and compelling storytelling to captivate your audience. From engaging content to talking head and ambiance videos, we bring your vision to life with creativity and precision.
  `;
  return (
    <ServiceLayout
      title="Video Editing"
      description="Create compelling videos with our professional editing services."
      content={serviceContent}
      images={["/assets/services/ve/ve1.png", "/assets/services/ve/ve2.png"]}
      hideWorkSection = {false}
    >
      {workExamples.map((video, index) => (
        // Pass only <video> directly as a child to ensure `props.src` extraction works
        <video
          key={index}
          src={video}
          controls
          muted
          autoPlay
          loop
          playsInline
          className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
        />
      ))}
    </ServiceLayout>
  );
}
