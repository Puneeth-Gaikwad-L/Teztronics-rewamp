import { useRef } from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json";
const { categories } = data;
const WHATSAPP_NUMBER = data.whatsappNumber.replace(/\D/g, "");

const FEATURED = (() => {
  const all = [];
  for (const cat of categories) {
    if (cat.subcategories?.length > 0) {
      for (const sub of cat.subcategories) {
        sub.products?.forEach((p) => { if (p.featured) all.push(p); });
      }
    }
    cat.products?.forEach((p) => { if (p.featured) all.push(p); });
  }
  return all;
})();

function buildWhatsAppUrl(name) {
  const message = encodeURIComponent(
    `Hi Teztronics,\n\nI would like to enquire about:\n*${name}*\n\nPlease share pricing and availability. Thank you.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function FeaturedProducts() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  if (FEATURED.length === 0) return null;

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 400px at 50% 50%, rgba(30,136,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-[#1E88FF]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E88FF]">
            Top Selling Products
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.05] tracking-[-1.5px]"
            style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
          >
            Our top selling products.
          </h2>
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-[13px] font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-widest text-[#1E88FF] hover:text-[#3d9fff] transition-colors shrink-0"
          >
            View all products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="relative flex items-center gap-3">
          <button
            onClick={() => scroll(-1)}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-400 transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory flex-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
          {FEATURED.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col rounded-xl border border-gray-200 bg-gray-50 overflow-hidden hover:border-[#1E88FF]/35 transition-all duration-300 shrink-0 w-[300px] snap-start"
            >
              {/* Tag badge */}
              {product.tag && (
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-[#1E88FF] text-white font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-widest">
                  {product.tag}
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3A.75.75 0 002.25 4.5v15" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[17px] leading-snug mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-[13px] leading-[1.75] mb-5 line-clamp-4">
                  {product.description}
                </p>

                {/* Specs */}
                {product.specs?.length > 0 && (
                  <ul className="mb-6 space-y-1.5">
                    {product.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-[12px] text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-[#1E88FF]/50 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTAs */}
                <div className="space-y-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-sm bg-[#1E88FF] hover:bg-[#3d9fff] text-white font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,136,255,0.25)]"
                  >
                    View Details
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
                    </svg>
                  </Link>
                  <a
                    href={buildWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 rounded-sm bg-[#1E88FF]/10 border border-[#1E88FF]/25 hover:bg-[#1E88FF]/20 hover:border-[#1E88FF]/50 text-[#1E88FF] font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-400 transition-all duration-200 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}