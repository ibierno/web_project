import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#4CAF50',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  stateOfAccount: {
    color: '#C5FFC4',
  }
};

function BackBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton component={Link} to='/' className={classes.menuButton} color="inherit" aria-label="Menu">
            <ArrowBack/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            История
          </Typography>
          <div className={classes.stateOfAccount}>На счете 0,00 р.</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

BackBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackBar);