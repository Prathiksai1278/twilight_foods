const menuItems = [
  {
    name: "Burgers",
    image: "https://picsum.photos/400?1",
  },
  {
    name: "Pizzas",
    image: "https://picsum.photos/400?2",
  },
  {
    name: "Pasta",
    image: "https://picsum.photos/400?3",
  },
  {
    name: "Wraps",
    image: "https://picsum.photos/400?4",
  },
  {
    name: "Beverages",
    image: "https://picsum.photos/400?5",
  },
  {
    name: "Desserts",
    image: "https://picsum.photos/400?6",
  },
];

export default function MenuShowcase() {
  return (
    <section className="bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-amber-400 tracking-[0.3em]">
          EXPLORE OUR
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Menu & More
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {menuItems.map((item) => (
  <div
    key={item.name}
    className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
  >
    <img
      src={item.image}
      alt={item.name}
      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="p-4">
      <h3 className="text-center text-lg font-semibold text-white">
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