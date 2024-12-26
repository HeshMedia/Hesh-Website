import { ServiceLayout } from "@/components/serviceLayout";

export function InfluencerMarketingPage() {
  const serviceContent = `
    Boost your brand’s visibility and engagement through strategic influencer collaborations on Instagram. We connect you with influencers aligned with your brand and audience for impactful results.
  `;
  return (
    <ServiceLayout
      title="Influencer Marketing"
      description="Enhance your brand's visibility with influencer marketing strategies."
      content={serviceContent}
      images={["/assets/services/im/im1.png", "/assets/services/im/im2.png"]}
      hideWorkSection={true} // Hides "Our Work" section
    />
  );
}
