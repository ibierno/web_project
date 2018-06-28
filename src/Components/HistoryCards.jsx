import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LongMenu from './DotMenu';
import {  Grid, IconButton } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    panel: {
        marginTop: 8,
    },
    heading: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3E3E3E',
    },
    gridDatePicker: {
        display: 'grid',
        gridTemplateColumns: '154px 10px 154px',
        gridGap: 20,
    },
    textField1: {
        alignSelf: 'center',
    },
    textField2: {
        alignSelf: 'center',
    },
    line: {
        alignSelf: 'center',
    },
    cardRevenue: {
        display: 'grid',
        gridTemplateColumns: '36px 80px 110px 72px 10px',
        gridGap: 20,
        
        height: 48,
        width: 344,
        backgroundColor: '#F6F6F6',
        borderRadius: '2px',
        boxShadow: "0px 4px 8px #DFDEDE",
        marginTop: 8,
        marginLeft: 8,
    },
    iconRevenue: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        marginLeft: 16,
    },
    nameRevenue: {
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: 12,
        color: '#3E3E3E',
    },
    sumRevenue: {
        marginLeft: 20,
        alignSelf: 'center',
        color: '#539B00',
        fontWeight: '500',
    },
    dateRevenue: {
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: 12,
        color: '#3E3E3E',
    },

    cardExpense: {
        display: 'grid',
        gridTemplateColumns: '36px 80px 110px 72px 10px',
        gridGap: 20,
        
        height: 48,
        width: 344,
        backgroundColor: '#F6F6F6',
        borderRadius: '2px',
        boxShadow: "0px 4px 8px #DFDEDE",
        marginTop: 8,
        marginLeft: 8,
    },
    iconExpense: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        marginLeft: 16,
    },
    nameExpense: {
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: 12,
        color: '#3E3E3E',
    },
    sumExpense: {
        marginLeft: 20,
        alignSelf: 'center',
        color: '#CB0000',
        fontWeight: '500',
    },
    dateExpense: {
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: 12,
        color: '#3E3E3E',
    },
});

function HistoryCards (props) {
    const { classes } = props;
    return (
        <div>
        <ExpansionPanel className={classes.panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Установить период</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid width={300} gap={10} className={classes.gridDatePicker}>
                <form className={classes.formDatePicker} noValidate>
                    <TextField
                        id="date"
                        label=""
                        type="date"
                        defaultValue="2018-05-24"
                        className={classes.textField1}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                <div className={classes.line}>-</div>
                <form>
                    <TextField
                        id="date"
                        label=""
                        type="date"
                        defaultValue="2018-06-24"
                        className={classes.textField2}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        <Grid width={300} gap={10} className={classes.cardRevenue}>
            <img className={classes.iconRevenue} src='icon_work.svg' alt=''/>
            <div className={classes.nameRevenue}>Стипендия</div>
            <div className={classes.sumRevenue}>+15000 р.</div>
            <div className={classes.dateRevenue}>24.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_eating.svg' alt=''/>
            <div className={classes.nameExpense}>Еда</div>
            <div className={classes.sumExpense}>-1300 р.</div>
            <div className={classes.dateExpense}>21.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_other_gray.svg' alt=''/>
            <div className={classes.nameExpense}>Другое</div>
            <div className={classes.sumExpense}>-18 р.</div>
            <div className={classes.dateExpense}>18.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_eating.svg' alt=''/>
            <div className={classes.nameExpense}>Еда</div>
            <div className={classes.sumExpense}>-80 р.</div>
            <div className={classes.dateExpense}>18.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_bus.svg' alt=''/>
            <div className={classes.nameExpense}>Транспорт</div>
            <div className={classes.sumExpense}>-90 р.</div>
            <div className={classes.dateExpense}>18.10.15</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardRevenue}>
            <img className={classes.iconRevenue} src='icon_work.svg' alt=''/>
            <div className={classes.nameRevenue}>Работа</div>
            <div className={classes.sumRevenue}>+25600 р.</div>
            <div className={classes.dateRevenue}>18.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_bus.svg' alt=''/>
            <div className={classes.nameExpense}>Транспорт</div>
            <div className={classes.sumExpense}>-135 р.</div>
            <div className={classes.dateExpense}>18.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_health.svg' alt=''/>
            <div className={classes.nameExpense}>Здоровье</div>
            <div className={classes.sumExpense}>-1890 р.</div>
            <div className={classes.dateExpense}>16.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_other_gray.svg' alt=''/>
            <div className={classes.nameExpense}>Другое</div>
            <div className={classes.sumExpense}>-334 р.</div>
            <div className={classes.dateExpense}>16.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        <Grid width={300} gap={10} className={classes.cardExpense}>
            <img className={classes.iconExpense} src='icon_other_gray.svg' alt=''/>
            <div className={classes.nameExpense}>Другое</div>
            <div className={classes.sumExpense}>-334 р.</div>
            <div className={classes.dateExpense}>16.06.18</div>
            <IconButton>
                <LongMenu/>
            </IconButton>
        </Grid>
        </div>
    );
}

HistoryCards.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HistoryCards);