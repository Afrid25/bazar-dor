"use client";

import { useState } from "react";
import Link from "next/link";
import SortDropdown from "./SortDropdown";
import EmptyCategory from "./EmptyCategory";
import { toBengaliDigits, formatPrice, formatChangeValue, getUnitLabel } from "@/lib/api";

const CategoryProducts = ({ products }) => {
  const [sortMode, setSortMode] = useState("default");

  const sorted = [...products].sort((a, b) => {
    if (sortMode === "price-asc") return (a.today || 0) - (b.today || 0);
    if (sortMode === "price-desc") return (b.today || 0) - (a.today || 0);
    return 0;
  });

  if (products.length === 0) {
    return <EmptyCategory />;
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-[#6c7871]">
          মোট {toBengaliDigits(products.length)}টি পণ্য
        </p>
        <SortDropdown value={sortMode} onChange={setSortMode} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sorted.map((product) => {
          const dir = product?.change?.dir;
          const isDown = dir === "down";
          const isFlat = dir === "flat";

          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#dfe8e1] bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#8bd3a9] hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="inline-flex rounded-full bg-[#edf8f1] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0b8d46]">
                    {product.categoryNameBn || "পণ্য"}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${
                      isFlat
                        ? "bg-[#f0f0f0] text-[#888]"
                        : isDown
                          ? "bg-[#ebfff3] text-[#1a9d56]"
                          : "bg-[#fff0f1] text-[#d73b40]"
                    }`}
                  >
                    {isFlat ? "—" : isDown ? "▼" : "▲"} {formatChangeValue(product?.change?.pct)}%
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
                    <p className="mt-1 text-xs text-[#7a857e]">{getUnitLabel(product.unit)}</p>
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
    </div>
  );
};

export default CategoryProducts;
