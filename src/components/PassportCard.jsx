import styles from "../styles/PassportCard.module.css";

export default function PassportCard() {
  return (
    <div className={styles.passport}>
      <div className={styles.cover}>
        <div className={styles.emblem} aria-hidden>
          🌍
        </div>
        <div className={styles.coverText}>
          <div>REPUBLICA DRAGOSTEI</div>
          <strong>PAȘAPORT</strong>
          <div className={styles.small}>FLORI & VICTOR</div>
        </div>
      </div>
      <div className={styles.page}>
        <dl className={styles.dl}>
          <div>
            <dt>Nume</dt>
            <dd>FLORI & VICTOR</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>10.10.2025</dd>
          </div>
          <div>
            <dt>Locul</dt>
            <dd>BUCUREȘTI, ROMÂNIA</dd>
          </div>
          <div>
            <dt>Zbor</dt>
            <dd>2025</dd>
          </div>
        </dl>
        <p className={styles.muted}>
          Prezintă acest pașaport la poarta fericirii ✈️
        </p>
      </div>
    </div>
  );
}
