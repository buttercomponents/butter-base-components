import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

let Button = ({...props}) => (
    <li className={Styles([style.button, props.active && style.active])} onClick={props.action}>
        <i className="material-icons">{props.icon}</i>
    </li>
)

let ActionBar = ({...props}) => (
    <div id="action-bar" className={style['action-bar']}>
        <ul className={style['buttons']}>
            {props.buttons.map((i, k) => <Button key={k} {...i}/> )}
        </ul>
    </div>
)

export default translate(['action-bar'], {wait: true, withRef: true})(ActionBar);
