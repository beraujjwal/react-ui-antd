// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import Backend from "i18next-xhr-backend";
// import detector from "i18next-browser-languagedetector";

// i18n.use(Backend)
//     .use(detector)
//     .use(initReactI18next)
//     .init({
//         supportedLngs: ["en", "de"],
//         backend: {
//             loadPath: "/locales/{{lng}}/{{ns}}.json",
//         },
//         defaultNS: "common",
//         fallbackLng: ["en", "de"],
//     });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
