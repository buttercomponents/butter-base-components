import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';


let button = ({t, action, ...props}) => (
    <li>
        <i data-toggle="tooltip" data-placement="left" title={t(title)} className="material-icons">{icon}</i>
    </li>
)

let ActionBar = ({...props}) => (
    <div id="action-bar" className={style['action-bar']}>
        <div className={style['buttons']}>
            {"..."}
        </div>
    </div>
)

export default translate(['action-bar'], {wait: true, withRef: true})(ActionBar);
