import { ServiceLayout } from "@/components/serviceLayout";

export function InfluencerMarketingPage() {
  const workExamples = ["assets/influencer1.jpg", "assets/influencer2.jpg"];
  const serviceContent = `
    Boost brand visibility through collaborations with influential personalities in your industry.
  `;
  return (
    <ServiceLayout
      title="Influencer Marketing"
      description="Enhance your brand's visibility with influencer marketing strategies."
      content={serviceContent}
      images={["assets/influencer_cover1.jpg", "assets/influencer_cover2.jpg"]}
    >
      {workExamples.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Influencer Example ${index + 1}`} />
        </div>
      ))}
    </ServiceLayout>
  );
}
