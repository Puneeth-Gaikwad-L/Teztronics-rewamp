import { useState } from "react";
import data from "../data/products.json";
const { whatsappNumber: WHATSAPP_NUMBER } = data;
const {city, address} = data.contact;
const encodedAddress = encodeURIComponent(address);

const FIELDS = [
  { id: "org", label: "Organisation Name", placeholder: "Your company / lab name", required: true, type: "text" },
  { id: "email", label: "Email", placeholder: "you@company.com", required: true, type: "email" },
  { id: "location", label: "Location", placeholder: "City, State", required: false, type: "text" },
  { id: "product", label: "Product / Category", placeholder: "e.g. ESD Anti-Fatigue Mat", required: true, type: "text" },
  { id: "quantity", label: "Required Quantity", placeholder: "e.g. 50 pcs", required: false, type: "text" },
];

export default function ContactForm() {
  const [form, setForm] = useState({ org: "", email: "", location: "", product: "", quantity: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi Teztronics, I'd like to enquire about your products.`,
      ``,
      `*Organisation:* ${form.org}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.location ? `*Location:* ${form.location}` : null,
      `*Product / Category:* ${form.product}`,
      form.quantity ? `*Required Quantity:* ${form.quantity}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 100%, rgba(200,151,58,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy + contact pills + map */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#c8973a]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c8973a]">
                Contact Us
              </span>
            </div>
            <h2
              className="font-['Syne'] font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
            >
              Ready to protect your workspace?
            </h2>
            <p className="text-white/40 text-[15px] leading-[1.8] font-light mb-10 max-w-sm">
              Fill in the form and we'll send you a reply on WhatsApp instantly. No spam, no
              middlemen — just the team at Teztronics.
            </p>

            {/* Quick contact pills */}
            <div className="space-y-3 mb-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-white/6 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Syne'] font-bold text-white text-[13px]">WhatsApp</div>
                  <div className="text-white/35 text-[12px]">+91 74835 81847</div>
                </div>
                <svg className="w-4 h-4 text-white/20 ml-auto group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
                </svg>
              </a>

              <a
                href="mailto:teztronics.in@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-white/6 hover:border-[#c8973a]/30 hover:bg-[#c8973a]/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#c8973a]/10 flex items-center justify-center text-[#c8973a] group-hover:bg-[#c8973a]/20 transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Syne'] font-bold text-white text-[13px]">Email</div>
                  <div className="text-white/35 text-[12px]">teztronics.in@gmail.com</div>
                </div>
                <svg className="w-4 h-4 text-white/20 ml-auto group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
                </svg>
              </a>


              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-white/6" style={{ height: "250px" }}>
                {/* Label bar */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.03] border-b border-white/6">
                  <svg className="w-3.5 h-3.5 text-[#c8973a] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
                    Visit Us — {city}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[11px] font-semibold text-[#c8973a]/60 hover:text-[#c8973a] transition-colors uppercase tracking-[0.1em]"
                  >
                    Open ↗
                  </a>
                </div>
                <iframe
                  title="Teztronics location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.85)" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className=" sticky top-24 rounded-xl border border-white/6 bg-white/[0.025] p-8">
            <p className="font-['Syne'] font-bold text-white text-[15px] mb-6">
              Send an enquiry
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {FIELDS.map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35 mb-1.5"
                  >
                    {f.label}
                    {f.required && <span className="text-[#c8973a] ml-0.5">*</span>}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={handleChange}
                    required={f.required}
                    className="w-full bg-white/[0.04] border border-white/8 rounded-md px-4 py-3 text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-[#c8973a]/50 focus:bg-[#c8973a]/[0.04] transition-all duration-200"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#c8973a] hover:bg-[#dba84a] text-[#0a0b0d] font-['Syne'] font-bold text-[13px] uppercase tracking-widest rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,151,58,0.28)]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z" />
                </svg>
                Continue on WhatsApp
              </button>

              <p className="text-center text-[11px] text-white/20 mt-2">
                Submitting opens WhatsApp with your enquiry pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}