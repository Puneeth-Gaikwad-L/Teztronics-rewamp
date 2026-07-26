import { useState } from "react";
import data from "../data/products.json";

const WHATSAPP_NUMBER = data.whatsappNumber.replace(/\D/g, "");
const EMAIL_ADDRESS = "teztronics.in@gmail.com";

function buildMessage(productName) {
  return `Hi Teztronics,\n\nI would like to enquire about:\n*${productName}*\n\nPlease share pricing and availability. Thank you.`;
}

export default function EnquireButton({ productName, className, children = "Enquire" }) {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsApp = () => {
    const text = buildMessage(productName);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setShowModal(false);
  };

  const handleEmail = () => {
    const body = buildMessage(productName);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent("Product Enquiry — " + productName)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
  };

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)} className={className}>
        {children}
      </button>

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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
    </>
  );
}
