import { notFound } from "next/navigation";
import { fetchCategoryBySlug, fetchProductsByCategory } from "@/lib/api";
import AuthGuard from "@/components/auth/AuthGuard";
import CategoryHeader from "@/components/category/CategoryHeader";
import CategoryProducts from "@/components/category/CategoryProducts";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);
  if (!category) return { title: "ক্যাটাগরি পাওয়া যায়নি - বাজার দর" };
  return { title: `${category.nameBn} - বাজার দর` };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await fetchProductsByCategory(slug);

  return (
    <AuthGuard>
      <main className="min-h-[calc(100vh-160px)] bg-[#f1f7f2] px-4 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <CategoryHeader category={category} />
          <CategoryProducts products={products} />
        </div>
      </main>
    </AuthGuard>
  );
}
