import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  block: {
    //   marginTop: -40,

      height: 48,
      width: 312,
      backgroundColor: '#F6F6F6',
      borderRadius: '2px',
      boxShadow: "0px 4px 8px #DFDEDE",
      marginBottom: 4,
  },
  blockText: {
    
  },
});

function SettingsEP (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>

        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Определить категории</Typography>
 
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          {/* <Typography className={classes.headingText}>
            Текущие
          </Typography> */}
          <div>
            <div className={classes.block}>
                плашка
            </div>
            <div className={classes.block}>
                плашка
            </div>
            <div className={classes.block}>
                плашка
            </div>
            <div className={classes.block}>
                плашка
            </div>
            <div className={classes.block}>
                плашка
            </div>
            <div className={classes.block}>
                плашка
            </div>
          </div>
        </ExpansionPanelDetails>

      </ExpansionPanel>




      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Установить начало месяца</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>










      {/* <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Установить начало месяца</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel> */}
    </div>
  );
}

SettingsEP.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsEP);