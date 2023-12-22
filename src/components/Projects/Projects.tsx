import React, { useMemo } from 'react';
import Project from './Project';
import styles from './Projects.module.scss';
import { useTranslation } from 'next-i18next';
import { AnimatedText } from '@/components/AnimatedText/AnimatedText';
import { Project as IProject } from '@/models/Project';

const Projects = () => {
  const { t } = useTranslation();

  const projects: IProject[] = useMemo(
    () => [
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
        image: '/images/listingCode.png',
        title: t('projectsSection.detectLabelsComparison.header'),
        description: t('projectsSection.detectLabelsComparison.description'),
        tools:
          'Node.js, Gulp, ExcelJS , Microsoft Excel, PostMan, Lodash, GitKraken',
        gitHub: 'https://github.com/dawidpolednik/Detect-Labels-Comparison',
      },
      {
        id: 3,
        image: '/images/currencyConverter.png',
        title: t('projectsSection.currencyConverter.header'),
        description: t('projectsSection.currencyConverter.description'),
        tools: 'React, Redux, SASS(SCSS) , ES6, MaterialUI, GitKraken, ',
        gitHub: 'https://github.com/dawidpolednik/currency-converter',
        liveDemo: 'https://converter-currency-app.herokuapp.com/',
      },
      {
        id: 4,
        image: '/images/citiesSearcher.png',
        title: t('projectsSection.citiesSearcher.header'),
        description: t('projectsSection.citiesSearcher.description'),
        tools: 'React, Redux, SASS(SCSS) , ES6, MaterialUI, GitKraken, ',
        gitHub: 'https://github.com/dawidpolednik/cities-searcher',
        liveDemo: 'https://cities-searcher.herokuapp.com/',
      },
      {
        id: 5,
        image: '/images/among-us-game.png',
        title: t('projectsSection.amongUs.header'),
        description: t('projectsSection.amongUs.description'),
        tools: 'Vanilla JS, ES6, TypeScript, SASS(SCSS) , Parcel',
        gitHub: 'https://github.com/dawidpolednik/AmongUs',
      },
    ],
    [t],
  );

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
        <AnimatedText
          text={t('projectsSection.header')}
          className={styles.projectsTitle}
          el='h2'
        />
      </div>
      <div className={styles.projectsBackground}>
        <div className={styles.projectsSection}>{renderProjects}</div>
      </div>
    </section>
  );
};
export default Projects;
