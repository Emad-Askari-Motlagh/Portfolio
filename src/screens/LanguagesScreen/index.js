import { useTranslation } from "@/hooks/useTranslation";
import styles from "./languages.module.scss";

const flagMap = {
  Svenska: "🇸🇪",
  Swedish: "🇸🇪",
  Engelska: "🇬🇧",
  English: "🇬🇧",
  Persiska: "🇮🇷",
  Persian: "🇮🇷",
};

export default function LanguagesScreen() {
  const { t } = useTranslation();
  const items = t("languages.items");

  return (
    <section className={`section ${styles.languages}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("languages.title")}</h2>
          <p className="sectionSubtitle">{t("languages.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {Array.isArray(items) &&
            items.map((lang) => (
              <div key={lang.name} className={styles.card}>
                <span className={styles.flag}>{flagMap[lang.name] || "🌐"}</span>
                <h3>{lang.name}</h3>
                <span className={styles.level}>{lang.level}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
