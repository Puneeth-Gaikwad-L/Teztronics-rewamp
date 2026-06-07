import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import data from "../data/products.json";

const NAV_LINKS = [
  { label: "Home", hash: "hero" },
  { label: "About", hash: "about" },
  { label: "Products", hash: "products" },
  { label: "Contact", hash: "contact" },
];

const ALL_PRODUCTS = (() => {
  const list = [];
  for (const cat of data.categories) {
    if (cat.subcategories?.length > 0) {
      for (const sub of cat.subcategories) {
        sub.products?.forEach((p) =>
          list.push({ ...p, categoryLabel: cat.label, subcategoryLabel: sub.label })
        );
      }
    }
    cat.products?.forEach((p) =>
      list.push({ ...p, categoryLabel: cat.label, subcategoryLabel: null })
    );
  }
  return list;
})();

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeSearch(); };
    const onPointer = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) closeSearch();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return ALL_PRODUCTS.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.categoryLabel?.toLowerCase().includes(q) ||
        p.subcategoryLabel?.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    closeSearch();
    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  const handleResultClick = () => {
    closeSearch();
    setMenuOpen(false);
  };

  const iconColor = scrolled ? "text-gray-500" : "text-white";
  const burgerColor = scrolled ? "bg-gray-600" : "bg-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="flex items-center shrink-0">
          <img src="/logo.png" alt="Teztronics" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.hash}>
              <a
                href={`#${l.hash}`}
                onClick={(e) => handleNavClick(e, l.hash)}
                className="text-[13px] font-medium tracking-wide text-gray-500 hover:text-[#003B8E] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          {/* Search */}
          <div ref={searchRef} className="relative">
            <div className={`flex items-center transition-all duration-300 ${searchOpen ? "w-56" : "w-8"}`}>
              {searchOpen ? (
                <div className="flex items-center w-full rounded-full border border-[#1E88FF]/40 bg-white/95 px-3 py-1.5 shadow-lg">
                  <svg className="w-3.5 h-3.5 text-[#1E88FF] shrink-0 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products…"
                    className="flex-1 bg-transparent text-[13px] text-gray-700 placeholder-gray-400 outline-none min-w-0"
                  />
                  {query && (
                    <button onClick={() => setQuery("")} className="ml-1 text-gray-400 hover:text-gray-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors ${iconColor}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Dropdown results */}
            {searchOpen && results.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden z-50">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={handleResultClick}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#1E88FF]/5 transition-colors group border-b border-gray-100 last:border-0"
                  >
                    {/* Thumbnail */}
                    <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
                      {product.images?.[0] ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 3.75H3A.75.75 0 002.25 4.5v15" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-gray-800 group-hover:text-[#003B8E] truncate">
                        {product.name}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate">
                        {product.subcategoryLabel ?? product.categoryLabel}
                      </p>
                    </div>
                    <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1E88FF] shrink-0 ml-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}

            {/* No results */}
            {searchOpen && query.trim() && results.length === 0 && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-2xl px-4 py-5 text-center z-50">
                <p className="text-[13px] text-gray-400">No products found for <span className="font-semibold text-gray-600">"{query}"</span></p>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E88FF] hover:bg-[#3d9fff] text-white font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(30,136,255,0.3)]"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H5l-4 4V5z" clipRule="evenodd"/>
            </svg>
            Enquire Now
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${burgerColor} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"} bg-[#f0f4fa]/95 backdrop-blur-xl border-t border-gray-200`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <li key={l.hash}>
              <a
                href={`#${l.hash}`}
                onClick={(e) => handleNavClick(e, l.hash)}
                className="block text-[15px] font-medium text-[#060912]/60 hover:text-[#060912] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-[#1E88FF] text-white font-['Plus_Jakarta_Sans'] font-bold text-[12px] uppercase tracking-widest rounded-sm"
            >
              Enquire Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
