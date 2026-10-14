export default function ProductLoading() {
  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#f1f7f2] px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-32 rounded bg-[#dfe8e1]" />
          <div className="rounded-2xl border border-[#dfe8e1] bg-white p-6">
            <div className="h-8 w-64 rounded bg-[#dfe8e1]" />
            <div className="mt-3 h-4 w-96 rounded bg-[#dfe8e1]" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-28 rounded-2xl border border-[#dfe8e1] bg-white" />
            ))}
          </div>
          <div className="h-64 rounded-2xl border border-[#dfe8e1] bg-white" />
        </div>
      </div>
    </main>
  );
}
