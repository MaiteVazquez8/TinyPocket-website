import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import GameModes from './components/GameModes.jsx';
import Hardware from './components/Hardware.jsx';
import Technologies from './components/Technologies.jsx';
import ProjectLinks from './components/ProjectLinks.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';
import { useI18n } from './i18n/I18nProvider.jsx';

export default function App() {
  const { t } = useI18n();

  return (
    <>
      <a className="skip-link" href="#main">
        {t('meta.skipToContent')}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Features />
        <GameModes />
        <Hardware />
        <Technologies />
        <ProjectLinks />
        <Closing />
      </main>

      <Footer />
    </>
  );
}
