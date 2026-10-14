import Link from "next/link";
import { formatPrice, getUnitLabel } from "@/lib/api";
import PriceChangeBadge from "./PriceChangeBadge";

const ProductCard = ({ product }) => {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="group rounded-2xl border border-[#dfe8e1] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#8bd3a9] hover:shadow-md"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#f2f8f3] text-4xl" aria-hidden="true">
                        {product.image || "🛒"}
                    </span>
                    <div className="min-w-0">
                        <h3 className="truncate font-bold text-[#26362c] group-hover:text-[#008a43]">
                            {product.nameBn}
                        </h3>
                        <p className="mt-1 text-xs text-[#7a857e]">{getUnitLabel(product.unit)}</p>
                    </div>
                </div>
                <PriceChangeBadge change={product.change} />
            </div>

            <div className="mt-4 flex items-end justify-between border-t border-[#edf2ee] pt-3">
                <span className="text-xs text-[#7a857e]">আজকের দাম</span>
                <span className="text-lg font-extrabold text-[#1f2c24]">
                    {formatPrice(product.today)} টাকা
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;