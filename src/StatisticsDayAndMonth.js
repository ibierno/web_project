import React, { Component, Fragment } from 'react';
import DynamicInlineStyle from './Components/incomeButtons';
import Paper from '@material-ui/core/Paper'

const style = {
    container:{
    flexgrow: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    display: 'flex',
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
    }
    };

export default class StatisticsDayAndMonth extends Component {
    render () {
        return (
            <Fragment>
                <Paper style={style.container}>
            <div style={style.StatisticsDayAndMonth}>
                <p style={style.StatisticsDayAndMonthTextA}><strong>За месяц:</strong></p>
                <p style={style.StatisticsDayAndMonthTextB}>+0,00 р.</p>
                <p style={style.StatisticsDayAndMonthTextC}>-0,00 р.</p>
                <p style={style.StatisticsDayAndMonthTextD}>01.11. - 01.12</p>
            </div>
             <div style={style.StatisticsDayAndMonth}>
                <p style={style.StatisticsDayAndMonthTextA}><strong>За сегодня:</strong></p>
                <p style={style.StatisticsDayAndMonthTextB}>+0,00 р.</p>
                <p style={style.StatisticsDayAndMonthTextC}>-0,00 р.</p>
                <p style={style.StatisticsDayAndMonthTextD}>01.11. - 01.12</p>
            </div>
            <div style={style.buttons}>
            <DynamicInlineStyle />
            </div>
            </Paper>
            </Fragment>
        )}
};