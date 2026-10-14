"use client";

const SortDropdown = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-[#dce4de] bg-white px-3 py-2 text-sm font-semibold text-[#334138] outline-none transition focus:border-[#008c40] focus:ring-2 focus:ring-[#008c40]/10"
    >
      <option value="default">সাজান: ডিফল্ট</option>
      <option value="price-asc">দাম: কম থেকে বেশি</option>
      <option value="price-desc">দাম: বেশি থেকে কম</option>
    </select>
  );
};

export default SortDropdown;
