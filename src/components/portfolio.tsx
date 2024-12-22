import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "Dental Studio Amritsar", logo: "assets/dentalstudio_amritsar.jpg", link: "https://instagram.com/dentalstudio_amritsar" },
  { name: "Dental Excellence Ludhiana", logo: "assets/dentalexcellence.ludhiana.jpg", link: "https://instagram.com/dentalexcellence.ludhiana" },
  { name: "GDGTH Amr", logo: "assets/gdgth.amr.jpg", link: "https://instagram.com/gdgth.amr" },
  { name: "Kmaxx American Hospital", logo: "assets/kmaxxamericanhospital.jpg", link: "https://instagram.com/kmaxxamericanhospital" },
  { name: "Kmaxx CDC", logo: "assets/kmaxx_cdc.jpg", link: "https://instagram.com/kmaxx_cdc" },
  { name: "Dr. Palika Dental Care Centre", logo: "assets/drpalikadentalcarecentre.jpg", link: "https://instagram.com/drpalikadentalcarecentre" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background dark:bg-gray-900">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-white">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by innovative brands worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block"
            >
              <Card className="relative bg-card dark:bg-gray-800 hover:bg-card/80 dark:hover:bg-gray-700 transition duration-300 h-[240px] flex flex-col items-center justify-start group border-2 border-transparent hover:border-[#58a6ff]/50 shadow-md hover:shadow-lg p-4">
                <CardContent className="flex flex-col items-center justify-start h-full mt-8">
                  <div className="flex items-center justify-center w-20 h-20 mb-3">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="text-foreground dark:text-white text-center font-semibold mt-2">
                    {client.name}
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
