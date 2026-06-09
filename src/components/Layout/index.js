import Header from "@/screens/headerScreen";
import Footer from "@/components/Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.cont}>
      <div className={styles.background}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
