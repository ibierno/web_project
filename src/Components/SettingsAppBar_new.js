import React from 'react';
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/hamburgerf/src/HamburgerMenu';

const styles = {
  root: {
    flexGrow: 1,
  },

  flex: {
    flex: 1,
    fontSize: 17,
    marginLeft: -16,
  },

  backButton: {
    marginLeft: -10,
    marginRight: 20,
  },

  appBar: {
    backgroundColor: '#4CAF50',
  },
  stateOfAccount: {
    color: '#C5FFC4',
  }
};

// export default class AllElements extends Component {
//   render () {
//     return (
        


        function SettingsAppBar(props) {
            const { classes } = props;
            return (
                <div className={classes.root}>
                 <AppBar className={classes.appBar} position="static">
                 <Toolbar >
                     <IconButton className={classes.backButton} color="inherit" aria-label="Back">
                     <img className="iconBack" src="icon_back.png" alt="" width="18"/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                     Настройки
                     </Typography>
                     <div className={classes.stateOfAccount}>На счете 0,00 р.</div>
                    </Toolbar>
                </AppBar>
                </div>
                );
            }
          

        // ,
        // <div>
        //     что-то
        // </div>   
//     );
// };
// }


// ,
    // <div className={classes.statistic}>
    //     <Button variant="contained">Button
    //     </Button>
    // </div>
    
    
// ButtonAppBar.propTypes = {
// classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SettingsAppBar);


