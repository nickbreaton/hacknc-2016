import { MemoryRouter, Match } from 'react-router';
import BottomBar from './BottomBar';
import WideView from './WideView';
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
        <WideView index={this.state.index }/>
        <BottomBar index={this.state.index} setIndex={this.setIndex}/>
      </div>
    )
  }
}
