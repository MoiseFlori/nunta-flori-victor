import utils from "../styles/Utils.module.css";

export default function Timeline() {
  return (
    <section id="program" className={`${utils.section} ${utils.alt}`}>
      <div className={utils.container}>
        <h2 className={utils.sectionTitle}>Itinerariu (Program)</h2>
        <ul className={utils.timeline}>
          <li>
            <span>15:10</span> Îmbarcare invitați (sosire la locația ceremoniei)
            - Biserica ”Adormirea Maicii Domnului”, Gruiu, Călărași ✈️
          </li>
          <li>
            <span>15:30</span> Ceremonie oficială – momentul când „zburăm” în
            doi 💒
          </li>
          <li>
            <span>17:00</span> Ședință foto cu mirii – capturăm amintiri de pus
            în pașaportul dragostei 📸
          </li>
          <li>
            <span>20:00</span> Boarding pentru petrecerea de la Briana Ballroom
            – sala Hollywood 🎶🥂
          </li>
          <li>
            <span>21:00</span> Intrarea mirilor – momentul când căpitanul și
            copilotul serii pășesc pe pistă 💃🕺
          </li>
          <li>
            <span>22:00</span> Waffles Bar – escală dulce cu topping-uri exotice
            pentru toți pasagerii 🧇🍓
          </li>
          <li>
            <span>Pe tot parcursul serii</span> &nbsp; Cabină foto – punctul de
            control pentru amintiri amuzante, fără pașaport necesar 📷🎭
          </li>
          <li>
            <span>Până dimineața</span>&nbsp; Ringul de dans – pista oficială de
            aterizare a celor mai tari mișcări 💃🛬🕺
          </li>
        </ul>
      </div>
    </section>
  );
}
