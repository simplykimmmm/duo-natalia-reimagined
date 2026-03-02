import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pressReviews } from "@/lib/pressReviews";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";
import { ExternalLink } from "lucide-react";

export default function PressSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? pressReviews : pressReviews.slice(0, 4);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="press" className="bg-forest section-padding relative overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjgiLz48L2ZpbHRlcj48cmVjdCBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjEiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIi8+PC9zdmc+')]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-light text-center">
            {t("press.subtitle")}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white text-center mb-4">
            {t("press.title")}
          </h2>
        </SectionReveal>

        <GoldDivider className="my-10" />

        <div className="mt-16 space-y-0">
          {displayed.map((review, index) => (
            <SectionReveal key={index} delay={index * 100}>
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-white/10 first:border-t py-10 sm:py-12 transition-colors duration-500 hover:bg-white/[0.03]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  {/* Left column: source + date */}
                  <div className="lg:w-56 shrink-0 flex lg:flex-col items-baseline lg:items-start gap-3 lg:gap-2">
                    <span className="text-gold font-medium text-sm tracking-wide uppercase">
                      {review.source}
                    </span>
                    <span className="text-white/40 text-xs font-light">
                      {formatDate(review.date)}
                    </span>
                    {review.album && (
                      <span className="hidden lg:inline-block mt-2 text-xs text-white/25 border border-white/10 rounded-full px-3 py-1">
                        {review.album}
                      </span>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <blockquote className="text-white/85 text-lg sm:text-xl lg:text-2xl leading-relaxed font-serif italic">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    {review.album && (
                      <span className="lg:hidden inline-block mt-4 text-xs text-white/25 border border-white/10 rounded-full px-3 py-1">
                        {review.album}
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center self-center">
                    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-gold transition-colors duration-300" />
                  </div>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>

        {pressReviews.length > 4 && (
          <SectionReveal delay={500}>
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-gold text-sm tracking-[0.2em] uppercase font-light border border-gold/30 rounded-full px-8 py-3 hover:bg-gold/10 transition-all duration-300"
              >
                {showAll
                  ? t("press.showLess") || "Weniger anzeigen"
                  : t("press.showMore") || `Alle ${pressReviews.length} Rezensionen`}
              </button>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
