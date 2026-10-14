import { formatPrice, getUnitLabel } from "@/lib/api";
import PriceChangeBadge from "./PriceChangeBadge";

const ProductSummary = ({ product }) => {
    return (
        <section className="mt-5 rounded-2xl border border-[#dce6de] bg-white p-5 shadow-[0_2px_8px_rgba(34,63,43,0.04)] sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-[#eaf7ed] text-5xl" aria-hidden="true">
                        {product.image || "🛒"}
                    </span>
                    <div>
                        <p className="text-sm font-semibold text-[#009447]">
                            {product.categoryNameBn || "বাজার পণ্য"}
                        </p>
                        <h1 className="mt-1 text-2xl font-extrabold text-[#1f2c24] sm:text-3xl">
                            {product.nameBn}
                        </h1>
                        <p className="mt-1 text-sm text-[#6c7871]">{getUnitLabel(product.unit)}</p>
                    </div>
                </div>

                <div className="sm:text-right">
                    <p className="text-xs text-[#7a857e]">আজকের দাম</p>
                    <p className="mt-1 text-3xl font-extrabold text-[#1f2c24]">
                        {formatPrice(product.today)} <span className="text-base">টাকা</span>
                    </p>
                    <div className="mt-2 sm:flex sm:justify-end">
                        <PriceChangeBadge change={product.change} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSummary;