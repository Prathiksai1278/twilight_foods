export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">

        <aside className="w-64 border-r border-zinc-800 p-6">
          <h1 className="text-2xl font-bold">
            Twilight Admin
          </h1>

          <nav className="mt-8 flex flex-col gap-4">

            <a href="/admin">Dashboard</a>

            <a href="/admin/offers">
              Offers
            </a>

            <a href="/admin/menu">
              Menu
            </a>

            <a href="/admin/gallery">
              Gallery
            </a>

            <a href="/admin/contact">
              Contact
            </a>

            <a href="/admin/settings">
              Settings
            </a>

          </nav>
        </aside>

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  );
}