import React from 'react';
import {translate} from 'react-i18next';
import TitleBar from './components/title-bar';
import Navbar from './components/navbar';
import Toolbar from './components/toolbar';
import Buttons  from './components/button';
import Dropdowns  from './components/dropdown';
import Switch  from './components/switch';
import Stars from './components/stars';
import View from './components/view';
import Window, {DemoWindow} from './components/window';

import Menu from 'butter-component-menu';

import style from './style.styl';

let Test = ({view, title, t, ...props}) => (
    <div className={style.layout}>
        <DemoWindow bars={[
            <Navbar left={<Menu {...props.menu}/>} right={<Toolbar {...view.toolbar}/>}/>
        ]}>

    <div className={style.test}>
        {props.buttons.map((i, k) => <Buttons.Button key={k} {...i}/>)}
    </div>

    <div className={style.test}>
        {props.dropdowns.text.map((i, k) => <Dropdowns.Dropdown key={k} {...i}/>)}
    </div>

    <div className={style.test}>
        {props.dropdowns.color.map((i, k) => <Dropdowns.DropdownColor key={k} {...i}/>)}
    </div>

    <div className={style.test}>
        {props.switches.map((i, k) => <Switch key={k} {...i}/>)}
    </div>

    <div className={style.test} style={{
        color: 'yellow'
    }}>
        <h1>stars</h1>
        {props.stars.map((i, k) => <Stars key={k} {...i}/>)}
    </div>
        </DemoWindow>
        {
            props.titleBar.map((i, k) =>
                <div key={k} className={style.test}>
                    <TitleBar {...i}/>
                </div>
            )
        }

        {
            props.navbars.map(({toolbar, ...props}, k) =>
                <div key={k} className={style.test}>
                    <Navbar key={k} right={<Toolbar {...toolbar} />} {...props}/>
                </div>
            )
        }
    </div>)

export default translate('test')(Test)
