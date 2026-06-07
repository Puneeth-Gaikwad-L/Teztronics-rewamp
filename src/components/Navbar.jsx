import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", hash: "hero" },
  { label: "About", hash: "about" },
  { label: "Products", hash: "products" },
  { label: "Contact", hash: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="flex items-center group">
          <img
            src="/logo.png"
            alt="Teztronics"
            className="h-10 w-auto object-contain"
          />
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
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
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