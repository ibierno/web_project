import React, { Component, Fragment } from 'react';
import icon_food from './Icon/food_food.svg';
import icon_clothes from './Icon/icon_clothes.svg';
import icon_job from './Icon/icon_job.svg';
import icon_transport from './Icon/icon_transport.svg';
import icon_other from './Icon/icon_other.svg';
import icon_gkh from './Icon/icon_gkh.svg';
import icon_health from './Icon/icon_health.svg';
import icon_communication from './Icon/icon_communication.svg';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    card: {
        flexgrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
         display: 'flex',
         marginLeft: 'auto',
         marginTop: '10',

          
      },
      details: {
        display: 'flex',
        marginLeft: 'auto',
        marginTop: '10px',
        flex:0.2,
        alignItems: 'center',
        flexDirection: 'column',
        

      },
});


class Carusel extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <Paper>
            <Fragment >
                <div className={classes.card}>
                <div className={classes.details}>
                    <img src={icon_clothes} width='40' alt='icon_clothes'/>
                    <p className="legend">Одежда</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_food} width='40' alt='icon_clothes' />
                    <p className="legend">Еда</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_transport} width='40'alt='icon_transport' />
                    <p className="legend">Транспорт</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_gkh} width='40' alt='icon_gkh' />
                    <p className="legend">ЖКХ</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_health} width='40' alt='icon_health' />
                    <p className="legend">Здоровье</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_communication} width='40' alt='icon_communication' />
                    <p className="legend">Связь</p>
                </div>
                <div className={classes.details}>
                    <img src={icon_other} width='40' alt='icon_other' />
                    <p className="legend">Другое</p>
                </div>
                </div>
            </Fragment>
            </Paper>
        );
    }
};
 export default withStyles (styles)(Carusel);