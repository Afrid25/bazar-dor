import Link from "next/link";

const EmptyCategory = () => {
  return (
    <div className="rounded-2xl border border-[#dfe8e1] bg-white p-10 text-center">
      <span className="text-5xl">📭</span>
      <h2 className="mt-4 text-xl font-extrabold text-[#1f2c24]">কোনো পণ্য নেই</h2>
      <p className="mt-2 text-sm text-[#6c7871]">
        এই ক্যাটাগরিতে এখন কোনো পণ্য পাওয়া যাচ্ছে না।
      </p>
      <Link href="/" className="mt-5 inline-block rounded-md bg-[#009447] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#007d3b]">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default EmptyCategory;
