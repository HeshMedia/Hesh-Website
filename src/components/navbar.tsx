import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Link } from "react-scroll";
import Checkbox from "@/components/ui/checkbox";

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const fixedOffset = -80;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#3975FA] dark:bg-gray-800 text-white border-b border-[#3975FA]/20 dark:border-gray-700 shadow-md">
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
          {[
            { to: "about", label: "About", offset: 27 },
            { to: "services", label: "Services", offset: 35 },
            { to: "portfolio", label: "Portfolio", offset: 65 },
            { to: "contact", label: "Contact", offset: 0 },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={fixedOffset + item.offset}
              className="relative text-base cursor-pointer transition-transform transform hover:scale-105 transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              {item.label}
            </Link>
          ))}
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
          className="absolute top-16 right-0 w-3/4 max-w-sm bg-[#3975FA] dark:bg-gray-800 text-white p-6 shadow-lg z-40 animate-slideIn"
          style={{
            paddingTop: "40px", // Shift links towards the top
            paddingRight: "20px", // Shift links slightly to the right
          }}
        >
          <nav className="flex flex-col gap-6"> 
            {[
              { to: "about", label: "About" },
              { to: "services", label: "Services" },
              { to: "portfolio", label: "Portfolio" },
              { to: "contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={fixedOffset}
                className="text-lg cursor-pointer hover:text-white/80 dark:hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
