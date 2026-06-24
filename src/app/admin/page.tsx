export default function AdminPage() {
  return (
    <>
      <h2 className="text-3xl font-bold">
        Dashboard
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3>Total Offers</h3>
          <p className="mt-2 text-3xl font-bold">
            5
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3>Menu Items</h3>
          <p className="mt-2 text-3xl font-bold">
            42
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3>Gallery Images</h3>
          <p className="mt-2 text-3xl font-bold">
            18
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h3>Last Updated</h3>
          <p className="mt-2">
            Today
          </p>
        </div>

      </div>
    </>
  );
}