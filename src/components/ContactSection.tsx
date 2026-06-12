export default function ContactSection() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm tracking-[0.4em] text-amber-400">
          VISIT US
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Twilight Pragathi Nagar
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              Location
            </h3>

            <p className="mt-4 text-zinc-400">
              Pragathi Nagar,
              Hyderabad
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              Call Us
            </h3>

            <p className="mt-4 text-zinc-400">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              WhatsApp
            </h3>

            <p className="mt-4 text-zinc-400">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h3 className="text-lg font-semibold text-white">
              Timings
            </h3>

            <p className="mt-4 text-zinc-400">
              11 AM - 11 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}