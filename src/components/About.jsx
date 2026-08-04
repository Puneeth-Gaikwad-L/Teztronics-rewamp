import { useState } from "react";

const GSTIN = "29GAXPM1536E1Z7";

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Quality-Assured Products",
    body: "Carefully selected ESD and cleanroom products designed for reliable use in controlled environments.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Reliable Supply",
    body: "Strong product availability and smooth order support help ensure timely delivery across India.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Product Guidance",
    body: "We help you choose the right ESD and cleanroom products based on your workspace, application, and requirement.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
      </svg>
    ),
    title: "For Every Setup",
    body: "From a single workstation to a complete facility setup, we supply products suited to different workspace needs.",
  },
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GSTIN);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-[#1E88FF]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E88FF]">
            About Us
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
              India’s trusted source for ESD & cleanroom protection.
            </h2>
            <p className="text-black text-[15px] lg:text-[17px] leading-[1.8] mb-5 font-light">
              Teztronics is a trusted supplier of ESD control and cleanroom products for factories, labs, workshops, and research facilities across India. From workstation essentials to cleanroom consumables, we help you source reliable products for safer, cleaner, and more controlled workspaces.F
            </p>
            <p className="text-black text-[15px] lg:text-[17px] leading-[1.8] font-light">
              Based in Bengaluru, we supply ESD control and cleanroom products across India, including grounding mats, wrist straps, gloves, shoe covers, cleaning solutions, and cleanroom apparel.
            </p>

            <div className="mt-8 flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#1E88FF]/10 flex items-center justify-center text-[#1E88FF] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[15px] truncate">GST Registered Business</p>
                  <p className="text-gray-400 text-[13px] truncate">Verified supplier · India</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[14px] tracking-wide">
                  {GSTIN}
                </span>
                <button
                  onClick={handleCopy}
                  aria-label="Copy GSTIN"
                  title={copied ? "Copied!" : "Copy GSTIN"}
                  className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:text-[#1E88FF] hover:border-[#1E88FF]/40 transition-colors"
                >
                  {copied ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h9a2 2 0 012 2v9a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group p-6 rounded-lg border border-gray-200 bg-gray-50 hover:border-[#1E88FF]/25 hover:bg-[#1E88FF]/[0.04] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-[#1E88FF]/10 text-[#1E88FF] flex items-center justify-center mb-4 group-hover:bg-[#1E88FF]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[15px] mb-2">{p.title}</h3>
                <p className="text-gray-400 text-[13px] lg:text-[15px] leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}