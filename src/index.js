import React from 'react';
import {translate} from 'react-i18next';
import Navbar from './components/navbar';
import Buttons  from './components/button';
import Dropdowns  from './components/dropdown';
import style from './style.styl';

let Test = ({...props, t}) => (
    <div className={style.layout}>
        {props.Navbars.map((i, k) => <div key={k} className={style.test}><Navbar  {...i}/></div>)}
        <div className={style.test}>
            {props.Buttons.map((i, k) => <Buttons.Button key={k} {...i}/>)}
        </div>
        <div className={style.test}>
            {props.Dropdowns.map((i, k) => <Dropdowns.Dropdown key={k} {...i}/>)}
        </div>
        
    </div>

)

export default translate('test')(Test)
