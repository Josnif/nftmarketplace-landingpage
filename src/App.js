import React from 'react'
import { SectionWrap, Features, Download } from './components'
import assets from './assets'
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrap 
        title="Your own store of Niffy NFT. Start Selling and Growing."
        description="Buy, sell, collect NFTs, exchange and earn Crypto. Join 25+ million people using DaNeffy marketplace."
        mockupImg={assets.homeHero}
        showBtn
        banner="banner"
      />
      <SectionWrap 
        title="Smart User Interface Marketplace."
        description="Experience the rich UI experience of DaNeffy marketplace."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrap 
        title="Deployment"
        description="DaNeffy is built using Expo which runs natively on all users' device. You can easily the app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrap 
        title="Creative way to showcase your store"
        description="The app contains two screens. The first screen lists all NFT while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="bg-primary text-center flex-col px-4 py-2 justify-center items-center banner04">
        <p className={`${styles.whiteText} ${styles.pText}`}>
          Made with love by {" "}
          <span className="bold">Joseph <a href='malito:jotwebstudio@gmail.com'>(Jotweb Studio)</a></span>
        </p>
      </div>
    </>
  );
}

export default App;
