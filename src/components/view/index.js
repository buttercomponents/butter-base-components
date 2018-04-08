import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import style from './style.styl';

class View extends Component {

    static propTypes = {
        navbar: PropTypes.object
    }

    constructor (props) {
        super(props)
    }

    render () {
        let {props, state} = this
        return (
            <div className={style.view}>
                <div className={style.content}>
                    {props.children}
                </div>
            </div>
        )
    }
}



export {View as default}
