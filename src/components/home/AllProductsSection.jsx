import Link from "next/link";
import { fetchProducts, formatChangeValue, formatPrice, getUnitLabel } from "@/lib/api";

async function getAllProducts() {
    try {
        return await fetchProducts();
    } catch {
        return null;
    }
}

const AllProductsSection = async () => {
    const products = await getAllProducts();

    if (!products) {
        return (
            <section id="সব-পণ্য" className="bg-[#f6faf6] px-4 py-12" aria-labelledby="all-products-title">
                <div className="mx-auto max-w-6xl rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-700">
                    পণ্যের তালিকা এখন পাওয়া যাচ্ছে না। কিছুক্ষণ পর আবার চেষ্টা করুন।
                </div>
            </section>
        );
    }

    return (
        <section id="সব-পণ্য" className="scroll-mt-24 bg-[#f6faf6] px-4 py-12" aria-labelledby="all-products-title">
            <div className="mx-auto max-w-6xl">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="mb-1 text-sm font-semibold text-[#009447]">আজকের বাজার তালিকা</p>
                        <h2 id="all-products-title" className="text-2xl font-extrabold text-[#1f2c24] sm:text-3xl">
                            সব পণ্য
                        </h2>
                    </div>
                    <p className="text-sm text-[#6c7871]">ক্যাটাগরি অনুযায়ী বাজারের সব পণ্য</p>
                </div>

                {products.length === 0 ? (
                    <div className="rounded-2xl border border-[#dfe8e1] bg-white p-8 text-center text-sm text-[#6c7871]">
                        এখন কোনো পণ্য দেখা যাচ্ছে না।
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {products.map((product) => {
                            const direction = product?.change?.dir;
                            const isDown = direction === "down";
                            const isFlat = direction === "flat";
                            const changeValue = formatChangeValue(product?.change?.pct);
                            const unitText = getUnitLabel(product.unit);

                            return (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.slug}`}
                                    className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#dfe8e1] bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#8bd3a9] hover:shadow-md"
                                >
                                    <div>
                                        <div className="mb-4 flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <span className="inline-flex rounded-full bg-[#edf8f1] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0b8d46]">
                                                    {product.categoryNameBn || "পণ্য"}
                                                </span>
                                            </div>
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                                                    isFlat
                                                        ? "bg-[#f0f0f0] text-[#888]"
                                                        : isDown
                                                            ? "bg-[#ebfff3] text-[#1a9d56]"
                                                            : "bg-[#fff0f1] text-[#d73b40]"
                                                }`}
                                            >
                                                {isFlat ? "—" : isDown ? "▼" : "▲"} {changeValue}%
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#f4faf5] text-4xl" aria-hidden="true">
                                                {product.image || "🛒"}
                                            </span>
                                            <div className="min-w-0">
                                                <h3 className="truncate text-lg font-extrabold text-[#1f2c24] group-hover:text-[#008a43]">
                                                    {product.nameBn}
                                                </h3>
                                                <p className="mt-1 text-xs text-[#7a857e]">{unitText}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 border-t border-[#edf2ee] pt-3">
                                        <div className="flex items-end justify-between gap-3">
                                            <div>
                                                <p className="text-xs text-[#7a857e]">আজকের দাম</p>
                                                <p className="mt-1 text-2xl font-extrabold text-[#1f2c24]">
                                                    {formatPrice(product.today)}
                                                </p>
                                            </div>
                                            <span className="text-sm font-semibold text-[#5a6761]">টাকা</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllProductsSection;