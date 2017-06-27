import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ActionBar from '../action-bar';
import style from './style.styl';

let MenuBar = ({...props}) => (
    <div id="menu-bar" className={style.menu}>
        { props.actionBar && ( <ActionBar {...props.actionBar}/> ) }
    </div>
)

export default translate(['menu-bar'], {wait: true, withRef: true})(MenuBar);
