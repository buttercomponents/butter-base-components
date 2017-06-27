import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

let Navbar = ({...props}) => (
    <nav id="navbar" className={style.navbar}>
        { props.toolbar && ( <Toolbar {...props.toolbar}/> ) }
    </nav>
)

export default translate(['navbar'], {wait: true, withRef: true})(Navbar);
