import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Lightbulb, Users } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "We embrace innovation in everything we do, pushing boundaries to achieve excellence.",
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />, 
    },
    {
      title: "Integrity",
      description: "Honesty and transparency define our approach, ensuring trust and reliability.",
      icon: <Sparkles className="h-10 w-10 text-blue-500" />, 
    },
    {
      title: "Collaboration",
      description: "We value teamwork and partnerships, believing in collective success.",
      icon: <Users className="h-10 w-10 text-green-500" />, 
    },
  ];

  return (
    <section id="values" className="py-20 bg-background dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-black dark:text-white mb-12 tracking-wide">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-0">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Card className="relative bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition duration-300" />
                <CardHeader className="relative flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md">{value.icon}</div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
