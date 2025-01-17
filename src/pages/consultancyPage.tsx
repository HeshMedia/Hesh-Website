import { ServiceLayout } from "@/components/serviceLayout";
import { OptimizedImage } from "../components/optimizedImage"; // Ensure OptimizedImage is used
import { Resize } from "@cloudinary/url-gen/actions"; // Use actions for resizing

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
      images={["Services/consul/kyhgetcweeypu1t2ihre.png", "Services/consul/rrcpbuveccirkef0gdca.png"]} // Cloudinary images
      hideWorkSection={true} // Hides "Our Work" section
    >
      {/* Display the two images here */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {["Services/consul/kyhgetcweeypu1t2ihre.png", "Services/consul/rrcpbuveccirkef0gdca.png"].map((image, index) => (
          <OptimizedImage
            key={index}
            publicId={image} // Cloudinary public ID
            alt={`Consultancy Example ${index + 1}`}
            transformations={(image) =>
              image.resize(Resize.fill().width(380).height(380)) // Resize as required
            }
            className="rounded-md transition-transform duration-300 cursor-pointer hover:scale-105"
          />
        ))}
      </div>
    </ServiceLayout>
  );
}
