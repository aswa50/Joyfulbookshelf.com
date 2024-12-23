import { useCallback } from 'react';
import { Language } from '../types';
import * as enTranslations from '../data/translations/en';
import * as deTranslations from '../data/translations/de';
import * as frTranslations from '../data/translations/fr';
import * as esTranslations from '../data/translations/es';
import * as itTranslations from '../data/translations/it';

const translations = {
  en: enTranslations.translations,
  de: deTranslations.translations,
  fr: frTranslations.translations,
  es: esTranslations.translations,
  it: itTranslations.translations,
};

export const useTranslations = (language: Language) => {
  const t = useCallback(
    (key: string) => {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    [language]
  );

  return { t };
};