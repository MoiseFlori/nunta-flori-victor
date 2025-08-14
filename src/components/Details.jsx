import cards from "../styles/Cards.module.css";
import utils from "../styles/Utils.module.css";

export default function Details() {
  return (
    <section id="details" className={utils.section}>
      <div className={utils.container}>
        <h2 className={utils.sectionTitle}>Detalii importante</h2>
        <div className={cards.grid3}>
          <DetailCard
            title="Ceremonie"
            icon="💍"
            lines={[
              "10 octombrie 2025, 15:30",
              " Biserica ”Adormirea Maicii Domnului” ",
              "Gruiu, Călărași",
            ]}
          />
          <DetailCard
            title="Recepție"
            icon="🎉"
            lines={[
              "Invitați: 20:00 – Boarding & Welcome Drinks",
              "Vă rugăm să fiți la bord până la această oră,pentru a decola împreună spre petrecere",
              "Sosirea mirilor: 21:00 – Boarding Gate se închide",
              "Restaurant Briana Ballroom – Sala Hollywood",
              "Bulevardul Basarabia 256, București 030352",
            ]}
          />
          <DetailCard
            title="Dress code"
            icon="🧥"
            lines={[
              "Travel chic",
              "Încălțăminte confortabilă pentru a cuceri ringul de dans",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function DetailCard({ title, icon, lines }) {
  return (
    <article className={cards.card}>
      <div className={cards.cardIcon} aria-hidden>
        {icon}
      </div>
      <h3>{title}</h3>
      {lines?.map((l, i) => (
        <p key={i} className={utils.muted}>
          {l}
        </p>
      ))}
    </article>
  );
}
