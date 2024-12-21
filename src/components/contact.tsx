'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export function Contact() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setIsSending(true); // Set sending state
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
              variant: "default", // Notification variant
            });
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
              variant: "destructive", // Error variant
            });
          }
        )
        .finally(() => {
          setIsSending(false); // Reset sending state
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background dark:bg-gray-900">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400">
            Ready to transform your social media presence? Let's talk.
          </p>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <Input
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-background dark:bg-gray-800 border-primary/20 dark:border-primary/40"
            />
          </div>
          <div>
            <Input
              name="reply_to"
              type="email"
              placeholder="Your Email"
              required
              className="bg-background dark:bg-gray-800 border-primary/20 dark:border-primary/40"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              className="min-h-[150px] bg-background dark:bg-gray-800 border-primary/20 dark:border-primary/40"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSending} // Disable button while sending
            className={`w-full bg-primary hover:bg-primary/90 dark:bg-blue-600 text-primary-foreground ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
