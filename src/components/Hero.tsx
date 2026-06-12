import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Banner */}
      {/* Desktop Banner */}
<Image
  src="/banner.png"
  alt="Twilight Pragathi Nagar"
  fill
  priority
  sizes="100vw"
  className="hid
  den md:block object-cover"
/>

{/* Mobile Banner */}
<Image
  src="/mobile.png"
  alt="Twilight Pragathi Nagar"
  fill
  priority
  sizes="100vw"
  className="block md:hidden object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20">

        <button
          className="
            rounded-full
            border
            border-amber-400
            px-8
            py-3
            text-sm
            font-medium
            tracking-wide
            text-amber-400
            transition-all
            duration-300
            hover:bg-amber-400
            hover:text-black
            hover:shadow-[0_0_10px_rgba(251,191,36,0.4)]
          "
        >
          Explore Menu →
        </button>

      </div>

      {/* Fade Into Next Section */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}