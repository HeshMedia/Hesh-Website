import { ServiceLayout } from "@/components/serviceLayout";
import { OptimizedImage } from "../components/optimizedImage"; // Ensure OptimizedImage is used
import { Resize } from "@cloudinary/url-gen/actions"; // Use actions for resizing

export function InfluencerMarketingPage() {
  const serviceContent = `
    Boost your brand’s visibility and engagement through strategic influencer collaborations on Instagram. We connect you with influencers aligned with your brand and audience for impactful results.
  `;

  return (
    <ServiceLayout
      title="Influencer Marketing"
      description="Enhance your brand's visibility with influencer marketing strategies."
      content={serviceContent}
      images={["Services/im/litgp8i5exqe2iaewk8p.png", "Services/im/utxasthq7oyii7iaz86d.png"]} // Cloudinary images
      hideWorkSection={true} // Hides "Our Work" section
    >
      {/* Display the two images here */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {["Services/im/litgp8i5exqe2iaewk8p.png", "Services/im/utxasthq7oyii7iaz86d.png"].map((image, index) => (
          <OptimizedImage
            key={index}
            publicId={image} // Cloudinary public ID
            alt={`Influencer Marketing Example ${index + 1}`}
            transformations={(image) =>
              image.resize(Resize.fill().width(380).height(380)) // Adjust size as needed (square for example)
            }
            className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
          />
        ))}
      </div>
    </ServiceLayout>
  );
}
