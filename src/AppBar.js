import React from 'react';


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

  menuButton: {
    marginLeft: -12,
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
        


        function ButtonAppBar(props) {
            const { classes } = props;
            return (
                <div className={classes.root}>
                 <AppBar className={classes.appBar} position="static">
                 <Toolbar >
                     <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                     <img className="iconMenu" src="ic_menu.png" alt="" width="30"/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                     Мой Бюджет
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

export default withStyles(styles)(ButtonAppBar);


