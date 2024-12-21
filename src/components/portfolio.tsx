import { Card, CardContent } from "@/components/ui/card";

const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 2", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 3", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 4", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 5", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=120" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background dark:bg-gray-900">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-white">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Trusted by innovative brands worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2363f0] via-[#ff00ff] to-[#2363f0] rounded-lg blur opacity-30 dark:opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Card className="relative bg-card dark:bg-gray-800 hover:bg-card/80 dark:hover:bg-gray-700 transition duration-300">
                <CardContent className="p-6 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
