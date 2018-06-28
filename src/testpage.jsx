import React, {Component} from 'react';
import './index.css';
import Demo from './Components/Key'
import Numbers from './Components/keyboard';


export default class test extends Component {
    render () {
        return (
            <div>
                <Numbers/>
            </div>
        );
    };
}