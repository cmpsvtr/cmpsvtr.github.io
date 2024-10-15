import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './locale/en.json';
import ptJSON from './locale/pt.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { ...enJSON },
      pt: { ...ptJSON },
    },
    lng: 'en',
  });
