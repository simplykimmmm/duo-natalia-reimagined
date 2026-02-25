import { useLanguage } from "@/contexts/LanguageContext";
import { albums } from "@/lib/discography";
import SectionReveal from "@/components/SectionReveal";
import GoldDivider from "@/components/GoldDivider";
import { ExternalLink } from "lucide-react";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function AppleMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.165a10.16 10.16 0 00-1.564-.13C17.51.012 16.884 0 16.258 0H7.744c-.628 0-1.254.012-1.88.035-.527.024-1.05.073-1.564.13A5.022 5.022 0 002.426.891C1.308 1.624.563 2.624.246 3.934a9.23 9.23 0 00-.24 2.19C.003 6.75 0 7.376 0 8.003v7.994c0 .627.003 1.253.006 1.879a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.874.726c.514.057 1.037.106 1.564.13.626.023 1.252.035 1.88.035h8.514c.628 0 1.254-.012 1.88-.035.527-.024 1.05-.073 1.564-.13a5.022 5.022 0 001.874-.726c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 00.24-2.19c.003-.626.006-1.252.006-1.879V8.003c0-.627-.003-1.253-.006-1.879zM17.5 17.5c0 .5-.4.9-.9.9H7.4c-.5 0-.9-.4-.9-.9V6.5c0-.5.4-.9.9-.9h.6v7.2l2.4-1.4 2.4 1.4V5.6h4.8c.5 0 .9.4.9.9v11z"/>
    </svg>
  );
}

export default function DiscographySection() {
  const { t } = useLanguage();

  return (
    <section id="discography" className="bg-forest text-white relative overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-light text-center">
              Albums
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white text-center mb-4">
              {t("disco.title")}
            </h2>
          </SectionReveal>

          <GoldDivider className="my-10" />

          <div className="space-y-20 mt-16">
            {albums.map((album, index) => (
              <SectionReveal key={album.id} delay={index * 150}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <iframe
                      src={`https://open.spotify.com/embed/album/${album.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-xl"
                      title={`${album.title} on Spotify`}
                    />
                  </div>

                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                      {album.title}
                    </h3>
                    <p className="text-white/50 text-sm font-light mb-1">
                      {album.subtitle}
                    </p>
                    <p className="text-gold text-sm font-light mb-1">
                      {album.performers}
                    </p>
                    <p className="text-white/30 text-xs font-light mb-8">
                      {album.label}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {album.links.spotify && (
                        <a
                          href={album.links.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
                        >
                          <SpotifyIcon />
                          Spotify
                        </a>
                      )}
                      {album.links.apple && (
                        <a
                          href={album.links.apple}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white/10 hover:border-gold/50 transition-all duration-300"
                        >
                          <AppleMusicIcon />
                          Apple Music
                        </a>
                      )}
                      {album.links.shop && (
                        <a
                          href={album.links.shop}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-white text-sm hover:bg-gold-light transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("disco.shop")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {index < albums.length - 1 && (
                  <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
