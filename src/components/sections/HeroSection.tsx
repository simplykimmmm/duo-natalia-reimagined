import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.3);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Duo Natalia performing"
          className="w-full h-[120%] object-cover"
          style={{
            transform: `scale(${loaded ? 1 : 1.1}) translateY(${-scrollY}px)`,
            transition: loaded ? "none" : "transform 1.5s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/30 to-forest/80" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease-out 0.5s",
          }}
        >
          <p className="text-gold text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 font-light">
            {t("hero.subtitle")}
          </p>
        </div>

        <h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-medium leading-none"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.2s ease-out 0.7s",
          }}
        >
          Duo Natalia
        </h1>

        <div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          style={{
            opacity: loaded ? 1 : 0,
            width: loaded ? "80px" : "0px",
            transition: "all 1.5s ease-out 1.2s",
          }}
        />

        <p
          className="mt-6 text-white/70 text-base sm:text-lg font-light italic font-serif max-w-md"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease-out 1.5s",
          }}
        >
          {t("hero.tagline")}
        </p>

        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-12 px-8 py-3 rounded-full border border-gold/50 text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-all duration-500"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease-out 1.8s, background-color 0.5s, color 0.5s, border-color 0.5s",
          }}
        >
          {t("hero.cta")}
        </button>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease-out 2.2s",
        }}
      >
        <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
