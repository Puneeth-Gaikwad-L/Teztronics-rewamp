export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[70px]"
    >
      {/* Ambient board glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 78% 32%, rgba(30,136,255,0.07) 0%, transparent 55%)",
        }}
      />

      {/* Circuit board */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="sparkGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="sparkHalo" x="-400%" y="-400%" width="900%" height="900%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── TRACES ── */}
        <g stroke="rgba(30,136,255,0.13)" fill="none" strokeLinecap="square" strokeLinejoin="miter">

          {/* IC Chip 1 — upper right */}
          <rect x="1048" y="36" width="182" height="94" strokeWidth="0.9" rx="3" />
          {/* pin-1 notch */}
          <circle cx="1063" cy="51" r="3" fill="none" stroke="rgba(30,136,255,0.18)" strokeWidth="0.7" />
          {/* top stubs */}
          <line x1="1078" y1="36" x2="1078" y2="25" strokeWidth="1.2" />
          <line x1="1108" y1="36" x2="1108" y2="25" strokeWidth="1.2" />
          <line x1="1138" y1="36" x2="1138" y2="25" strokeWidth="1.2" />
          <line x1="1168" y1="36" x2="1168" y2="25" strokeWidth="1.2" />
          <line x1="1198" y1="36" x2="1198" y2="25" strokeWidth="1.2" />
          {/* bottom stubs */}
          <line x1="1078" y1="130" x2="1078" y2="141" strokeWidth="1.2" />
          <line x1="1108" y1="130" x2="1108" y2="141" strokeWidth="1.2" />
          <line x1="1138" y1="130" x2="1138" y2="141" strokeWidth="1.2" />
          <line x1="1168" y1="130" x2="1168" y2="141" strokeWidth="1.2" />
          <line x1="1198" y1="130" x2="1198" y2="141" strokeWidth="1.2" />
          {/* left stubs */}
          <line x1="1048" y1="58" x2="1036" y2="58" strokeWidth="1.2" />
          <line x1="1048" y1="83" x2="1036" y2="83" strokeWidth="1.2" />
          <line x1="1048" y1="108" x2="1036" y2="108" strokeWidth="1.2" />
          {/* right stubs */}
          <line x1="1230" y1="58" x2="1242" y2="58" strokeWidth="1.2" />
          <line x1="1230" y1="83" x2="1242" y2="83" strokeWidth="1.2" />
          <line x1="1230" y1="108" x2="1242" y2="108" strokeWidth="1.2" />

          {/* IC1 top-pin routes */}
          <path d="M 1078 25 L 1078 0" strokeWidth="0.8" />
          <path d="M 1108 25 L 1108 0" strokeWidth="0.8" />
          <path d="M 1138 25 L 1138 0" strokeWidth="0.8" />
          <path d="M 1168 25 L 1168 10 L 1440 10" strokeWidth="0.8" />
          <path d="M 1198 25 L 1198 0" strokeWidth="0.8" />

          {/* IC1 bottom-pin routes */}
          <path d="M 1078 141 L 1078 178 L 1012 178 L 1012 258 L 952 258 L 952 338" strokeWidth="0.8" />
          <path d="M 1108 141 L 1108 198 L 1192 198 L 1192 278 L 1272 278 L 1272 358 L 1312 358 L 1312 442" strokeWidth="0.8" />
          <path d="M 1138 141 L 1138 218 L 1372 218 L 1372 358" strokeWidth="0.8" />
          <path d="M 1168 141 L 1168 188 L 1440 188" strokeWidth="0.8" />
          <path d="M 1198 141 L 1198 158 L 1440 158" strokeWidth="0.8" />

          {/* IC1 left-pin routes */}
          <path d="M 1036 58 L 878 58 L 878 122 L 820 122 L 820 200 L 782 200" strokeWidth="0.8" />
          <path d="M 1036 83 L 902 83 L 902 202 L 858 246 L 858 338" strokeWidth="0.8" />
          <path d="M 1036 108 L 962 108 L 962 198 L 922 238 L 922 380" strokeWidth="0.8" />

          {/* IC1 right-pin routes */}
          <path d="M 1242 58 L 1348 58 L 1348 122 L 1440 122" strokeWidth="0.8" />
          <path d="M 1242 83 L 1322 83 L 1322 158" strokeWidth="0.8" />
          <path d="M 1242 108 L 1358 108 L 1358 198" strokeWidth="0.8" />

          {/* IC Chip 2 — bottom center */}
          <rect x="658" y="718" width="144" height="72" strokeWidth="0.9" rx="2" />
          <circle cx="672" cy="732" r="2.5" fill="none" stroke="rgba(30,136,255,0.16)" strokeWidth="0.6" />
          {/* top stubs */}
          <line x1="682" y1="718" x2="682" y2="708" strokeWidth="1.2" />
          <line x1="712" y1="718" x2="712" y2="708" strokeWidth="1.2" />
          <line x1="742" y1="718" x2="742" y2="708" strokeWidth="1.2" />
          <line x1="772" y1="718" x2="772" y2="708" strokeWidth="1.2" />
          {/* bottom stubs */}
          <line x1="682" y1="790" x2="682" y2="800" strokeWidth="1.2" />
          <line x1="712" y1="790" x2="712" y2="800" strokeWidth="1.2" />
          <line x1="742" y1="790" x2="742" y2="800" strokeWidth="1.2" />
          <line x1="772" y1="790" x2="772" y2="800" strokeWidth="1.2" />
          {/* left/right stubs */}
          <line x1="658" y1="738" x2="646" y2="738" strokeWidth="1.2" />
          <line x1="658" y1="758" x2="646" y2="758" strokeWidth="1.2" />
          <line x1="802" y1="738" x2="814" y2="738" strokeWidth="1.2" />
          <line x1="802" y1="758" x2="814" y2="758" strokeWidth="1.2" />

          {/* IC2 top-pin routes */}
          <path d="M 682 708 L 682 675 L 618 675 L 618 598 L 578 558" strokeWidth="0.8" />
          <path d="M 712 708 L 712 658 L 802 658 L 802 578" strokeWidth="0.8" />
          <path d="M 742 708 L 742 675 L 820 675 L 820 598 L 858 558 L 858 480" strokeWidth="0.8" />
          <path d="M 772 708 L 772 688 L 898 688 L 898 618 L 978 578" strokeWidth="0.8" />

          {/* IC2 bottom-pin routes */}
          <path d="M 682 800 L 682 842 L 622 842 L 622 900" strokeWidth="0.8" />
          <path d="M 712 800 L 712 862 L 758 900" strokeWidth="0.8" />
          <path d="M 742 800 L 742 858 L 798 900" strokeWidth="0.8" />
          <path d="M 772 800 L 772 850 L 840 850 L 840 900" strokeWidth="0.8" />

          {/* IC2 side routes → horizontal buses */}
          <path d="M 646 738 L 532 738 L 512 718 L 362 718 L 342 738 L 182 738 L 162 758 L 0 758" strokeWidth="0.8" />
          <path d="M 646 758 L 568 758 L 548 778 L 0 778" strokeWidth="0.8" />
          <path d="M 814 738 L 942 738 L 962 718 L 1092 718 L 1112 738 L 1342 738 L 1362 758 L 1440 758" strokeWidth="0.8" />
          <path d="M 814 758 L 882 758 L 902 778 L 1182 778 L 1202 798 L 1440 798" strokeWidth="0.8" />

          {/* ── Left-side horizontal buses ── */}
          <path d="M 0 72 L 122 72 L 142 52 L 302 52 L 322 72 L 502 72 L 522 52 L 642 52 L 662 72 L 820 72" strokeWidth="0.8" />
          <path d="M 0 198 L 82 198 L 102 178 L 262 178 L 282 198 L 382 198 L 402 218 L 478 218 L 498 198 L 662 198" strokeWidth="0.8" />
          <path d="M 0 338 L 142 338 L 162 318 L 352 318 L 372 338 L 572 338 L 592 358 L 820 358 L 840 338 L 952 338" strokeWidth="0.8" />
          <path d="M 0 480 L 58 480 L 78 460 L 198 460 L 218 480 L 398 480 L 418 460 L 558 460 L 578 480 L 820 480" strokeWidth="0.8" />
          <path d="M 0 638 L 58 638 L 78 618 L 198 618 L 218 638 L 358 638 L 378 618 L 538 618 L 558 638 L 678 638 L 698 618 L 818 618" strokeWidth="0.8" />

          {/* ── Left-side vertical runs ── */}
          <path d="M 62 72 L 62 198 L 82 218 L 82 338 L 62 358 L 62 480 L 102 520 L 102 600 L 62 638 L 62 758" strokeWidth="0.8" />
          <path d="M 202 198 L 202 318" strokeWidth="0.8" />
          <path d="M 382 198 L 382 318" strokeWidth="0.8" />
          <path d="M 142 52 L 142 72" strokeWidth="0.8" />
          <path d="M 282 52 L 282 72" strokeWidth="0.8" />
          <path d="M 182 0 L 182 52" strokeWidth="0.8" />
          <path d="M 462 72 L 462 198" strokeWidth="0.8" />
          <path d="M 558 72 L 558 198 L 538 218 L 538 318 L 558 338 L 558 460 L 578 480" strokeWidth="0.8" />
          <path d="M 820 72 L 820 122 L 878 58" strokeWidth="0.8" />

          {/* ── Mid-right verticals ── */}
          <path d="M 902 83 L 902 338 L 922 358 L 922 480 L 882 520 L 882 600 L 918 638 L 918 718" strokeWidth="0.8" />
          <path d="M 1012 178 L 1012 258" strokeWidth="0.8" />
          <path d="M 1272 278 L 1272 358" strokeWidth="0.8" />
          <path d="M 1372 218 L 1372 358 L 1352 378 L 1352 738" strokeWidth="0.8" />
          <path d="M 1312 358 L 1312 442 L 1282 472 L 1282 600 L 1262 638 L 1262 718" strokeWidth="0.8" />

        </g>

        {/* ── PADS ── */}
        <g fill="rgba(30,136,255,0.26)" stroke="rgba(30,136,255,0.30)" strokeWidth="0.5">
          {/* IC1 top pads */}
          <circle cx="1078" cy="25" r="3.5" /><circle cx="1108" cy="25" r="3.5" />
          <circle cx="1138" cy="25" r="3.5" /><circle cx="1168" cy="25" r="3.5" />
          <circle cx="1198" cy="25" r="3.5" />
          {/* IC1 bottom pads */}
          <circle cx="1078" cy="141" r="3.5" /><circle cx="1108" cy="141" r="3.5" />
          <circle cx="1138" cy="141" r="3.5" /><circle cx="1168" cy="141" r="3.5" />
          <circle cx="1198" cy="141" r="3.5" />
          {/* IC1 side pads */}
          <circle cx="1036" cy="58" r="3" /><circle cx="1036" cy="83" r="3" /><circle cx="1036" cy="108" r="3" />
          <circle cx="1242" cy="58" r="3" /><circle cx="1242" cy="83" r="3" /><circle cx="1242" cy="108" r="3" />
          {/* IC2 top pads */}
          <circle cx="682" cy="708" r="3" /><circle cx="712" cy="708" r="3" />
          <circle cx="742" cy="708" r="3" /><circle cx="772" cy="708" r="3" />
          {/* IC2 bottom pads */}
          <circle cx="682" cy="800" r="3" /><circle cx="712" cy="800" r="3" />
          <circle cx="742" cy="800" r="3" /><circle cx="772" cy="800" r="3" />
          {/* IC2 side pads */}
          <circle cx="646" cy="738" r="3" /><circle cx="646" cy="758" r="3" />
          <circle cx="814" cy="738" r="3" /><circle cx="814" cy="758" r="3" />
          {/* Trace junction pads */}
          <circle cx="142" cy="52" r="2.8" /><circle cx="282" cy="52" r="2.8" />
          <circle cx="82" cy="198" r="2.8" /><circle cx="202" cy="198" r="2.8" />
          <circle cx="382" cy="198" r="2.8" /><circle cx="462" cy="72" r="2.8" />
          <circle cx="202" cy="318" r="2.8" /><circle cx="382" cy="318" r="2.8" />
          <circle cx="558" cy="72" r="2.8" /><circle cx="558" cy="198" r="2.8" />
          <circle cx="558" cy="338" r="2.8" /><circle cx="558" cy="460" r="2.8" />
          <circle cx="902" cy="83" r="2.8" /><circle cx="902" cy="338" r="2.8" />
          <circle cx="922" cy="480" r="2.8" /><circle cx="918" cy="638" r="2.8" />
          <circle cx="1012" cy="178" r="2.8" /><circle cx="1012" cy="258" r="2.8" />
          <circle cx="952" cy="258" r="2.8" /><circle cx="952" cy="338" r="2.8" />
          <circle cx="1272" cy="278" r="2.8" /><circle cx="1272" cy="358" r="2.8" />
          <circle cx="1372" cy="218" r="2.8" /><circle cx="1372" cy="358" r="2.8" />
          <circle cx="1312" cy="358" r="2.8" />
          <circle cx="62" cy="72" r="2.5" /><circle cx="62" cy="198" r="2.5" />
          <circle cx="62" cy="338" r="2.5" /><circle cx="62" cy="480" r="2.5" />
          <circle cx="62" cy="638" r="2.5" />
        </g>

        {/* ── SPARK 1 — IC1 left pin discharge ── */}
        <g transform="translate(1036,83)" filter="url(#sparkGlow)">
          <circle cx="0" cy="0" r="22" fill="rgba(30,136,255,0.07)" filter="url(#sparkHalo)" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="rgba(30,136,255,0.92)" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="rgba(30,136,255,0.92)" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="-11" y1="-11" x2="11" y2="11" stroke="rgba(30,136,255,0.68)" strokeWidth="1.0" strokeLinecap="round" />
          <line x1="11" y1="-11" x2="-11" y2="11" stroke="rgba(30,136,255,0.68)" strokeWidth="1.0" strokeLinecap="round" />
          <line x1="-24" y1="0" x2="24" y2="0" stroke="rgba(30,136,255,0.30)" strokeWidth="0.6" strokeLinecap="round" />
          <line x1="0" y1="-24" x2="0" y2="24" stroke="rgba(30,136,255,0.30)" strokeWidth="0.6" strokeLinecap="round" />
          {/* scatter jets */}
          <line x1="14" y1="-6" x2="22" y2="-9" stroke="rgba(30,136,255,0.58)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="-14" y1="7" x2="-22" y2="10" stroke="rgba(30,136,255,0.58)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="6" y1="15" x2="9" y2="24" stroke="rgba(30,136,255,0.52)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="-7" y1="-15" x2="-10" y2="-24" stroke="rgba(30,136,255,0.52)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="17" y1="7" x2="24" y2="10" stroke="rgba(30,136,255,0.38)" strokeWidth="0.6" strokeLinecap="round" />
          <line x1="-17" y1="-6" x2="-25" y2="-9" stroke="rgba(30,136,255,0.38)" strokeWidth="0.6" strokeLinecap="round" />
          {/* core */}
          <circle cx="0" cy="0" r="5.5" fill="rgba(30,136,255,0.9)" />
          <circle cx="0" cy="0" r="2.5" fill="rgba(185,220,255,1)" />
        </g>

        {/* ── SPARK 2 — left bus junction ── */}
        <g transform="translate(218,480)" filter="url(#sparkGlow)">
          <circle cx="0" cy="0" r="17" fill="rgba(30,136,255,0.06)" filter="url(#sparkHalo)" />
          <line x1="-13" y1="0" x2="13" y2="0" stroke="rgba(30,136,255,0.88)" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="0" y1="-13" x2="0" y2="13" stroke="rgba(30,136,255,0.88)" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="-9" y1="-9" x2="9" y2="9" stroke="rgba(30,136,255,0.62)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="9" y1="-9" x2="-9" y2="9" stroke="rgba(30,136,255,0.62)" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="-19" y1="0" x2="19" y2="0" stroke="rgba(30,136,255,0.26)" strokeWidth="0.5" strokeLinecap="round" />
          <line x1="0" y1="-19" x2="0" y2="19" stroke="rgba(30,136,255,0.26)" strokeWidth="0.5" strokeLinecap="round" />
          <line x1="11" y1="-5" x2="18" y2="-8" stroke="rgba(30,136,255,0.50)" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="-12" y1="6" x2="-19" y2="9" stroke="rgba(30,136,255,0.50)" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="5" y1="12" x2="8" y2="19" stroke="rgba(30,136,255,0.44)" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="-6" y1="-12" x2="-9" y2="-20" stroke="rgba(30,136,255,0.44)" strokeWidth="0.7" strokeLinecap="round" />
          <circle cx="0" cy="0" r="5" fill="rgba(30,136,255,0.85)" />
          <circle cx="0" cy="0" r="2.2" fill="rgba(185,220,255,1)" />
        </g>

        {/* ── SPARK 3 — IC2 upper trace junction ── */}
        <g transform="translate(858,480)" filter="url(#sparkGlow)">
          <circle cx="0" cy="0" r="14" fill="rgba(30,136,255,0.05)" filter="url(#sparkHalo)" />
          <line x1="-11" y1="0" x2="11" y2="0" stroke="rgba(30,136,255,0.82)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="0" y1="-11" x2="0" y2="11" stroke="rgba(30,136,255,0.82)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="-7" y1="-7" x2="7" y2="7" stroke="rgba(30,136,255,0.56)" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="7" y1="-7" x2="-7" y2="7" stroke="rgba(30,136,255,0.56)" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="rgba(30,136,255,0.22)" strokeWidth="0.5" strokeLinecap="round" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="rgba(30,136,255,0.22)" strokeWidth="0.5" strokeLinecap="round" />
          <line x1="9" y1="-4" x2="15" y2="-7" stroke="rgba(30,136,255,0.44)" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="-4" y1="9" x2="-7" y2="15" stroke="rgba(30,136,255,0.44)" strokeWidth="0.7" strokeLinecap="round" />
          <line x1="-10" y1="-4" x2="-16" y2="-6" stroke="rgba(30,136,255,0.36)" strokeWidth="0.6" strokeLinecap="round" />
          <circle cx="0" cy="0" r="4.5" fill="rgba(30,136,255,0.80)" />
          <circle cx="0" cy="0" r="2" fill="rgba(185,220,255,1)" />
        </g>

      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-start py-20">
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
            We supply ESD control and cleanroom products to electronics manufacturers,
            assembly units, and research labs across India. From a single wrist strap
            to a full facility setup — talk to us and we'll sort it out.
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
              { num: "100+", label: "Products" },
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
                Quality-Assured Products
              </p>

              <p className="text-gray-600 text-[12px] leading-relaxed">
                Carefully selected ESD and cleanroom products designed to support safe, reliable, and controlled workspaces.
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
                Complete Product Range
              </p>

              <p className="text-gray-600 text-[12px] leading-relaxed">
                From ESD essentials to cleanroom consumables — everything your facility needs in one place.
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
                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
                  />
                </svg>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[14px] mb-1">
                Fast Support & Supply
              </p>

              <p className="text-gray-600 text-[12px] leading-relaxed">
                Quick guidance, easy ordering, and reliable delivery across India.
              </p>
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
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
      </div> */}

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
      `}</style>
    </section>
  );
}
