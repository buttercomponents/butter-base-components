import React from 'react';
import {translate} from 'react-i18next';
import TitleBar from './components/title-bar';
import Navbar from './components/navbar';
import Buttons  from './components/button';
import Dropdowns  from './components/dropdown';
import Switch  from './components/switch';
import Stars from './components/stars';
import View from './components/view';
import Window from './components/window';
import Menu from './components/menu';

import style from './style.styl';

let MakeNavbar = ({navbar, menu}) => (
    <Navbar {...navbar}>
        <Menu {...menu} />
    </Navbar>
)

let Test = ({view, title, t, ...props}) => (
    <div className={style.layout}>
        <Window
            bars={
                view.navbar ? <MakeNavbar navbar={view.navbar} menu={props.menu}/>: null
             } >

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
        </Window>
        {
            props.titleBar.map((i, k) =>
                <div key={k} className={style.test}>
                    <TitleBar {...i}/>
                </div>
            )
        }

        {
            props.navbars.map((i, k) =>
                <div key={k} className={style.test}>
                    <Navbar key={k} {...i}/>
                </div>
            )
        }
    </div>)

export default translate('test')(Test)
