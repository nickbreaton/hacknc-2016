import { MemoryRouter, Match } from 'react-router';
import BottomBar from './BottomBar';
import WideView from './WideView';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      user: false,
      tracking: false,
      users: []
    }
  }

  componentWillMount() {
    const users = firebase.database().ref('users')
    users.once('value', (users) => {
      for (var i in users.val()) {
        this.setState({
          users: [...this.state.users, users.val()[i]]
        })
      }
    })
  }

  setIndex = index => {
    this.setState({
      index
    })
  }

  signIn = userId => {
    console.log(userId);
    this.setState({
      user: userId
    })
  }

  track = userId => {
    this.setState({
      tracking: userId,
      index: 1
    })
    firebase.database().ref(`users/${userId + 1}`)
      .on('value', World.createModelAtFriendLocation);
  }

  render() {
    return (
      <div>
        <WideView index={this.state.index} users={this.state.users} signIn={this.signIn} track={this.track} user={this.state.user}/>
        <BottomBar index={this.state.index} setIndex={this.setIndex}/>
      </div>
    )
  }
}
