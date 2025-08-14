import styles from "../styles/Layouts.module.css";

const ICON = import.meta.env.BASE_URL + "wedding.png";
export default function Header() {
  return (
    <header className={styles.nav}>
      <div className={styles.container + " " + styles.navInner}>
        <div className={styles.brand}>
          <img
            src={ICON}
            alt="Wedding Icon"
            style={{
              height: "28px",
              width: "28px",
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
          Wedding Passport
        </div>
        <nav className={styles.navLinks}>
          <a className={styles.link} href="#details">
            Detalii
          </a>
          <a className={styles.link} href="#program">
            Program
          </a>
          <a className={styles.link} href="#locatie">
            Locație
          </a>
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
