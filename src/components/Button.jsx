import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'

const Button =({ assetUrl, link }) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(link, '_blank')}>
      <img src={assetUrl} alt="expo-icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className="text-white text-xs font-normal">View it on</p>
        <p className="text-white text-sm font-bold">Expo store</p>
      </div>
    </div>
  )
}

export default Button