import Link from "next/link";

const CategoryNav = async () => {
    "use cache";// without this, i got an error: 

    const response = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories",
        { cache: "force-cache" }
    );

    if (!response.ok) {
        throw new Error(`Failed to load categories (${response.status})`);
    }

    const categories = await response.json();

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