import {createContext, ReactNode, useState} from "react";
import {useTranslation} from "react-i18next";

export const LanguageContext = createContext({ language: "en", changeLanguage: (_lang: string) => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language || "en");

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
