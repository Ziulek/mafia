import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pl from "./pl.json";

const resources = {
  en: en,
  pl: pl,
};

i18n
  .use(initReactI18next) // bind react-i18next to the i18n instance
  .init({
    compatibilityJSON: "v3", // for older JSON compatibility if needed
    resources,
    lng: "pl", // default language
    fallbackLng: "pl", // fallback language if translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
