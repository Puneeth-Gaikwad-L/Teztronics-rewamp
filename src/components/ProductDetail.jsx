import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import data from "../data/products.json";

const { categories, whatsappNumber: WHATSAPP_NUMBER } = data;

function getAllProducts() {
  const all = [];
  for (const cat of categories) {
    if (cat.subcategories?.length > 0) {
      for (const sub of cat.subcategories) {
        if (sub.products?.length > 0) all.push(...sub.products);
      }
    }
    if (cat.products?.length > 0) all.push(...cat.products);
  }
  return all;
}

function findProduct(productId) {
  for (const cat of categories) {
    if (cat.subcategories?.length > 0) {
      for (const sub of cat.subcategories) {
        const product = sub.products?.find((p) => p.id === productId);
        if (product) return { product, categoryLabel: cat.label, subcategoryLabel: sub.label };
      }
    }
    if (cat.products?.length > 0) {
      const product = cat.products.find((p) => p.id === productId);
      if (product) return { product, categoryLabel: cat.label, subcategoryLabel: null };
    }
  }
  return null;
}

function buildWhatsAppUrl(product) {
  const message = encodeURIComponent(
    `Hi Teztronics,\n\nI would like to enquire about:\n*${product.name}*\n\nPlease share pricing and availability. Thank you.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const result = findProduct(productId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setCurrent(0);
  }, [productId]);

  if (!result) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 pt-[70px]">
        <p className="text-gray-400 text-[15px]">Product not found.</p>
        <button
          onClick={() => navigate("/")}
          className="text-[#1E88FF] text-[13px] font-semibold hover:underline"
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  const { product, categoryLabel, subcategoryLabel } = result;
  const images = product.images ?? [];
  const total = images.length;

  const handleGetQuote = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <div className="pt-[70px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        {/* Back + breadcrumb */}
        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-[#1E88FF] text-[13px] font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>
          <span className="text-gray-200">·</span>
          <span className="text-[12px] text-gray-300">
            {categoryLabel}{subcategoryLabel ? ` › ${subcategoryLabel}` : ""}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — image gallery */}
          <div>
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100"
              style={{ aspectRatio: "4 / 3" }}
            >
              {total === 0 ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3A.75.75 0 002.25 4.5v15" />
                  </svg>
                </div>
              ) : (
                <>
                  {images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${product.name} — image ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: i === current ? 1 : 0 }}
                      draggable={false}
                    />
                  ))}

                  {total > 1 && (
                    <>
                      <button
                        onClick={() => setCurrent((c) => (c - 1 + total) % total)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#1E88FF]/40 hover:text-[#1E88FF] transition-all duration-200 shadow-sm"
                        aria-label="Previous image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrent((c) => (c + 1) % total)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#1E88FF]/40 hover:text-[#1E88FF] transition-all duration-200 shadow-sm"
                        aria-label="Next image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 ${
                              i === current
                                ? "w-4 h-1.5 bg-[#1E88FF]"
                                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {total > 1 && (
              <div className="flex gap-3 mt-4 flex-wrap">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setCurrent(i)}
                    className={`w-[72px] h-[72px] rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      i === current
                        ? "border-[#1E88FF] opacity-100"
                        : "border-gray-200 opacity-50 hover:opacity-80 hover:border-gray-300"
                    }`}
                  >
                    <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — product details */}
          <div className="sticky top-[90px]">
            {product.tag && (
              <span className="inline-block mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1E88FF] border border-[#1E88FF]/30 rounded-full px-3 py-1">
                {product.tag}
              </span>
            )}

            <h1
              className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.1] tracking-[-1px] mb-5"
              style={{ fontSize: "clamp(26px, 3vw, 38px)" }}
            >
              {product.name}
            </h1>

            <p className="text-gray-500 text-[15px] leading-[1.8] font-light mb-8">
              {product.description && product.description !== "na"
                ? product.description
                : "Detailed description coming soon. Contact us for more information."}
            </p>

            {product.specs?.length > 0 && (
              <div className="mb-8 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-300 font-semibold mb-4">
                  Specifications
                </p>
                <ul className="space-y-3">
                  {product.specs.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-[13px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E88FF]/60 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a
                href={buildWhatsAppUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#1E88FF] hover:bg-[#3d9fff] text-white font-['Plus_Jakarta_Sans'] font-bold text-[13px] uppercase tracking-widest rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(30,136,255,0.28)]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z" />
                </svg>
                Enquire on WhatsApp
              </a>

              <button
                onClick={handleGetQuote}
                className="inline-flex items-center justify-center gap-2 w-full py-3 border border-gray-300 hover:border-[#1E88FF]/40 text-[#060912]/60 hover:text-[#1E88FF] font-['Plus_Jakarta_Sans'] font-semibold text-[13px] uppercase tracking-widest rounded-sm transition-all duration-200"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>

        {/* More products */}
        {(() => {
          const others = getAllProducts().filter((p) => p.id !== product.id);
          if (others.length === 0) return null;
          return (
            <div className="mt-20 pt-12 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-[#1E88FF]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E88FF]">
                  More Products
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {others.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group flex flex-col rounded-xl border border-gray-100 hover:border-[#1E88FF]/30 bg-gray-50 hover:bg-[#1E88FF]/[0.02] overflow-hidden transition-all duration-200"
                  >
                    {/* Image */}
                    <div className="relative w-full bg-gray-100 overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      {p.images?.[0] ? (
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          draggable={false}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3A.75.75 0 002.25 4.5v15" />
                          </svg>
                        </div>
                      )}
                      {p.tag && (
                        <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-widest text-[#1E88FF] bg-white/90 border border-[#1E88FF]/20 rounded-full px-2 py-0.5">
                          {p.tag}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <div className="p-3">
                      <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#003B8E] text-[12px] leading-snug line-clamp-2 group-hover:text-[#1E88FF] transition-colors duration-200">
                        {p.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
