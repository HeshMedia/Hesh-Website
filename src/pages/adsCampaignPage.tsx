import { ServiceLayout } from "@/components/serviceLayout";

export function AdsCampaignPage() {
  const workExamples = ["assets/ads1.jpg", "assets/ads2.jpg"];
  const serviceContent = `
    Tailored ad strategies on Instagram, Facebook, and Google to maximize reach and drive results.
  `;
  return (
    <ServiceLayout
      title="Ads Campaign"
      description="Maximize your brand's reach with our strategic ad campaigns."
      content={serviceContent}
      images={["assets/ads_cover1.jpg", "assets/ads_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Ads Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
