import React, { FC, useMemo, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";
import { technologiesLoader } from "../../mocks/fixtures";
import { DoubleAngle } from "../DoubleAngle/DoubleAngle";
import styles from "./Technologies.module.scss";

export const Technologies: FC = () => {
  const [images] = useState(technologiesLoader());

  const { t } = useTranslation();

  const renderTechnologiesSection = useMemo(
    () =>
      images.map(({ id, image, title, description }) => (
        <ScrollAnimation
          key={id}
          animateIn="fadeInLeftBig"
          duration={1}
          initiallyVisible={false}
          animateOnce
        >
          <div className={styles.imgSection}>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={image} alt={description} />
            </div>
            <p className={styles.imgHeader}>{title}</p>
          </div>
        </ScrollAnimation>
      )),
    [images]
  );

  return (
    <section className={styles.container} id="technologies">
      <div className={styles.technologiesHeader}>
        <h2 className={styles.technologiesTitle}>
          {t("technologiesSection.header")}
        </h2>
      </div>
      <div className={styles.technologiesBackground}>
        <div className={styles.technologiesSection}>
          {renderTechnologiesSection}
        </div>
        <div className={styles.angleContainer}>
          <DoubleAngle subPage="projects" />
          <DoubleAngle onUp={true} subPage="education" />
        </div>
      </div>
    </section>
  );
};
