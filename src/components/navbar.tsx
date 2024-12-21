'use client';

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "react-scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const fixedOffset = -80; 

  return (
    <header className="fixed top-0 w-full z-50 bg-[#3975FA] dark:bg-gray-800 text-white backdrop-blur-md border-b border-[#3975FA]/20 dark:border-gray-700">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center gap-2">
        <img
          src="/assets/hesh.png"
          alt="hesh"
          className="h-24 w-auto max-w-none pt-2 -ml-4"
        />
        </a>
        <nav className="hidden md:flex gap-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={fixedOffset + 27}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105 hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={fixedOffset + 35}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105 hover:text-primary transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={fixedOffset + 65}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105 hover:text-primary transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={fixedOffset}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105 hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/80 dark:hover:text-gray-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#3975FA] dark:bg-gray-800 text-white"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={fixedOffset}
                  onClick={() => setIsOpen(false)}
                  className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={fixedOffset}
                  onClick={() => setIsOpen(false)}
                  className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  offset={fixedOffset}
                  onClick={() => setIsOpen(false)}
                  className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={fixedOffset}
                  onClick={() => setIsOpen(false)}
                  className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
