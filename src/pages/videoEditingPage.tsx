import { ServiceLayout } from "@/components/serviceLayout";
// Cloudinary config to generate URLs

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
    Professionally edited videos featuring seamless transitions, effects, and compelling storytelling to captivate your audience. From engaging content to talking head and ambiance videos, we bring your vision to life with creativity and precision.
  `;

  // Set the desired aspect ratio for video
  const videoAspectRatio = "9/16"; // You can change this to any ratio like 16/9, 1/1, etc.

  return (
    <ServiceLayout
      title="Video Editing"
      description="Create compelling videos with our professional editing services."
      content={serviceContent}
      images={[
        "Services/ve/dc1zo3bfkk2q6stgwpln.png",
        "Services/ve/yudhdjaqaqlk2rhm8vhk.png",
      ]} // Cloudinary for images only
      aspectRatio={videoAspectRatio} // Pass the aspect ratio to ServiceLayout
      hideWorkSection={false}
    >
      {/* Work Examples */}
      {workExamples.map((video, index) => (
        <div
          key={index}
          className={`p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:scale-105 hover:border-4 hover:border-[#3975FA] cursor-pointer aspect-[${videoAspectRatio}]`}
        >
          <video
            src={video}
            controls
            muted
            autoPlay
            loop
            playsInline
            preload="metadata" // Helps iOS preload
            onCanPlay={() => console.log("Video can play")}
            onError={(e) => console.error("Video error:", e)}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}
    </ServiceLayout>
  );
}
