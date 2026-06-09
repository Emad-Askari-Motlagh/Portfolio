import Link from "next/link";
import styles from "./header.module.scss";

export default function WebsiteName() {
  return (
    <Link href="/">
      <a className={styles.brand}>
        <span className={styles.brandInitials}>EA</span>
        <span className={styles.brandName}>Emad Askari</span>
      </a>
    </Link>
  );
}
