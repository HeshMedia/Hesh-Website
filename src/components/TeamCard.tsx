import React from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./optimizedImage";

interface TeamCardProps {
  title: string;
  subtitle: string;
  description: string;
  publicId: string; // Cloudinary public identifier, e.g., "team/wlgsdo8xqaefwu0rrgf1"
  isLarge?: boolean;
  isHighlighted?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  title,
  subtitle,
  description,
  publicId,
  isLarge = false,
  isHighlighted = false,
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl shadow-2xl group
        ${isLarge ? "aspect-[16/9]" : "aspect-square"}
        ${isHighlighted ? "border-4 border-yellow-500" : ""}
      `}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Cloudinary image with object-top so the top of the image is always visible */}
      <OptimizedImage
        publicId={publicId}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient overlay for improved text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-white">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-md">{subtitle}</p>
        </div>
        {/* Description appears on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-2 text-white text-sm"
        >
          {description}
        </motion.div>
        {/* Founder badge for highlighted team members */}
        {isHighlighted && (
          <div className="mt-2 inline-block bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">
            Founder
          </div>
        )}
      </div>
    </motion.div>
  );
};
