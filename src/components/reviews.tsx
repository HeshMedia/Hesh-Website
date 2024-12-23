import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

interface Review {
  client: string;
  designation: string;
  review: string;
}

const reviews: Review[] = [
  {
    client: "Dr Yukti",
    designation: "Dental Studio Amritsar",
    review: "My personal brand has seen remarkable growth, with their focus on delivering high-quality content.",
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

const options = {
  type: "loop",
  perPage: 3,
  gap: "1rem",
  pagination: false,
  arrows: false, 
  drag: "free",
  autoScroll: {
    speed: 1,
    pauseOnHover: true, 
  },
  breakpoints: {
    640: {
      perPage: 1,
      gap: "0.5rem",
    },
    1280: {
      perPage: 2,
      gap: "1rem",
    },
  },
};

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
        <Splide options={options} extensions={{ AutoScroll }}>
          {reviews.map((review, index) => (
            <SplideSlide key={index}>
              <div
                className="flex-none w-full bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center h-[190px] flex flex-col"
              >
                <div className="flex flex-col items-center mb-6">
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
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
