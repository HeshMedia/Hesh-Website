import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME || "", // Vite-specific syntax
  },
});

console.log(import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME);
