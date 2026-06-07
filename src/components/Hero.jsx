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
            "linear-gradient(rgba(30,136,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(30,136,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(30,136,255,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(0,59,142,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div>
          {/* Pill tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#1E88FF]/50 bg-[#1E88FF]/5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E88FF] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#1E88FF]">
              ESD &amp; Cleanroom Specialists · Bengaluru
            </span>
          </div>

          <h1
            className="font-['Plus_Jakarta_Sans'] font-extrabold leading-[1.0] tracking-[-2px] text-[#003B8E] mb-6"
            style={{ fontSize: "clamp(44px, 6vw, 76px)" }}
          >
            Precision
            <br />
            <em className="not-italic text-[#1E88FF]">Protection</em>
            <br />
            Engineered.
          </h1>

          <p className="text-gray-600 text-[16px] leading-[1.75] font-light max-w-[440px] mb-10">
            Whether you're setting up a new factory, running a cleanroom, or
            protecting a lab workstation — Teztronics has the right ESD and
            cleanroom products, delivered across India.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1E88FF] hover:bg-[#3d9fff] text-white font-['Plus_Jakarta_Sans'] font-bold text-[13px] uppercase tracking-widest rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(30,136,255,0.28)]"
            >
              Browse Products
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4-4 4M3 12h18"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-gray-300 hover:border-[#1E88FF]/40 text-[#060912]/70 hover:text-[#1E88FF] font-['Plus_Jakarta_Sans'] font-semibold text-[13px] uppercase tracking-widest rounded-sm transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 pt-10 border-t border-gray-200 grid grid-cols-3 gap-8">
            {[
              { num: "500+", label: "Products" },
              { num: "10+", label: "Yrs Experience" },
              { num: "Pan India", label: "Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[28px] text-[#060912] tracking-tight leading-none">
                  {s.num}
                </div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mt-1.5 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative cards */}
        <div className="hidden md:block relative h-[460px]">
          {/* Aurora Glow Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-[-80px] right-[-50px] w-[320px] h-[320px] rounded-full blur-[120px] opacity-25"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,59,142,0.8) 0%, rgba(0,59,142,0) 70%)",
              }}
            />

            <div
              className="absolute bottom-[-100px] left-[-50px] w-[280px] h-[280px] rounded-full blur-[110px] opacity-15"
              style={{
                background:
                  "radial-gradient(circle, rgba(30,136,255,0.8) 0%, rgba(30,136,255,0) 70%)",
              }}
            />

            <div
              className="absolute top-[180px] left-[140px] w-[180px] h-[180px] rounded-full blur-[80px] opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(58,184,122,0.8) 0%, rgba(58,184,122,0) 70%)",
              }}
            />
          </div>

          {/* Card 1 */}
          <div
            className="absolute top-0 right-0 w-[280px] p-6 overflow-hidden rounded-[32px] border border-[#1E88FF]/25 backdrop-blur-[30px] shadow-[0_10px_40px_rgba(30,136,255,0.18)]"
            style={{ animation: "floatA 5s ease-in-out infinite", background: "rgba(30,136,255,0.08)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,136,255,0.18)] via-[rgba(30,136,255,0.05)] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl border border-white/70 bg-[rgba(30,136,255,0.12)] backdrop-blur-xl flex items-center justify-center shadow-[0_4px_20px_rgba(30,136,255,0.15)] mb-4">
                <svg
                  className="w-4 h-4 text-[#1E88FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[14px] mb-1">
                Audit-Ready Products
              </p>

              <p className="text-gray-600 text-[12px] leading-relaxed">
                Every product is IEC, MIL-SPEC & ISO certified — keep your
                facility compliant without the stress.
              </p>

              <div className="mt-4 flex items-center gap-2">
                {["#1E88FF", "#003B8E", "#3ab87a"].map((c) => (
                  <span
                    key={c}
                    className="w-2 h-2 rounded-full"
                    style={{ background: c }}
                  />
                ))}
                <span className="text-[10px] text-gray-400 ml-1 uppercase tracking-widest">
                  Certified
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="absolute top-[160px] left-[10px] w-[250px] p-6 overflow-hidden rounded-[32px] border border-[#1E88FF]/25 backdrop-blur-[30px] shadow-[0_10px_40px_rgba(30,136,255,0.18)]"
            style={{ animation: "floatB 5s ease-in-out infinite", background: "rgba(30,136,255,0.08)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,136,255,0.18)] via-[rgba(30,136,255,0.05)] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-2xl border border-white/70 bg-[rgba(30,136,255,0.12)] backdrop-blur-xl flex items-center justify-center shadow-[0_4px_20px_rgba(30,136,255,0.15)] mb-4">
                <svg
                  className="w-4 h-4 text-[#003B8E]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[14px] mb-1">
                500+ Products In Stock
              </p>

              <p className="text-gray-600 text-[12px] leading-relaxed">
                From a single wrist strap to a full factory setup — shipped pan India.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="absolute bottom-0 right-[30px] w-[230px] p-5 overflow-hidden rounded-[32px] border border-[#1E88FF]/25 backdrop-blur-[30px] shadow-[0_10px_40px_rgba(30,136,255,0.18)]"
            style={{ animation: "floatC 5s ease-in-out infinite", background: "rgba(30,136,255,0.08)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,136,255,0.18)] via-[rgba(30,136,255,0.05)] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border border-white/70 bg-[rgba(30,136,255,0.12)] backdrop-blur-xl flex items-center justify-center shadow-[0_4px_20px_rgba(30,136,255,0.15)] shrink-0">
                  <svg
                    className="w-5 h-5 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z" />
                  </svg>
                </div>

                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[12px]">
                    Talk to Us Directly
                  </p>
                  <p className="text-gray-500 text-[11px]">Reply within minutes</p>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 font-mono">
                +91 74835 81847
              </div>
            </div>
          </div>

          {/* Decorative Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="280"
              y1="60"
              x2="250"
              y2="180"
              stroke="rgba(0,59,142,0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="258"
              y1="298"
              x2="322"
              y2="355"
              stroke="rgba(0,59,142,0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
      `}</style>
    </section>
  );
}
