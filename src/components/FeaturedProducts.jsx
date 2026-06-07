import data from "../data/products.json";
const { whatsappNumber: WHATSAPP_NUMBER } = data;

// Edit these 3 to match your actual top-selling products
const FEATURED = [
  {
    id: "p1",
    name: "ESD Anti-Fatigue Mat",
    description:
      "Ergonomically designed anti-fatigue mat with ESD properties. Ideal for operators standing at workstations for long periods.",
    specs: ["Surface Resistance: 10⁶–10⁹ Ω", "Thickness: 15mm", "Colour: Black/Yellow border"],
    tag: "Bestseller",
    image: "/images/p1-1.jpg",
  },
  {
    id: "p8",
    name: "ESD Finger Cots",
    description:
      "Latex-free conductive finger cots for precision component handling. Prevents contamination and static discharge.",
    specs: ["Material: Nitrile", "Sizes: S / M / L", "Pack: 100 pcs"],
    tag: "Bestseller",
    image: "/images/p8-1.jpg",
  },
  {
    id: "p12",
    name: "ESD Wrist Strap",
    description:
      "Adjustable fabric wrist strap with coil cord for continuous operator grounding at seated workstations.",
    specs: ["Cord Length: 1.8m", "Resistance: 1MΩ", "Adjustable: Yes"],
    tag: "Bestseller",
    image: "/images/p12-1.jpg",
  },
];

function buildWhatsAppUrl(name) {
  const message = encodeURIComponent(
    `Hi Teztronics,\n\nI would like to enquire about:\n*${name}*\n\nPlease share pricing and availability. Thank you.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export default function FeaturedProducts() {
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
            Featured Products
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.05] tracking-[-1.5px]"
            style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
          >
            Our most trusted products.
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
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((product, i) => (
            <div
              key={product.id}
              className="group relative flex flex-col rounded-xl border border-gray-200 bg-gray-50 overflow-hidden hover:border-[#1E88FF]/35 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute top-4 left-4 z-10 w-7 h-7 rounded-full bg-white/70 border border-gray-300 flex items-center justify-center">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] text-gray-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tag badge */}
              {product.tag && (
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-[#1E88FF] text-white font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-widest">
                  {product.tag}
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom fade into card */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[17px] leading-snug mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-[13px] leading-[1.75] mb-5 flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="mb-6 space-y-1.5">
                  {product.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-[12px] text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-[#1E88FF]/50 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={buildWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-sm bg-[#1E88FF]/10 border border-[#1E88FF]/25 hover:bg-[#1E88FF]/20 hover:border-[#1E88FF]/50 text-[#1E88FF] font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}