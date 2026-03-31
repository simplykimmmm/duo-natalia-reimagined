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
