import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream">
      {/* Duo Section */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-light text-center">
              {t("about.title")}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest text-center mb-4">
              {t("about.duo.title")}
            </h2>
          </SectionReveal>

          <GoldDivider className="my-8" />

          <SectionReveal delay={200}>
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground text-base sm:text-lg leading-relaxed font-light text-center">
                {t("about.duo.text")}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Full-width image break */}
      <div className="relative h-[50vh] overflow-hidden group">
        <img
          src={IMAGES.about}
          alt="Violin and piano"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-forest/20 transition-opacity duration-500 group-hover:bg-forest/10" />
      </div>

      {/* Natalia van der Mersch */}
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <SectionReveal>
                <div className="lg:sticky lg:top-28">
                  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-light">
                    {t("about.nvdm.role")}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
                    {t("about.nvdm.title")}
                  </h2>
                  <div className="w-12 h-px bg-gold mt-6" />
                </div>
              </SectionReveal>
            </div>
            <div className="lg:col-span-8">
              <SectionReveal delay={100}>
                <p className="text-foreground text-base leading-relaxed font-light">
                  {t("about.nvdm.bio")}
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>

      <GoldDivider className="py-4 bg-cream" />

      {/* Natalia Kovalzon */}
      <div className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 lg:order-1">
              <SectionReveal delay={100}>
                <p className="text-foreground text-base leading-relaxed font-light">
                  {t("about.nk.bio")}
                </p>
              </SectionReveal>
            </div>
            <div className="lg:col-span-4 lg:order-2">
              <SectionReveal>
                <div className="lg:sticky lg:top-28">
                  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-light">
                    {t("about.nk.role")}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
                    {t("about.nk.title")}
                  </h2>
                  <div className="w-12 h-px bg-gold mt-6" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
