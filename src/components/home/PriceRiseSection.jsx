import Link from "next/link";

const PRODUCTS_URL = "https://api.abcz.workers.dev/api/bazardor/products";

const unitLabels = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
};

function toBengaliDigits(value) {
    return String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);
}

function formatPrice(value) {
    return toBengaliDigits(Number(value).toLocaleString("en-US"));
}

async function getRisingProducts() {
    const response = await fetch(PRODUCTS_URL, {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        return null;
    }

    const products = await response.json();

    if (!Array.isArray(products)) {
        return null;
    }

    return products
        .filter((product) => product?.change?.dir === "up")
        .sort((first, second) => Number(second.change.pct) - Number(first.change.pct))
        .slice(0, 6);
}

const PriceRiseSection = async () => {
    const products = await getRisingProducts();

    if (!products) {
        return (
            <section className="bg-[#eef4ef] px-4 pb-10" aria-labelledby="price-rise-title">
                <div className="mx-auto max-w-6xl rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-700">
                    আজকের বাড়তি দামের তথ্য এখন পাওয়া যাচ্ছে না। কিছুক্ষণ পর আবার চেষ্টা করুন।
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#eef4ef] px-4 pb-12" aria-labelledby="price-rise-title">
            <div className="mx-auto max-w-6xl">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="mb-1 text-sm font-semibold text-[#009447]">আজকের বাজার আপডেট</p>
                        <h2 id="price-rise-title" className="text-2xl font-extrabold text-[#1f2c24] sm:text-3xl">
                            আজ দাম বেড়েছে <span className="text-[#e5484d]">▲</span>
                        </h2>
                    </div>
                    <p className="text-sm text-[#6c7871]">সবচেয়ে বেশি বেড়েছে এমন ৬টি পণ্য</p>
                </div>

                {products.length === 0 ? (
                    <div className="rounded-2xl border border-[#dfe8e1] bg-white p-8 text-center text-sm text-[#6c7871]">
                        আজ কোনো পণ্যের দাম বাড়েনি।
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <Link
                                key={product.id}
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
                                            <p className="mt-1 text-xs text-[#7a857e]">
                                                {unitLabels[product.unit] || `প্রতি ${product.unit || "কেজি"}`}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="shrink-0 rounded-full bg-[#fff0f0] px-2.5 py-1 text-xs font-bold text-[#e5484d]">
                                        ▲ {toBengaliDigits(product.change.pct)}%
                                    </span>
                                </div>

                                <div className="mt-4 flex items-end justify-between border-t border-[#edf2ee] pt-3">
                                    <span className="text-xs text-[#7a857e]">আজকের দাম</span>
                                    <span className="text-lg font-extrabold text-[#1f2c24]">
                                        {formatPrice(product.today)} টাকা
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PriceRiseSection;