import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, PenTool, Video, TrendingUp, Globe, BookOpen, Tv, Clapperboard } from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Transform your social presence with professional, consistent branding and engaging posts.",
    icon: Users,
    to: "/services/smm", // Navigation link for the service
  },
  {
    title: "Graphic Designing",
    description:
      "Create visually stunning content, including logos, infographics, and tailored designs.",
    icon: PenTool,
    to: "/services/graphic-design",
  },
  {
    title: "Video Editing",
    description:
      "Create professionally edited videos with seamless transitions, effects, and compelling storytelling to captivate your audience.",
    icon: Clapperboard,
    to: "/services/video-editing",
  },
  {
    title: "Web Development",
    description:
      "Build responsive, visually engaging websites that exceed your business objectives.",
    icon: Globe,
    to: "/services/web-development",
  },
  {
    title: "Professional Camera Shoots",
    description:
      "Design compelling email campaigns to drive sales and nurture customer relationships.",
    icon: Video,
    to: "/services/camera-shoots",
  },
  {
    title: "Ads Campaign",
    description:
      "Maximize reach with tailored ad strategies on platforms like Instagram, Facebook, and Google.",
    icon: Tv,
    to: "/services/ads-campaign",
  },
  {
    title: "Influencer Marketing",
    description:
      "Boost brand visibility through strategic influencer collaborations and targeted campaigns.",
    icon: TrendingUp,
    to: "/services/influencer-marketing",
  },
  {
    title: "Consultancy",
    description:
      "Leverage data-driven insights and competitor analysis for effective, actionable strategies.",
    icon: BookOpen,
    to: "/services/consultancy",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-background dark:bg-gray-900 overflow-hidden"
    >
      <div className="container relative z-10 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Explore our tailored solutions to elevate your brand and drive results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              to={service.to} // Pass the `to` prop for navigation
              className="relative overflow-hidden group backdrop-blur-sm bg-card/50 dark:bg-gray-800 border-2 border-transparent hover:border-[#58a6ff]/50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-[#58a6ff]/10 dark:bg-[#58a6ff]/20 flex items-center justify-center group-hover:bg-[#58a6ff]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#58a6ff] dark:text-[#58a6ff]" />
                </div>
                <CardTitle className="text-foreground dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground dark:text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
