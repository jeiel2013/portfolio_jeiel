import { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // Português é sempre o idioma inicial ao carregar o site — não é lembrado
  // entre sessões, então cada visita nova começa em PT.
  const [language, setLanguage] = useState("pt");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage precisa ser usado dentro de um LanguageProvider");
  }
  return context;
}
