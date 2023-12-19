import { FC, useCallback, useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { Menu } from '../Menu/Menu';
import Hero from '@/components/Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import { Technologies } from '../Technologies/Technologies';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const HEADER_HEIGHT = 80;

const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [showFrostEffect, setShowFrostEffect] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setShowFrostEffect(window.scrollY > HEADER_HEIGHT);
  }, []);

  useEffect(() => {
    setShowFrostEffect(window.scrollY > HEADER_HEIGHT);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`${styles.stickyHeader} ${
          showFrostEffect && !isMenuOpen ? styles.frostEffect : ''
        }`}
        style={{
          height: HEADER_HEIGHT,
        }}
      >
        <div className={styles.headerContentWrapper}>
          <LanguageSwitcher isFrostEffect={showFrostEffect} />
          <HamburgerMenu
            isOpen={isMenuOpen}
            onOpen={() => setIsMenuOpen(true)}
          />
        </div>
      </header>
      <div className={styles.bgImageWrapper}>
        <div className={styles.bgImage}>
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          <div className={styles.container}>
            <Hero />
          </div>
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
