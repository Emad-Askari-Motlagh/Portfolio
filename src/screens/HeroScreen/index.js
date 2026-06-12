import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock } from "react-feather";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./hero.module.scss";

export default function HeroScreen() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>{t("hero.greeting")}</p>
          <h1 className={styles.name}>{t("hero.name")}</h1>
          <h2 className={styles.role}>{t("hero.role")}</h2>
          <p className={styles.tagline}>{t("hero.tagline")}</p>

          <div className={styles.badges}>
            <span className={styles.badge}>
              <Clock size={16} />
              {t("hero.years")}
            </span>
            <span className={styles.badge}>
              <MapPin size={16} />
              {t("hero.location")}
            </span>
          </div>

          <div className={styles.actions}>
            <Link href="/kontakt" className={`${styles.cta} ${styles.primary}`}>
              {t("hero.cta_primary")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="#projects" className={`${styles.cta} ${styles.secondary}`}>
              {t("hero.cta_secondary")}
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/first_page.jpg"
              alt="Emad Askareimotlagh – Fullstackutvecklare"
              width={480}
              height={640}
              className={styles.heroImage}
              priority
            />
          </div>

          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.fileName}>developer.ts</span>
            </div>
            <pre className={styles.codeBlock}>
{`const developer = {
  name: "Emad Askareimotlagh",
  role: "Fullstack Developer",
  skills: [
    "React", "Next.js",
    "Node.js", "TypeScript",
    "MongoDB", "PostgreSQL"
  ],
  passion: "Building quality software"
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
