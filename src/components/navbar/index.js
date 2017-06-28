import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

let GoBackButton = ({...props}) => (
    <a className={style.button} onClick={props.action}>
        <i className="material-icons">arrow_back</i>
    </a>
)

class Navbar extends Component {
    render() {
        let {props} = this

        return (
            <nav id="navbar" className={style.navbar}>
                <div className={style.menu}>
                    {props.goBack && <GoBackButton/>}
                    <h1 className={style.title}>{props.title}</h1>
                </div>
                {props.toolbar && (<Toolbar {...props.toolbar}/>)}
            </nav>
        )
    }
}

export default translate(['navbar'], {wait: true, withRef: true})(Navbar);
