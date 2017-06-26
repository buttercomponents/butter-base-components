import React from 'react';
import {translate} from 'react-i18next';
import ActionBar from './components/action-bar';
import style from './styl/style.styl';



let items = [
    {title: "button-01", icon:"start"},
    {title: "button-02", icon:"favorite", active: true},
    {title: "button-03", icon:"link", active: false},
    {title: "button-04", icon:"settings", active: true}
];

let Test = ({test, t}) => (
    <div className={style.layout}>
        <ActionBar buttons={items} />
    </div>
)

export default translate('test')(Test)
