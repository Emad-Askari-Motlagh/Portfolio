import styles from "./header.module.scss";

export default function NavItem({ header_label, onClick, icon }) {
  return (
    <li className={styles.navItem}>
      <button type="button" onClick={onClick} className={styles.navButton}>
        {icon}
        <span>{header_label}</span>
      </button>
    </li>
  );
}
