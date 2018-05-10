import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

const Identity = (a) => (a)

let GoBackButton = ({action = Identity, title}) => (
    <a className={style.button} onClick={action}>
        <i className="material-icons">arrow_back</i>
        {title ? title : null}
    </a>
)

GoBackButton.propTypes = {
    action: PropTypes.func.isRequired,
}

let Navbar = ({goBack, title, right, left}) => (
    <nav id="navbar" className={style.navbar}>
        <div className={style.menu}>
            {goBack && <GoBackButton {...goBack}/>}
            {left && left}
            {title && <h1 className={style.title}>{title}</h1>}
        </div>
        {right && right}
    </nav>
)

Navbar.propTypes = {
    title: PropTypes.string,
    goBack: PropTypes.func
}

let Translated = translate(['navbar'])(Navbar)

export {
    Translated as default,
    GoBackButton
}
