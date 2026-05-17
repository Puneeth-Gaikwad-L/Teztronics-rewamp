export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[70px]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,151,58,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(200,151,58,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(200,151,58,0.10) 0%, transparent 65%)" }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 70%, rgba(42,109,217,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div>
          {/* Pill tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c8973a]/30 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8973a] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#c8973a]">
              ESD &amp; Cleanroom Specialists · Bengaluru
            </span>
          </div>

          <h1 className="font-['Syne'] font-extrabold leading-[1.0] tracking-[-2px] text-white mb-6"
            style={{ fontSize: "clamp(44px, 6vw, 76px)" }}>
            Precision<br/>
            <em className="not-italic text-[#c8973a]">Protection</em><br/>
            Engineered.
          </h1>

          <p className="text-white/45 text-[16px] leading-[1.75] font-light max-w-[440px] mb-10">
            Teztronics supplies certified ESD and cleanroom solutions to India's leading electronics
            manufacturers, semiconductor fabs, and research labs. Every product, built for reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#c8973a] hover:bg-[#dba84a] text-[#0a0b0d] font-['Syne'] font-bold text-[13px] uppercase tracking-widest rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,151,58,0.28)]"
            >
              Browse Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18"/>
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/10 hover:border-[#c8973a]/40 text-white/70 hover:text-[#c8973a] font-['Syne'] font-semibold text-[13px] uppercase tracking-widest rounded-sm transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 pt-10 border-t border-white/5 grid grid-cols-3 gap-8">
            {[
              { num: "500+", label: "Products" },
              { num: "10+", label: "Yrs Experience" },
              { num: "Pan India", label: "Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-['Syne'] font-extrabold text-[28px] text-white tracking-tight leading-none">
                  {s.num}
                </div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-white/35 mt-1.5 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative cards */}
        <div className="hidden md:block relative h-[460px]">
          {/* Main card */}
          <div
            className="absolute top-0 right-0 w-[280px] rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6"
            style={{ animation: "floatA 5s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 rounded-md bg-[#c8973a]/15 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[#c8973a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <p className="font-['Syne'] font-bold text-white text-[14px] mb-1">ESD Certified</p>
            <p className="text-white/40 text-[12px] leading-relaxed">
              All products comply with IEC 61340-5-1 and relevant MIL-SPEC standards.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {["#c8973a","#2a6dd9","#3ab87a"].map((c) => (
                <span key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
              ))}
              <span className="text-[10px] text-white/25 ml-1 uppercase tracking-widest">Verified</span>
            </div>
          </div>

          {/* Second card */}
          <div
            className="absolute top-[150px] left-0 w-[250px] rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6"
            style={{ animation: "floatB 5s ease-in-out infinite" }}
          >
            <div className="w-8 h-8 rounded-md bg-[#2a6dd9]/15 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[#2a6dd9]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <p className="font-['Syne'] font-bold text-white text-[14px] mb-1">3 Product Categories</p>
            <p className="text-white/40 text-[12px] leading-relaxed">
              ESD Cleanroom · Material Handling · Disposables
            </p>
          </div>

          {/* Third card */}
          <div
            className="absolute bottom-0 right-[30px] w-[230px] rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-5"
            style={{ animation: "floatC 5s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z"/>
                </svg>
              </div>
              <div>
                <p className="font-['Syne'] font-bold text-white text-[12px]">WhatsApp Enquiry</p>
                <p className="text-white/35 text-[11px]">Instant response</p>
              </div>
            </div>
            <div className="text-[11px] text-white/30 font-mono">+91 74835 81847</div>
          </div>

          {/* Decorative lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="280" y1="60" x2="250" y2="180" stroke="rgba(200,151,58,0.12)" strokeWidth="1" strokeDasharray="4 4"/>
            <line x1="125" y1="220" x2="200" y2="380" stroke="rgba(42,109,217,0.10)" strokeWidth="1" strokeDasharray="4 4"/>
          </svg>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
      `}</style>
    </section>
  );
}