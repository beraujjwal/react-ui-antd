import { Dates } from '../constants/Dates';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const localLanguage = localStorage.getItem('lng') || 'en';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    async (locale) => {
      Dates.setLocale(locale);
      localStorage.setItem('lng', locale);
      await i18n.changeLanguage(locale);
    },
    [i18n],
  );

  useEffect(() => {
    localLanguage && handleChangeLanguage(localLanguage);
  }, [handleChangeLanguage]);

  return useMemo(
    () => ({ language: i18n.language, setLanguage: handleChangeLanguage }),
    [handleChangeLanguage, i18n.language],
  );
};
