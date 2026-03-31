import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";
import { Mail, Globe } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.contact}
          alt="Concert hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-light text-center">
              {t("contact.subtitle")}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white text-center mb-4">
              {t("contact.title")}
            </h2>
          </SectionReveal>

          <GoldDivider className="my-10" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Management Info */}
            <SectionReveal delay={200}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-light">
                  {t("contact.management")}
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-serif text-xl mb-1">NO-TE e.U.</p>
                    <p className="text-white/60 font-light">Krystian Nowakowski</p>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:k@no-te.com" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-light">k@no-te.com</span>
                    </a>
                    <a href="https://www.no-te.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                        <Globe className="w-4 h-4" />
                      </div>
                      <span className="font-light">www.no-te.com</span>
                    </a>
                  </div>
                </div>
                <div className="mt-12 w-16 h-px bg-gradient-to-r from-gold to-transparent" />
                <div className="mt-8 flex items-center gap-4">
                  <a href="https://www.instagram.com/duo_natalia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all duration-300" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/duonatalia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all duration-300" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/@duonatalia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all duration-300" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </SectionReveal>

            {/* Pianist */}
            <SectionReveal delay={400}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-light">
                  Pianist
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-serif text-xl mb-1">Duo Natalia</p>
                    <p className="text-white/60 font-light">Natalia Kovalzon</p>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:nataliakovalzon@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-light">nataliakovalzon@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Violinist */}
            <SectionReveal delay={600}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6 font-light">
                  Violinist
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-serif text-xl mb-1">Duo Natalia</p>
                    <p className="text-white/60 font-light">Natalia van der Mersch</p>
                  </div>
                  <div className="space-y-3">
                    <a href="mailto:natalia.van.der.mersch@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors duration-300 group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold/50 transition-all duration-300">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-light">natalia.van.der.mersch@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
