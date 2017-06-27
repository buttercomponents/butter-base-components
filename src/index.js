import React from 'react';
import {translate} from 'react-i18next';
import MenuBar from './components/menu-bar';
import style from './style.styl';

let opts = {
    toolbar: {
        search: true,
        buttons: [
            {title: "button-01", icon:"shuffle"},
            {title: "button-02", icon:"visibility"},
            {title: "button-03", icon:"favorite", update: true},
            {title: "button-04", icon:"update", update: true},
            {title: "button-05", icon:"settings",  active: true, update: true}
        ]
    }
}


let Test = ({test, t}) => (
    <div className={style.layout}>
        <MenuBar {...opts}/>
    </div>
)

export default translate('test')(Test)
