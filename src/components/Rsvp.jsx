import utils from "../styles/Utils.module.css";

export default function Rsvp() {
  return (
    <section className={`${utils.section} ${utils.alt}`}>
      <div className={`${utils.container} ${utils.center}`}>
        <h2 className={utils.sectionTitle}>Confirmare</h2>
        <p>
          Te rugăm să confirmi până la <strong>20 septembrie 2025</strong>.
        </p>
        <a
          className={`${utils.btn} ${utils.btnPrimary} ${utils.btnLg}`}
          href="https://forms.gle/Mwhu1WYpM6jQvEM49"
          target="_blank"
          rel="noreferrer"
        >
          Completează formularul
        </a>
        <p className={utils.muted} style={{ marginTop: 12 }}>
          Durează sub 1 minut. Mulțumim! ❤️
        </p>
      </div>
    </section>
  );
}
