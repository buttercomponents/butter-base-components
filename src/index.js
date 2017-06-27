import React from 'react';
import {translate} from 'react-i18next';
import Navbar from './components/navbar';
import style from './style.styl';

let opts_1 = {
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

let opts_2 = {
    toolbar: {
        search: false,
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
        <br/>
        <h1>Navbar test #1</h1>
        <br/>
        <Navbar {...opts_1}/>
        <br/>
        <h1>Navbar test #2</h1>
        <br/>
        <Navbar {...opts_2}/>
    </div>
)

export default translate('test')(Test)
