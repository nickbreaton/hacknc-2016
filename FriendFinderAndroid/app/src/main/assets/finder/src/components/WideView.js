import React from 'react';
import Camera from './Camera';
import FriendsList from './FriendsList';
import Map from './Map';

const views = [Map, Camera, FriendsList];

const WideView = (props) => (
  <div style={{
    height: '100vh',
    width: `${(window.innerWidth * views.length)}px`,
    position: 'absolute',
    left: `${(props.index * window.innerWidth)}px`
  }}>
    {views.map((View, i) => {
      return <View key={i} width={`${window.innerWidth}px`}/>
    })}
  </div>
)

export default WideView;
