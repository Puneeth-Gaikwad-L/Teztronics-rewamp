import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../utils/products";
import { ProductCard } from "./Products";

export default function AllProducts() {
  const products = getAllProducts();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-[70px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {/* Back */}
        <div className="flex items-center gap-3 mb-10">
          <Link
            to="/#products"
            className="flex items-center gap-2 text-gray-400 hover:text-[#1E88FF] text-[13px] font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>

        <div className="mb-10">
          <h1
            className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.05] tracking-[-1.5px] mb-3"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)" }}
          >
            All Products
          </h1>
          <p className="text-gray-600 text-[15px] lg:text-[17px] leading-relaxed">
            {products.length} product{products.length !== 1 ? "s" : ""} across our full ESD & cleanroom range.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
