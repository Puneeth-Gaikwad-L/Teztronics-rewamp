import data from "../data/products.json";
const { categories } = data;
const WHATSAPP_NUMBER = data.whatsappNumber.replace(/\D/g, "");

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
            <p className="text-gray-400 text-[13px] leading-[1.8] max-w-xs">
              Your trusted source for ESD and cleanroom protection — serving factories, labs,
              and workshops across India. Quality products, honest advice, fast delivery.
            </p>
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