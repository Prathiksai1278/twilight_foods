"use client";

import { useState } from "react";

export default function OffersPage() {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Buy 1 Get 1 Burger",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");

  const addOffer = () => {
    if (!title.trim()) return;

    setOffers([
      ...offers,
      {
        id: Date.now(),
        title,
        status: "Active",
      },
    ]);

    setTitle("");
    setShowForm(false);
  };

  const deleteOffer = (id: number) => {
    setOffers(
      offers.filter((offer) => offer.id !== id)
    );
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Offers
        </h2>

        <button
          onClick={() => setShowForm(true)}
          className="
            rounded-xl
            bg-amber-400
            px-4
            py-2
            font-semibold
            text-black
          "
        >
          Add Offer
        </button>
      </div>

      {showForm && (
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            p-6
          "
        >
          <input
            type="text"
            placeholder="Offer Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-zinc-700
              bg-black
              p-3
            "
          />

          <button
            onClick={addOffer}
            className="
              mt-4
              rounded-xl
              bg-green-500
              px-4
              py-2
              font-semibold
              text-white
            "
          >
            Save Offer
          </button>
        </div>
      )}

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800">

        <table className="w-full">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-4 text-left">
                Offer
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {offers.map((offer) => (
              <tr
                key={offer.id}
                className="border-t border-zinc-800"
              >
                <td className="p-4">
                  {offer.title}
                </td>

                <td className="p-4">
                  {offer.status}
                </td>

                <td className="p-4 text-right">
                  <button
                    onClick={() =>
                      deleteOffer(offer.id)
                    }
                    className="text-red-400"
                  >
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