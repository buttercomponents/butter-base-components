import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

let GoBackButton = ({...props}) => (
    <a className={style.button} onClick={props.action}>
        <i className="material-icons">arrow_back</i>
    </a>
)

class NavBar extends Component {

    static defaultProps = {
        toolbar: {}
    }

    static propTypes = {
        title: PropTypes.string,
        goBack: PropTypes.func,
        toolbar: PropTypes.object
    }

    render() {
        let {props} = this
        return (
            <nav id="navbar" className={style.navbar}>
                <div className={style.menu}>
                    {props.goBack && <GoBackButton action={props.goBack}/>}
                    {props.title && <h1 className={style.title}>{props.title}</h1>}
                </div>
                {<Toolbar {...props.toolbar}/>}
            </nav>
        )
    }
}

export default translate(['navbar'], {wait: true, withRef: true})(NavBar);
