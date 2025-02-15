import  { useEffect } from "react";
import { ServiceNavbar } from "@/components/serviceNavbar";
import { Footer } from "@/components/footer";
import { WhatsApp } from "@/components/whatsapp";
import { OptimizedImage } from "../components/optimizedImage";
import { cloudinary } from "../config/cloudinary";
import { Resize } from "@cloudinary/url-gen/actions";

export function SMMPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Page header content
  const title = "Social Media Management";
  const description =
    "Transform your social presence with professional, consistent branding and engaging posts";
  const content = `Our Social Media Management services help you establish a consistent and visually appealing online presence. We focus on creating engaging content with well-coordinated aesthetics and colors, ensuring your page stands out. With timely posting according to a proper schedule and effective campaign management, we drive traffic and track analytics to ensure your growth.`;

  // Top images for the content section (Cloudinary public IDs)
  const topImages = [
    "Services/smm/ycnilafvrie6m1budf7a", // Replace with your Cloudinary public IDs
    "Services/smm/sfugcdygyill3f9xhjor",
  ];

  // Work examples for the "Our Work" section (Cloudinary public IDs)
  const workExamples = [
    "Services/smm/fbo96bslm0zrgvoikzo2", 
    "Services/smm/mrisc6lrrtcag0tigy5o",
    "Services/smm/tlauqninsb7rqgadz4bp",
    "Services/smm/fkt2h89i0yf7yuuiah8i",
  ];

  return (
    <div className="bg-background dark:bg-gray-900 text-foreground dark:text-white min-h-screen">
      {/* Navbar */}
      <ServiceNavbar />

      <div className="pt-40 pb-16 container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden">
        {/* Header */}
        <header className="mb-12 mt-19 pt-20">
          <h1 className="text-5xl font-bold text-center mb-4 mt-16">
            {title}
          </h1>
          <p className="text-lg text-center text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 items-center mb-16 mt-16">
          <div className="text-lg">
            <p className="leading-relaxed whitespace-pre-line">{content}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {topImages.map((image, index) => (
              <div
                key={index}
                className="w-[300px] h-[150px] overflow-hidden"
              >
                <img
                  src={cloudinary
                    .image(image)
                    .resize(Resize.fill().width(300).height(150))
                    .format("auto")
                    .toURL()}
                  alt={`Top Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 cursor-pointer hover:scale-105 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Our Work Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-10 mt-8">Our Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workExamples.map((publicId, index) => (
              <div
                key={index}
                className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:scale-105 hover:border-4 hover:border-[#3975FA] cursor-pointer"
              >
                <OptimizedImage
                  publicId={publicId}
                  alt={`Work Example ${index + 1}`}
                  transformations={(img) =>
                    img.resize(Resize.fit().width(600))
                  }
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer and WhatsApp */}
      <Footer />
      <WhatsApp />
    </div>
  );
}
