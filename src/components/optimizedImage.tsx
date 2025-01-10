import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { cloudinary } from "../config/cloudinary";
import { CloudinaryImage } from "@cloudinary/url-gen";

interface OptimizedImageProps {
  publicId: string; // The Cloudinary public ID of the image
  alt: string; // Alt text for the image
  transformations?: (image: CloudinaryImage) => CloudinaryImage; // Optional transformations
  className?: string; // Optional className for styling
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  publicId,
  alt,
  transformations,
}) => {
  const image = cloudinary.image(publicId);

  // Apply transformations if provided
  if (transformations) {
    transformations(image);
  }

  return <AdvancedImage cldImg={image} alt={alt} />;
};
