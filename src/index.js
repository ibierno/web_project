import React from'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Start from './startpage';
import History from './historypage';
import Settings from './settingspage';
import MyResponsiveDrawer from './menu';
import test from './testpage'

render((
<BrowserRouter>
  <Switch>
    <Route exact path='/' component={MyResponsiveDrawer}/>
    <Route path='/historypage' component={History}/>
    <Route path='/settingspage' component={Settings}/>
    <Route path='/startpage' component={Start}/>
    <Route path='/testpage' component={test}/>

      </Switch>
</BrowserRouter>),
    document.getElementById('root')
  );
