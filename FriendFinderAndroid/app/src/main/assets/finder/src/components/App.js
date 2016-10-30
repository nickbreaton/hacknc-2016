import { MemoryRouter, Match } from 'react-router';
import BottomBar from './BottomBar';
import Camera from './Camera';
import FriendsList from './FriendsList';
import Map from './Map';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      index: 1
    }
  }

  setIndex = index => {
    this.setState({
      index
    })
  }

  render() {
    return (
      <div>
        { this.state.index == 0 ? <Map/> : null }
        { this.state.index == 1 ? <Camera/> : null }
        { this.state.index == 2 ? <FriendsList/> : null }
        <BottomBar index={this.state.index} setIndex={this.setIndex}/>
      </div>
    )
  }
}
