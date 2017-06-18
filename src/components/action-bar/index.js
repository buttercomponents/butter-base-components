import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

export default ({...props}) => (
    <div id="action-bar" className={style['action-bar']}>
        <div className={style['buttons']}>
            <li>
                <i className="material-icons">link</i>
            </li>
            <li>
                <i className="material-icons">fiber_manual_record</i>
            </li>
        </div>
    </div>
)
