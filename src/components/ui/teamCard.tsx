// components/TeamCard.tsx
import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import { OptimizedImage } from "../optimizedImage";
import { Resize } from "@cloudinary/url-gen/actions";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { RoundCorners } from "@cloudinary/url-gen/actions";

interface TeamCardProps {
  title: string;
  subtitle: string;
  description: string;
  src: string;
  isLarge?: boolean;
}

export function TeamCard({
  title,
  subtitle,
  description,
  src,
  isLarge = false
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${
        isLarge ? "h-[450px]" : "h-[400px]"
      } overflow-hidden group mx-auto bg-white dark:bg-black dark:border-0 border rounded-md text-black dark:text-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full absolute inset-0">
      <OptimizedImage
            publicId={src}
            alt={`${title}'s Profile Picture`}
            transformations={(image) => {
                const transformed = image
                .resize(
                    Resize.fill()
                    .width(600)   // Adjust these dimensions if needed to fill your card
                    .height(600)
                    .gravity(Gravity.focusOn(FocusOn.face()))
                )
                .roundCorners(RoundCorners.max());
                return transformed; // Return the transformed CloudinaryImage object
            }}
            className="h-full w-full object-cover scale-105 group-hover:scale-100 transition-all duration-300"
            />
      </div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 p-8 flex flex-col justify-end rounded-md transition-all duration-300"
        style={{
          backgroundColor: isHovered ? 'rgba(195, 76, 50, 0.9)' : 'transparent',
          opacity: isHovered ? 1 : 0
        }}
      >
        <div className={`transform ${isHovered ? 'translate-y-0' : 'translate-y-10'} transition-all duration-300 space-y-2`}>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="text-sm text-white">{description}</p>
          <button className="p-2 bg-black flex items-center gap-1 rounded-md text-white mt-4">
            Learn More <ChevronsRight size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Info */}
      <div
        className={`absolute bottom-0 w-full p-4 flex flex-col justify-end rounded-b-md transition-all duration-300 ${
          isHovered ? 'opacity-0 -bottom-4' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(195, 76, 50, 0.9), transparent)`
        }}
      >
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="text-sm text-white">{subtitle}</p>
      </div>
    </div>
  );
}