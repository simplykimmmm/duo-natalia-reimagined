import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";

export default function MediaSection() {
  const { t } = useLanguage();

  return (
    <section id="media" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-light text-center">
            {t("media.videos")}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest text-center mb-4">
            {t("media.title")}
          </h2>
        </SectionReveal>

        <GoldDivider className="my-10" />

        <SectionReveal delay={200}>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/2cHmXQVXN2g"
                title="Duo Natalia - Kopylov / Memories of Peterhof Op 29"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-center text-foreground/60 text-sm font-light italic">
              Kopylov — Memories of Peterhof Op. 29
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className="mt-16 text-center">
            <a
              href="https://www.youtube.com/@duonatalia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-forest/20 text-forest text-sm tracking-[0.15em] uppercase hover:bg-forest hover:text-white transition-all duration-500"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube Channel
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
