import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'
import Button from '../components/Button'

const SectionWrap = ({ title, description, mockupImg, showBtn, banner, reverse }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} ${reverse ? 'fadeRightMini' : 'fadeLeftMini'}`}>
          <h1 className={`
            ${styles.h1Text} 
            ${reverse ? styles.blackText : styles.whiteText}
            ${reverse ? styles.textRight : styles.textLeft}
          `}>
            {title}
          </h1>
          <p className={`
            ${styles.descriptionText} 
            ${reverse ? styles.blackText : styles.whiteText}
            ${reverse ? styles.textRight : styles.textLeft}
          `}>
            {description}
          </p>
          {showBtn && (
            <Button 
              assetUrl={assets.expo}
              link="https://expo.dev/@josnif/nftMarketPlace?release-channel=default"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0 ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}`}>
          <img 
            src={mockupImg} 
            alt="mockup" 
            className={styles.sectionImg}
          />
        </div>

      </div>
    </div>
  )
}

export default SectionWrap