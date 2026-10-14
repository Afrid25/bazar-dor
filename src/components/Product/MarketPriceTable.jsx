import { formatPrice } from "@/lib/api";

const MarketPriceTable = ({ markets = [] }) => {
    return (
        <section className="mt-6 rounded-2xl border border-[#dce6de] bg-white p-5 shadow-[0_2px_8px_rgba(34,63,43,0.04)] sm:p-7">
            <div className="mb-4">
                <h2 className="text-xl font-extrabold text-[#1f2c24]">বাজারভিত্তিক দাম</h2>
                <p className="mt-1 text-sm text-[#6c7871]">
                    বিভিন্ন বাজারে আজকের সর্বনিম্ন ও সর্বোচ্চ দাম
                </p>
            </div>

            {markets.length === 0 ? (
                <div className="rounded-xl border border-[#e3ebe4] bg-[#fbfdfb] p-6 text-center text-sm text-[#6c7871]">
                    এই পণ্যের বাজারভিত্তিক তথ্য এখন পাওয়া যাচ্ছে না।
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-b border-[#dfe8e1] text-xs text-[#7a857e]">
                                <th className="px-3 py-3 font-bold">বাজার</th>
                                <th className="px-3 py-3 font-bold">বিভাগ</th>
                                <th className="px-3 py-3 text-right font-bold">সর্বনিম্ন</th>
                                <th className="px-3 py-3 text-right font-bold">সর্বোচ্চ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {markets.map((market, index) => (
                                <tr
                                    key={`${market.market}-${index}`}
                                    className="border-b border-[#edf2ee] last:border-0 hover:bg-[#fbfdfb]"
                                >
                                    <td className="px-3 py-3 font-semibold text-[#26332a]">
                                        {market.market}
                                    </td>
                                    <td className="px-3 py-3 text-[#6c7871]">{market.division}</td>
                                    <td className="px-3 py-3 text-right font-bold text-[#159657]">
                                        {formatPrice(market.min)} টাকা
                                    </td>
                                    <td className="px-3 py-3 text-right font-bold text-[#d27a31]">
                                        {formatPrice(market.max)} টাকা
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default MarketPriceTable;