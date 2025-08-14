import cards from "../styles/Cards.module.css";
import utils from "../styles/Utils.module.css";

export default function InfoGrid() {
  return (
    <section className={utils.section}>
      <div className={utils.container + " " + cards.grid3}>
        <InfoCard
          title="Mâncare"
          body="Bucurați-vă de preparate delicioase pregătite special pentru voi."
          icon="🍽️"
        />
        <InfoCard
          title="Waffles Bar"
          body="Un colț dulce cu waffles proaspete și topping-uri variate."
          icon="🧇"
        />
        <InfoCard
          title="Cadouri"
          body="Prezența ta este cel mai frumos cadou. Dacă dorești, o contribuție în cufărul de călătorii."
          icon="🎁"
        />
        <InfoCard
          title="Hashtag"
          body="#FloriSiVictor2025 — etichetează pozele tale!"
          icon="#️⃣"
        />
      </div>
    </section>
  );
}

function InfoCard({ title, body, icon }) {
  return (
    <article className={cards.card}>
      <div className={cards.cardIcon} aria-hidden>
        {icon}
      </div>
      <h3>{title}</h3>
      <p className={utils.muted}>{body}</p>
    </article>
  );
}
