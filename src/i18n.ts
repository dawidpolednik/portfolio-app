import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { plMessages } from './messages/messages-pl';
import { enMessages } from './messages/messages-en';

const resources = {
  pl: plMessages,
  en: enMessages,
};

i18n.use(initReactI18next).init({
  lng: 'pl',
  resources,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
});

export default i18n;
