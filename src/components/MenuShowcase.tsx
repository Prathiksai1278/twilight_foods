const menuItems = [
  {
    name: "Burgers",
    image: "https://picsum.photos/1200?1",
  },
  {
    name: "Pizzas",
    image: "https://picsum.photos/1200?2",
  },
  {
    name: "Pasta",
    image: "https://picsum.photos/1200?3",
  },
  {
    name: "Wraps",
    image: "https://picsum.photos/1200?4",
  },
  {
    name: "Beverages",
    image: "https://picsum.photos/1200?5",
  },
  {
    name: "Desserts",
    image: "https://picsum.photos/1200?6",
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu"className="bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <p className="text-center tracking-[0.3em] text-amber-400">
          EXPLORE OUR
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Menu Categories
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Crafted with passion. Served with perfection.
        </p>

        {/* MOBILE */}
        <div
          className="
            mt-12
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-4
            md:hidden
            [&::-webkit-scrollbar]:hidden
          "
        >
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="
                relative
                min-w-[88%]
                snap-center
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                shadow-xl
              "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-72
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="text-2xl font-bold tracking-wide text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-amber-400
              "
            >
              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold tracking-wide text-white">
                    {item.name}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}