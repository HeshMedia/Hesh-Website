
import { cloudinary } from "../config/cloudinary"; // Import Cloudinary configuration
import { Resize } from "@cloudinary/url-gen/actions";
import { Carousel } from "./ui/carousel";

const galleryItems = [
  {
    title: "Office Space",
    button: "View Image",
    src: cloudinary.image("Gallery/e4pmkm398fwenuajhnrv").resize(Resize.fill().width(800).height(500)).toURL(),
  },
  {
    title: "Team Meeting",
    button: "View Image",
    src: cloudinary.image("Gallery/fkxgigkqehssgjjxzepi").resize(Resize.fill().width(800).height(500)).toURL(),
  },
  {
    title: "Event",
    button: "View Image",
    src: cloudinary.image("Gallery/lmcqxbyihgjgr3pfaem9").resize(Resize.fill().width(800).height(500)).toURL(),
  },
];

export function GallerySection() {
  return (
    <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-black dark:text-white  tracking-wide">
          Our Office
        </h2>
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={galleryItems} />
    </div>
    </div>
  );
}

export default GallerySection;
