import Marquee from "react-fast-marquee";
import { fetchProducts, formatPrice, getUnitLabel, toBengaliDigits } from "@/lib/api";

const PriceTicker = async () => {
    const products = await fetchProducts();

    return (
        <section className="overflow-hidden border-y border-[#dfe8e1] bg-white" aria-label="আজকের বাজার দর">
            <Marquee speed={45} pauseOnHover gradient={false}>
                <div className="flex items-center gap-3 py-2">
                    {products.map((product) => {
                        const isUp = product.change?.dir === "up";
                        const isDown = product.change?.dir === "down";
                        const isFlat = product.change?.dir === "flat";
                        const changeColor = isFlat
                            ? "text-[#888]"
                            : isUp
                                ? "text-[#d94348]"
                                : "text-[#159657]";
                        const changeIcon = isFlat ? "—" : isUp ? "▲" : "▼";

                        return (
                            <div
                                key={product.id}
                                className="flex shrink-0 items-center gap-2 rounded-full border border-[#e2ebe4] bg-[#f8fbf8] px-3 py-1.5 text-xs"
                            >
                                <span className="text-lg" aria-hidden="true">
                                    {product.image || "🛒"}
                                </span>
                                <span className="font-bold text-[#26332a]">
                                    {product.nameBn}
                                </span>
                                <span className="text-[#68736b]">
                                    {formatPrice(product.today)} টাকা
                                </span>
                                <span className="text-[10px] text-[#7a857e]">
                                    {getUnitLabel(product.unit)}
                                </span>
                                <span className={`font-bold ${changeColor}`}>
                                    {changeIcon} {toBengaliDigits(product.change?.pct || 0)}%
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Marquee>
        </section>
    );
};

export default PriceTicker;