import { useTranslation } from "@/hooks/useTranslation";
import styles from "./about.module.scss";

export default function AboutScreen() {
  const { t } = useTranslation();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("about.title")}</h2>
          <p className="sectionSubtitle">{t("about.subtitle")}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>Års erfarenhet</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Teknologier</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Språk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
