"use client";

export default function GlobalError({ error, reset }) {
  return (
    <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#f1f7f2] px-4">
      <div className="text-center">
        <span className="text-6xl">⚠️</span>
        <h1 className="mt-4 text-2xl font-extrabold text-[#1f2c24]">কিছু ভুল হয়েছে</h1>
        <p className="mt-2 max-w-md text-sm text-[#6c7871]">
          {error?.message || "একটি অপ্রত্যাশিত সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।"}
        </p>
        <button
          onClick={reset}
          className="mt-5 inline-block rounded-md bg-[#009447] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#007d3b]"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </main>
  );
}
