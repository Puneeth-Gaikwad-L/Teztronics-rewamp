import { useState } from "react";
import data from "../data/products.json";
const WHATSAPP_NUMBER = data.whatsappNumber.replace(/\D/g, "");
const {city, address} = data.contact;
const encodedAddress = encodeURIComponent(address);

const FIELDS = [
  { id: "org",         label: "Name / Organisation",       placeholder: "Your name or company name",    required: true,  type: "text" },
  { id: "email",       label: "Email",                     placeholder: "you@example.com",              required: true,  type: "email" },
  { id: "location",    label: "Location",                  placeholder: "City, State",                  required: false, type: "text" },
  { id: "phone",       label: "Phone No.",                 placeholder: "+91 XXXXX XXXXX",              required: true,  type: "tel", numeric: true },
  { id: "altPhone",    label: "Alternate No.",             placeholder: "+91 XXXXX XXXXX",              required: false, type: "tel", numeric: true },
  { id: "product",     label: "Product / Category",        placeholder: "e.g. ESD Anti-Fatigue Mat",    required: true,  type: "text" },
  { id: "quantity",    label: "Quantity Required",         placeholder: "e.g. 10 pcs, bulk, sample",   required: false, type: "text" },
  { id: "description", label: "Describe Your Requirement", placeholder: "Tell us more about your requirement…", required: false, type: "text", multiline: true },
];

