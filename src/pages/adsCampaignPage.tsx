import { ServiceLayout } from "@/components/serviceLayout";
import { OptimizedImage } from "../components/optimizedImage"; // Ensure OptimizedImage is used
import { Resize } from "@cloudinary/url-gen/actions"; // Use actions for resizing

export function AdsCampaignPage() {
  const serviceContent = `
    Tailored ad strategies on Instagram and Facebook to maximize reach and drive results. We focus on proper budgeting, targeting the right audience, and selecting the ideal area for impactful campaigns.
  `;

  return (
    <ServiceLayout
      title="Ads Campaign"
      description="Maximize your brand's reach with our strategic ad campaigns."
      content={serviceContent}
      images={["Services/ads/efibinfh89p0s9axvm7z.png", "Services/ads/n7s0mae9gqgqwiuvg09v.png"]} // Cloudinary images
      hideWorkSection={true} // Hides "Our Work" section
    >
      {/* Display the two images here */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {["Services/ads/efibinfh89p0s9axvm7z.png", "Services/ads/n7s0mae9gqgqwiuvg09v.png"].map((image, index) => (
          <OptimizedImage
            key={index}
            publicId={image} // Cloudinary public ID
            alt={`Ad Example ${index + 1}`}
            transformations={(image) =>
              image.resize(Resize.fill().width(400).height(600)) 
            }
            className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
          />
        ))}
      </div>
    </ServiceLayout>
  );
}
