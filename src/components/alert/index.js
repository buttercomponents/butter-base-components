import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

let Alert = (props) => (
    <div className={style['success']}>
        <span>{props.message}</span>
        <i className="material-icons">check</i>
    </div>
)

export default translate(['alert'], {wait: true, withRef: true})(Alert);
