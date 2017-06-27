import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Search from '../search'
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

//Action-bar button
let Button = ({...props}) => (
    <div className={Styles([style.button, props.active && style.active, props.update && style.update])} onClick={props.action}>
        <i className="material-icons">{props.icon}</i>
    </div>
)

let ActionBar = ({...props}) => (
    <div id="action-bar" className={style['action-bar']}>
        { props.search && <Search /> }
        <div className={style['buttons']}>
            {props.buttons.map((i, k) => <Button key={k} {...i}/> )}
        </div>
    </div>
)

export default translate(['action-bar'], {wait: true, withRef: true})(ActionBar);
