import utils from "../styles/Utils.module.css";

export default function Location() {
  return (
    <section id="locatie" className={utils.section}>
      <div className={utils.container}>
        <h2 className={utils.sectionTitle}>Locații & hărți</h2>
        {/* Locația Bisericii */}
        <div style={{ marginBottom: "40px" }}>
          <h3 className={utils.center}>Ceremonia</h3>
          <p className={`${utils.center} ${utils.muted}`}>
            Dă click pe pin pentru direcții către biserică.
          </p>
          <div className={utils.mapWrap}>
            <iframe
              title="Google Map Biserica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.7465454999665!2d26.4137447756896!3d44.23287631474757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae21a89db2dfbb%3A0x792d376e8d349c70!2sBiserica%20%E2%80%9DAdormirea%20Maicii%20Domnului%E2%80%9D!5e0!3m2!1sro!2sro!4v1755160813233!5m2!1sro!2sro"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={utils.linkCenter}>
            {/* Google Maps: direcții din locația curentă a utilizatorului */}
            <a
              className={utils.btn + " " + utils.btnGhost}
              href="https://www.google.com/maps/dir/?api=1&destination=44.2328763,26.4163197&travelmode=driving"
              target="_blank"
              rel="noreferrer"
            >
              Deschide în Maps
            </a>
            &nbsp; | &nbsp;
            {/* Waze: navigație directă către coordonate */}
            <a
              className={utils.btn + " " + utils.btnGhost}
              href="https://waze.com/ul?ll=44.2328763,26.4163197&navigate=yes"
              target="_blank"
              rel="noreferrer"
            >
              Deschide în Waze
            </a>
          </p>
        </div>

        {/* Locația Restaurantului */}
        <div>
          <h3 className={utils.center}>Party Destination</h3>
          <p className={`${utils.center} ${utils.muted}`}>
            Dă click pe pin pentru direcții către restaurant.
          </p>
          <div className={utils.mapWrap}>
            <iframe
              title="Google Map Restaurant"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.507413477085!2d26.17712947645738!3d44.432554671073756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f99177a4075b%3A0x913d527b10cb74e7!2sBriana%20Ballroom!5e0!3m2!1sro!2sro!4v1691760483447!5m2!1sro!2sro"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={utils.linkCenter}>
            <a
              className={utils.btn + " " + utils.btnGhost}
              href="https://maps.app.goo.gl/FzNb133fzG94WxYw9"
              target="_blank"
              rel="noreferrer"
            >
              Deschide în Maps
            </a>
            &nbsp; | &nbsp;
            <a
              className={utils.btn + " " + utils.btnGhost}
              href="https://waze.com/ul?ll=44.4325547,26.1797047&navigate=yes"
              target="_blank"
              rel="noreferrer"
            >
              Deschide în Waze
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
