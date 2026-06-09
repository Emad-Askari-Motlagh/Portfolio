import { useTranslation } from "@/hooks/useTranslation";
import styles from "../Header/header.module.scss";

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useTranslation();

  return (
    <div className={styles.languageSwitcher}>
      <button
        type="button"
        className={`${styles.langButton} ${locale === "sv" ? styles.active : ""}`}
        onClick={() => changeLanguage("sv")}
      >
        SV
      </button>
      <button
        type="button"
        className={`${styles.langButton} ${locale === "en" ? styles.active : ""}`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}
