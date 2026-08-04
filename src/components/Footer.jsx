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
              <img src="/logo2.svg" alt="Teztronics" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-black text-[13px] lg:text-[15px] leading-[1.8] max-w-xs mb-6">
              Your trusted source for ESD and cleanroom protection — serving factories, labs,
              and workshops across India. Quality products, honest advice, fast delivery.
            </p>

            {/* Contact */}
            <div className="space-y-3 max-w-md">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#1E88FF] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  4TH BLOCK, P.O, 2nd Cross Rd, near Rajarajeshwari School Road, Munikalappa Layout, Doddabommasandra, Vidyaranyapura, Bengaluru, Karnataka 560097
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#1E88FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+917483581847" className="text-gray-400 text-[13px] hover:text-[#1E88FF] transition-colors">
                  +91 74835 81847
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#1E88FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:teztronics.in@gmail.com" className="text-gray-400 text-[13px] hover:text-[#1E88FF] transition-colors">
                  teztronics.in@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] lg:text-[12px] uppercase tracking-[0.18em] text-gray-300 font-semibold mb-4">
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
            <p className="text-[10px] lg:text-[12px] uppercase tracking-[0.18em] text-gray-300 font-semibold mb-4">
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
          <p className="text-gray-300 text-[12px] lg:text-[14px]">
            © {new Date().getFullYear()} Teztronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}