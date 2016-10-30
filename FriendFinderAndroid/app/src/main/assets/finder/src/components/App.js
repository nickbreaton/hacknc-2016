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
      users: [],
      message: null,
      messageAuthor: null
    }
  }

  componentWillMount() {
    const users = firebase.database().ref('users')
    users.once('value', (users) => {
      for (var i in users.val()) {
        this.setState({
          users: [...this.state.users, users.val()[i]]
        })
        this.message(i, users.val()[i]);
      }
    })
  }

  message = (i, name, first = true) => {
    firebase.database().ref(`users/${i}/msg`).on('value', text => {
      if (first) { first = false }
      else {
        this.setState({
          message: text.val(),
          messageAuthor: name
        })
        setTimeout(() => {
          this.setState({
            message: null,
            messageAuthor: null
          })
        }, 6000)
      }
    })
  }

  clearMessage = () => {
    this.setState({
      message: null,
      messageAuthor: null
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
        <WideView index={this.state.index} messageAuthor={this.state.messageAuthor} message={this.state.message} clearMessage={this.clearMessage} users={this.state.users} signIn={this.signIn} track={this.track} user={this.state.user}/>
        <BottomBar index={this.state.index} setIndex={this.setIndex}/>
      </div>
    )
  }
}
