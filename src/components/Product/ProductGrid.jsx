import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {
    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-[#dfe8e1] bg-white p-8 text-center text-sm text-[#6c7871]">
                কোনো পণ্য পাওয়া যায়নি।
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;