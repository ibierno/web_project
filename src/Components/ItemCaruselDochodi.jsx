import React, { Component, Fragment } from 'react';
import icon_job from './Icon/icon_job.svg';
import icon_other from './Icon/icon_other.svg';
import icon_stipend from './Icon/icon_stipend.svg';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    card: {
        flexgrow: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-around',
         display: 'flex',
         marginLeft: 'auto',
         marginTop: '10',

          
      },
      details: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        flex:0.2,
        alignItems: 'center',
        flexDirection: 'column',
        

      },
});


class CaruselDochodi extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <Paper>
            <Fragment >
                <div className={classes.card}>
                <div className={classes.details}>
                    <img src={icon_job} width='40' alt='icon_job'/>
                    <p className="legend">Работа</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_stipend} width='40' alt='icon_stipend' />
                    <p className="legend">Стипендия</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_other} width='40'alt='icon_other' />
                    <p className="legend">Другое</p>
                </div>
                </div>
            </Fragment>
            </Paper>
        );
    }
};
 export default withStyles (styles)(CaruselDochodi);