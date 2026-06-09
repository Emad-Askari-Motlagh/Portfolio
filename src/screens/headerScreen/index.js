import { useState } from "react";
import { useRouter } from "next/router";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "react-feather";
import Navbar from "@/components/Header/Navbar";
import NavItem from "@/components/Header/NavItem";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "@/components/Header/header.module.scss";

export default function HeaderScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (router.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: t("navigation.home"), icon: <Home size={18} />, action: () => router.push("/") },
    { label: t("navigation.about"), icon: <User size={18} />, action: () => scrollTo("about") },
    { label: t("navigation.skills"), icon: <Code size={18} />, action: () => scrollTo("skills") },
    { label: t("navigation.projects"), icon: <Briefcase size={18} />, action: () => scrollTo("projects") },
    { label: t("navigation.contact"), icon: <Mail size={18} />, action: () => router.push("/kontakt") },
  ];

  return (
    <Navbar>
      <div className={styles.navContent}>
        <ul className={styles.navItems}>
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              header_label={item.label}
              icon={item.icon}
              onClick={item.action}
            />
          ))}
        </ul>

        <LanguageSwitcher />

        <div className={styles.mobileMenu}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {menuOpen && (
            <div className={styles.mobileDropdown}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={styles.mobileLink}
                  onClick={item.action}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
}
