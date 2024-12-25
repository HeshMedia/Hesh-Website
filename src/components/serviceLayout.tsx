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
}: {
  title: string;
  description: string;
  content: string;
  images: string[];
  children?: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background dark:bg-gray-900 text-foreground dark:text-white min-h-screen">
      {/* Navbar */}
      <ServiceNavbar />

      {/* Main Content */}
      <div className="pt-40 pb-16 container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 overflow-hidden">
        {/* Heading Section */}
        <header className="mb-12 mt-19 pt-20">
          <h1 className="text-5xl font-bold text-center mb-4 mt-16">{title}</h1>
          <p className="text-lg text-center text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 mt-16 pt-8 pb-2">
          <div className="text-lg">
            <p className="leading-relaxed">{content}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-md transition-all duration-300 cursor-pointer w-full h-auto"
                onClick={() => openModal(image)}
              />
            ))}
          </div>
        </div>

        {/* Our Work Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-10 mt-8">Our Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {children &&
              React.Children.map(children, (child, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md transition-all hover:scale-105 hover:border-4 hover:border-[#3975FA] cursor-pointer"
                  onClick={() => openModal((child as any).props.src)}
                >
                  {child}
                </div>
              ))}
          </div>
        </section>
      </div>

      <div className="mt-9">
        {/* Footer */}
        <Footer />
      </div>

      <WhatsApp />
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Enlarged Work"
              className="w-auto h-auto max-w-[90vw] max-h-[80vh] rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
