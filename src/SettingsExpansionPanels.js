import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardCategories from './Components/cardcategories';
import AlertDialog from './Components/Dialog';
import { IconButton } from '@material-ui/core';


const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-area',
  },
    StatisticsDayAndMonth: {
        height: 44,
        padding: '0px',
        marginTop: '4px',
        boxShadow: '0 1px 2px 1px #D9D9D9'
    },
    StatisticsDayAndMonthTextA: {
        color: '#3E3E3E',
        float: 'left',
        fontSize: 16,
        marginLeft: 16,
        marginRight: 6, 
        marginTop: '12px',
    
    },     
    StatisticsDayAndMonthTextB: {
        color: '#539B00',
        float: 'left',
        fontSize: 14,
        marginLeft: 10,
    },
    StatisticsDayAndMonthTextC: {
        color: '#CB0000',
        float: 'left',
        fontSize: 14,
        marginLeft: 8,
    },
    StatisticsDayAndMonthTextD: {
        color: '#888888',
        float: 'left',
        fontSize: 14,
        marginLeft: 48,
        marginRight: 16,
    },
    card: {
      flexgrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      display: 'flex',
      width: '100%',
    },
//   iconExpand: {
//     float: 'left',  
//     marginRight: -40,
//   },
});

function SettingsEP (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel >

        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.StatisticsDayAndMonthTextA}>Определить категории</Typography>
  
          {/* <img className="iconExpand" src="ExpandMore.png" alt="" width="24"/> */}

        </ExpansionPanelSummary>

        <ExpansionPanelDetails >
          <div >
          <CardCategories/>
          <div>
            </div>
          <AlertDialog/>
          </div>
        </ExpansionPanelDetails>

      </ExpansionPanel>




      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.StatisticsDayAndMonthTextA}>Многопользовательский доступ</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.card}>
          <Typography>
            Для организации многопользовательского доступа, добавьте новыхпользователей.
          </Typography>
          <IconButton>
          <AlertDialog/>
            </IconButton>
            </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>










      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Установить начало месяца</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
}

SettingsEP.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles)(SettingsEP);