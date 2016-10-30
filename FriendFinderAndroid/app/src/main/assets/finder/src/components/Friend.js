import React from 'react';
import {Avatar, ListItem} from 'material-ui'

export default (props) => (
  <ListItem primaryText={props.name} leftAvatar={<Avatar src={props.src}/>}/>
)
