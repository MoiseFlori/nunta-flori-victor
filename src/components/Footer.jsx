import layout from "../styles/Layouts.module.css";

export default function Footer() {
  return (
    <footer className={layout.footer}>
      <div className={`${layout.container} ${layout.footerInner}`}>
        <div className={layout.footerBrand}>
          <span className={layout.footerIcon} aria-hidden>
            💍
          </span>
          <span>© 2025 Flori & Victor </span>
          <span>· Cu drag, vă așteptăm!</span>
        </div>
        <nav className={layout.footLinks}>
          <a href="#details">Detalii</a>
          <a href="#program">Program</a>
          <a href="#locatie">Locație</a>
        </nav>
      </div>
    </footer>
  );
}
