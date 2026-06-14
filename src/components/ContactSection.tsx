export default function ContactSection() {
  return (
    <section id="contact" className="bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm tracking-[0.4em] text-amber-400">
          VISIT US
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Twilight Pragathi Nagar
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Visit us for great food, exciting contests, and memorable evenings.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          <div
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-5
              md:p-8
              text-center
              transition-all
              duration-300
              hover:border-amber-400
            "
          >
            <h3 className="text-base md:text-lg font-semibold text-white">
              Location
            </h3>

            <p className="mt-3 text-sm md:text-base text-zinc-400">
              Pragathi Nagar,
              Hyderabad
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-5
              md:p-8
              text-center
              transition-all
              duration-300
              hover:border-amber-400
            "
          >
            <h3 className="text-base md:text-lg font-semibold text-white">
              Call Us
            </h3>

            <p className="mt-3 text-sm md:text-base text-zinc-400">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-5
              md:p-8
              text-center
              transition-all
              duration-300
              hover:border-amber-400
            "
          >
            <h3 className="text-base md:text-lg font-semibold text-white">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm md:text-base text-zinc-400">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              p-5
              md:p-8
              text-center
              transition-all
              duration-300
              hover:border-amber-400
            "
          >
            <h3 className="text-base md:text-lg font-semibold text-white">
              Timings
            </h3>

            <p className="mt-3 text-sm md:text-base text-zinc-400">
              11 AM - 11 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}