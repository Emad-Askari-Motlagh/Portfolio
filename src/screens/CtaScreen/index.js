import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./cta.module.scss";

export default function CtaScreen() {
  const { t } = useTranslation();

  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.subtitle")}</p>
        <Link href="/kontakt">
          <a className={styles.button}>
            {t("cta.button")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>
    </section>
  );
}
