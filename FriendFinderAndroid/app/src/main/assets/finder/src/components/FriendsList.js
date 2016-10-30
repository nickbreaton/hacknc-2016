import React from 'react';
import {Paper, List, ListItem, Subheader, FloatingActionButton, FontIcon} from 'material-ui'
import {Avatar, Divider} from 'material-ui'
import Friend from './Friend';

export default (props) => (
  <Paper rounded={false} style={{ height: '100vh'}}>
    <List>
      <Subheader>{'Find Friends'}</Subheader>
      <Friend name="Itgel Ganbold" src="https://avatars0.githubusercontent.com/u/13912728?v=3&s=400"/>
      <Friend name="Mohamed Salad" src="https://scontent-ort2-1.xx.fbcdn.net/t31.0-8/14566277_1236100929763197_4128535535083639447_o.jpg"/>
      <Friend name="Nico Gonza" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/12189712_1080177268693232_2798360735401593419_n.jpg?oh=84e855f1cec28713187c229f395081fb&oe=58A25A1E"/>
      <Friend name="Nick Breaton" src="https://avatars2.githubusercontent.com/u/3587605?v=3&s=466"/>
    </List>
    <FloatingActionButton style={{position: 'absolute', bottom: '80px', right: '20px' }}>
      <FontIcon className="material-icons">add</FontIcon>
    </FloatingActionButton>
  </Paper>
)
