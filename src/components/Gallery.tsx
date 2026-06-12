export default function Gallery() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm tracking-[0.4em] text-amber-400">
          GALLERY
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Twilight Moments
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">

          <div className="h-64 rounded-2xl bg-zinc-900"></div>

          <div className="h-64 rounded-2xl bg-zinc-800"></div>

          <div className="h-64 rounded-2xl bg-zinc-900"></div>

          <div className="h-64 rounded-2xl bg-zinc-800"></div>

          <div className="h-64 rounded-2xl bg-zinc-900"></div>

          <div className="h-64 rounded-2xl bg-zinc-800"></div>

        </div>
      </div>
    </section>
  );
}