"use client";

import { useState } from "react";
import { Menu, Moon, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useTheme } from "@/context/ThemeContext";
import MoonParticles from "@/components/MoonParticles";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const { theme, toggleTheme } = useTheme();
const accent =
  theme === "blue"
    ? "text-blue-400"
    : "text-amber-400";

const accentBorder =
  theme === "blue"
    ? "border-blue-400"
    : "border-amber-400";

const [showParticles, setShowParticles] = useState(false);

const [isAnimating, setIsAnimating] = useState(false);

const handleMoonClick = () => {
  if (isAnimating) return;

  setIsAnimating(true);

  toggleTheme();

  setShowParticles(false);

  setTimeout(() => {
    setShowParticles(true);

    setTimeout(() => {
      setShowParticles(false);
      setIsAnimating(false);
    }, 1000);
  }, 10);
};
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6 text-white md:px-12">
      <div className="flex items-center">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}>
            Home
          </a>

          <a href="#offers" className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}>
            Offers
          </a>

          <a href="#menu" className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}>
            Menu
          </a>

          <a href="#gallery" className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}>
            Gallery
          </a>

          <a href="#contact" className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}>
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-6">

          {siteConfig.showOrderButton && (
            <button
              className="
                rounded-full
                border
                border-amber-400
                px-5
                py-2
                text-sm
                text-amber-400
                transition-all
                duration-300
                hover:bg-amber-400
                hover:text-black
              "
            >
              Order Now
            </button>
          )}
        <div className="relative">
  <button onClick={handleMoonClick}>
    <Moon
      size={24}
      className={`
        transition-all
        duration-500

        ${
          theme === "blue"
            ? "rotate-180 text-blue-400"
            : "rotate-0 text-amber-400"
        }
      `}
      style={{
        filter:
          theme === "blue"
            ? "drop-shadow(0 0 20px #60a5fa)"
            : "drop-shadow(0 0 20px #fbbf24)",
      }}
    />
  </button>

  <MoonParticles
    show={showParticles}
    color={
      theme === "blue"
        ? "#60a5fa"
        : "#fbbf24"
    }
  />
</div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            mt-4
            rounded-3xl
            border
            border-zinc-800
            bg-black/95
            backdrop-blur-md
            p-5
            md:hidden
          "
        >
          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}
            >
              Home
            </a>

            <a
              href="#offers"
              onClick={() => setMenuOpen(false)}
              className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}
            >
              Offers
            </a>

            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}
            >
              Menu
            </a>

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-amber-400"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`transition ${
  theme === "blue"
    ? "hover:text-blue-400"
    : "hover:text-amber-400"
}`}
            >
              Contact
            </a>

            {siteConfig.showOrderButton && (
              <>
                <div className="my-2 border-t border-zinc-800" />

                <button
  className={`
    rounded-full
    border
    px-5
    py-2
    text-sm
    transition-all
    duration-300

    ${
      theme === "blue"
        ? `
          border-blue-400
          text-blue-400
          hover:bg-blue-400
        `
        : `
          border-amber-400
          text-amber-400
          hover:bg-amber-400
        `
    }

    hover:text-black
  `}
>
  Order Now
</button> 
              </>
            )}

            <div className="my-2 border-t border-zinc-800" />

            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-green-500"
            >
              WhatsApp
            </a>

            <a
              href="#"
              className="transition hover:text-red-500"
            >
              Location
            </a>

            <a
              href="#"
              className="transition hover:text-blue-500"
            >
              Call Us
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}