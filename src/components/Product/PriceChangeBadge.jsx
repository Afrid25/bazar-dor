"use client";

import { formatChangeValue } from "@/lib/api";

const PriceChangeBadge = ({ change }) => {
    const isDown = change?.dir === "down";
    const colorClass = isDown
        ? "bg-[#edf9f0] text-[#159657]"
        : "bg-[#fff0f0] text-[#d94348]";

    return (
        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${colorClass}`}>
            {isDown ? "▼" : "▲"} {formatChangeValue(change?.pct)}%
        </span>
    );
};

export default PriceChangeBadge;