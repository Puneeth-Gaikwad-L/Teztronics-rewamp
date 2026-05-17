const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Certified Quality",
    body: "Every product meets IEC 61340-5-1, MIL-PRF-81705E, and ISO 14644 standards — tested, verified, and documented.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Fast Fulfilment",
    body: "Strong inventory depth and pan-India logistics partnerships ensure prompt delivery to your facility.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Expert Guidance",
    body: "Our team helps you select the right ESD control programme for your specific process and regulatory requirements.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
      </svg>
    ),
    title: "B2B Focused",
    body: "We serve electronics manufacturers, semiconductor fabs, pharma cleanrooms, and R&D institutions across India.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-[#c8973a]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8973a]">
            About Us
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2 className="font-['Syne'] font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(34px, 4vw, 52px)" }}>
              Bengaluru's go-to source for ESD &amp; cleanroom protection.
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.8] mb-5 font-light">
              Teztronics was established to address a critical gap in the Indian market — the need for a
              reliable, technically knowledgeable supplier of ESD control and cleanroom consumable products.
            </p>
            <p className="text-white/45 text-[15px] leading-[1.8] font-light">
              Based in Doddabommasandra, Vidyaranyapura, we serve clients across Bengaluru's Electronic
              City, Peenya, and beyond, providing everything from grounding mats and wrist straps to
              full cleanroom apparel programmes.
            </p>

            {/* Address block */}
            <div className="mt-10 p-5 rounded-lg border border-white/6 bg-white/[0.02] space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#c8973a] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="text-white/40 text-[13px] leading-relaxed">
                  4TH BLOCK, P.O, 2nd Cross Rd, near Rajarajeshwari School Road,<br/>
                  Munikalappa Layout, Doddabommasandra,<br/>
                  Vidyaranyapura, Bengaluru, Karnataka 560097
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#c8973a] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+917483581847" className="text-white/40 text-[13px] hover:text-[#c8973a] transition-colors">
                  +91 74835 81847
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#c8973a] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:teztronics.in@gmail.com" className="text-white/40 text-[13px] hover:text-[#c8973a] transition-colors">
                  teztronics.in@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group p-6 rounded-lg border border-white/6 bg-white/[0.02] hover:border-[#c8973a]/25 hover:bg-[#c8973a]/[0.04] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-[#c8973a]/10 text-[#c8973a] flex items-center justify-center mb-4 group-hover:bg-[#c8973a]/20 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-['Syne'] font-bold text-white text-[15px] mb-2">{p.title}</h3>
                <p className="text-white/35 text-[13px] leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}