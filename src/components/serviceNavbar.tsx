"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Checkbox from "@/components/ui/checkbox";

export function ServiceNavbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false); // Dropdown state

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const services = [
    { name: "Social Media Management", link: "/services/smm" },
    { name: "Graphic Designing", link: "/services/graphic-design" },
    { name: "Video Editing", link: "/services/video-editing" },
    { name: "Web Development", link: "/services/web-development" },
    { name: "Professional Camera Shoots", link: "/services/camera-shoots" },
    { name: "Ads Campaign", link: "/services/ads-campaign" },
    { name: "Influencer Marketing", link: "/services/influencer-marketing" },
    { name: "Consultancy", link: "/services/consultancy" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#3975FA] dark:bg-gray-800 text-white border-b border-[#3975FA]/20 dark:border-gray-700">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/assets/hesh.png"
            alt="hesh"
            className="h-16 w-auto max-w-none"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="/"
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            About Us
          </a>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
            >
              Services
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-lg z-50">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.link}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>
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
        >
          <nav className="flex flex-col gap-6">
            <a
              href="/"
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
            >
              About Us
            </a>
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors w-full text-left"
              >
                Services
              </button>
              {dropdownOpen && (
                <div className="mt-2 pl-4">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.link}
                      className="block text-sm py-1 hover:text-white/80 dark:hover:text-gray-300"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
