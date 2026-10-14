export default function GlobalLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#dfe8e1] border-t-[#009447]" />
        <p className="mt-4 text-sm text-[#6c7871]">লোড হচ্ছে...</p>
      </div>
    </div>
  );
}
