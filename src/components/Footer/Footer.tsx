import React from 'react';
import styles from './Footer.module.scss';
import { socialMediaData } from '../SocialMedia/data';
import SocialLinks from '../SocialMedia/SocialMedia';
import { useTranslation } from 'next-i18next';
import EmailIcon from '~/images/email-icon.svg';
import PhoneIcon from '~/images/phone-icon.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <div className={styles.contentWidth}>
        <div className={styles.infoContainer}>
          <h4 className={styles.contactTitle}>{t('footerSection.contact')}</h4>
          <div className={styles.phoneContainer}>
            <p className={styles.contactContent}>
              <PhoneIcon />
              &nbsp;&nbsp;&nbsp; {t('footerSection.phone')}: +48 530 921 475
            </p>
          </div>

          <div className={styles.mailContainer}>
            <p className={styles.contactContent}>
              <EmailIcon />
              &nbsp;&nbsp;&nbsp; E-mail: dawid.polednik@gmail.com
            </p>
          </div>

          <div className={styles.buttonsContainer}>
            <a
              href={'/files/CV(pl).pdf'}
              download='DawidPolednik(CV-PL)'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ButtonCV}
            >
              CV PL
            </a>
            <a
              href={'/files/CV(ang).pdf'}
              download='DawidPolednik(CV-ANG)'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.ButtonCV}
            >
              CV ANG
            </a>
          </div>
        </div>
        <div className={styles.socialLinks}>
          {socialMediaData.map(({ href, type }, idx) => (
            <SocialLinks key={`${type}-${idx}}`} href={href} type={type} />
          ))}
        </div>
        <p className={styles.copyright}>&#169; 2019-2023 Dawid Polednik</p>
      </div>
    </footer>
  );
};

export default Footer;
