import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

class Alert extends Component {
    render () {
        let {props} = this

        return (
            <div className={style['success']}>
                <span>{props.t(props.message)}</span>
                <i className="material-icons">check</i>
            </div>
        )
    }
}

export default translate(['alert'])(Alert);
