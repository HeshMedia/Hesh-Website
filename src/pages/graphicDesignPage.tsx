import { ServiceLayout } from "@/components/serviceLayout";
import { OptimizedImage } from "../components/optimizedImage"; // Ensure OptimizedImage is being used
import { Resize } from "@cloudinary/url-gen/actions"; // Use actions for resizing

export function GraphicDesignPage() {
  const workExamples = [
    "Services/gd/ndssfdpf6svupcpvtxha.png",  // Cloudinary public IDs for graphic design work examples
    "Services/gd/mdcbkyth3qvuydv2tqsu.png",
    "Services/gd/ej04w0jxhssiznbqsdiu.png",
    "Services/gd/ay8b824grzt6fwc7v9z6.png",
    "Services/gd/k6retmsnz7vxetnq68xl.png",
    "Services/gd/wbn5cnod2kobkupvzl9e.png",
    "Services/gd/jkfu6fybbty5vitawsje.png",
    "Services/gd/jcfuk38so73bwz19uxss.png",
  ];

  const serviceContent = `
    Our graphic design services include creating infographics and visually engaging content tailored to your brand's unique needs. We transform information into creative, eye-catching designs that effectively communicate your message.
  `;

  return (
    <ServiceLayout
      title="Graphic Designing"
      description="Create visually stunning content with our professional graphic design services."
      content={serviceContent}
      images={[
        "Services/gd/vk2bq9xc1p8nofwwmhhp.png",
        "Services/gd/lwhos3fezvq2jktrz1hi.png",
      ]} // Pass any example images if needed
      hideWorkSection={false}
      aspectRatio="1/1" // Set card container to square since images are 3375x3375
    >
      {/* Work Examples */}
      {workExamples.map((image, index) => (
        <OptimizedImage
          key={index}
          publicId={image} // Cloudinary public ID for graphic design work example images
          alt={`Design Example ${index + 1}`}
          transformations={(img) =>
            img.resize(Resize.fill().width(380).height(380)) // Resize to a square thumbnail
          }
          className="rounded-md" // Maintain rounded corners
        />
      ))}
    </ServiceLayout>
  );
}
