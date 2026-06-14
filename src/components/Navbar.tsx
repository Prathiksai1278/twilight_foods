"use client";

import { useState } from "react";
import { Menu, Moon, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6 text-white md:px-12">

      <div className="flex items-center">

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-amber-400">
            Home
          </a>

          <a href="#offers" className="hover:text-amber-400">
            Offers
          </a>

          <a href="#menu" className="hover:text-amber-400">
            Menu
          </a>

          <a href="#gallery" className="hover:text-amber-400">
            Gallery
          </a>

          <a href="#contact" className="hover:text-amber-400">
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

          <Moon size={24} />

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            mt-4
            rounded-2xl
            border
            border-zinc-800
            bg-black/95
            backdrop-blur
            p-4
            md:hidden
          "
        >
          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Home
            </a>

            <a
              href="#offers"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Offers
            </a>

            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Menu
            </a>

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}