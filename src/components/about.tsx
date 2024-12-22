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
            At Hesh Media, our mission is to elevate your brand’s presence with bold ideas and smart strategies. From crafting compelling campaigns to delivering tangible results, our team is dedicated to your success in the ever-changing digital landscape.
            </p>
            <p className="text-lg text-muted-foreground dark:text-gray-400">
            Founded in 2023 in Amritsar, we’ve partnered with brands to achieve exceptional growth and redefine their digital impact.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden group">

              <img
                src="assets/office.jpg"
                alt="Office"
                className="w-full h-full object-cover rounded-2xl border-4 border-gray-300 dark:border-gray-700"
              />

              <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-[#58a6ff]/50 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
