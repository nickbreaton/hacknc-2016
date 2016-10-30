import React from 'react';
import {Paper, List, ListItem, Subheader, FloatingActionButton, FontIcon} from 'material-ui'
import {Avatar, Divider} from 'material-ui'
import {ContentAdd} from 'material-ui/svg-icons'
import Friend from './Friend';

export default (props) => {
  return <Paper rounded={false} style={{ height: '100vh'}}>
    <List>
      <Subheader>{props.user ? `Signed in as ${props.users[props.user].name}` : 'Sign In'}</Subheader>
      {
        props.users.map((friend, i) => {
          if (i !== props.user) {
            return <Friend
              key={i}
              id={i}
              name={friend.name}
              src={friend.url}
              user={props.user}
              track={props.track}
              signIn={props.signIn}
            />
          }
        })
      }
    </List>
    <FloatingActionButton style={{position: 'absolute', bottom: '80px', right: '20px' }}>
      <ContentAdd />
    </FloatingActionButton>
  </Paper>
}
