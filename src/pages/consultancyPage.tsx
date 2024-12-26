import { ServiceLayout } from "@/components/serviceLayout";

export function ConsultancyPage() {
  const serviceContent = `
    We provide expert guidance to help you make informed decisions. Our services include market analysis, competitor benchmarking, and actionable strategies tailored to your business goals. 
    By leveraging data-driven insights, we identify growth opportunities and optimize processes to ensure measurable results and long-term success.
  `;
  return (
    <ServiceLayout
      title="Consultancy"
      description="Make informed decisions with our expert consultancy services."
      content={serviceContent}
      images={["/assets/services/consul/con1.png", "/assets/services/consul/con2.png"]}
      hideWorkSection={true} // Hides "Our Work" section
    />
  );
}
