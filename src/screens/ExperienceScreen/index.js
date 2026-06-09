import { useTranslation } from "@/hooks/useTranslation";
import styles from "./experience.module.scss";

export default function ExperienceScreen() {
  const { t } = useTranslation();
  const items = t("experience.items");

  return (
    <section className={`section ${styles.experience}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("experience.title")}</h2>
          <p className="sectionSubtitle">{t("experience.subtitle")}</p>
        </div>

        <div className={styles.timeline}>
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.marker}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
