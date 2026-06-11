import { Menu, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <Menu size={24} />

      <h1 className="text-xl font-bold">
        Twilight Foods
      </h1>

      <Moon size={24} />
    </nav>
  );
}