import data from "../data/products.json";
const { categories, whatsappNumber: WHATSAPP_NUMBER } = data;

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo.png" alt="Teztronics" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-[13px] leading-[1.8] max-w-xs mb-6">
              Your trusted source for ESD and cleanroom protection — serving factories, labs,
              and workshops across India. Quality products, honest advice, fast delivery.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#25D366]/30 rounded-sm text-[#25D366] hover:bg-[#25D366]/10 font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Chat with us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-300 font-semibold mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#hero" },
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 text-[13px] hover:text-[#1E88FF] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-300 font-semibold mb-4">
              Product Categories
            </p>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.id}>
                  <a
                    href="#products"
                    className="text-gray-400 text-[13px] hover:text-[#1E88FF] transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-[12px]">
            © {new Date().getFullYear()} Teztronics. All rights reserved.
          </p>
          <p className="text-gray-200 text-[12px]">
            Doddabommasandra, Vidyaranyapura, Bengaluru — 560097
          </p>
        </div>
      </div>
    </footer>
  );
}