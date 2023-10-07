// 'use client';
import { FC } from 'react';
import styles from './page.module.scss';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { HamburgerMenu } from '@/components/HamburgerMenu/HamburgerMenu';
import { Menu } from '@/components/Menu/Menu';
import LandingPage from '@/components/LandingPage/LandingPage';
import AboutMe from '@/components/AboutMe/AboutMe';
import Education from '@/components/Education/Education';
import { Technologies } from '@/components/Technologies/Technologies';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import { LocaleType, getDictionary } from './dictionaries';

export type LanguageOptions = 'pl' | 'en';

const App: FC = async () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const router = useRouter();

  //   console.log('locale :>> ', locale);

  //   const dict = await getDictionary(locale as LocaleType);

  //   console.log('dict :>> ', dict);

  //   const handleChangeLanguage = (lng: LanguageOptions) => {
  //     i18n.changeLanguage(lng);
  //   };

  return (
    <>
      <div className={styles.bgImage}>
        {/* <LanguageSwitcher changeLanguage={handleChangeLanguage} /> */}
        {/* <HamburgerMenu isOpen={isMenuOpen} onOpen={() => setIsMenuOpen(true)} />
        <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
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
