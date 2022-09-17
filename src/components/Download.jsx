import React from 'react'

import assets from '../assets';
import styles from '../styles/Global'

const Download = () => {
  return (
    <div className={styles.section}>
      <div className={`${styles.subSection} text-center flex-col`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get source code on Github</p>
        </div>
        <button className={styles.btnPrimary}>Download</button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="Download" />
        </div>
      </div>

    </div>
  )
}

export default Download