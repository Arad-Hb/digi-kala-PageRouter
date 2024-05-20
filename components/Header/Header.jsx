import React, { useState } from 'react'
import styles from './Header.module.css'
import TopBanner from './TopBanner'
import SearchBox from './SearchBox'
import Logo from './Logo'
import NavBar from './NavBar/NavBar'
import Profile from './Profile'
import ShoppingCartIcon from './shoppingCart/ShoppingCartIcon'


const Header = () => {

  return (
    <div className={`${styles.headerContainer}`}>
      <div className={`${styles.topBannerRow}`}><TopBanner/></div>
      <div className={`${styles.searchLogoProfileRow}`}>
        <div className={`${styles.searchLogoContainer}`}>
            <div className={`${styles.logoContainer}`}><Logo/></div>
            <div className={`${styles.searchContainer}`}><SearchBox/></div> 
        </div>
        <div className={`${styles.profileShoppingContainer}`}>
          <div className={`${styles.profileContainer}`}><Profile/></div>
          <div className={`${styles.sepLine}`}></div>
          <div className={`${styles.shoppingBasketContainer}`}><ShoppingCartIcon/></div>
        </div>
      </div>
      <div className={`${styles.navBarRow}`}><NavBar/></div>
    </div>
    
  )

}

export default Header