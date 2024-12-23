import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ValuesSection() {
  const values = [
    { title: "Innovation", description: "We embrace innovation in everything we do." },
    { title: "Integrity", description: "Honesty and transparency are our core." },
    { title: "Collaboration", description: "We value teamwork and partnerships." },
  ];

  return (
    <section id="values" className="py-16 bg-background dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-gray-50 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-black dark:text-white">
                  {value.title}
                </CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-400">
                  {value.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
