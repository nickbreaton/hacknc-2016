import React from 'react';
import { BottomNavigation, BottomNavigationItem, FontIcon } from 'material-ui';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import styles from '../styles/BottomBar.css'

export default (props) => (
  <div className={styles.main}>
    <BottomNavigation selectedIndex={props.index}>
      <BottomNavigationItem
        label="Map"
        icon={<FontIcon className="material-icons">map</FontIcon>}
        onTouchTap={() => props.setIndex(0)}
      />

      <BottomNavigationItem
        label="Camera"
        icon={<FontIcon className="material-icons">camera</FontIcon>}
        onTouchTap={() => props.setIndex(1)}
      />

      <BottomNavigationItem
        label="Friends"
        icon={<FontIcon className="material-icons">people</FontIcon>}
        onTouchTap={() => props.setIndex(2)}
      />

    </BottomNavigation>
  </div>
)
