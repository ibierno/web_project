import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MemoryRouter from 'react-router-dom';
import Route from 'react-router';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 360,
    },
    lists: {
      backgroundColor: theme.palette.background.paper,
    },
  });

function ListItemLink(props) {
    const { primary, to } = props;
    return (
      <li>
        <ListItem button component={Link} to={to}>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
  ListItemLink.propTypes = {
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
  };
  
  export default withStyles(styles)(ListItemLink);