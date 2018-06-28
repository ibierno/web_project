import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <ListItem  button={true} component={Link} to='/historypage'>
      <ListItemText primary="История" />
    </ListItem>
    <ListItem  button={true} component={Link} to='/settingspage'>
      <ListItemText primary="Настройки"/>
    </ListItem>
  </div>
);