function validate(form) {
  const errors = {};
  if (!form.org.trim())
    errors.org = "Name / Organisation is required.";
  else if (form.org.trim().length < 2)
    errors.org = "Must be at least 2 characters.";

  if (!form.email.trim())
    errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";

  if (!form.phone)
    errors.phone = "Phone number is required.";
  else if (form.phone.length !== 10)
    errors.phone = "Phone number must be exactly 10 digits.";

  if (form.altPhone && form.altPhone.length !== 10)
    errors.altPhone = "Alternate number must be exactly 10 digits.";
  else if (form.altPhone && form.altPhone === form.phone)
    errors.altPhone = "Alternate number must be different from Phone No.";

  if (!form.product.trim())
    errors.product = "Product / Category is required.";

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState({ org: "", email: "", location: "", phone: "", altPhone: "", product: "", quantity: "", description: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const field = FIELDS.find((f) => f.id === e.target.id);
    const value = field?.numeric ? e.target.value.replace(/\D/g, "") : e.target.value;
    setForm((f) => ({ ...f, [e.target.id]: value }));
    setErrors((prev) => ({ ...prev, [e.target.id]: undefined }));
  };

  const handleBlur = (e) => {
    const errs = validate({ ...form });
    if (errs[e.target.id]) setErrors((prev) => ({ ...prev, [e.target.id]: errs[e.target.id] }));
  };

  const buildMessage = () =>
    [
      `Hi Teztronics, I'd like to enquire about your products.`,
      ``,
      `Name / Organisation: ${form.org}`,
      form.email       ? `Email: ${form.email}`              : null,
      form.phone       ? `Phone: ${form.phone}`              : null,
      form.altPhone    ? `Alternate No.: ${form.altPhone}`   : null,
      form.location    ? `Location: ${form.location}`        : null,
      `Product / Category: ${form.product}`,
      form.quantity    ? `Required Quantity: ${form.quantity}`  : null,
      form.description ? `Requirement: ${form.description}`     : null,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setShowModal(true);
  };

  const handleEmail = () => {
    const body = buildMessage();
    window.location.href = `mailto:teztronics.in@gmail.com?subject=${encodeURIComponent("Product Enquiry — " + form.product)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
  };

  const handleWhatsApp = () => {
    const text = buildMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setShowModal(false);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 100%, rgba(30,136,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — copy + contact pills + map */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#1E88FF]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E88FF]">
                Contact Us
              </span>
            </div>
            <h2
              className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
            >
              Let's get your workspace protected.
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] font-light mb-10 max-w-sm">
              Tell us what you need and we'll get back to you on WhatsApp right away — whether
              it's a single item or a bulk order, we're here to help.
            </p>

            {/* Quick contact pills */}
            <div className="space-y-3 mb-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[13px]">WhatsApp</div>
                  <div className="text-gray-400 text-[12px]">+91 74835 81847</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 ml-auto group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
                </svg>
              </a>

              <a
                href="mailto:teztronics.in@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#1E88FF]/30 hover:bg-[#1E88FF]/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1E88FF]/10 flex items-center justify-center text-[#1E88FF] group-hover:bg-[#1E88FF]/20 transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[13px]">Email</div>
                  <div className="text-gray-400 text-[12px]">teztronics.in@gmail.com</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 ml-auto group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/teztronics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2]/20 transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[13px]">LinkedIn</div>
                  <div className="text-gray-400 text-[12px]">linkedin.com/company/teztronics</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 ml-auto group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4-4 4M3 12h18" />
                </svg>
              </a>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-gray-200" style={{ height: "250px" }}>
                {/* Label bar */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                  <svg className="w-3.5 h-3.5 text-[#1E88FF] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                    Visit Us — {city}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[11px] font-semibold text-[#1E88FF]/60 hover:text-[#1E88FF] transition-colors uppercase tracking-[0.1em]"
                  >
                    Open ↗
                  </a>
                </div>
                <iframe
                  title="Teztronics location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50 p-8">
            <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#003B8E] text-[15px] mb-6">
              Send an enquiry
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {FIELDS.map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-1.5"
                  >
                    {f.label}
                    {f.required && <span className="text-[#1E88FF] ml-0.5">*</span>}
                  </label>
                  {f.multiline ? (
                    <textarea
                      id={f.id}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      className={`w-full bg-gray-100 border rounded-md px-4 py-3 text-[14px] text-[#060912] placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none ${
                        errors[f.id]
                          ? "border-red-400 bg-red-50/40 focus:border-red-400"
                          : "border-gray-200 focus:border-[#1E88FF]/50 focus:bg-[#1E88FF]/[0.04]"
                      }`}
                    />
                  ) : (
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputMode={f.numeric ? "numeric" : undefined}
                      className={`w-full bg-gray-100 border rounded-md px-4 py-3 text-[14px] text-[#060912] placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                        errors[f.id]
                          ? "border-red-400 bg-red-50/40 focus:border-red-400"
                          : "border-gray-200 focus:border-[#1E88FF]/50 focus:bg-[#1E88FF]/[0.04]"
                      }`}
                    />
                  )}
                  {errors[f.id] && (
                    <p className="mt-1 text-[11px] text-red-500">{errors[f.id]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 bg-[#1E88FF] hover:bg-[#3d9fff] text-white font-['Plus_Jakarta_Sans'] font-bold text-[13px] uppercase tracking-widest rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(30,136,255,0.28)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enquire
              </button>

              <p className="text-center text-[11px] text-gray-300 mt-2">
                Submitting opens your email client with your enquiry pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Channel picker modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#003B8E] text-[18px] mb-1">
              How would you like to reach us?
            </p>
            <p className="text-gray-400 text-[13px] mb-6">Choose your preferred channel to send the enquiry.</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all duration-200 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.544 4.07 1.498 5.785L0 24l6.32-1.477A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.369l-.36-.214-3.727.869.899-3.63-.235-.373A9.818 9.818 0 1112 21.818z" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[13px]">WhatsApp</p>
                  <p className="text-gray-400 text-[11px]">Opens WhatsApp with your enquiry pre-filled</p>
                </div>
              </button>

              <button
                onClick={handleEmail}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#1E88FF]/40 hover:bg-[#1E88FF]/5 transition-all duration-200 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-[#1E88FF]/10 flex items-center justify-center text-[#1E88FF] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#060912] text-[13px]">Email</p>
                  <p className="text-gray-400 text-[11px]">Opens your email client with the enquiry pre-filled</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}