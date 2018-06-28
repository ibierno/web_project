import React, {Component} from 'react';
import './index.css';
import BackMenuSattings from './Components/backmenu_settings'

import SettingsEPEV from './SettingsExpansionPanelsEvelina';
import CheckboxesGroup from './Components/SettingsPaper';


export default class Settings extends Component {
    render () {
        return (
            <div>
                <BackMenuSattings/>
                <SettingsEPEV />
                <CheckboxesGroup />
            </div>
        );
    };
}