import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json";
const { categories } = data;
const WHATSAPP_NUMBER = data.whatsappNumber.replace(/\D/g, "");
import ImageCarousel from "./ImageCarousel";

const hasSubcategories = (cat) => cat?.subcategories?.length > 0;

function buildWhatsAppUrl(product) {
  const message = encodeURIComponent(
    `Hi Teztronics,\n\nI would like to enquire about:\n*${product.name}*\n\nPlease share pricing and availability. Thank you.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function SubcategoryCard({ sub, onClick }) {
  const poster = sub.poster || sub.products?.[0]?.images?.[0];
  const count = sub.products?.length ?? 0;

  return (
    <button
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-[#1E88FF]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,136,255,0.14)] text-left w-full"
      style={{ minHeight: "210px" }}
    >
      {/* Poster background */}
      {poster ? (
        <img
          src={poster}
          alt={sub.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B8E]/25 via-[#1E88FF]/15 to-[#003B8E]/30" />
      )}

      {/* Gradient overlay — dark at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001f50]/90 via-[#003B8E]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-5" style={{ minHeight: "210px" }}>
        <span className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">
          {count} product{count !== 1 ? "s" : ""}
        </span>

        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-white text-[18px] leading-snug mb-3">
          {sub.label}
        </h3>

        <div className="flex items-center gap-2 text-white/75 group-hover:text-white group-hover:gap-3 transition-all duration-200">
          <span className="text-[12px] font-bold uppercase tracking-widest">View Products</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col rounded-lg border border-gray-200 bg-gray-50 hover:border-[#1E88FF]/30 hover:bg-[#1E88FF]/[0.03] transition-all duration-300 overflow-hidden">
      <ImageCarousel images={product.images ?? []} alt={product.name} />
      <div className="h-[2px] w-0 group-hover:w-full bg-[#1E88FF] transition-all duration-500" />

      <div className="p-6 flex flex-col flex-1">
        {product.tag && (
          <span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1E88FF] border border-[#1E88FF]/30 rounded-full px-2.5 py-0.5 w-fit">
            {product.tag}
          </span>
        )}

        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[16px] leading-snug mb-3">
          {product.name}
        </h3>

        <p className="text-gray-500 text-[13px] leading-[1.75] mb-5 line-clamp-4">
          {product.description}
        </p>

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

        <div className="space-y-2 mt-auto">
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
            href={buildWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-2.5 rounded-sm border border-gray-300 hover:border-[#1E88FF]/50 hover:bg-[#1E88FF]/10 text-[#060912]/60 hover:text-[#1E88FF] font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200"
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCatId, setActiveCatId] = useState(categories[0].id);
  const [activeSubId, setActiveSubId] = useState(null);

  const activeCat = useMemo(
    () => categories.find((c) => c.id === activeCatId),
    [activeCatId]
  );

  const activeSub = useMemo(
    () => hasSubcategories(activeCat)
      ? activeCat.subcategories.find((s) => s.id === activeSubId)
      : null,
    [activeCat, activeSubId]
  );

  const displayedProducts = useMemo(
    () => hasSubcategories(activeCat)
      ? activeSub?.products ?? []
      : activeCat?.products ?? [],
    [activeCat, activeSub]
  );

  const subScrollRef = useRef(null);

  const handleCatClick = (cat) => {
    setActiveCatId(cat.id);
    setActiveSubId(null);
  };

  const scrollSubs = (dir) => {
    if (subScrollRef.current) {
      subScrollRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
    }
  };

  // Right panel is in "subcategory selection" mode when the active category
  // has subcategories but none is chosen yet
  const showSubcategoryPicker = hasSubcategories(activeCat) && !activeSubId;

  return (
    <section id="products" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-[#1E88FF]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E88FF]">
            Our Products
          </span>
        </div>
        <div className="mb-14">
          <h2
            className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.05] tracking-[-1.5px]"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)" }}
          >
            Protecting Electronics with Reliable ESD & Cleanroom Solutions
          </h2>
          <p className="text-gray-400 text-[15px] mt-3 leading-relaxed">
            Browse our range of ESD control and cleanroom products, and contact us for pricing and availability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Category sidebar ── */}
          <aside className="lg:w-[260px] shrink-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 font-bold mb-3 px-1">
              Categories
            </p>
            <ul className="space-y-1.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCatClick(cat)}
                    className={`w-full text-left px-4 py-4 rounded-lg flex items-center gap-3 transition-all duration-200 ${
                      activeCatId === cat.id
                        ? "bg-[#1E88FF]/10 border border-[#1E88FF]/35 text-[#1E88FF]"
                        : "border border-gray-200 text-gray-700 hover:text-[#003B8E] hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <span className="text-[20px] leading-none shrink-0">{cat.icon}</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] leading-snug flex-1">
                      {cat.label}
                    </span>
                    {activeCatId === cat.id && (
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Right panel ── */}
          <div className="flex-1 min-w-0">

            {showSubcategoryPicker ? (
              /* ── Subcategory poster cards ── */
              <div>
                <div className="mb-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[22px] leading-snug">
                    {activeCat.label}
                  </h3>
                  <p className="text-gray-400 text-[14px] mt-1">
                    Select a sub-category to browse products
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {activeCat.subcategories.map((sub) => (
                    <SubcategoryCard
                      key={sub.id}
                      sub={sub}
                      onClick={() => setActiveSubId(sub.id)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* ── Product view ── */
              <div>
                {/* Subcategory bubble strip + back button */}
                {hasSubcategories(activeCat) && (
                  <div className="flex items-center gap-3 mb-8 flex-wrap">
                    {/* Back to sub-categories */}
                    <button
                      onClick={() => setActiveSubId(null)}
                      className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-500 text-[12px] font-semibold transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      All
                    </button>

                    {/* Divider */}
                    <span className="w-px h-5 bg-gray-200 shrink-0" />

                    {/* Scroll left */}
                    <button
                      onClick={() => scrollSubs(-1)}
                      className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-400 transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <div
                      ref={subScrollRef}
                      className="flex gap-2 overflow-x-auto scrollbar-none flex-1"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      {activeCat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setActiveSubId(sub.id)}
                          className={`shrink-0 px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                            activeSubId === sub.id
                              ? "bg-[#1E88FF] text-white shadow-sm"
                              : "border border-gray-200 text-gray-600 hover:border-[#1E88FF]/40 hover:text-[#003B8E] bg-white"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>

                    {/* Scroll right */}
                    <button
                      onClick={() => scrollSubs(1)}
                      className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-400 transition-all duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Active label + count */}
                <div className="mb-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[20px] leading-snug">
                    {activeSub?.label ?? activeCat?.label}
                  </h3>
                  <p className="text-gray-400 text-[13px] mt-1 font-medium">
                    {displayedProducts.length} product{displayedProducts.length !== 1 ? "s" : ""} available
                  </p>
                </div>

                {/* Product grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <p className="text-gray-400 text-[15px] col-span-full py-10">
                      Products coming soon.
                    </p>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
