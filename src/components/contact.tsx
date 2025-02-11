import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setIsSending(true);
      emailjs
        .sendForm(
          "service_sjs77dm", // Replace with your EmailJS service ID
          "template_5l027gl", // Replace with your EmailJS template ID
          form.current,
          "SV2waACebIn3Nbyi4" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title: "Message sent!",
              description: "We'll get back to you as soon as possible.",
              variant: "default",
            });
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
              variant: "destructive",
            });
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section
      id="contact"
      className="bg-background dark:bg-gray-900 flex items-center justify-center  py-16"
    >
      <div className="container mx-auto px-4">
        {/* Container for the two equally sized sections */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section: Contact Form */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1 p-6"
            >
              <div className="h-full flex flex-col justify-center">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="from_name"
                      placeholder="Your Name"
                      required
                      className="w-full bg-background dark:bg-gray-800 text-foreground dark:text-white border-primary/20 dark:border-primary/40"
                    />
                  </div>
                  <div>
                    <Input
                      name="reply_to"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full bg-background dark:bg-gray-800 text-foreground dark:text-white border-primary/20 dark:border-primary/40"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="w-full min-h-[150px] bg-background dark:bg-gray-800 text-foreground dark:text-white border-primary/20 dark:border-primary/40"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSending}
                      className={`w-full md:w-auto bg-primary hover:bg-primary/90 dark:bg-blue-600 text-primary-foreground ${
                        isSending ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Section: Contact Information */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-1 p-6"
            >
              <div className="h-full flex flex-col justify-center">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground dark:text-white">
                    Contact Us
                  </h2>
                  <p className="text-lg text-muted-foreground dark:text-gray-400 mt-4">
                    You can contact us for any queries or feedback.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-base text-foreground dark:text-white">
                      +91 83602 55087
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-base text-foreground dark:text-white">
                      heshmedia21@gmail.com
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-base text-foreground dark:text-white">
                      Prem Complex, Circular Rd, Medical Enclave, Amritsar,
                      Punjab 143001
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
