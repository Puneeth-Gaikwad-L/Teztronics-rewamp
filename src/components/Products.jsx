import { useState, useMemo } from "react";
import { categories, WHATSAPP_NUMBER } from "../data/products";
import ImageCarousel from "./ImageCarousel";

function buildWhatsAppUrl(product) {
  const message = encodeURIComponent(
    `Hi Teztronics,\n\nI would like to enquire about:\n*${product.name}*\n\nPlease share pricing and availability. Thank you.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function ProductCard({ product }) {
  return (
    <div className="group flex flex-col rounded-lg border border-white/6 bg-white/[0.025] hover:border-[#c8973a]/30 hover:bg-[#c8973a]/[0.03] transition-all duration-300 overflow-hidden">
      {/* Image carousel — sits at the very top */}
      <ImageCarousel images={product.images ?? []} alt={product.name} />

      {/* Top accent line on hover */}
      <div className="h-[2px] w-0 group-hover:w-full bg-[#c8973a] transition-all duration-500" />

      <div className="p-6 flex flex-col flex-1">
        {/* Tag */}
        {product.tag && (
          <span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#c8973a] border border-[#c8973a]/30 rounded-full px-2.5 py-0.5 w-fit">
            {product.tag}
          </span>
        )}

        <h3 className="font-['Syne'] font-bold text-white text-[16px] leading-snug mb-3">
          {product.name}
        </h3>

        <p className="text-white/40 text-[13px] leading-[1.75] mb-5 flex-1">
          {product.description}
        </p>

        {/* Specs */}
        {product.specs?.length > 0 && (
          <ul className="mb-6 space-y-1.5">
            {product.specs.map((s) => (
              <li key={s} className="flex items-center gap-2 text-[12px] text-white/30">
                <span className="w-1 h-1 rounded-full bg-[#c8973a]/50 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <a
          href={buildWhatsAppUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-sm border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-white/60 hover:text-[#25D366] font-['Syne'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCatId, setActiveCatId] = useState(categories[0].id);
  const [activeSubId, setActiveSubId] = useState(categories[0].subcategories[0].id);

  const activeCat = useMemo(
    () => categories.find((c) => c.id === activeCatId),
    [activeCatId]
  );

  const activeSub = useMemo(
    () => activeCat?.subcategories.find((s) => s.id === activeSubId),
    [activeCat, activeSubId]
  );

  const handleCatClick = (cat) => {
    setActiveCatId(cat.id);
    setActiveSubId(cat.subcategories[0].id);
  };

  return (
    <section id="products" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-px bg-[#c8973a]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8973a]">
            Our Products
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2
            className="font-['Syne'] font-extrabold text-white leading-[1.05] tracking-[-1.5px]"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)" }}
          >
            Everything your ESD programme needs.
          </h2>
          <p className="text-white/35 text-[14px] max-w-xs leading-relaxed">
            Click any product to enquire instantly via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Category sidebar ── */}
          <aside className="lg:w-[240px] shrink-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/25 font-semibold mb-3 px-1">
              Categories
            </p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCatClick(cat)}
                    className={`w-full text-left px-4 py-3.5 rounded-md flex items-center gap-3 transition-all duration-200 ${
                      activeCatId === cat.id
                        ? "bg-[#c8973a]/15 border border-[#c8973a]/30 text-[#c8973a]"
                        : "border border-transparent text-white/45 hover:text-white hover:bg-white/4"
                    }`}
                  >
                    <span className="text-[16px] leading-none opacity-70">{cat.icon}</span>
                    <span className="font-['Syne'] font-semibold text-[13px] leading-snug">
                      {cat.label}
                    </span>
                    {activeCatId === cat.id && (
                      <svg className="w-3.5 h-3.5 ml-auto shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                    )}
                  </button>

                  {/* Subcategory list — inline expand */}
                  {activeCatId === cat.id && (
                    <ul className="mt-1 ml-4 pl-3 border-l border-[#c8973a]/20 space-y-0.5">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.id}>
                          <button
                            onClick={() => setActiveSubId(sub.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-[12px] font-medium transition-all duration-150 ${
                              activeSubId === sub.id
                                ? "text-[#c8973a]"
                                : "text-white/30 hover:text-white/65"
                            }`}
                          >
                            {sub.label}
                            <span className="ml-1.5 text-[10px] text-white/20">
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
            {/* Subcategory tab strip (also visible on mobile) */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {activeCat?.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubId(sub.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-200 ${
                    activeSubId === sub.id
                      ? "bg-[#c8973a] text-[#0a0b0d]"
                      : "border border-white/8 text-white/40 hover:border-white/20 hover:text-white/70"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            {/* Active sub label */}
            <div className="mb-6">
              <h3 className="font-['Syne'] font-bold text-white/80 text-[18px]">
                {activeSub?.label}
              </h3>
              <p className="text-white/25 text-[12px] mt-1">
                {activeSub?.products.length} product{activeSub?.products.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {activeSub?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}