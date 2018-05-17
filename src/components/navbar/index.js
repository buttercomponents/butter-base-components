import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

const Identity = (a) => (a)

const GoBackButton = ({action = Identity, title}) => (
    <a className={style.button} onClick={action}>
        <i className="material-icons">arrow_back</i>
        {title ? <span>{title}</span> : null}
    </a>
)

GoBackButton.propTypes = {
    action: PropTypes.func.isRequired,
}

GoBackButton.defaultProps = {
    title: 'back'
}

const Navbar = ({goBack, title, right, children, left, type}) => (
    <nav id="navbar" className={`${style.navbar} ${type ? type : ''}`}>
        <div className={style.menu} role='navbar-left'>
            {goBack && <GoBackButton {...goBack}/>}
            {left}
            {title && <h1 className={style.title}>{title}</h1>}
        </div>
        {children && <div role='navbar-center'>{children}</div>}
        {(children || right) && <div role='navbar-right'>{right}</div>}

    </nav>
)

Navbar.propTypes = {
    title: PropTypes.string,
    goBack: PropTypes.object
}

const Translated = translate(['navbar'])(Navbar)

export {
    Translated as default,
    GoBackButton
}
