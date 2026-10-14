import { formatPrice, getUnitLabel } from "@/lib/api";

const PriceSummary = ({ product }) => {
    const prices = [
        { label: "আজ", value: product.today },
        { label: "গতকাল", value: product.yesterday },
        { label: "গত সপ্তাহ", value: product.lastWeek },
        { label: "গত মাস", value: product.lastMonth },
    ];

    return (
        <section className="mt-5">
            <div className="mb-3">
                <h2 className="text-xl font-extrabold text-[#1f2c24]">দামের সারাংশ</h2>
                <p className="mt-1 text-sm text-[#6c7871]">{getUnitLabel(product.unit)} মূল্য তুলনা</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {prices.map((price, index) => (
                    <div
                        key={price.label}
                        className={`rounded-xl border p-4 ${
                            index === 0
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