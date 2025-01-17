import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary } from "../config/cloudinary";
import { CloudinaryImage } from "@cloudinary/url-gen";

interface OptimizedImageProps {
  publicId: string; 
  alt: string; 
  transformations?: (image: CloudinaryImage) => CloudinaryImage; 
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  publicId,
  alt,
  transformations,
}) => {
  const image = cloudinary.image(publicId);

  if (transformations) {
    transformations(image);
  }

  return <AdvancedImage cldImg={image} alt={alt} />;
};
