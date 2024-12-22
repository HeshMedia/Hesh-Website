"use client";

import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "react-scroll";
import Checkbox from "@/components/ui/checkbox";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const fixedOffset = -80;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#3975FA] dark:bg-gray-800 text-white border-b border-[#3975FA]/20 dark:border-gray-700">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/assets/hesh.png"
            alt="hesh"
            className="h-24 w-auto max-w-none pt-2 -ml-4"
          />
        </a>

        {/* Desktop Navigation */}
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

        {/* Hamburger and Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="relative z-50">
            <ThemeToggle />
          </div>
          {/* Hamburger Icon */}
          <div className="relative z-50 md:hidden">
            <Checkbox
              checked={menuOpen}
              onChange={toggleMenu}
              aria-label="Toggle navigation menu"
              role="button"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-16 right-0 w-3/4 max-w-sm bg-[#3975FA] dark:bg-gray-800 text-white p-6 shadow-lg z-40"
          style={{
            paddingTop: "40px", // Shift links towards the top
            paddingRight: "20px", // Shift links slightly to the right
          }}
        >
          <nav className="flex flex-col gap-6"> {/* Increased gap for spacing */}
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
