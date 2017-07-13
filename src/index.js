import React from 'react';
import {translate} from 'react-i18next';
import TitleBar from './components/title-bar';
import Navbar from './components/navbar';
import Buttons  from './components/button';
import Dropdowns  from './components/dropdown';
import Switch  from './components/switch';
import style from './style.styl';


let Test = ({...props, t}) => (
    <div className={style.layout}>
        {
            props.TitleBar.map((i, k) =>
                <div className={style.test}>
                    <TitleBar key={k} {...i}/>
                </div>
            )
        }

        {
            props.Navbars.map((i, k) =>
                <div key={k} className={style.test}>
                    <Navbar {...i}/>
                </div>
            )
        }

        <div className={style.test}>
            {props.Buttons.map((i, k) => <Buttons.Button key={k} {...i}/>)}
        </div>

        <div className={style.test}>
            {props.Dropdowns.text.map((i, k) => <Dropdowns.Dropdown key={k} {...i}/>)}
        </div>

        <div className={style.test}>
            {props.Dropdowns.color.map((i, k) => <Dropdowns.DropdownColor key={k} {...i}/>)}
        </div>


        <div className={style.test}>
            {props.Switches.map((i, k) => <Switch key={k} {...i}/>)}
        </div>

    </div>
)

export default translate('test')(Test)
