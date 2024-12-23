import { useState } from "react";
import { Link } from "react-scroll";
import { ThemeToggle } from "@/components/theme-toggle";
import Checkbox from "@/components/ui/checkbox";

export function AboutNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className="ml-5 hidden md:flex gap-10">
          <a
            href="/"
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            Home
          </a>
          <Link
            to="team"
            smooth={true}
            duration={500}
            offset={fixedOffset}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            Team
          </Link>
          <Link
            to="values"
            smooth={true}
            duration={500}
            offset={fixedOffset}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            Values
          </Link>
          <Link
            to="gallery_section"
            smooth={true}
            duration={500}
            offset={fixedOffset}
            className="text-base cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-transform transform hover:scale-105"
          >
            Gallery
          </Link>
        </nav>

        {/* Hamburger Menu - Visible only on smaller screens */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="md:hidden"> {/* Only visible on small screens */}
            <Checkbox
              checked={menuOpen}
              onChange={toggleMenu}
              aria-label="Toggle navigation menu"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-3/4 max-w-sm bg-[#3975FA] dark:bg-gray-800 text-white p-6 shadow-lg z-40">
          <nav className="flex flex-col gap-6">
            <a
              href="/"
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300"
            >
              Home
            </a>
            <Link
              to="team"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300"
            >
              Team
            </Link>
            <Link
              to="values"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300"
            >
              Values
            </Link>
            <Link
              to="gallery_section"
              smooth={true}
              duration={500}
              offset={fixedOffset}
              className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300"
            >
              Gallery
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
