import { MemoryRouter, Match } from 'react-router';
import BottomBar from './BottomBar';
import Camera from './Camera';
import FriendsList from './FriendsList';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      current: 0
    }
  }

  render() {
    return (
      <div>
        <Camera/>
        {/* <FriendsList/> */}
        <BottomBar/>
      </div>
    )
  }
}
