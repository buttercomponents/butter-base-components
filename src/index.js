import React from 'react';
import {translate} from 'react-i18next';
import Navbar from './components/navbar';
import style from './style.styl';

let Test = ({...props, t}) => (
    <div className={style.layout}>
        {props.Navbars.map((i, k) => <div><Navbar key={k} {...i}/><br/><br/></div>)}
    </div>
)

export default translate('test')(Test)
