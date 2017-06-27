import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Search from '../search'
import style from './style.styl';

const Styles = (a) => a.filter(b => !!b).join(' ');

//Tool-bar button
let Button = ({...props}) => (
    <div className={Styles([style.button, props.active && style.active, props.update && style.update])} onClick={props.action}>
        <i className="material-icons">{props.icon}</i>
    </div>
)

let Toolbar = ({...props}) => (
    <div id="toolbar" className={style.toolbar}>
        { props.search && <Search /> }
        <div className={style['buttons']}>
            {props.buttons.map((i, k) => <Button key={k} {...i}/> )}
        </div>
    </div>
)

export default translate(['toolbar'], {wait: true, withRef: true})(Toolbar);
