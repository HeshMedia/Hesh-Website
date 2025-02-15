import { ServiceLayout } from "@/components/serviceLayout";
import { cloudinary } from "../config/cloudinary"; // Cloudinary config to generate URLs

export function CameraShootsPage() {
  const workExamples = [
    { type: "video", src: "/assets/Services/shoots/video1.mp4" },
    { type: "video", src: "/assets/Services/shoots/video3.mp4" },
    { type: "video", src: "/assets/Services/shoots/video2.mp4" },
    { type: "video", src: "/assets/Services/shoots/video4.mp4" },
  ];

  const serviceContent = `
    High-quality professional camera shoots for events, brand promotions, and more. We ensure every moment is captured with professional cameras, lighting, and mics for the best results.
  `;

  // Set the desired aspect ratio for video (same as we did for VideoEditingPage)
  const videoAspectRatio = "9/16"; // Aspect ratio for videos

  return (
    <ServiceLayout
      title="Professional Camera Shoots"
      description="Capture the perfect moments with our professional camera shoots."
      content={serviceContent}
      images={["Services/shoots/k0gej6lcnstmqqaka5ny.png", "Services/shoots/ivdwn2ulnn4fe8qykobv.png"]} // Cloudinary images
      hideWorkSection={false}
      aspectRatio={videoAspectRatio}
    >
      {/* Work Examples */}
      {workExamples.map((item, index) => {
        if (item.type === "image") {
          return (
            <img
              key={index}
              src={cloudinary.image(item.src).toURL()}  // Cloudinary for images
              alt={`Shoot Example ${index + 1}`}
              className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
            />
          );
        } else if (item.type === "video") {
          return (
            <div
              key={index}
              className={`p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:scale-105 hover:border-4 hover:border-[#3975FA] cursor-pointer aspect-[${videoAspectRatio}]`} // Set the aspect ratio here
            >
              <video
                src={item.src}
                controls
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover rounded-md" // Ensure the video fills the container with proper aspect ratio
              />
            </div>
          );
        }
      })}
    </ServiceLayout>
  );
}
