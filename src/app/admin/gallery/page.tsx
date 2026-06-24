export default function GalleryPage() {
  const images = [
    {
      id: 1,
      image: "/gallery/food-1.jpg",
      type: "Food",
    },
    {
      id: 2,
      image: "/gallery/event-1.jpg",
      type: "Event",
    },
    {
      id: 3,
      image: "/gallery/ambience-1.jpg",
      type: "Ambience",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Gallery
        </h2>

        <button
          className="
            rounded-xl
            bg-amber-400
            px-4
            py-2
            font-semibold
            text-black
          "
        >
          Upload Image
        </button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
            "
          >
            <div className="h-52 bg-zinc-800" />

            <div className="p-4">
              <p className="font-medium">
                {img.type}
              </p>

              <div className="mt-4 flex justify-between">

                <button className="text-blue-400">
                  Replace
                </button>

                <button className="text-red-400">
                  Delete
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}