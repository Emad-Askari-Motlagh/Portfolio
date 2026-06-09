import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import svTranslations from "../../locales/sv/common.json";

export const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const [translations, setTranslations] = useState(svTranslations);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch {
        setTranslations(svTranslations);
      }
    };

    if (locale) {
      loadTranslations();
    }
  }, [locale]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value ?? key;
  };

  const changeLanguage = (newLocale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-locale", newLocale);
    }
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return { t, locale, changeLanguage };
};
