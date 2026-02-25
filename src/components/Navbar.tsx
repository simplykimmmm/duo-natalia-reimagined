import { useState, useEffect } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const langLabels: Record<Language, string> = { de: "DE", en: "EN", fr: "FR" };

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.discography", href: "#discography" },
    { key: "nav.media", href: "#media" },
    { key: "nav.press", href: "#press" },
    { key: "nav.contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isSubpage = location.pathname !== "/";
  const showSolid = scrolled || isSubpage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-forest/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="font-serif text-xl sm:text-2xl tracking-wide text-white hover:text-gold transition-colors duration-300"
        >
          Duo Natalia
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => scrollTo(link.href)}
              className="text-sm tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300 font-light"
            >
              {t(link.key)}
            </button>
          ))}

          <div className="flex items-center gap-1 ml-4 border-l border-white/20 pl-4">
            {(["de", "en", "fr"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs tracking-wider px-2 py-1 rounded-full transition-all duration-300 ${
                  lang === l
                    ? "bg-gold text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-forest/98 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[80vh] border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-base tracking-widest uppercase text-white/80 hover:text-gold transition-colors duration-300 font-light py-2"
            >
              {t(link.key)}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-4 border-t border-white/10">
            {(["de", "en", "fr"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileOpen(false); }}
                className={`text-sm tracking-wider px-3 py-1.5 rounded-full transition-all duration-300 ${
                  lang === l
                    ? "bg-gold text-white"
                    : "text-white/60 hover:text-white border border-white/20"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
