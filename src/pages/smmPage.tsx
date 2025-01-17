import { ServiceLayout } from "@/components/serviceLayout";
import { OptimizedImage } from "../components/optimizedImage";
import { Resize } from "@cloudinary/url-gen/actions"; // Use actions for resizing

export function SMMPage() {
  const workExamples = [
    "Services/smm/fbo96bslm0zrgvoikzo2", // Cloudinary public IDs for SMM work examples
    "Services/smm/mrisc6lrrtcag0tigy5o",
    "Services/smm/tlauqninsb7rqgadz4bp",
    "Services/smm/fkt2h89i0yf7yuuiah8i",
  ];

  const smmContent = `
    Our Social Media Management services help you establish a consistent and visually appealing online presence. We focus on creating engaging content with well-coordinated aesthetics and colors, ensuring your page stands out. With timely posting according to a proper schedule and effective campaign management, we drive traffic and track analytics to ensure your growth.
  `;

  return (
    <ServiceLayout
      title="Social Media Management"
      description="Transform your social presence with professional, consistent branding and engaging posts."
      content={smmContent}
      images={["Services/smm/ycnilafvrie6m1budf7a", "Services/smm/sfugcdygyill3f9xhjor"]}  
      aspectRatio="9/16"  // Aspect ratio for Our Work section
      hideWorkSection={false}
    >
      {workExamples.map((image, index) => (
        <OptimizedImage
          key={index}
          publicId={image}  // Cloudinary public ID for work example images
          alt={`Work Example ${index + 1}`}
          transformations={(image) =>
            image.resize(Resize.fill().width(380).height(980)) // 9:16 aspect ratio
          }
          className="rounded-md" // Maintain rounded corners
        />
      ))}
    </ServiceLayout>
  );
}
