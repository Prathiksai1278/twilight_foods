import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm tracking-[0.4em] text-amber-400">
          GALLERY
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Twilight Moments
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Food, events, contests, customers and unforgettable moments from
          Twilight Pragathi Nagar.
        </p>

        {/* MOBILE */}
       {/* MOBILE */}
<div className="mt-12 grid grid-cols-2 gap-3 md:hidden">

  {gallery[0] && (
    <div className="overflow-hidden rounded-2xl border border-zinc-800">
      <img
        src={gallery[0].image}
        alt={gallery[0].type}
        className="h-36 w-full object-cover"
      />
    </div>
  )}

  {gallery[1] && (
    <div className="overflow-hidden rounded-2xl border border-zinc-800">
      <img
        src={gallery[1].image}
        alt={gallery[1].type}
        className="h-36 w-full object-cover"
      />
    </div>
  )}

  {gallery[2] && (
    <div className="col-span-2 overflow-hidden rounded-2xl border border-zinc-800">
      <img
        src={gallery[2].image}
        alt={gallery[2].type}
        className="h-52 w-full object-cover"
      />
    </div>
  )}

  {gallery.slice(3).map((item, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl border border-zinc-800"
    >
      <img
        src={item.image}
        alt={item.type}
        className="h-36 w-full object-cover"
      />
    </div>
  ))}

</div>

        {/* DESKTOP */}
        <div className="mt-12 hidden md:grid md:grid-cols-12 md:gap-4">

          {gallery[0] && (
            <div className="col-span-8 overflow-hidden rounded-3xl border border-zinc-800 group">
              <img
                src={gallery[0].image}
                alt={gallery[0].type}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {gallery[1] && (
            <div className="col-span-4 overflow-hidden rounded-3xl border border-zinc-800 group">
              <img
                src={gallery[1].image}
                alt={gallery[1].type}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {gallery.slice(2).map((item, index) => (
            <div
              key={index}
              className="
                col-span-4
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                group
                mt-4
              "
            >
              <img
                src={item.image}
                alt={item.type}
                className="
                  h-[260px]
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}