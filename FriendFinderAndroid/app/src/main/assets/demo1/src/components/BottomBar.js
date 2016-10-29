import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import styles from '../styles/BottomBar.css'

export default () => (
  <div className={styles.bottom}>
    <BottomNavigation>
      <BottomNavigationItem
        label="View Portal"
        icon={<IconLocationOn />}/>
      <BottomNavigationItem
        label="My Friends"
        icon={<IconLocationOn />}/>
      <BottomNavigationItem
        label="My Friends"
        icon={<IconLocationOn />}/>
      {/* <BottomNavigationItem /> */}
    </BottomNavigation>
  </div>
)
