import React, {Component, Fragment} from 'react';
import './index.css';
import StatisticsDayAndMonth from './StatisticsDayAndMonth'
import Categories from './Components/Category'
import Numbers from './Components/keyboard';


const style ={
    numbers:{
        bottom: '0px',
        marginRight: 'auto',
      },
      numbers_fill:{
        height: '100%',
      },
};

export default class Start extends Component {
    
    render () {
        return (
            <div>
                <Fragment>
                <div>
                    <StatisticsDayAndMonth />
                </div>
                <div>
                    <Categories/>
                </div>
                <br/>
                <div>
                    <Numbers style={style.numbers}/>
                    </div>
                    </Fragment>
            </div>
        );
    };
}