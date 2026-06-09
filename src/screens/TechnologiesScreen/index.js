import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql, SiFlutter, SiVuedotjs, SiCypress } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./technologies.module.scss";

const technologies = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "React Native", icon: <SiReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "C#", icon: <TbBrandCSharp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Cypress", icon: <SiCypress /> },
];

export default function TechnologiesScreen() {
  const { t } = useTranslation();

  return (
    <section className={`section ${styles.technologies}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("technologies.title")}</h2>
          <p className="sectionSubtitle">{t("technologies.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <div className={styles.icon}>{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
