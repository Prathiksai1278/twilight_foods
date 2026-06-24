export default function MenuPage() {
  const menuItems = [
    {
      id: 1,
      category: "Burgers",
      name: "Chicken Zinger",
      price: "₹199",
      available: true,
    },
    {
      id: 2,
      category: "Pizzas",
      name: "Cheese Burst",
      price: "₹299",
      available: false,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Menu Management
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
          Add Item
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800">

        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Item</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {menuItems.map((item) => (
              <tr
                key={item.id}
                className="border-t border-zinc-800"
              >
                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.price}
                </td>

                <td className="p-4">
                  {item.available ? (
                    <span className="text-green-400">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-400">
                      Unavailable
                    </span>
                  )}
                </td>

                <td className="p-4 text-right">
                  <button className="mr-3 text-blue-400">
                    Edit
                  </button>

                  <button className="text-red-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </>
  );
}