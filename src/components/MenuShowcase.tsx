const menuItems = [
  {
    name: "Burgers",
    image: "https://picsum.photos/600?1",
  },
  {
    name: "Pizzas",
    image: "https://picsum.photos/600?2",
  },
  {
    name: "Pasta",
    image: "https://picsum.photos/600?3",
  },
  {
    name: "Wraps",
    image: "https://picsum.photos/600?4",
  },
  {
    name: "Beverages",
    image: "https://picsum.photos/600?5",
  },
  {
    name: "Desserts",
    image: "https://picsum.photos/600?6",
  },
];

export default function MenuShowcase() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        
        <p className="text-center text-sm tracking-[0.4em] text-amber-400">
          EXPLORE OUR
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white md:text-5xl">
          Our Signature Menu
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]
              "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  h-72
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div className="p-5">
                <h3 className="text-center text-xl font-bold text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}