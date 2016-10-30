import React from 'react';
import {Avatar,Paper,List,ListItem} from 'material-ui'

export default (props) => {
  let output = null
  if (props.message) {
    output =
      <Paper zDepth={2} style={{
        width: '90%',
        'marginTop': '5%',
        'marginLeft': '5%',
        'marginBottom': '5%'

      }}>
        <List>
          <ListItem
            primaryText={props.messageAuthor.name}
            secondaryText={props.message}
            leftAvatar={<Avatar src={props.messageAuthor.url}/>}
          />
        </List>
      </Paper>
  }
  return <div>
    {output}
    {/* { props.message ? output : null } */}
    {/* camera renders here */}
  </div>
}
