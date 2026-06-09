import { Monitor, Server, Smartphone, GitBranch } from "react-feather";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./skills.module.scss";

export default function SkillsScreen() {
  const { t } = useTranslation();

  const skills = [
    { icon: <Monitor size={28} />, title: t("skills.frontend.title"), description: t("skills.frontend.description") },
    { icon: <Server size={28} />, title: t("skills.backend.title"), description: t("skills.backend.description") },
    { icon: <Smartphone size={28} />, title: t("skills.mobile.title"), description: t("skills.mobile.description") },
    { icon: <GitBranch size={28} />, title: t("skills.practices.title"), description: t("skills.practices.description") },
  ];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("skills.title")}</h2>
          <p className="sectionSubtitle">{t("skills.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.title} className={styles.card}>
              <div className={styles.icon}>{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
