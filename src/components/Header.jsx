import styles from "../styles/Layouts.module.css";

export default function Header() {
  return (
    <header className={styles.nav}>
      <div className={styles.container + " " + styles.navInner}>
        <div className={styles.brand}>Wedding Passport</div>
        <nav className={styles.navLinks}>
          <a href="#details">Detalii</a>
          <a href="#program">Program</a>
          <a href="#locatie">Locație</a>
          <a
            className={styles.btn + " " + styles.btnPrimary}
            href="https://forms.gle/Mwhu1WYpM6jQvEM49"
            target="_blank"
            rel="noreferrer"
          >
            Confirmă prezența
          </a>
        </nav>
      </div>
    </header>
  );
}
