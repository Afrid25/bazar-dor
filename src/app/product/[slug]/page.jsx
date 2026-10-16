import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { fetchProducts } from "@/lib/api";
import { auth } from "@/lib/auth";
import ProductSummary from "@/components/Product/ProductSummary";
import PriceSummary from "@/components/Product/PriceSummary";
import MarketPriceTable from "@/components/Product/MarketPriceTable";
import BackToHome from "@/components/common/BackToHome";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const products = await fetchProducts();
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "পণ্য পাওয়া যায়নি - বাজার দর" };
  return { title: `${product.nameBn} - বাজার দর` };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in?redirected=protected");
  }

  const products = await fetchProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-[calc(100vh-160px)] bg-[#f1f7f2] px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <BackToHome />
        <ProductSummary product={product} />
        <PriceSummary product={product} />
        <MarketPriceTable markets={product.markets} />
      </div>
    </main>
  );
}
