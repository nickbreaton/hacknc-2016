import React from 'react';
import { BottomNavigation, BottomNavigationItem, FontIcon } from 'material-ui';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import styles from '../styles/BottomBar.css'

export default (props) => (
  <div className={styles.main}>
    <BottomNavigation selectedIndex={1}>
      <BottomNavigationItem
        label="Map"
        icon={<FontIcon className="material-icons">map</FontIcon>}
      />

      <BottomNavigationItem
        label="Camera"
        icon={<FontIcon className="material-icons">camera</FontIcon>}
      />

      <BottomNavigationItem
        label="Friends"
        icon={<FontIcon className="material-icons">people</FontIcon>}
      />

    </BottomNavigation>
  </div>
)
