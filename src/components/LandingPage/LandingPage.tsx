import React from 'react';
import styles from './LandingPage.module.scss';
import Picture from '~/images/polednik.jpg';
import { socialMediaData } from '../SocialMedia/data';
import SocialMedia from '../SocialMedia/SocialMedia';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <section className={styles.landingGrid} id='home'>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={Picture} alt='person thumbnail' />
      </div>
      <div className={styles.bannerText}>
        <h2 className={styles.bannerName}>Dawid Polednik</h2>
        <h1 className={styles.bannerTitle}>Front End Developer</h1>
        <hr className={styles.bannerHR} />
        <div className={styles.socialLinks}>
          {socialMediaData.map(({ href, type }, idx) => (
            <SocialMedia key={`${type}-${idx}`} href={href} type={type} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
