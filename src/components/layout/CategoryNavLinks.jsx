"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryNavLinks = ({ categories }) => {
    const pathname = usePathname();

    return (
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-2">
            {categories.map((category) => {
                const href = `/category/${category.slug}`;
                const isActive = pathname === href;

                return (
                    <li key={category.id}>
                        <Link
                            href={href}
                            aria-current={isActive ? "page" : undefined}
                            className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                                isActive
                                    ? "bg-[#dff3e4] text-[#007b39]"
                                    : "text-[#5d6a62] hover:bg-[#f1f8f2] hover:text-[#008f42]"
                            }`}
                        >
                            <span aria-hidden="true">{category.icon}</span>
                            <span className="ml-1.5">{category.nameBn}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoryNavLinks;
