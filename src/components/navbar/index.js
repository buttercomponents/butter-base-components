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

let Navbar = ({goBack, title, toolbar, children, ...props}) => (
    <nav id="navbar" className={style.navbar}>
        <div className={style.menu}>
            {goBack && <GoBackButton action={goBack}/>}
            {children}
            {title && <h1 className={style.title}>{title}</h1>}
        </div>
        {<Toolbar {...toolbar}/>}
    </nav>
)

Navbar.defaultProps = {
    toolbar: {
        search: true,
        buttons: [
            {title: "button-01", icon:"shuffle"},
            {title: "button-02", icon:"visibility", toogle: true},
            {title: "button-03", icon:"favorite",  active: true, update: true, toogle: true},
            {title: "button-04", icon:"settings"}
        ]
    }
}

Navbar.propTypes = {
    title: PropTypes.string,
    goBack: PropTypes.func,
    toolbar: PropTypes.object
}

export default translate(['navbar'], {wait: true, withRef: true})(Navbar);
