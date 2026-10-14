import Link from "next/link";
import { fetchCategories } from "@/lib/api";

const CategoryNav = async () => {
    const categories = await fetchCategories();

    return (
        <nav aria-label="ক্যাটাগরি">
            <ul className="flex max-w-7xl mx-auto flex-wrap gap-4 px-4 py-2">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`/category/${category.slug}`}>
                            <span aria-hidden="true">{category.icon}</span>{" "}
                            {category.nameBn}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryNav;