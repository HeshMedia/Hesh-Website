import React, { useEffect, useState } from "react";
import { ServiceNavbar } from "@/components/serviceNavbar";
import { Footer } from "@/components/footer";
import { WhatsApp } from "./whatsapp";

export function ServiceLayout({
  title,
  description,
  content,
  images,
  children,
  aspectRatio,
  hideWorkSection = false, 
}: {
  title: string;
  description: string;
  content: string;
  images: string[];
  children?: React.ReactNode;
  aspectRatio?: string; // Optional prop for aspect ratio
  hideWorkSection?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    type: "image" | "video";
    src: string;
  } | null>(null);

  const openModal = (src: string, type: "image" | "video") => {
    setModalContent({ type, src });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background dark:bg-gray-900 text-foreground dark:text-white min-h-screen">
      <ServiceNavbar />

      {/* Main Container */}
      <div className="pt-40 pb-16 container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden">
        {/* Header */}
        <header className="mb-12 mt-19 pt-20">
          <h1 className="text-5xl font-bold text-center mb-4 mt-16">{title}</h1>
          <p className="text-lg text-center text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 items-center mb-16 mt-16">
          <div className="text-lg">
            <p className="leading-relaxed">{content}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="w-[300px] h-[300px] overflow-hidden"
                onClick={() => openModal(image, "image")}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 cursor-pointer hover:scale-105"
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
                const src = (child as any)?.props?.src;
                const isVideo = src?.endsWith(".mp4") || src?.endsWith(".webm");

                return (
                  <div
                    key={index}
                    className={`p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:scale-105 hover:border-4 hover:border-[#3975FA] cursor-pointer ${
                      aspectRatio ? `aspect-[${aspectRatio}]` : ""
                    }`}
                    onClick={() =>
                      src && openModal(src, isVideo ? "video" : "image")
                    }
                  >
                    {React.cloneElement(child as React.ReactElement, {
                      className: `w-full h-full object-cover rounded-md ${
                        aspectRatio ? `aspect-[${aspectRatio}]` : ""
                      }`,
                    })}
                  </div>
                );
              })}
          </div>
        </section>
        )}
      </div>

      <Footer />
      <WhatsApp />

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent.type === "image" ? (
              <img
                src={modalContent.src}
                alt="Enlarged Work"
                className="w-auto h-auto max-w-[90vw] max-h-[80vh] rounded-md"
              />
            ) : (
              <video
                src={modalContent.src}
                controls
                className="w-auto h-auto max-w-[90vw] max-h-[80vh] rounded-md"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
