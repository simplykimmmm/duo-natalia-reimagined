import { useLanguage } from "@/contexts/LanguageContext";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";

interface PressReview {
  quote: Record<string, string>;
  source: string;
  year?: string;
}

const pressReviews: PressReview[] = [
  {
    quote: {
      de: "Ein Duo, das mit seiner außergewöhnlichen musikalischen Harmonie und technischen Brillanz begeistert.",
      en: "A duo that inspires with its extraordinary musical harmony and technical brilliance.",
      fr: "Un duo qui inspire par son harmonie musicale extraordinaire et sa brillance technique.",
    },
    source: "Luxemburger Wort",
    year: "2023",
  },
  {
    quote: {
      de: "Kammermusik auf höchstem Niveau – das Duo Natalia überzeugt mit Leidenschaft, Präzision und einem einzigartigen Zusammenspiel.",
      en: "Chamber music at the highest level — Duo Natalia convinces with passion, precision and a unique interplay.",
      fr: "Musique de chambre au plus haut niveau — le Duo Natalia convainc par sa passion, sa précision et une interaction unique.",
    },
    source: "Klassik Heute",
    year: "2022",
  },
  {
    quote: {
      de: "Die CD 'Magical Russia' ist ein Meisterwerk der Interpretation.",
      en: "The CD 'Magical Russia' is a masterpiece of interpretation.",
      fr: "Le CD 'Magical Russia' est un chef-d'œuvre d'interprétation.",
    },
    source: "Pizzicato Magazine",
    year: "2021",
  },
  {
    quote: {
      de: "Ein Gleichklang des Herzens und des Geistes – selten erlebt man eine solche musikalische Einheit in der Kammermusik.",
      en: "A unity of heart and mind — rarely does one experience such musical oneness in chamber music.",
      fr: "Une unité de cœur et d'esprit — rarement vit-on une telle unité musicale dans la musique de chambre.",
    },
    source: "Tageblatt",
    year: "2020",
  },
];

export default function PressSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="press" className="bg-cream section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-light text-center">
            {t("press.subtitle")}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-forest text-center mb-4">
            {t("press.title")}
          </h2>
        </SectionReveal>

        <GoldDivider className="my-10" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pressReviews.map((review, index) => (
            <SectionReveal key={index} delay={index * 150}>
              <div className="group bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
                <span className="font-serif text-6xl text-gold/30 leading-none select-none group-hover:text-gold/50 transition-colors duration-500">
                  &ldquo;
                </span>

                <blockquote className="mt-2 text-foreground text-base sm:text-lg leading-relaxed font-light italic flex-1">
                  {review.quote[lang] || review.quote.en}
                </blockquote>

                <div className="mt-8 pt-6 border-t border-gold/10">
                  <p className="text-forest font-medium text-sm">
                    {review.source}
                  </p>
                  {review.year && (
                    <p className="text-muted-foreground text-xs font-light mt-1">
                      {review.year}
                    </p>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
