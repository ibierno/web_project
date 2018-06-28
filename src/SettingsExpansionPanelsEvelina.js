import React from 'react';
import Grid from 'react-css-grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: '#F6F6F6',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,

  },
  all: {
    marginTop: 8,
  },
  /*block: {
      height: 48,
      width: 312,
      backgroundColor: '#F6F6F6',
      borderRadius: '2px',
      boxShadow: "0px 4px 8px #DFDEDE",
      marginBottom: 4,
  },*/
  iconBus: {
    // display: 'inline',
    marginLeft: 16,
    // marginTop: 12,
    height: 24,
    width: 24,
    alignSelf: 'center',
    // gridArea: 'iconBus',
  },
  textBus: {
    // display: 'inline',
    // marginLeft: 16,
    // marginBottom: 16,
    // textAlign: 'center',
    lineРeight: 40,

    alignSelf: 'center',

    // gridArea: 'textBus',
  },
  edit: {
    // display: 'inline',
    alignSelf: 'center',
    marginRight: 40,
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'lighter',

    // gridArea: 'edit',
  },
  x: {
    alignSelf: 'center',
    width: 22,
    height: 22,
  },

  block: {
    gridTemplateColumns: '46px 130px 70px 20px',
    gridGap: 20,

    height: 48,
    width: 312,
    backgroundColor: '#F6F6F6',
    borderRadius: '2px',
    boxShadow: "0px 4px 8px #DFDEDE",
    marginBottom: 4,
  },
  buttonAdd: {
    color: '#FF5722',
    float: 'right',
    marginTop: 10,
  },
  datePicker: {
    marginTop: 0,
  },
  paper: {
    marginTop: 8,
    height: 56,
  }
});

function SettingsEPEV (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.all}>

        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Определить категории</Typography>
 
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <div>
            <Grid width={300} gap={10} className={classes.block} >
             
                <img className={classes.iconBus} src="icon_bus.svg" alt="xnj" />
                <div className={classes.textBus}>Транспорт</div>
                <div className={classes.edit}>Изменить</div>
                <img className={classes.x} src='icon_x.svg' alt='' />
            </Grid>
            <Grid width={300} gap={10} className={classes.block}>
                <img className={classes.iconBus} src="icon_eating.svg" alt="" />
                <div className={classes.textBus}>Еда</div>
                <div className={classes.edit}>Изменить</div>
                <img className={classes.x} src='icon_x.svg' alt='' />
            </Grid>
            <Grid width={300} gap={10} className={classes.block}>
                <img className={classes.iconBus} src="icon_health.svg" alt="" />
                <div className={classes.textBus}>Здоровье</div>
                <div className={classes.edit}>Изменить</div>
                <img className={classes.x} src='icon_x.svg' alt='' />
            </Grid>
            <Grid width={300} gap={10} className={classes.block}>
                <img className={classes.iconBus} src="icon_gkh.svg" alt="" />
                <div className={classes.textBus}>ЖКХ</div>
                <div className={classes.edit}>Изменить</div>
                <img className={classes.x} src='icon_x.svg' alt='' />
            </Grid>
            <Grid width={300} gap={10} className={classes.block}>
                <img className={classes.iconBus} src="icon_communication.svg" alt="" />
                <div className={classes.textBus}>Связь</div>
                <div className={classes.edit}>Изменить</div>
                <img className={classes.x} src='icon_x.svg' alt='' />
            </Grid>
            <Grid width={300} gap={10} className={classes.block}>
                <img className={classes.iconBus} src="icon_other_gray.svg" alt="" />
                <div className={classes.textBus}>Другое</div>
                <div className={classes.edit}>Изменить</div>
                <img className={classes.x} src='icon_x.svg' alt='' />
            </Grid>
            <Button className={classes.buttonAdd}>
              Добавить
            </Button>
          </div>
        </ExpansionPanelDetails>

      </ExpansionPanel>




      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Установить начало месяца</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
       
        <form className={classes.datePicker} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>

  
    
    </div>
  );
}

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
};


SettingsEPEV.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SettingsEPEV);