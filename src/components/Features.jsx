import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

const FeatureCard = ({ iconUrl, iconText}) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="Icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03 flex-col`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
        <p className={`${styles.pText} ${styles.whiteText}`}>DaNeffy has been developed using a cross-platform technology, React Native</p>
      </div>

      <div className={styles.flexWrap}>
        <FeatureCard iconUrl={assets.react} iconText='React Native' />
        <FeatureCard iconUrl={assets.javascript} iconText='Javascript' />
      </div>
    </div>
  )
}

export default Features