import { Menu, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-20 flex w-full items-center px-6 md:px-12 py-6 text-white">
  
  <div>
    <Menu size={28} />
  </div>

  <div className="ml-auto flex items-center gap-6">
    <button className="rounded-full border border-amber-400 px-5 py-2 text-sm text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black">
      Order Now
    </button>

    <Moon size={24} />
  </div>

</nav>
  );
}