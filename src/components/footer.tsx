import { Facebook, Instagram, Youtube,} from "lucide-react";
import { useTheme } from "@/components/theme-provider"; // Assuming your theme provider is set up

export function Footer() {
  const { theme } = useTheme(); // Access the current theme (light or dark)

  return (
    <footer className="bg-background py-5 dark:bg-gray-900 border-t border-border dark:border-gray-700">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <a href="/" className="flex items-center gap-2">
              <img
                src={theme === "dark" ? "/assets/hesh.png" : "/assets/hesh_black.png"}
                alt="hesh"
                className="h-24 w-auto max-w-none pt-2 -ml-4"
              />
            </a>
            <p className="mt-4 text-sm text-muted-foreground dark:text-gray-400">
              Transform your social media presence with data-driven strategies and creative excellence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="services/smm" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="services/graphic-design" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Grpahic Designing
                </a>
              </li>
              <li>
                <a href="services/video-editing" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="services/web-development" className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15kH8JHZMZ/?mibextid=wwXIfr" target="blank" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@heshmedia" target="blank" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/heshmedia.in" target="blank" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border dark:border-gray-700 text-center text-sm text-muted-foreground dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} hesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
