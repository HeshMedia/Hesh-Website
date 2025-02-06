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
  className,
}) => {
  let cldImg = cloudinary.image(publicId);

  if (transformations) {
    cldImg = transformations(cldImg);
  }

  return <AdvancedImage cldImg={cldImg} alt={alt} className={className} />;
};
