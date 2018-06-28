import React, {Component, Fragment} from'react';
import './index.css';


import BackBar from './Components/back_menu';

import HistoryCards from './Components/HistoryCards';



export default class History extends Component {
  render () {
      return (
          <Fragment>
              <BackBar/>
              <HistoryCards />
          </Fragment>
      );
  };
}
