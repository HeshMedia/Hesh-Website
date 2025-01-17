import React, { useEffect } from "react";
import { ServiceNavbar } from "@/components/serviceNavbar";
import { Footer } from "@/components/footer";
import { WhatsApp } from "./whatsapp";
import { Resize } from "@cloudinary/url-gen/actions";
import { cloudinary } from "../config/cloudinary";

export function ServiceLayout({
  title,
  description,
  content,
  images,
  children,
  aspectRatio = "16/9", // Default aspect ratio, can be overridden
  hideWorkSection = false,
}: {
  title: string;
  description: string;
  content: string;
  images: string[];
  children?: React.ReactNode;
  aspectRatio?: string; // Aspect ratio for "Our Work" section
  hideWorkSection?: boolean;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background dark:bg-gray-900 text-foreground dark:text-white min-h-screen">
      <ServiceNavbar />
      <div className="pt-40 pb-16 container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden">
        <header className="mb-12 mt-19 pt-20">
          <h1 className="text-5xl font-bold text-center mb-4 mt-16">{title}</h1>
          <p className="text-lg text-center text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </header>

        {/* Content Section for Normal Images */}
        <div className="grid md:grid-cols-2 items-center mb-16 mt-16">
          <div className="text-lg">
            <p className="leading-relaxed">{content}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="w-[300px] h-[150px] overflow-hidden"
              >
                <img
                  src={cloudinary.image(image).resize(Resize.fill().width(300).height(150)).toURL()}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 cursor-pointer hover:scale-105 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Our Work Section */}
        {!hideWorkSection && (
          <section className="mb-10">
            <h2 className="text-3xl font-semibold mb-10 mt-8">Our Work</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {children &&
                React.Children.map(children, (child, index) => {
                  if (React.isValidElement(child)) {
                    const aspectStyle = aspectRatio === "9/16" ? `aspect-[9/16]` : aspectRatio === "1/1" ? `aspect-[1/1]` : "aspect-[16/9]";

                    return (
                      <div
                        key={index}
                        className={`p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:scale-105 hover:border-4 hover:border-[#3975FA] cursor-pointer ${aspectStyle}`}
                      >
                        {React.cloneElement(child as React.ReactElement, {
                          className: `w-full h-full object-cover rounded-md ${aspectStyle}`,
                        })}
                      </div>
                    );
                  }
                  return null; 
                })}
            </div>
          </section>
        )}
      </div>

      <Footer />
      <WhatsApp />
    </div>
  );
}
