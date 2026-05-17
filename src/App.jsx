import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white font-['DM_Sans']">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0b0d; }
        ::-webkit-scrollbar-thumb { background: #c8973a40; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #c8973a80; }

        /* Selection colour */
        ::selection { background: rgba(200,151,58,0.25); color: #fff; }
      `}</style>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}