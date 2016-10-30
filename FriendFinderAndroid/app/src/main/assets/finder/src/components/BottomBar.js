import React from 'react';
import { BottomNavigation, BottomNavigationItem, SvgIcon } from 'material-ui';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import styles from '../styles/BottomBar.css'
import {MapsMap,ImageCamera,SocialPeople} from 'material-ui/svg-icons'


export default (props) => (
  <div className={styles.main}>
    <BottomNavigation selectedIndex={props.index}>
      <BottomNavigationItem
        label="Map"
        icon={<MapsMap />}
        onTouchTap={() => props.setIndex(0)}
      />

      <BottomNavigationItem
        label="Camera"
        icon={<ImageCamera />}
        onTouchTap={() => props.setIndex(1)}
      />

      <BottomNavigationItem
        label="Friends"
        icon={<SocialPeople />}
        onTouchTap={() => props.setIndex(2)}
      />

    </BottomNavigation>
  </div>
)
