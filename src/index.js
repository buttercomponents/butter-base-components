import React from 'react';
import {translate} from 'react-i18next';
import Navbar from './components/navbar';
import style from './style.styl';

let opts_1 = {
    toolbar: {
        search: true,
        buttons: [
            {title: "button-01", icon:"shuffle"},
            {title: "button-02", icon:"visibility", toogle: true},
            {title: "button-03", icon:"favorite",  active: true, update: true, toogle: true},
            {title: "button-05", icon:"settings"}
        ]
    }
}

let opts_2 = {
    toolbar: {
        search: false,
        buttons: [
            {title: "button-03", icon:"keyboard"},
            {title: "button-04", icon:"info_outline"},
            {title: "button-04", icon:"update", update: true},
            {title: "button-05", icon:"filter_list", active: true, toogle: true}
        ]
    }
}

let opts_3 = {
    toolbar: {
        search: false,
        buttons: [
            {title: "button-03", icon:"fiber_manual_record"},
            {title: "button-04", icon:"link"},
            {title: "button-04", icon:"favorite_outline"},
            {title: "button-04", icon:"visibility"},

        ]
    }
}

let Title = ({...props}) => (
    <h1>{props.name}</h1>
)

let Test = ({test, t}) => (
    <div className={style.layout}>
        <Title name="Navbar test: ( Home )"/>
        <Navbar {...opts_1}/>
        <Title name="Navbar test: ( Settings )"/>
        <Navbar {...opts_2}/>
        <Title name="Navbar test: ( Movie Details )"/>
        <Navbar {...opts_3}/>
    </div>
)

export default translate('test')(Test)
