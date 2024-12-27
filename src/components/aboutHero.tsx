export function AboutHero() {
    return (
      <section
        id="team"
        className="mt-19 py-28 bg-background dark:bg-gray-800 text-foreground dark:text-white"
      >
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
  
          {/* Subtitle */}
          <h2 className="text-2xl font-medium text-muted-foreground dark:text-gray-300 mb-8">
            Creating innovative solutions to make an impact.
          </h2>
  
          {/* Summary Paragraph */}
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            At Hesh Media, we believe in crafting impactful and innovative
            solutions for our clients. Our team is dedicated to delivering
            excellence through creative strategies and cutting-edge ideas, ensuring
            success in a fast-evolving digital landscape.
          </p>
        </div>
      </section>
    );
  }
  