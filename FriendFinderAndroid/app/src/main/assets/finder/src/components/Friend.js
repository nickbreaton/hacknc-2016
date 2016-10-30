import React from 'react';
import {Avatar, ListItem} from 'material-ui'

export default class extends React.Component {
  onClick = e => {
    if (this.props.user === false) {
      this.props.signIn(this.props.id)
    } else {
      this.props.track(this.props.id)
    }
  }
  render() {
    return <ListItem
      primaryText={this.props.name}
      leftAvatar={
        <Avatar src={this.props.src}/>
      }
      onClick={this.onClick}
    />
  }
}
