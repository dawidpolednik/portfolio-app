import { FC, useState } from 'react';
import styles from './Home.module.scss';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { Menu } from '../Menu/Menu';
import LandingPage from '../LandingPage/LandingPage';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import { Technologies } from '../Technologies/Technologies';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.bgImage}>
        <LanguageSwitcher />
        <HamburgerMenu isOpen={isMenuOpen} onOpen={() => setIsMenuOpen(true)} />
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <div className={styles.container}>
          <LandingPage />
        </div>
      </div>
      <AboutMe />
      <Education />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
