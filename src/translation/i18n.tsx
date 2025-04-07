import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import EN_TRANSLATION from "./en.json";
import VI_TRANSLATION from "./vi.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: EN_TRANSLATION
            },
            vn: {
                translation: VI_TRANSLATION
            }
        },
        fallbackLng: "en",
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false
        }
    });

i18n.languages = ["vn", "en"];

export default i18n;