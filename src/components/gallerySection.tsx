import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./optimizedImage"; // Import the Cloudinary component
import { Resize } from "@cloudinary/url-gen/actions";

interface GalleryItem {
  id: number;
  url: string; // Cloudinary public ID
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, url: "qqaiy3pli16tuhb3u01b", title: "Office Space", description: "A view of our office space." },
  { id: 2, url: "Gallery/fkxgigkqehssgjjxzepi", title: "Team Meeting", description: "Our team collaborating on new ideas." },
  { id: 3, url: "Gallery/lmcqxbyihgjgr3pfaem9", title: "Event", description: "Celebrating milestones together." },
];

export function GallerySection() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <section id="gallery_section" className="py-16 bg-background dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
          Gallery
        </h2>
        <div className="flex justify-center items-center">
          <div className="rounded-md w-fit mx-auto md:gap-2 gap-1 flex pb-20 pt-10">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                className={`${
                  index === i
                    ? "w-[250px] xl:h-[200px] md:h-[180px] sm:h-[160px] h-[140px] rounded-lg"
                    : "xl:w-[50px] md:w-[30px] sm:w-[20px] w-[14px] xl:h-[200px] md:h-[180px] sm:h-[160px] h-[140px] rounded-full"
                } flex-shrink-0 transition-[width] ease-in-out duration-500 overflow-hidden`}
                onMouseEnter={() => setIndex(i)}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <OptimizedImage
                  publicId={item.url}
                  alt={item.title}
                  transformations={(image) =>
                    image.resize(
                      Resize.fill().width(index === i ? 250 : 50).height(200)
                    )
                  }
                  className={`h-full w-full object-cover ${
                    index === i ? "rounded-lg" : "rounded-full"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dark:bg-black/40 bg-white/40 backdrop-blur-sm fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 w-full h-full grid place-content-center"
              onClick={() => setOpen(false)}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <motion.div
                  layoutId={galleryItems[index].id.toString()}
                  className="w-[400px] h-[400px] rounded-2xl cursor-default"
                >
                  <OptimizedImage
                    publicId={galleryItems[index].url}
                    alt="Gallery Item"
                    transformations={(image) =>
                      image.resize(Resize.fill().width(400).height(400))
                    }
                    className="rounded-lg h-full w-full object-cover"
                  />
                  <article className="dark:bg-gray-800 bg-white rounded-md p-2 mt-2 border">
                    <motion.h1
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0.2 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      className="text-xl font-semibold text-black dark:text-white"
                    >
                      {galleryItems[index].title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ scaleY: -10, opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      className="text-sm leading-[100%] py-2 text-gray-600 dark:text-gray-300"
                    >
                      {galleryItems[index].description}
                    </motion.p>
                  </article>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
