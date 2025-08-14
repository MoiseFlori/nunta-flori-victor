import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Timeline from "./components/Timeline";
import Location from "./components/Location";
import Rsvp from "./components/Rsvp";
import InfoGrid from "./components/InfoGrid";
import layout from "./styles/Layouts.module.css";

export default function App() {
  return (
    <div className={layout.page}>
      <Header />
      <main>
        <Hero />
        <Details />
        <Timeline />
        <Location />
        <Rsvp />
        <InfoGrid />
      </main>
      <footer className={layout.footer}>
        <div className={layout.container}>
          <div>© 2025 Flori & Victor · Cu drag, vă așteptăm!</div>
          <nav className={layout.footLinks}>
            <a href="#details">Detalii</a>
            <a href="#program">Program</a>
            <a href="#locatie">Locație</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
