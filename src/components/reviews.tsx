interface Review {
  client: string;
  designation: string;
  review: string;
}

const reviews: Review[] = [
  {
    client: "Dr Yukti",
    designation: "Dental Studio Amritsar",
    review: "My personal brand has seen remarkable growth, with their focus on delivering high-quality content",
  },
  {
    client: "Ms. Chitvan Kochar",
    designation: "Principal, GD Goenka",
    review: "Consistently delivering high-quality content, professional shoots, expert editing, and stunning graphics for GD Goenka Toddler House.",
  },
  {
    client: "Dr Savy Miglani",
    designation: "Dental Excellence Ludhiana",
    review: "Always receiving high-quality content and timely delivery, even while working from a different city.",
  },
  {
    client: "Dr Gulneer Puri",
    designation: "Dietitian",
    review: "Great experience with managing my YouTube and Instagram, along with professional video editing and shoots.",
  },
];

export function Reviews(): JSX.Element {
  return (
    <section
      id="reviews"
      className="py-12 bg-background dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-foreground dark:text-white">
          Client Reviews
        </h2>
        <div className="relative overflow-hidden group">
          <div className="flex animate-scroll space-x-6">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-none w-[350px] md:w-[380px] bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center h-[190px] flex flex-col"
              >
                <div className="flex flex-col items-center h-[60px] mb-6">
                 <p className="font-bold text-lg mb-1 text-[#3975FA]">
                {review.client}
                 </p>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    {review.designation}
                  </p>
                </div>
                <p className="italic text-sm text-gray-600 dark:text-gray-300 overflow-hidden line-clamp-4">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          will-change: transform;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

