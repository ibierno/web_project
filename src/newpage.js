import React, {Component, Fragment} from 'react';
import './index.css';
import CardItem from './Components/Card'
import BackBar from './Components/back_menu'


export default class Newpage extends Component {
  render () {
      return (
          <Fragment>
              <BackBar/>
           <CardItem/>
          </Fragment>
      );
  };
}