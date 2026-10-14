export default function CategoryLoading() {
  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#f1f7f2] px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 animate-pulse">
          <div className="h-8 w-48 rounded-lg bg-[#dfe8e1]" />
          <div className="mt-2 h-4 w-72 rounded bg-[#dfe8e1]" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-56 animate-pulse rounded-2xl border border-[#dfe8e1] bg-white" />
          ))}
        </div>
      </div>
    </main>
  );
}
