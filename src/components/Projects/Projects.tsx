import React, { useMemo } from 'react';
import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import Project from './Project';
import styles from './Projects.module.scss';
import { useTranslation } from 'next-i18next';
import DelfinagramImage from '~/images/delfinagram.png';
import ListingCodeImage from '~/images/code.png';
import CurrencyConverterImage from '~/images/currencyConverter.png';
import CitiesSearcherImage from '~/images/citiesSearcher.png';
import AmongUsImage from '~/images/amongUs.png';

const Projects = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      image: '/images/delfinagram.png',
      title: t('projectsSection.delfinagram.header'),
      description: t('projectsSection.delfinagram.description'),
      tools:
        'React, Redux, React-Router-DOM, SASS(SCSS), MaterialUI, GitKraken, PostMan',
      gitHub: 'https://github.com/dawidpolednik/DelfinagramAPP',
    },
    {
      id: 2,
      image: ListingCodeImage.src,
      title: t('projectsSection.detectLabelsComparison.header'),
      description: t('projectsSection.detectLabelsComparison.description'),
      tools:
        'Node.js, Gulp, ExcelJS , Microsoft Excel, PostMan, Lodash, GitKraken',
      gitHub: 'https://github.com/dawidpolednik/Detect-Labels-Comparison',
    },
    {
      id: 3,
      image: CurrencyConverterImage.src,
      title: t('projectsSection.currencyConverter.header'),
      description: t('projectsSection.currencyConverter.description'),
      tools: 'React, Redux, SASS(SCSS) , ES6, MaterialUI, GitKraken, ',
      gitHub: 'https://github.com/dawidpolednik/currency-converter',
      liveDemo: 'https://converter-currency-app.herokuapp.com/',
    },
    {
      id: 4,
      image: CitiesSearcherImage.src,
      title: t('projectsSection.citiesSearcher.header'),
      description: t('projectsSection.citiesSearcher.description'),
      tools: 'React, Redux, SASS(SCSS) , ES6, MaterialUI, GitKraken, ',
      gitHub: 'https://github.com/dawidpolednik/cities-searcher',
      liveDemo: 'https://cities-searcher.herokuapp.com/',
    },
    {
      id: 5,
      image: AmongUsImage.src,
      title: t('projectsSection.amongUs.header'),
      description: t('projectsSection.amongUs.description'),
      tools: 'Vanilla JS, ES6, TypeScript, SASS(SCSS) , Parcel',
      gitHub: 'https://github.com/dawidpolednik/AmongUs',
    },
  ];

  const renderProjects = useMemo(
    () =>
      projects.map(
        ({ id, image, title, description, tools, gitHub, liveDemo }) => (
          <Project
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            tools={tools}
            gitHub={gitHub}
            liveDemo={liveDemo}
          />
        ),
      ),
    [projects],
  );

  return (
    <section className={styles.container} id='projects'>
      <div className={styles.projectsHeader}>
        <h2 className={styles.projectsTitle}>{t('projectsSection.header')}</h2>
      </div>
      <div className={styles.projectsBackground}>
        <div className={styles.projectsSection}>{renderProjects}</div>
      </div>
      <div className={styles.angleContainer}>
        <DoubleAngle subPage='contact' />
        <DoubleAngle onUp={true} subPage='technologies' />
      </div>
    </section>
  );
};
export default Projects;
