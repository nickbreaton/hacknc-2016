import React from 'react';
import Camera from './Camera';
import FriendsList from './FriendsList';
import Map from './Map';
import styles from '../styles/WideView.css';

const views = [Map, Camera, FriendsList];

const WideView = (props) => (
  <div
    style={{
      height: '100vh',
      width: `${(window.innerWidth * views.length)}px`,
      position: 'absolute',
      left: `${(-props.index * window.innerWidth)}px`
    }}
    className={styles.main}
  >
    {views.map((View, i) => {
      return <div key={i} style={{
        display: 'inline-block',
        width: `${window.innerWidth}px`,
        position: 'absolute',
        left: `${window.innerWidth * i}px`,
        top: 0
      }}>
        <View clearMessage={props.clearMessage} message={props.message} messageAuthor={props.messageAuthor} width={`${window.innerWidth}px`} users={props.users} signIn={props.signIn} track={props.track} user={props.user}/>
      </div>
    })}
  </div>
)

export default WideView;
