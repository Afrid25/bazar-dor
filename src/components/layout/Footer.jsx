import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#e3ebe4] bg-[#1f2c24] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-extrabold">🛒 বাজার দর</h3>
            <p className="mt-2 text-sm text-[#a3b5a8]">
              বাংলাদেশের নিত্যপণ্যের দৈনিক বাজারদর এক জায়গায়। চাল, ডাল, তেল, সবজি, মাছ, মাংসের আজকের দাম জানুন।
            </p>
          </div>

          <div>
            <h4 className="font-bold">দ্রুত লিংক</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#a3b5a8]">
              <li><Link href="/" className="transition hover:text-white">হোম</Link></li>
              <li><Link href="/category/chal" className="transition hover:text-white">চাল</Link></li>
              <li><Link href="/category/sobji" className="transition hover:text-white">সবজি</Link></li>
              <li><Link href="/category/mach" className="transition hover:text-white">মাছ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">ক্যাটাগরি</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#a3b5a8]">
              <li><Link href="/category/dal" className="transition hover:text-white">ডাল</Link></li>
              <li><Link href="/category/tel" className="transition hover:text-white">তেল</Link></li>
              <li><Link href="/category/mangsho" className="transition hover:text-white">মাংস</Link></li>
              <li><Link href="/category/mosla" className="transition hover:text-white">মসলা</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold">তথ্য</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#a3b5a8]">
              <li><Link href="/sign-in" className="transition hover:text-white">সাইন ইন</Link></li>
              <li><Link href="/sign-up" className="transition hover:text-white">সাইন আপ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#2e3e34] pt-6 text-center text-sm text-[#7a917f] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</span>
          <span>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
