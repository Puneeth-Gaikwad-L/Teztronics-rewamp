import Navbar from "./Navbar";
import Footer from "./Footer";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  * { box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #060912; }
  ::-webkit-scrollbar-thumb { background: #1E88FF40; border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: #1E88FF80; }

  ::selection { background: rgba(30,136,255,0.20); color: #060912; }
`;

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#060912] font-['DM_Sans']">
      <style>{globalStyles}</style>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
