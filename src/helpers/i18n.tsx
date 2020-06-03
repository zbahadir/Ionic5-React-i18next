import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
/*
const defaultLng = 'tr';
let lng = defaultLng;
*/

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    //lng,
    debug: true,
    fallbackLng: 'en',    
    backend: {
      loadPath: '/assets/i18n/{{lng}}/{{ns}}.json',
      allowMultiLoading: true
    },
  });

export default i18n;
