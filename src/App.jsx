import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Timeline from "./components/Timeline";
import Location from "./components/Location";
import Rsvp from "./components/Rsvp";
import InfoGrid from "./components/InfoGrid";
import layout from "./styles/Layouts.module.css";
import Footer from "./components/Footer";

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
 
        <Footer />

    </div>
  );
}
