export function About() {
  return (
    <section id="about" className="py-24 pt-44 bg-background dark:bg-gray-900">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 text-foreground dark:text-white">
              We're More Than Just Another Agency
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-400 mb-6">
              At hesh, we believe in the power of authentic connections. Our approach combines creative storytelling with data-driven strategies to help brands thrive in the digital space.
            </p>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
              Founded in 2024, we've helped numerous brands transform their social media presence and achieve remarkable growth.
            </p>
          </div>
          <div className="relative h-[400px] bg-muted dark:bg-gray-800 rounded-2xl overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 0h40v40H0z" fill="none" />
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-primary/20 dark:text-blue-500/30" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-pattern)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
