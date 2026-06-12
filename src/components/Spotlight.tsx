import { promotions } from "@/data/promotions";

export default function Spotlight() {
  const activePromotions = promotions
    .filter((promotion) => promotion.enabled)
    .slice(0, 3);

  return (
    <section className="bg-black px-6 py-0">
      <div className="mx-auto max-w-7xl">

        <p className="text-center text-sm tracking-[0.4em] text-amber-400">
          CURRENT OFFERS
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white">
          Contests & Promotions
        </h2>

        <div
          className={`
            mt-12 grid gap-8
            ${
              activePromotions.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : activePromotions.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }
          `}
        >
          {activePromotions.map((promotion) => (
            <div
              key={promotion.id}
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
              <img
                src={promotion.image}
                alt={promotion.title}
                className="
                  h-50
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="p-6 text-center" >

                <h3 className="text-xl font-bold text-white">
                  {promotion.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400">
                  {promotion.description}
                </p>
              <div className="mt-6 flex justify-center">
                <button
                  className="
                    rounded-full
                    border
                    border-amber-400
                    px-5
                    py-2
                    text-sm
                    text-amber-400
                    transition-all
                    duration-300
                    hover:bg-amber-400
                    hover:text-black
                    hover:shadow-[0_0_7px_rgba(251,191,36,0.4)]
                  "
                >
                  {promotion.buttonText}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}