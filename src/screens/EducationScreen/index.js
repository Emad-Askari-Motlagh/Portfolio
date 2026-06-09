import { BookOpen } from "react-feather";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./education.module.scss";

export default function EducationScreen() {
  const { t } = useTranslation();
  const items = t("education.items");

  return (
    <section className={`section ${styles.education}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("education.title")}</h2>
          <p className="sectionSubtitle">{t("education.subtitle")}</p>
        </div>

        <div className={styles.list}>
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <BookOpen size={24} />
                </div>
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3>{item.degree}</h3>
                    {item.period && <span className={styles.period}>{item.period}</span>}
                  </div>
                  <p className={styles.school}>{item.school}</p>
                  {item.description && <p className={styles.description}>{item.description}</p>}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
