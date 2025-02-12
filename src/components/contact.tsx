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
          "service_sjs77dm",
          "template_5l027gl",
          form.current,
          "SV2waACebIn3Nbyi4"
        )
        .then(
          () => {
            toast({ title: "Message sent!", description: "We'll get back to you soon.", variant: "default" });
            form.current?.reset();
          },
          () => {
            toast({ title: "Error", description: "Something went wrong. Try again later.", variant: "destructive" });
          }
        )
        .finally(() => setIsSending(false));
    }
  };

  return (
    <section id="contact" className="bg-background dark:bg-gray-900  py-16 flex items-center justify-center px-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          {/* Right Section: Contact Info */}
          <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-1/2  p-8  text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mt-3">We’d love to hear from you. Reach out to us anytime!</p>
            <div className="mt-6 space-y-6">
              {[
                { Icon: Phone, text: "+91 83602 55087" },
                { Icon: Mail, text: "heshmedia21@gmail.com" },
                { Icon: MapPin, text: "Prem Complex, Circular Rd, Medical Enclave, Amritsar, Punjab 143001" }
              ].map(({ Icon, text }, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} className="flex items-center gap-4 text-center md:text-left">
                  <div className="h-12 w-12 min-w-[3rem] min-h-[3rem] flex items-center justify-center rounded-full bg-blue-600 shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 break-words max-w-[200px] md:max-w-full">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Left Section: Contact Form */}
          <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-1/2 p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <Input name="from_name" placeholder="Your Name" required className="w-full border-gray-300" />
              <Input name="reply_to" type="email" placeholder="Your Email" required className="w-full border-gray-300" />
              <Textarea name="message" placeholder="Your Message" required className="w-full border-gray-300" />
              <Button type="submit" disabled={isSending} className={`w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}>
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
