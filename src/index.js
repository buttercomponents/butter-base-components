import React from 'react';
import {translate} from 'react-i18next';
import Navbar from './components/navbar';
import style from './style.styl';

let Test = ({...props, t}) => (
    <div className={style.layout}>
         { console.log(props)}
        { props.Navbars.map( i => <div><br/><Navbar {...i}/><br/></div> )}
    </div>
)

export default translate('test')(Test)
