
const reviews = [
  {
    client: "John Doe",
    review: "This team truly transformed my business with their exceptional service.",
  },
  {
    client: "Jane Smith",
    review: "A remarkable experience! Their expertise in social media marketing is unparalleled.",
  },
  {
    client: "Emily Johnson",
    review: "Highly professional and results-driven. I couldn't be more satisfied!",
  },
  {
    client: "Michael Brown",
    review: "Their creative solutions helped us engage our audience like never before.",
  },
  {
    client: "Sarah Wilson",
    review: "Outstanding team! Their insights and strategies have been invaluable.",
  },
  {
    client: "David Lee",
    review: "Working with them has been a game changer for our online presence.",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-12 bg-background dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-foreground dark:text-white">
          Client Reviews
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex animate-scroll space-x-6"
            style={{
              whiteSpace: "nowrap",
              animation: "scroll 10s linear infinite",
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[350px] lg:w-[400px] h-auto bg-card dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <p className="font-bold text-lg text-foreground dark:text-white mb-3">
                  {review.client}
                </p>
                <p className="italic text-sm text-muted-foreground dark:text-gray-400">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll > div {
            white-space: normal; /* Ensures the text wraps */
          }
        `}
      </style>
    </section>
  );
}
