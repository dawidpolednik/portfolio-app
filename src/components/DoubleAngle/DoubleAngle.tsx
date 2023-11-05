import React, { FC } from 'react';
// import { Link } from 'react-scroll';
import styles from './DoubleAngle.module.scss';
import AngleUpIcon from '~/images/angle-up-icon.svg';
import AngleDownIcon from '~/images/angle-down-icon.svg';
import Link from 'next/link';

interface DoubleAngleProps {
  onUp?: boolean;
  subPage: NavigationSectionName;
}

export const DoubleAngle: FC<DoubleAngleProps> = ({ onUp, subPage }) => (
  // <Link
  //   activeClass='active'
  //   className={styles.doubleAngle}
  //   to={subPage}
  //   spy={true}
  //   smooth={true}
  //   hashSpy={true}
  //   offset={0}
  //   duration={500}
  //   delay={250}
  //   isDynamic={true}
  //   ignoreCancelEvents={false}
  // >
  <Link href={`#${subPage}`} className={styles.doubleAngle}>
    {!onUp ? (
      <AngleDownIcon className={'angle-down'} />
    ) : (
      <AngleUpIcon className={'angle-up'} />
    )}
  </Link>
);
