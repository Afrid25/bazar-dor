import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#f1f7f2] px-4">
      <div className="text-center">
        <span className="text-7xl">🛒</span>
        <h1 className="mt-4 text-3xl font-extrabold text-[#1f2c24]">পৃষ্ঠা পাওয়া যায়নি</h1>
        <p className="mt-2 text-sm text-[#6c7871]">
          দুঃখিত, আপনি যে পৃষ্ঠা খুঁজছেন সেটি বিদ্যমান নেই।
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-[#009447] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#007d3b]"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
