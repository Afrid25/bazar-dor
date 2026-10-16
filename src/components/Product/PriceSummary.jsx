import { formatPrice, getUnitLabel } from "@/lib/api";

const PriceSummary = ({ product }) => {
    const marketPrices = (product.markets || [])
        .flatMap((market) => [Number(market.min), Number(market.max)])
        .filter(Number.isFinite);
    const minimum = marketPrices.length ? Math.min(...marketPrices) : product.today;
    const maximum = marketPrices.length ? Math.max(...marketPrices) : product.today;
    const average = marketPrices.length
        ? marketPrices.reduce((total, price) => total + price, 0) / marketPrices.length
        : product.today;
    const prices = [
        { label: "সর্বনিম্ন দাম", value: minimum },
        { label: "সর্বোচ্চ দাম", value: maximum },
        { label: "গড় দাম", value: Math.round(average) },
    ];

    return (
        <section className="mt-5">
            <div className="mb-3">
                <h2 className="text-xl font-extrabold text-[#1f2c24]">দামের সারাংশ</h2>
                <p className="mt-1 text-sm text-[#6c7871]">{getUnitLabel(product.unit)} মূল্য তুলনা</p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {prices.map((price, index) => (
                    <div
                        key={price.label}
                        className={`rounded-xl border p-4 ${
                            index === 2
                                ? "border-[#a9dfba] bg-[#eaf7ed]"
                                : "border-[#dfe8e1] bg-white"
                        }`}
                    >
                        <p className="text-xs font-semibold text-[#7a857e]">{price.label}</p>
                        <p className="mt-2 text-xl font-extrabold text-[#26332a]">
                            {formatPrice(price.value)}
                        </p>
                        <p className="mt-1 text-xs text-[#6c7871]">টাকা</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PriceSummary;