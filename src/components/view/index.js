import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

class View extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        let {props, state} = this
        return (
            <div className={style.view}>
                { props.toolbar && <Toolbar {...props.toolbar}/> }
                <div className={style.content}>
                    {props.children}
                </div>
            </div>
        )
    }
}



export {View as default}
