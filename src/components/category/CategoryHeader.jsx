import Link from "next/link";

const CategoryHeader = ({ category }) => {
  return (
    <header className="mb-6">
      <Link href="/" className="text-xs font-semibold text-[#008f42] transition hover:text-[#007b39]">
        ← হোম পেজে ফিরে যান
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-4xl" aria-hidden="true">{category.icon}</span>
        <div>
          <h1 className="text-2xl font-extrabold text-[#1f2c24] sm:text-3xl">{category.nameBn}</h1>
          <p className="mt-1 text-sm text-[#6c7871]">এই ক্যাটাগরির সব পণ্যের আজকের বাজারদর</p>
        </div>
      </div>
    </header>
  );
};

export default CategoryHeader;
