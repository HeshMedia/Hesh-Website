import { ServiceLayout } from "@/components/serviceLayout";

export function AdsCampaignPage() {
  const serviceContent = `
    Tailored ad strategies on Instagram and Facebook to maximize reach and drive results. We focus on proper budgeting, targeting the right audience, and selecting the ideal area for impactful campaigns.
  `;
  return (
    <ServiceLayout
      title="Ads Campaign"
      description="Maximize your brand's reach with our strategic ad campaigns."
      content={serviceContent}
      images={["/assets/services/ads/ad1.png", "/assets/services/ads/ad2.png"]}
      hideWorkSection={true} // Hides "Our Work" section
    />
  );
}
