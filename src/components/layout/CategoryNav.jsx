import { Suspense } from "react";
import { fetchCategories } from "@/lib/api";
import CategoryNavLinks from "./CategoryNavLinks";

const CategoryNav = async () => {
    const categories = await fetchCategories();

    return (
        <nav aria-label="ক্যাটাগরি">
            <Suspense fallback={<div className="h-10" aria-hidden="true" />}>
                <CategoryNavLinks categories={categories} />
            </Suspense>
        </nav>
    );
};

export default CategoryNav;