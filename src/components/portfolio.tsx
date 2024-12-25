import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "Dr Yukti's Dental Studio", logo: "assets/clients/dentalstudio_amritsar.jpg", link: "https://instagram.com/dentalstudio_amritsar" },
  { name: "Dental Excellence Ludhiana", logo: "assets/clients/dentalexcellence.ludhiana.jpg", link: "https://instagram.com/dentalexcellence.ludhiana" },
  { name: "GD Goenka Toddler House", logo: "assets/clients/gdgth.amr.jpg", link: "https://instagram.com/gdgth.amr" },
  { name: "Kmaxx American Hospital", logo: "assets/clients/kmaxxamericanhospital.jpg", link: "https://instagram.com/kmaxxamericanhospital" },
  { name: "Kmaxx CDC", logo: "assets/clients/kmaxx_cdc.jpg", link: "https://instagram.com/kmaxx_cdc" },
  { name: "Dr Palika Dental", logo: "assets/clients/drpalikadentalcarecentre.jpg", link: "https://instagram.com/drpalikadentalcarecentre" },
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
              className="block"
            >
              <Card className="relative bg-card dark:bg-gray-800 hover:bg-card/80 dark:hover:bg-gray-700 transition duration-300 h-[240px] flex flex-col items-center justify-center group border-2 border-transparent hover:border-[#58a6ff]/50 shadow-md hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-20 h-20 mb-3">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <span className="text-foreground dark:text-white text-center">
                    {client.name}
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
          <div className="col-span-2 md:col-span-3 lg:col-span-6 flex justify-center items-center">
            <a
              href="/clients"
              className="text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-[#58a6ff] dark:hover:text-[#58a6ff] underline transition"
            >
              and many more...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
