import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

let MenuBar = ({...props}) => (
    <div id="menu-bar" className={style.menu}>
        { props.toolbar && ( <Toolbar {...props.toolbar}/> ) }
    </div>
)

export default translate(['menu-bar'], {wait: true, withRef: true})(MenuBar);
