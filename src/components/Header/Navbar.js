import styles from "./header.module.scss";
import WebsiteName from "./WebsiteName";

export default function Navbar({ children }) {
  return (
    <nav className={styles.navbar}>
      <WebsiteName />
      {children}
    </nav>
  );
}
