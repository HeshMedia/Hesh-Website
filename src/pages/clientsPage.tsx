import { Card, CardContent } from "@/components/ui/card";
import { Reviews } from "../components/reviews";

const clients = [
  { name: "Dr Yukti's Dental Studio", logo: "assets/clients/dentalstudio_amritsar.jpg", link: "https://instagram.com/dentalstudio_amritsar" },
  { name: "Dental Excellence Ludhiana", logo: "assets/clients/dentalexcellence.ludhiana.jpg", link: "https://instagram.com/dentalexcellence.ludhiana" },
  { name: "GD Goenka Toddler House", logo: "assets/clients/gdgth.amr.jpg", link: "https://instagram.com/gdgth.amr" },
  { name: "Kmaxx American Hospital", logo: "assets/clients/kmaxxamericanhospital.jpg", link: "https://instagram.com/kmaxxamericanhospital" },
  { name: "Kmaxx CDC", logo: "assets/clients/kmaxx_cdc.jpg", link: "https://instagram.com/kmaxx_cdc" },
  { name: "Dr Palika Dental", logo: "assets/clients/drpalikadentalcarecentre.jpg", link: "https://instagram.com/drpalikadentalcarecentre" },
  { name: "Dhillon Dental Studio", logo: "assets/clients/dhillondentalstudio.jpg", link: "https://www.instagram.com/dhillondentalstudio?igsh=MWRuMmg5NWl4azBmaw==" },
  { name: "City Dental Clinic Amritsar", logo: "assets/clients/citydentalclinicamritsar.jpg", link: "https://www.instagram.com/citydentalclinicamritsar?igsh=MTVocGs5bWNreTlpOA==" },
  { name: "Achievers Amritsar", logo: "assets/clients/achievers_amritsar.jpg", link: "https://www.instagram.com/achievers_amritsar?igsh=NGN4YXZ2d2N5aHRs" },
  { name: "Dr. Gulneer Nutrition", logo: "assets/clients/dr_gulneer_nutrition.jpg", link: "https://www.instagram.com/dr_gulneer_nutrition?igsh=MXFoeHQ2NWx0cXRnaQ==" },
  { name: "Compedia Learning", logo: "assets/clients/compedia_learning.jpg", link: "https://www.instagram.com/compedia_learning?igsh=MW9xeHpwYjZ2MzJybQ==" },
  { name: "Dr. Gupta's Dental Hub", logo: "assets/clients/dr_guptas_dental_hub.jpg", link: "https://www.instagram.com/dr_guptas_dental_hub?igsh=MWZ0YzNlYzN3NjJhbg==" },
  { name: "Dr. Mohindru", logo: "assets/clients/dr.mohindru.jpg", link: "https://www.instagram.com/dr.mohindru?igsh=MWx0M3NqMXo2OTh3NA==" },
  { name: "Mankesh Gambhir", logo: "assets/clients/mankeshgambhir.jpg", link: "https://www.instagram.com/mankeshgambhir?igsh=cGZwaWZzOXRseXd6" },
  { name: "Health and Nutrition", logo: "assets/clients/healthandnutrition27.jpg", link: "https://www.instagram.com/healthandnutrition27?igsh=eTFreDNjcWtjcmtq" },
  { name: "Tung Dental Clinic", logo: "assets/clients/tungdentalclinic.jpg", link: "https://www.instagram.com/tungdentalclinic?igsh=MXVubXppcGo3aXFlNA==" },
];

export function ClientsPage() {
  return (
    <section className="py-24 bg-background dark:bg-gray-900">
      <div className="container px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-white">
            Our Clients
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        </div>
      </div>
      <div className="mt-14">
      <Reviews />
      </div>
    </section>
  );
}
