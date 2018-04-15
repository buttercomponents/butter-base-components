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

let Navbar = ({goBack, title, right, left, ...props}) => (
    <nav id="navbar" className={style.navbar}>
        <div className={style.menu}>
            {goBack && <GoBackButton action={goBack}/>}
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

let Translated = translate(['navbar'], {wait: true, withRef: true})(Navbar)

export {
    Translated as default,
    GoBackButton
}
