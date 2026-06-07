import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json";
const { categories, whatsappNumber: WHATSAPP_NUMBER } = data;
import ImageCarousel from "./ImageCarousel";

const hasSubcategories = (cat) => cat?.subcategories?.length > 0;

function buildWhatsAppUrl(product) {
  const message = encodeURIComponent(
    `Hi Teztronics,\n\nI would like to enquire about:\n*${product.name}*\n\nPlease share pricing and availability. Thank you.`
  );
  return `https://wa.me/91${WHATSAPP_NUMBER}?text=${message}`;
}

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col rounded-lg border border-gray-200 bg-gray-50 hover:border-[#1E88FF]/30 hover:bg-[#1E88FF]/[0.03] transition-all duration-300 overflow-hidden">
      {/* Image carousel — sits at the very top */}
      <ImageCarousel images={product.images ?? []} alt={product.name} />

      {/* Top accent line on hover */}
      <div className="h-[2px] w-0 group-hover:w-full bg-[#1E88FF] transition-all duration-500" />

      <div className="p-6 flex flex-col flex-1">
        {/* Tag */}
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
            href={buildWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-sm border border-gray-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-[#060912]/60 hover:text-[#25D366] font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCatId, setActiveCatId] = useState(categories[0].id);
  const [activeSubId, setActiveSubId] = useState(
    hasSubcategories(categories[0]) ? categories[0].subcategories[0].id : null
  );

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
    setActiveSubId(hasSubcategories(cat) ? cat.subcategories[0].id : null);
  };

  const scrollSubs = (dir) => {
    if (subScrollRef.current) {
      subScrollRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
    }
  };

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
            Everything you need for ESD & cleanroom protection.
          </h2>
          <p className="text-gray-400 text-[14px] mt-3 leading-relaxed">
            Browse our full range and reach us instantly on WhatsApp for pricing and availability.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Category sidebar ── */}
          <aside className="lg:w-[240px] shrink-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-300 font-semibold mb-3 px-1">
              Categories
            </p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCatClick(cat)}
                    className={`w-full text-left px-4 py-3.5 rounded-md flex items-center gap-3 transition-all duration-200 ${
                      activeCatId === cat.id
                        ? "bg-[#1E88FF]/15 border border-[#1E88FF]/30 text-[#1E88FF]"
                        : "border border-transparent text-gray-600 hover:text-[#060912] hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-[16px] leading-none opacity-70">{cat.icon}</span>
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] leading-snug">
                      {cat.label}
                    </span>
                    {activeCatId === cat.id && (
                      <svg className="w-3.5 h-3.5 ml-auto shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    )}
                  </button>

                  {/* Subcategory list — inline expand */}
                  {activeCatId === cat.id && hasSubcategories(cat) && (
                    <ul className="mt-1 ml-4 pl-3 border-l border-[#1E88FF]/20 space-y-0.5">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.id}>
                          <button
                            onClick={() => setActiveSubId(sub.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-[12px] font-medium transition-all duration-150 ${
                              activeSubId === sub.id
                                ? "text-[#1E88FF]"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            {sub.label}
                            <span className="ml-1.5 text-[10px] text-gray-300">
                              ({sub.products.length})
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Product panel ── */}
          <div className="flex-1 min-w-0">
            {/* Subcategory tab strip — only for categories that have subcategories */}
            {hasSubcategories(activeCat) && (
              <div className="relative flex items-center mb-8">
                <button
                  onClick={() => scrollSubs(-1)}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-400 transition-all duration-200 shadow-sm mr-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div
                  ref={subScrollRef}
                  className="flex gap-2 overflow-x-auto pb-0 scrollbar-none flex-1"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {activeCat.subcategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubId(sub.id)}
                      className={`shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-200 ${
                        activeSubId === sub.id
                          ? "bg-[#1E88FF] text-white"
                          : "border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-[#060912]/70"
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollSubs(1)}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:border-[#1E88FF]/40 hover:text-[#1E88FF] text-gray-400 transition-all duration-200 shadow-sm ml-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Active label + count */}
            <div className="mb-6">
              {hasSubcategories(activeCat) && (
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E]/80 text-[18px]">
                  {activeSub?.label}
                </h3>
              )}
              <p className="text-gray-300 text-[12px] mt-1">
                {displayedProducts.length} product{displayedProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="text-gray-300 text-[14px] col-span-full py-8">
                  Products coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}