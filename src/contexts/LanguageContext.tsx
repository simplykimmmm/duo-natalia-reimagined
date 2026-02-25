import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLang(): Language {
  const stored = localStorage.getItem("duo-natalia-lang");
  if (stored === "de" || stored === "en" || stored === "fr") return stored;
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  if (browserLang === "de" || browserLang === "en" || browserLang === "fr") return browserLang;
  return "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("duo-natalia-lang", newLang);
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback(
    (key: string) => {
      const val = translations[lang][key];
      if (val !== undefined) return val;
      const enVal = translations.en[key];
      if (enVal !== undefined) return enVal;
      return key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export type { Language };
