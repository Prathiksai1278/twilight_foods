"use client";

import { useState } from "react";
import { Menu, Moon, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-30 flex w-full items-center px-6 py-6 text-white md:px-12">

        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

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
                hover:shadow-[0_0_10px_rgba(251,191,36,0.4)]
              "
            >
              Order Now
            </button>
          )}

          <Moon size={24} />

        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed
          top-0
          left-0
          z-50
          h-full
          w-72
          bg-black
          border-r
          border-zinc-800
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <div className="flex items-center justify-between border-b border-zinc-800 p-6">

          <h2 className="text-lg font-semibold text-white">
            Twilight
          </h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>

        </div>

        <div className="flex flex-col p-6 text-white">

          <button className="py-3 text-left hover:text-amber-400">
            Home
          </button>

          <button className="py-3 text-left hover:text-amber-400">
            Offers
          </button>

          <button className="py-3 text-left hover:text-amber-400">
            Menu
          </button>

          <button className="py-3 text-left hover:text-amber-400">
            Gallery
          </button>

          <button className="py-3 text-left hover:text-amber-400">
            Contact
          </button>

        </div>

      </div>
    </>
  );
}