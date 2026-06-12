import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Social Icons */}
        <div className="flex items-center gap-8">

          <FaInstagram
   size={38}
  className="text-pink-500 transition-all duration-300 hover:scale-110"
/>

          <FaWhatsapp
  size={38}
  className="text-green-500 transition-all duration-300 hover:scale-110"
/>

         <MapPin
  size={38}
  className="text-red-500 transition-all duration-300 hover:scale-110"
/>

          <Phone
  size={38}
  className="text-blue-500 transition-all duration-300 hover:scale-110"
/>

        </div>

        {/* Copyright */}
        <p className="text-sm text-zinc-500">
          © 2026 Twilight Pragathi Nagar
        </p>

      </div>
    </footer>
  );
}