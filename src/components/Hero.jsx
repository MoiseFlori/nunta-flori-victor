import hero from "../styles/Hero.module.css";
import utils from "../styles/Utils.module.css";
import PassportCard from "./PassportCard";

const PROFILE = import.meta.env.BASE_URL + "hero-bg.jpg";

export default function Hero() {
  return (
    <section className={hero.hero}>
      <div className={utils.container + " " + hero.grid}>
        <div className={hero.content}>
          <div className={hero.aboutImage}>
            <div className={hero.glowRing}></div>
            <img src={PROFILE} alt="Poza cu noi" className={hero.profileImg} />
          </div>
    
          <h1 className={hero.title}>Flori & Victor</h1>
          <p className={hero.subtitle}>
            10 octombrie 2025 · București, ROMÂNIA
          </p>
          <div className={utils.row}>
            <a
              className={`${utils.btn} ${utils.btnPrimary}`}
              href="https://forms.gle/Mwhu1WYpM6jQvEM49"
              target="_blank"
              rel="noreferrer"
            >
              Confirmă prezența
            </a>
            <a className={`${utils.btn} ${utils.btnGhost}`} href="#details">
              Vezi detalii
            </a>
          </div>
        </div>
        <PassportCard />
      </div>
      <div className={hero.stamps} aria-hidden>
        <span>✈️</span>
        <span>🧭</span>
        <span>🗺️</span>
        <span>🧳</span>
      </div>
    </section>
  );
}
