import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import NavBar from '../navbar';
import style from './style.styl';

class View extends Component {

    static propTypes = {
        navBar: PropTypes.object
    }

    constructor (props) {
        super(props)
    }

    render () {
        let {props, state} = this
        return (
            <div className={style.view}>
                { props.navBar && <NavBar {...props.navBar}/> }
                <div className={style.content}>
                    {props.children}
                </div>
            </div>
        )
    }
}



export {View as default}
