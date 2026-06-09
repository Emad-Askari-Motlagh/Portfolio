import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.profile}>
            <div className={styles.avatar}>EA</div>
            <h2 className={styles.name}>Emad Askareimotlagh</h2>
            <p className={styles.role}>Fullstackutvecklare</p>
            <p className={styles.description}>{t("footer.description")}</p>
            <div className={styles.contactInfo}>
              <a href="mailto:emad.askari@gmail.com" className={styles.contactItem}>
                <FaEnvelope />
                <span>emad.askari@gmail.com</span>
              </a>
              <a href="tel:+46730565960" className={styles.contactItem}>
                <FaPhone />
                <span>073-056 59 60</span>
              </a>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt />
                <span>Göteborg, Sverige</span>
              </div>
            </div>
          </div>

          <div className={styles.linksSection}>
            <h3>{t("footer.quick_links")}</h3>
            <ul>
              <li><Link href="/#about">Om mig</Link></li>
              <li><Link href="/#skills">Kompetens</Link></li>
              <li><Link href="/#projects">Projekt</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3>{t("footer.contact")}</h3>
            <div className={styles.social}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:emad.askari@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {year} Emad Askareimotlagh. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
