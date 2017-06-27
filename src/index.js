import React from 'react';
import {translate} from 'react-i18next';
import Navbar from './components/navbar';
import style from './style.styl';

let opts_1 = {
    toolbar: {
        search: true,
        buttons: [
            {title: "button-01", icon:"shuffle"},
            {title: "button-02", icon:"visibility", active: true},
            {title: "button-03", icon:"favorite", update: true},
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
            {title: "button-05", icon:"filter_list", active: true}
        ]
    }
}

let Title = ({...props}) => (
    <h1>{props.name} {"#" + props.number}</h1>
)

let Test = ({test, t}) => (
    <div className={style.layout}>
        <Title name="Navbar test" number="1"/>
        <Navbar {...opts_1}/>
        <Title name="Navbar test" number="2"/>
        <Navbar {...opts_2}/>
    </div>
)

export default translate('test')(Test)
